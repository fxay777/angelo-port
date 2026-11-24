// ============================================================================
// MiguelOS 95 — aplicativos
// Boot, Bloco de Notas, Prompt do MS-DOS, Paint, Campo Minado, Reprodutor de
// Mídia, Meu Computador, Lixeira, Propriedades de Vídeo, Proteção de tela,
// Executar, Ajuda e alguns segredos.
// ============================================================================
(function () {
    'use strict';

    const M = window.MIGUEL || { nome: 'Miguel Angelo', email: '', curriculo: '#', videos: [] };
    const ICON = (n) => '/static/icons/' + n + '.png';
    const $ = (sel, el) => (el || document).querySelector(sel);
    const $$ = (sel, el) => Array.from((el || document).querySelectorAll(sel));
    const esc = (s) => escaparHtml(s);
    let contadorJanelas = 0;

    // localStorage pode falhar (modo privado, iframe de terceiros) — nunca quebra o site
    const guardar = {
        ler(chave, padrao) {
            try { const v = localStorage.getItem('mos_' + chave); return v === null ? padrao : JSON.parse(v); } catch (e) { return padrao; }
        },
        salvar(chave, valor) {
            try { localStorage.setItem('mos_' + chave, JSON.stringify(valor)); } catch (e) { /* sem armazenamento */ }
        },
    };

    // ======================================================================
    // Caixa de mensagem estilo Windows 95
    // ======================================================================
    function msgBox(o) {
        const id = 'msg' + (++contadorJanelas);
        const botoes = o.botoes || ['OK'];
        openWindow(id, {
            title: o.titulo || 'MiguelOS', center: true, resizable: false, dialogo: true,
            width: o.largura || 380, height: o.altura || 170,
            bodyClass: 'sem-fundo',
            bodyHtml: `
                <div class="msgbox">
                    <div class="msgbox-corpo">
                        <div class="msg-icone msg-${o.icone || 'info'}"></div>
                        <div class="msgbox-texto">${o.html || esc(o.texto || '')}</div>
                    </div>
                    <div class="msgbox-botoes">
                        ${botoes.map((b, i) => `<button type="button" class="btn95" data-i="${i}">${esc(b)}</button>`).join('')}
                    </div>
                </div>`,
            onMount: (body) => {
                const primeiro = $('.btn95', body);
                if (primeiro) primeiro.focus();
                $$('.btn95', body).forEach((b) => b.addEventListener('click', () => {
                    closeWindow(id);
                    if (o.aoClicar) o.aoClicar(parseInt(b.dataset.i, 10));
                }));
            },
        });
        return id;
    }
    window.msgBox = msgBox;

    // ======================================================================
    // Ações (ícones, menu Iniciar, Executar e MS-DOS usam o mesmo mapa)
    // ======================================================================
    const ACOES = {
        showcase: () => abrirShowcase(),
        sobre: () => abrirShowcase('sobre'),
        experiencia: () => abrirShowcase('experiencia'),
        projetos: () => abrirShowcase('projetos'),
        contato: () => abrirShowcase('contato'),
        curriculo: abrirCurriculo,
        videos: () => abrirVideos(),
        meucomputador: () => abrirExplorer(['MEU COMPUTADOR']),
        lixeira: abrirLixeira,
        msdos: abrirMsDos,
        notepad: () => abrirNotepad('LEIA-ME.txt', textoLeiaMe()),
        'notepad-novo': () => abrirNotepad('Novo documento de texto.txt', ''),
        paint: abrirPaint,
        minas: abrirMinas,
        fliperama: () => window.Arcade.abrirFliperama(),
        rolinho: () => window.Arcade.passeioDoRolinho(true),
        tetris: abrirTetris,
        doom: abrirDoom,
        wolf3d: abrirWolf3D,
        digger: abrirDigger,
        scrabble: abrirScrabble,
        propriedades: () => abrirPropriedades(0),
        protecao: () => abrirPropriedades(1),
        som: alternarMudo,
        ajuda: abrirAjuda,
        executar: abrirExecutar,
        desligar: () => tocarSequenciaDeDesligamento(),
        atualizar: atualizarDesktop,
        organizar: atualizarDesktop,
        bsod: telaAzul,
        orcamento: () => window.Extras && window.Extras.abrirOrcamento(),
        naoabra: () => window.Extras && window.Extras.naoAbra(),
        maiorpordentro: () => abrirExplorer(['MEU COMPUTADOR', 'Disco local (C:)', 'MIGUEL', 'MAIOR POR DENTRO']),
    };

    function executarAcao(acao) {
        if (!acao) return;
        if (acao.indexOf('showcase:') === 0) return abrirShowcase(acao.split(':')[1]);
        if (acao.indexOf('video:') === 0) return abrirVideos(acao.split(':')[1]);
        if (ACOES[acao]) ACOES[acao]();
    }
    window.executarAcao = executarAcao;
    window.abrirExplorerEm = (caminho) => abrirExplorer(caminho);
    window.abrirVideosEm = (yt) => abrirVideos(yt);

    // ======================================================================
    // Área de trabalho: seleção, duplo clique, retângulo e menu de contexto
    // ======================================================================
    function iniciarDesktop() {
        const root = $('#desktop-root');
        const toque = () => document.documentElement.classList.contains('touch-device');

        $$('.desktop-icon').forEach((icone) => {
            icone.addEventListener('click', (e) => {
                if (toque()) { executarAcao(icone.dataset.acao); return; }
                if (!e.ctrlKey) $$('.desktop-icon.selecionado').forEach((i) => i.classList.remove('selecionado'));
                icone.classList.toggle('selecionado', e.ctrlKey ? !icone.classList.contains('selecionado') : true);
            });
            icone.addEventListener('dblclick', () => {
                if (!toque()) executarAcao(icone.dataset.acao);
            });
            icone.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') executarAcao(icone.dataset.acao);
            });
        });

        // Retângulo de seleção
        const ret = $('#selecao-retangulo');
        let inicio = null;
        const ehFundo = (t) => t === root || t.classList.contains('icons-column') || t.classList.contains('wallpaper-logo');
        root.addEventListener('mousedown', (e) => {
            if (e.button !== 0 || !ehFundo(e.target)) return;
            $$('.desktop-icon.selecionado').forEach((i) => i.classList.remove('selecionado'));
            inicio = { x: e.clientX, y: e.clientY };
        });
        document.addEventListener('mousemove', (e) => {
            if (!inicio) return;
            const x = Math.min(inicio.x, e.clientX);
            const y = Math.min(inicio.y, e.clientY);
            const w = Math.abs(e.clientX - inicio.x);
            const h = Math.abs(e.clientY - inicio.y);
            if (w < 3 && h < 3) return;
            ret.hidden = false;
            Object.assign(ret.style, { left: x + 'px', top: y + 'px', width: w + 'px', height: h + 'px' });
            $$('.desktop-icon').forEach((i) => {
                const r = i.getBoundingClientRect();
                const dentro = r.right > x && r.left < x + w && r.bottom > y && r.top < y + h;
                i.classList.toggle('selecionado', dentro);
            });
        });
        document.addEventListener('mouseup', () => { inicio = null; ret.hidden = true; });

        // Menu de contexto
        const ctx = $('#context-menu');
        root.addEventListener('contextmenu', (e) => {
            if (!ehFundo(e.target)) return;
            e.preventDefault();
            fecharMenus();
            ctx.hidden = false;
            const x = Math.min(e.clientX, window.innerWidth - ctx.offsetWidth - 4);
            const y = Math.min(e.clientY, window.innerHeight - ctx.offsetHeight - 4);
            Object.assign(ctx.style, { left: x + 'px', top: y + 'px' });
        });

        // Teclado: Esc fecha menus, setas não fazem nada estranho
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') fecharMenus();
        });

        const vol = $('#volume-icon');
        if (vol) vol.addEventListener('click', alternarMudo);
        const relogio = $('#clock-wrapper');
        if (relogio) relogio.addEventListener('dblclick', () => msgBox({
            titulo: 'Data/Hora', icone: 'info',
            texto: 'Hoje é ' + new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) +
                '. Ótimo dia para contratar um editor de vídeo. 😉',
        }));
    }

    function atualizarDesktop() {
        const col = $('#icons-column');
        col.style.visibility = 'hidden';
        $('.icone-lixeira').style.visibility = 'hidden';
        setTimeout(() => { col.style.visibility = ''; $('.icone-lixeira').style.visibility = ''; }, 140);
    }

    // ======================================================================
    // Boot
    // ======================================================================
    function mostrarBoot(depois) {
        const boot = document.createElement('div');
        boot.id = 'boot';
        boot.innerHTML = `
            <div class="boot-bios">
                <div class="bios-topo"><span>MiguelBIOS (C) 1995-2026 Miguel Angelo Audiovisual</span><span class="bios-energia">★ ENERGY SAVER ★</span></div>
                <pre id="boot-texto"></pre>
            </div>
            <div class="boot-splash" hidden>
                <div class="boot-ceu"></div>
                <div class="boot-logo">
                    <img class="boot-icone" src="/static/icons/videos.png" alt="">
                    <div><div class="boot-nome">Miguel<b>OS</b><sup>95</sup></div>
                    <div class="boot-sub">Edição Produtor Audiovisual</div></div>
                </div>
                <div class="boot-barra"></div>
            </div>
            <div class="boot-pular">clique para pular</div>`;
        document.body.appendChild(boot);

        const linhas = [
            'Processador: Pentium(R) 133MHz  — Editor de Vídeo Turbo',
            'Teste de memória: 655360K OK',
            '',
            'Detectando IDE Primária Mestre ... MIGUEL_HD 1.2GB',
            'Detectando IDE Primária Escrava ... CD-ROM SHOWREEL 4x',
            'Detectando Disquete A: ........... 1.44MB',
            'Detectando controle de fliperama . 1 JOGADOR OK',
            '',
            'Carregando drivers: CRIATIVIDADE.SYS ... OK',
            '                    CAFE.SYS ........... OK',
            '                    PREMIERE.VXD ....... OK',
            '',
            'Fichas no moedeiro: OK',
            '',
            'Iniciando MiguelOS 95...',
        ];
        const pre = $('#boot-texto', boot);
        let i = 0;
        let fim = false;
        const timers = [];

        function terminar() {
            if (fim) return;
            fim = true;
            timers.forEach(clearTimeout);
            boot.classList.add('boot-saindo');
            setTimeout(() => boot.remove(), 250);
            if (depois) depois();
        }

        function proxima() {
            if (fim) return;
            if (i < linhas.length) {
                pre.textContent += linhas[i++] + '\n';
                timers.push(setTimeout(proxima, 90));
            } else {
                timers.push(setTimeout(() => {
                    $('.boot-bios', boot).hidden = true;
                    $('.boot-splash', boot).hidden = false;
                    timers.push(setTimeout(terminar, 2300));
                }, 300));
            }
        }
        proxima();
        boot.addEventListener('click', terminar);
        boot.addEventListener('touchend', terminar);
    }
    window.mostrarBoot = mostrarBoot;

    function balaoBoasVindas() {
        if ($('#balao')) return;
        const b = document.createElement('div');
        b.id = 'balao';
        b.innerHTML = `
            <button type="button" class="balao-fechar" aria-label="Fechar">×</button>
            <b>Bem-vindo ao MiguelOS 95!</b>
            <p>Dê dois cliques nos ícones ou use o botão <b>Iniciar</b> para explorar.
            Dica: abra o <b>Prompt do MS-DOS</b> e digite <code>ajuda</code>. 😉</p>`;
        document.body.appendChild(b);
        const fechar = () => { b.classList.add('saindo'); setTimeout(() => b.remove(), 300); };
        $('.balao-fechar', b).addEventListener('click', fechar);
        setTimeout(fechar, 12000);
    }

    // ======================================================================
    // Sistema de arquivos de mentirinha (Meu Computador e MS-DOS)
    // ======================================================================
    function montarFS() {
        const projetos = {};
        M.videos.forEach((v) => {
            const pasta = (v.categoria || 'Vídeos').toUpperCase();
            projetos[pasta] = projetos[pasta] || { tipo: 'pasta', filhos: {} };
            const nomeArq = v.titulo.replace(/[\\/:*?"<>|]/g, '').slice(0, 40) + '.avi';
            projetos[pasta].filhos[nomeArq] = { tipo: 'video', acao: 'video:' + v.yt, tamanho: '700 MB' };
        });
        return {
            tipo: 'raiz',
            filhos: {
                'Disquete (A:)': {
                    tipo: 'disquete', filhos: {
                        'CONTATO.TXT': { tipo: 'texto', acao: 'contato', tamanho: '1 KB' },
                        'CURRICULO.PDF': { tipo: 'doc', acao: 'curriculo', tamanho: '120 KB' },
                    },
                },
                'Disco local (C:)': {
                    tipo: 'disco', filhos: {
                        MIGUEL: {
                            tipo: 'pasta', filhos: {
                                'LEIA-ME.TXT': { tipo: 'texto', acao: 'notepad', tamanho: '2 KB' },
                                'CURRICULO.PDF': { tipo: 'doc', acao: 'curriculo', tamanho: '120 KB' },
                                'ORCAMENTO.EXE': { tipo: 'exe', icone: 'orcamento', acao: 'orcamento', tamanho: '42 KB' },
                                'MAIOR POR DENTRO': { tipo: 'pasta', infinito: 1 },
                                PROJETOS: { tipo: 'pasta', filhos: projetos },
                                JOGOS: {
                                    tipo: 'pasta', filhos: {
                                        'WINMINE.EXE': { tipo: 'exe', icone: 'minesweeper', acao: 'minas', tamanho: '24 KB' },
                                        'TETRIS.EXE': { tipo: 'exe', icone: 'tetrisIcon', acao: 'tetris', tamanho: '40 KB' },
                                        'DOOM.EXE': { tipo: 'exe', icone: 'doomIcon', acao: 'doom', tamanho: '2,3 MB' },
                                        'WOLF3D.EXE': { tipo: 'exe', icone: 'wolf3dIcon', acao: 'wolf3d', tamanho: '1,1 MB' },
                                        'DIGGER.EXE': { tipo: 'exe', icone: 'diggerIcon', acao: 'digger', tamanho: '60 KB' },
                                        'SCRABBLE.EXE': { tipo: 'exe', icone: 'scrabbleIcon', acao: 'scrabble', tamanho: '300 KB' },
                                    },
                                },
                            },
                        },
                        ARQUIVOS_DE_PROGRAMAS: {
                            tipo: 'pasta', filhos: {
                                'PAINT.EXE': { tipo: 'exe', icone: 'paint', acao: 'paint', tamanho: '340 KB' },
                                'NOTEPAD.EXE': { tipo: 'exe', icone: 'notepad', acao: 'notepad-novo', tamanho: '34 KB' },
                                'COMMAND.COM': { tipo: 'exe', icone: 'msdos', acao: 'msdos', tamanho: '92 KB' },
                                'MPLAYER.EXE': { tipo: 'exe', icone: 'videos', acao: 'videos', tamanho: '180 KB' },
                            },
                        },
                        WINDOWS: {
                            tipo: 'pasta', filhos: {
                                'SISTEMA.INI': { tipo: 'sistema', tamanho: '4 KB' },
                                'NAO_MEXA.DLL': { tipo: 'sistema', tamanho: '666 KB' },
                                'CRIATIVIDADE.SYS': { tipo: 'sistema', tamanho: '∞ KB' },
                            },
                        },
                    },
                },
                'SHOWREEL (D:)': {
                    tipo: 'cd', filhos: {
                        'SHOWREEL.AVI': { tipo: 'video', acao: 'videos', tamanho: '650 MB' },
                        'AUTORUN.INF': { tipo: 'sistema', tamanho: '1 KB' },
                    },
                },
                'Painel de controle': { tipo: 'painel', acao: 'propriedades' },
                Lixeira: { tipo: 'lixeira', acao: 'lixeira' },
            },
        };
    }
    const FS = montarFS();

    function iconeDoItem(nome, item) {
        if (item.icone) return ICON(item.icone);
        return ICON({
            pasta: 'folder', disquete: 'floppy', disco: 'computerBig', cd: 'cd', painel: 'display', lixeira: 'lixeira',
            texto: 'notepad', doc: 'credits', video: 'videos', exe: 'run', sistema: 'run', audio: 'cd', lixo: 'credits',
        }[item.tipo] || 'credits');
    }

    // A pasta "MAIOR POR DENTRO" não tem fim: cada nível gera o próximo
    const NOTAS_INFINITAS = {
        1: ['LEIA.TXT', 'Esta pasta é maior por dentro. Pode entrar, tem espaço de sobra.'],
        3: ['NAO_PISQUE.TXT', 'Não pisque. Nem por um segundo.'],
        5: ['ALLONS-Y.TXT', 'Allons-y! Continue descendo...'],
        8: ['GERONIMO.TXT', 'GERONIMOOOO! 🪂'],
        12: ['VOCE_AINDA_AQUI.TXT', 'Você ainda está aqui? Respeito. Toma uma ficha de presente! 🪙', 'ficha'],
        20: ['FIM.TXT', 'Parabéns, você chegou ao fundo!\n\n...brincadeira. Não tem fundo. 🌀'],
    };
    function gerarInfinito(n) {
        const filhos = { 'AINDA MAIS DENTRO': { tipo: 'pasta', infinito: n + 1 } };
        if (NOTAS_INFINITAS[n]) {
            const [nome, texto, premio] = NOTAS_INFINITAS[n];
            filhos[nome] = { tipo: 'texto', nota: texto, premio, tamanho: '1 KB' };
        }
        return filhos;
    }
    function noPorCaminho(caminho) {
        let no = FS;
        for (let i = 1; i < caminho.length; i++) {
            if (no.infinito && !no.filhos) no.filhos = gerarInfinito(no.infinito);
            if (!no.filhos || !no.filhos[caminho[i]]) return null;
            no = no.filhos[caminho[i]];
        }
        if (no.infinito && !no.filhos) no.filhos = gerarInfinito(no.infinito);
        return no;
    }

    function abrirItem(nome, item, aoNavegar) {
        if ((item.filhos || item.infinito) && aoNavegar) return aoNavegar(nome);
        if (item.nota) {
            if (item.premio === 'ficha' && !item.jaDeu && window.Arcade) { item.jaDeu = true; window.Arcade.mudarFichas(1); window.Arcade.SONS.ficha(); }
            return msgBox({ titulo: nome + ' - Bloco de Notas', icone: 'info', texto: item.nota, largura: 400 });
        }
        if (item.acao) return executarAcao(item.acao);
        if (item.tipo === 'sistema') {
            return msgBox({ titulo: nome, icone: 'aviso', texto: 'Este é um arquivo de sistema. Melhor não mexer aqui... o MiguelOS é sensível. 😅' });
        }
        msgBox({ titulo: nome, icone: 'info', texto: 'Não há programa associado a este arquivo.' });
    }

    // ======================================================================
    // Meu Computador (explorador)
    // ======================================================================
    function abrirExplorer(caminhoInicial) {
        const id = 'explorer' + (++contadorJanelas);
        let caminho = caminhoInicial.slice();
        const historico = [];

        openWindow(id, {
            title: 'Meu Computador', icon: ICON('myComputer'),
            left: 160 + (contadorJanelas % 5) * 24, top: 50 + (contadorJanelas % 5) * 24, width: 560, height: 400,
            bodyClass: 'sem-fundo explorer-wrap',
            bodyHtml: `
                <div class="explorer-barra">
                    <button type="button" class="btn95 pequeno" data-x="voltar">← Voltar</button>
                    <button type="button" class="btn95 pequeno" data-x="acima">↑ Acima</button>
                    <span class="explorer-endereco-label">Endereço</span>
                    <div class="campo95 explorer-endereco"></div>
                </div>
                <div class="explorer-itens campo95" tabindex="0"></div>
                <div class="win-statusbar explorer-status"></div>`,
            onMount: (body, win) => {
                const lista = $('.explorer-itens', body);
                const titulo = $('.win-title span', win);
                const tarefa = $(`.task-item[data-id="${id}"] span`);

                function nomeCaminho() {
                    if (caminho.length === 1) return 'Meu Computador';
                    const iInf = caminho.indexOf('MAIOR POR DENTRO');
                    if (iInf > 0 && caminho.length - iInf > 3) return 'C:\\MIGUEL\\MAIOR POR DENTRO\\...\\AINDA MAIS DENTRO (nível ' + (caminho.length - iInf) + ')';
                    return caminho.slice(1).join('\\').replace('Disco local (C:)', 'C:').replace('Disquete (A:)', 'A:').replace('SHOWREEL (D:)', 'D:');
                }
                function render() {
                    const no = noPorCaminho(caminho);
                    const nomes = Object.keys(no.filhos || {});
                    lista.innerHTML = nomes.map((n) => {
                        const it = no.filhos[n];
                        return `<button type="button" class="explorer-item" data-nome="${esc(n)}">
                            <img src="${iconeDoItem(n, it)}" alt=""><span>${esc(n)}</span></button>`;
                    }).join('') || '<div class="explorer-vazio">Esta pasta está vazia.</div>';
                    const nome = nomeCaminho();
                    $('.explorer-endereco', body).textContent = nome;
                    titulo.textContent = nome.split('\\').pop() || nome;
                    if (tarefa) tarefa.textContent = titulo.textContent;
                    $('.explorer-status', body).textContent = nomes.length + ' objeto(s)';
                    $$('.explorer-item', lista).forEach((b) => {
                        const n = b.dataset.nome;
                        const abrir = () => abrirItem(n, no.filhos[n], (pasta) => { historico.push(caminho.slice()); caminho.push(pasta); render(); });
                        b.addEventListener('click', () => {
                            if (document.documentElement.classList.contains('touch-device')) return abrir();
                            $$('.explorer-item.selecionado', lista).forEach((x) => x.classList.remove('selecionado'));
                            b.classList.add('selecionado');
                            $('.explorer-status', body).textContent = n + (no.filhos[n].tamanho ? '  —  ' + no.filhos[n].tamanho : '');
                        });
                        b.addEventListener('dblclick', abrir);
                        b.addEventListener('keydown', (e) => { if (e.key === 'Enter') abrir(); });
                    });
                }
                $('[data-x="voltar"]', body).addEventListener('click', () => { if (historico.length) { caminho = historico.pop(); render(); } });
                $('[data-x="acima"]', body).addEventListener('click', () => { if (caminho.length > 1) { historico.push(caminho.slice()); caminho.pop(); render(); } });
                render();
            },
        });
    }

    // ======================================================================
    // Lixeira
    // ======================================================================
    const LIXO = [
        ['projeto_final_v7_AGORA_VAI.prproj', 'Versão 7 de 23. A versão final de verdade foi a "final_final_2".'],
        ['render_travou_em_99%.mp4', 'Esse render travou em 99% às 3h da manhã. Descanse em paz.'],
        ['legenda_fora_de_sincronia.srt', 'As falas aparecem 2 segundos antes. Ninguém merece.'],
        ['take_47_do_mesmo_plano.mov', 'Os takes 1 a 46 também estão aqui. Não pergunte.'],
        ['transicao_estrela_girando.mov', 'Uma transição de estrela girando. Foi apagada por bom senso.'],
        ['ideia_ruim.txt', 'Conteúdo: "e se a gente colocasse Comic Sans no título?"'],
        ['planos_viagem_no_tempo.txt', 'Data da viagem: ontem. Ou amanhã. Tempo é meio... complicado.'],
        ['logo_maior_v3.png', 'O cliente pediu o logo maior. De novo. Esta é a versão 3 de 11.'],
    ];

    function abrirLixeira() {
        openWindow('lixeira', {
            title: 'Lixeira', icon: ICON('lixeira'),
            left: 220, top: 90, width: 520, height: 360,
            bodyClass: 'sem-fundo explorer-wrap',
            bodyHtml: `
                <div class="explorer-barra">
                    <button type="button" class="btn95 pequeno" data-x="esvaziar">🗑 Esvaziar Lixeira</button>
                </div>
                <div class="explorer-itens campo95 lixeira-itens">
                    ${LIXO.map(([n], i) => {
                        const tipo = /\.(mp4|mov)$/.test(n) ? 'videos' : /\.txt$/.test(n) ? 'notepad' : 'credits';
                        return `<button type="button" class="explorer-item" data-i="${i}"><img src="${ICON(tipo)}" alt=""><span>${esc(n)}</span></button>`;
                    }).join('')}
                </div>
                <div class="win-statusbar">${LIXO.length} objeto(s) — fracassos criativos que viraram aprendizado</div>`,
            onMount: (body) => {
                $$('.explorer-item', body).forEach((b) => {
                    const mostrar = () => {
                        const [n, piada] = LIXO[b.dataset.i];
                        msgBox({ titulo: n, icone: 'info', texto: piada, largura: 400 });
                    };
                    b.addEventListener('dblclick', mostrar);
                    b.addEventListener('click', () => {
                        if (document.documentElement.classList.contains('touch-device')) mostrar();
                        $$('.explorer-item.selecionado', body).forEach((x) => x.classList.remove('selecionado'));
                        b.classList.add('selecionado');
                    });
                });
                $('[data-x="esvaziar"]', body).addEventListener('click', () => {
                    msgBox({
                        titulo: 'Confirmar exclusão', icone: 'pergunta', botoes: ['Sim', 'Não'],
                        texto: 'Tem certeza de que deseja excluir permanentemente esses ' + LIXO.length + ' itens?',
                        aoClicar: (i) => {
                            if (i !== 0) return;
                            msgBox({
                                titulo: 'Lixeira', icone: 'erro',
                                texto: 'Não foi possível esvaziar a Lixeira: todo editor guarda os projetos antigos "só por garantia".',
                            });
                        },
                    });
                });
            },
        });
    }

    // ======================================================================
    // Bloco de Notas
    // ======================================================================
    function textoLeiaMe() {
        return [
            'Bem-vindo ao MiguelOS 95!',
            '=========================',
            '',
            'Oi! Eu sou o ' + M.nome + ', ' + (M.cargo || '').toLowerCase() + ' e editor de vídeo.',
            'Este computador é o meu portfólio. Fique à vontade para fuçar:',
            '',
            '  * Sobre Mim ........... quem eu sou, formação e experiência',
            '  * Meus Vídeos ......... meus trabalhos num reprodutor de mídia',
            '  * Currículo.pdf ....... a versão "séria" de tudo isso',
            '  * Contato ............. me chama, respondo rápido!',
            '',
            'Coisas para experimentar:',
            '  - Abra o Prompt do MS-DOS e digite AJUDA',
            '  - Clique com o botão direito na área de trabalho',
            '  - Troque o papel de parede em Iniciar > Configurações',
            '  - Jogue o Fliperama e bata o recorde do MIG',
            '  - Fique de olho no Rolinho: clique nele para ganhar fichas!',
            '  - Desenhe algo no Paint e salve',
            '  - Tente desligar o computador (boa sorte)',
            '  - Calcule o preço de um vídeo no ORCAMENTO.EXE',
            '  - NÃO abra o NAO_ABRA.EXE',
            '  - Saia do computador e clique nas coisas da sala!',
            '  - Existe um código secreto dos videogames antigos...',
            '    ↑ ↑ ↓ ↓ ← → ← → B A',
            '',
            'E-mail: ' + M.email,
            '',
            '— Miguel',
        ].join('\n');
    }

    function abrirNotepad(nomeArquivo, texto) {
        const id = 'notepad-' + nomeArquivo;
        openWindow(id, {
            title: nomeArquivo + ' - Bloco de Notas', icon: ICON('notepad'),
            left: 200, top: 60, width: 560, height: 440,
            bodyClass: 'sem-fundo notepad-wrap',
            bodyHtml: `
                <div class="barra-menu">
                    <button type="button" class="menu-btn" data-x="novo"><u>N</u>ovo</button>
                    <button type="button" class="menu-btn" data-x="salvar"><u>S</u>alvar</button>
                    <button type="button" class="menu-btn" data-x="quebra">Quebra <u>a</u>utomática ✓</button>
                    <button type="button" class="menu-btn" data-x="data">Hora/<u>D</u>ata</button>
                </div>
                <textarea class="notepad-texto campo95" spellcheck="false"></textarea>`,
            onMount: (body) => {
                const ta = $('textarea', body);
                ta.value = texto;
                $('[data-x="novo"]', body).addEventListener('click', () => { ta.value = ''; ta.focus(); });
                $('[data-x="salvar"]', body).addEventListener('click', () => {
                    baixar(new Blob([ta.value], { type: 'text/plain;charset=utf-8' }), nomeArquivo);
                });
                const q = $('[data-x="quebra"]', body);
                q.addEventListener('click', () => {
                    const on = ta.classList.toggle('sem-quebra');
                    q.innerHTML = 'Quebra <u>a</u>utomática' + (on ? '' : ' ✓');
                });
                $('[data-x="data"]', body).addEventListener('click', () => {
                    const s = new Date().toLocaleString('pt-BR');
                    const p = ta.selectionStart;
                    ta.value = ta.value.slice(0, p) + s + ta.value.slice(ta.selectionEnd);
                    ta.focus();
                    ta.selectionStart = ta.selectionEnd = p + s.length;
                });
            },
        });
    }

    function baixar(blob, nome) {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = nome;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    }

    // ======================================================================
    // Currículo
    // ======================================================================
    function abrirCurriculo() {
        if (isMobile()) { window.open(M.curriculo, '_blank', 'noopener'); return; }
        openWindow('curriculo', {
            title: 'Currículo.pdf', icon: ICON('credits'),
            left: 180, top: 20, width: 720, height: Math.min(860, window.innerHeight - 60),
            bodyHtml: `<iframe src="${M.curriculo}#view=FitH" title="Currículo"></iframe>`,
            statusBar: `<a href="${M.curriculo}" download>💾 Baixar PDF</a> &nbsp;·&nbsp; <a href="${M.curriculo}" target="_blank" rel="noopener">Abrir em nova aba</a>`,
        });
    }

    // ======================================================================
    // Prompt do MS-DOS
    // ======================================================================
    const CORES_DOS = ['#000000', '#0000aa', '#00aa00', '#00aaaa', '#aa0000', '#aa00aa', '#aa5500', '#aaaaaa',
        '#555555', '#5555ff', '#55ff55', '#55ffff', '#ff5555', '#ff55ff', '#ffff55', '#ffffff'];

    function abrirMsDos() {
        const id = 'msdos' + (++contadorJanelas);
        openWindow(id, {
            title: 'Prompt do MS-DOS', icon: ICON('msdos'),
            left: 150 + (contadorJanelas % 4) * 26, top: 70 + (contadorJanelas % 4) * 26, width: 660, height: 420,
            bodyClass: 'terminal-wrap',
            bodyHtml: `<div class="terminal"><div class="term-saida"></div>
                <div class="term-linha"><span class="term-prompt"></span><input class="term-input" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Comando"></div></div>`,
            onMount: (body) => iniciarTerminal(body, id),
        });
    }

    function iniciarTerminal(body, winId) {
        const term = $('.terminal', body);
        const saida = $('.term-saida', body);
        const input = $('.term-input', body);
        const prompt = $('.term-prompt', body);
        let cwd = ['MEU COMPUTADOR', 'Disco local (C:)', 'MIGUEL'];
        const hist = [];
        let hi = 0;
        let ocupado = false;

        const caminhoDos = () => {
            const drive = cwd[1] === 'Disquete (A:)' ? 'A:' : cwd[1] === 'SHOWREEL (D:)' ? 'D:' : 'C:';
            return drive + '\\' + cwd.slice(2).join('\\');
        };
        const atualizarPrompt = () => { prompt.textContent = caminhoDos() + '>'; };
        const rolar = () => { term.scrollTop = term.scrollHeight; };
        function escrever(txt, classe) {
            const l = document.createElement('div');
            if (classe) l.className = classe;
            l.textContent = txt;
            saida.appendChild(l);
            rolar();
        }
        function escreverHtml(html) {
            const l = document.createElement('div');
            l.innerHTML = html;
            saida.appendChild(l);
            rolar();
        }
        const esperar = (ms) => new Promise((r) => setTimeout(r, ms));

        escrever('MiguelOS 95 [Versão 4.00.2026]');
        escrever('(C) Copyright Miguel Angelo Audiovisual 1995-2026.');
        escrever('');
        escrever('Digite AJUDA para ver a lista de comandos.');
        escrever('');
        atualizarPrompt();

        term.addEventListener('click', () => { if (!window.getSelection().toString()) input.focus(); });
        setTimeout(() => input.focus(), 50);

        input.addEventListener('keydown', async (e) => {
            if (e.key === 'ArrowUp') { if (hi > 0) { hi--; input.value = hist[hi]; } e.preventDefault(); return; }
            if (e.key === 'ArrowDown') { if (hi < hist.length) { hi++; input.value = hist[hi] || ''; } e.preventDefault(); return; }
            if (e.key !== 'Enter' || ocupado) return;
            const linha = input.value;
            input.value = '';
            escrever(prompt.textContent + linha);
            if (linha.trim()) { hist.push(linha); hi = hist.length; }
            ocupado = true;
            $('.term-linha', body).style.visibility = 'hidden';
            try { await rodar(linha.trim()); } catch (err) { escrever('Erro: ' + err.message); }
            ocupado = false;
            if (!openWindows[winId]) return;
            $('.term-linha', body).style.visibility = '';
            escrever('');
            atualizarPrompt();
            input.focus();
            rolar();
        });

        const APPS_DOS = {
            notepad: 'notepad-novo', edit: 'notepad-novo', paint: 'paint', mspaint: 'paint', winmine: 'minas', minas: 'minas',
            campominado: 'minas', doom: 'doom', tetris: 'tetris', wolf3d: 'wolf3d', wolfenstein: 'wolf3d', digger: 'digger',
            scrabble: 'scrabble', explorer: 'meucomputador', mplayer: 'videos', videos: 'videos', sobre: 'sobre',
            experiencia: 'experiencia', projetos: 'projetos', contato: 'contato', curriculo: 'curriculo',
            lixeira: 'lixeira', control: 'propriedades', fliperama: 'fliperama', arcade: 'fliperama', cabo: 'fliperama',
        };

        async function rodar(linha) {
            if (!linha) return;
            const partes = linha.split(/\s+/);
            const cmd = partes[0].toLowerCase().replace(/\.(exe|com|bat)$/, '');
            const arg = partes.slice(1).join(' ');

            if (APPS_DOS[cmd]) {
                escrever('Abrindo ' + cmd.toUpperCase() + '...');
                executarAcao(APPS_DOS[cmd]);
                return;
            }

            switch (cmd) {
            case 'ajuda': case 'help': case '?':
                [
                    'Comandos disponíveis:',
                    '',
                    '  SOBRE, EXPERIENCIA, PROJETOS, CONTATO   abre o portfólio',
                    '  CURRICULO      abre o currículo em PDF',
                    '  VIDEOS         abre o Reprodutor de Mídia',
                    '  DIR            lista os arquivos da pasta',
                    '  CD [pasta]     entra numa pasta (CD .. volta)',
                    '  TYPE [arquivo] mostra um arquivo de texto',
                    '  START [arq]    abre um arquivo',
                    '  CLS            limpa a tela',
                    '  COLOR [xy]     muda as cores (ex: COLOR 0A)',
                    '  VER, DATE, TIME, WHOAMI, ECHO',
                    '  NOTEPAD, PAINT, WINMINE, DOOM, TETRIS ...',
                    '  EXIT           fecha esta janela',
                    '',
                    'Comandos secretos: tem vários. Tente RENDER, MATRIX, HACK, CLIENTE, DESCULPA...',
                ].forEach((l) => escrever(l));
                break;
            case 'cls': case 'clear':
                saida.innerHTML = '';
                break;
            case 'ver':
                escrever('MiguelOS 95 [Versão 4.00.2026] — Edição Produtor Audiovisual');
                break;
            case 'date': case 'data':
                escrever('Data atual: ' + new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit', month: '2-digit', year: 'numeric' }));
                break;
            case 'time': case 'hora':
                escrever('Hora atual: ' + new Date().toLocaleTimeString('pt-BR'));
                break;
            case 'echo':
                escrever(arg || 'ECHO está ativado.');
                break;
            case 'whoami':
                escrever('visitante\\recrutador_em_potencial');
                break;
            case 'dir': case 'ls': {
                const no = noPorCaminho(cwd);
                const nomes = Object.keys((no && no.filhos) || {});
                escrever(' O volume na unidade ' + caminhoDos().slice(0, 2) + ' é MIGUEL_HD');
                escrever(' Pasta de ' + caminhoDos());
                escrever('');
                let n = 0;
                nomes.forEach((nome) => {
                    const it = no.filhos[nome];
                    const dataStr = '07/07/2026  23:59';
                    escrever(dataStr + '    ' + (it.filhos || it.infinito ? '<DIR>         ' : (it.tamanho || '1 KB').padStart(10) + '    ') + nome);
                    n++;
                });
                escrever('       ' + n + ' arquivo(s)        0 bytes livres (cheio de vídeo)');
                break;
            }
            case 'cd': case 'chdir': {
                if (!arg || arg === '.') { escrever(caminhoDos()); break; }
                if (arg === '..') { if (cwd.length > 2) cwd.pop(); break; }
                if (arg === '\\' || arg === '/') { cwd = cwd.slice(0, 2); break; }
                if (/^[acd]:$/i.test(arg)) {
                    const mapa = { a: 'Disquete (A:)', c: 'Disco local (C:)', d: 'SHOWREEL (D:)' };
                    cwd = ['MEU COMPUTADOR', mapa[arg[0].toLowerCase()]];
                    break;
                }
                const no = noPorCaminho(cwd);
                const alvo = Object.keys(no.filhos || {}).find((k) => k.toLowerCase() === arg.toLowerCase());
                if (alvo && (no.filhos[alvo].filhos || no.filhos[alvo].infinito)) cwd.push(alvo);
                else escrever('Caminho inválido');
                break;
            }
            case 'type': case 'cat': {
                if (/leia-me/i.test(arg)) textoLeiaMe().split('\n').forEach((l) => escrever(l));
                else if (/contato/i.test(arg)) escrever('E-mail: ' + M.email);
                else if (!arg) escrever('Sintaxe: TYPE [arquivo]');
                else escrever('Arquivo não encontrado - ' + arg.toUpperCase());
                break;
            }
            case 'start': case 'open': case 'abrir': {
                const no = noPorCaminho(cwd);
                const alvo = Object.keys(no.filhos || {}).find((k) => k.toLowerCase() === arg.toLowerCase());
                if (alvo) { escrever('Abrindo ' + alvo + '...'); abrirItem(alvo, no.filhos[alvo]); } else escrever('Arquivo não encontrado - ' + arg.toUpperCase());
                break;
            }
            case 'color': {
                const v = (arg || '07').padStart(2, '0');
                const bg = parseInt(v[0], 16);
                const fg = parseInt(v[1], 16);
                if (isNaN(bg) || isNaN(fg) || bg === fg) { escrever('Use COLOR seguido de 2 dígitos hexadecimais diferentes. Ex: COLOR 0A, COLOR 1F'); break; }
                term.style.background = CORES_DOS[bg];
                term.style.color = CORES_DOS[fg];
                input.style.color = CORES_DOS[fg];
                break;
            }
            case 'exit': case 'sair':
                closeWindow(winId);
                break;
            case 'sudo':
                escrever('Boa tentativa. Aqui quem manda é o Miguel. 😎');
                break;
            case 'format': case 'del': case 'rm': case 'deltree':
                escrever('Opa, opa! Nada de apagar coisas aqui. Esses arquivos têm horas de render. 😅');
                break;
            case 'ping': {
                const alvo = arg || 'miguelangelo';
                escrever('Disparando ' + alvo + ' com 32 bytes de dados:');
                for (let i = 0; i < 4; i++) {
                    await esperar(450);
                    escrever('Resposta de ' + alvo + ': bytes=32 tempo=' + (8 + Math.round(Math.random() * 20)) + 'ms TTL=128');
                }
                escrever('');
                escrever('O Miguel está online e disponível para projetos! ✉ ' + M.email);
                break;
            }
            case 'render': {
                escrever('Renderizando showreel_final_FINAL_v3.mp4 ...');
                const barra = document.createElement('div');
                saida.appendChild(barra);
                const etapas = ['Analisando timeline', 'Aplicando correção de cor', 'Mixando áudio', 'Exportando H.264'];
                for (let p = 0; p <= 100; p += 4) {
                    const cheio = Math.round(p / 4);
                    barra.textContent = '[' + '█'.repeat(cheio) + '░'.repeat(25 - cheio) + '] ' + String(p).padStart(3) + '%  ' + etapas[Math.min(3, Math.floor(p / 26))];
                    rolar();
                    await esperar(p === 96 ? 1400 : 70);
                }
                escrever('Render concluído com sucesso! (e sem travar em 99%, um milagre)');
                break;
            }
            case 'hack': case 'hacker': {
                const linhas = ['Conectando a mainframe.gov.br...', 'Ignorando firewall... OK', 'Descriptografando senhas... ████████ OK',
                    'Baixando arquivos secretos...', '  > receita_de_bolo_da_vovo.txt', '  > lista_de_filmes_pra_assistir.xls', '  > showreel_do_miguel.mp4 ⭐',
                    'Acesso concedido.'];
                for (const l of linhas) { escrever(l, 'term-verde'); await esperar(260); }
                escrever('');
                escrever('...brincadeira. 😄 O único hack aqui é contratar um bom editor: ' + M.email);
                break;
            }
            case 'matrix':
                await efeitoMatrix(body);
                break;
            case 'bsod':
                telaAzul();
                break;
            case 'tardis': case 'doctorwho':
                escrever('Vworp... vworp... ⏳  Viajando no tempo até 1995!');
                await esperar(900);
                escrever('Chegamos. É por isso que este computador é tão antigo. (É maior por dentro, prometo.)');
                break;
            case 'cafe': case 'coffee':
                escrever('    ( (');
                escrever('     ) )');
                escrever('  ........');
                escrever('  |      |]   Café pronto. Combustível oficial das madrugadas de edição.');
                escrever('  \\      /');
                escrever('   `----\'');
                break;
            case 'insertcoin': case 'coin': case 'ficha':
                if (Math.random() < 0.5) { escrever('*plim* Ficha aceita! +1 FICHA 🪙'); window.Arcade.mudarFichas(1); window.Arcade.SONS.ficha(); } else escrever('*clanc* A ficha caiu no chão... tente de novo.');
                break;
            case 'rolinho':
                escrever('Chamando o Rolinho... ele já está a caminho! 🎞');
                window.Arcade.passeioDoRolinho(true);
                break;
            case 'allons-y': case 'allonsy':
                escrever('Allons-y! 🏃 ...para onde mesmo?');
                break;
            case 'geronimo':
                escrever('GERONIMOOOOOO! 🪂');
                break;
            case 'blink': case 'naopisque': case 'piscar':
                if (window.Extras) window.Extras.piscar();
                await esperar(300);
                escrever('Você piscou. 👀');
                break;
            case 'desculpa': case 'excuse':
                escrever('📢 ' + (window.Extras ? window.Extras.desculpa() : 'O render travou.'));
                break;
            case 'cliente': case 'feedback':
                escrever('💬 Cliente: "' + (window.Extras ? window.Extras.cliente() : 'Dá pra deixar mais uau?') + '"');
                break;
            case 'orcamento':
                escrever('Abrindo ORCAMENTO.EXE...');
                executarAcao('orcamento');
                break;
            case 'naoabra': case 'nao_abra':
                escrever('Você foi avisado...');
                executarAcao('naoabra');
                break;
            case 'shutdown':
                executarAcao('desligar');
                break;
            default:
                if (/^[acd]:$/i.test(cmd)) { await rodar('cd ' + cmd); break; }
                escrever('Comando ou nome de arquivo inválido');
            }
        }

        function efeitoMatrix(el) {
            return new Promise((resolve) => {
                const c = document.createElement('canvas');
                c.className = 'matrix-canvas';
                el.appendChild(c);
                const fim = chuvaMatrix(c, '#0f0');
                const parar = () => { fim(); c.remove(); document.removeEventListener('keydown', parar); resolve(); };
                setTimeout(() => {
                    c.addEventListener('click', parar);
                    document.addEventListener('keydown', parar);
                }, 300);
                setTimeout(parar, 9000);
            });
        }
    }

    // Chuva de caracteres (usada no MS-DOS e na proteção de tela)
    function chuvaMatrix(canvas, cor) {
        const ctx = canvas.getContext('2d');
        const chars = 'アカサタナハマヤラワ0123456789MIGUELANGELO$#@%';
        let colunas = [];
        let vivo = true;
        function ajustar() {
            canvas.width = canvas.clientWidth || canvas.parentElement.clientWidth;
            canvas.height = canvas.clientHeight || canvas.parentElement.clientHeight;
            colunas = Array(Math.ceil(canvas.width / 14)).fill(0).map(() => Math.random() * -50);
        }
        ajustar();
        let ultimo = 0;
        function quadro(t) {
            if (!vivo) return;
            if (t - ultimo > 50) {
                ultimo = t;
                ctx.fillStyle = 'rgba(0,0,0,0.08)';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.fillStyle = cor;
                ctx.font = '14px monospace';
                colunas.forEach((y, i) => {
                    ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 14, y * 14);
                    colunas[i] = y * 14 > canvas.height && Math.random() > 0.975 ? 0 : y + 1;
                });
            }
            requestAnimationFrame(quadro);
        }
        requestAnimationFrame(quadro);
        return () => { vivo = false; };
    }

    // ======================================================================
    // Paint
    // ======================================================================
    const PALETA = ['#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080', '#808040', '#004040', '#0080ff', '#004080', '#8000ff', '#804000',
        '#ffffff', '#c0c0c0', '#ff0000', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#ff00ff', '#ffff80', '#00ff80', '#80ffff', '#8080ff', '#ff0080', '#ff8040'];
    const FERRAMENTAS = [
        ['lapis', 'Lápis', '<path d="M3 13l1-3 7-7 2 2-7 7z" fill="#ff0" stroke="#000"/><path d="M3 13l1-3 2 2z" fill="#000"/>'],
        ['pincel', 'Pincel', '<path d="M10 2l4 4-5 3-2-2z" fill="#804000" stroke="#000"/><path d="M7 7l2 2c-1 3-4 4-7 5 1-3 2-6 5-7z" fill="#000080"/>'],
        ['spray', 'Spray', '<rect x="4" y="6" width="6" height="9" fill="#c0c0c0" stroke="#000"/><rect x="5" y="3" width="4" height="3" fill="#f00" stroke="#000"/><g fill="#000"><rect x="11" y="2" width="1" height="1"/><rect x="13" y="4" width="1" height="1"/><rect x="12" y="6" width="1" height="1"/><rect x="14" y="1" width="1" height="1"/></g>'],
        ['borracha', 'Borracha', '<path d="M2 10l6-6 6 6-4 4H6z" fill="#ffc0c0" stroke="#000"/><path d="M2 10l4 4" stroke="#000"/>'],
        ['balde', 'Balde de tinta', '<path d="M3 7l5-5 5 5-5 5z" fill="#c0c0c0" stroke="#000"/><path d="M13 7c1 2 2 4 1 5s-2-1-1-5z" fill="#00f"/>'],
        ['linha', 'Linha', '<path d="M2 14L14 2" stroke="#000" stroke-width="2"/>'],
        ['retangulo', 'Retângulo', '<rect x="2" y="4" width="12" height="9" fill="none" stroke="#000" stroke-width="1.5"/>'],
        ['elipse', 'Elipse', '<ellipse cx="8" cy="8" rx="6" ry="5" fill="none" stroke="#000" stroke-width="1.5"/>'],
    ];

    function abrirPaint() {
        openWindow('paint', {
            title: 'sem título - Paint', icon: ICON('paint'),
            left: 140, top: 30, width: 820, height: 600, minWidth: 420, minHeight: 320,
            bodyClass: 'sem-fundo paint-wrap',
            bodyHtml: `
                <div class="barra-menu">
                    <button type="button" class="menu-btn" data-x="novo"><u>N</u>ovo</button>
                    <button type="button" class="menu-btn" data-x="salvar"><u>S</u>alvar como PNG</button>
                    <button type="button" class="menu-btn" data-x="desfazer"><u>D</u>esfazer</button>
                </div>
                <div class="paint-meio">
                    <div class="paint-ferramentas">
                        ${FERRAMENTAS.map(([id, nome, svg]) => `<button type="button" class="paint-ferr" data-f="${id}" title="${nome}"><svg viewBox="0 0 16 16" width="16" height="16">${svg}</svg></button>`).join('')}
                        <div class="paint-tamanhos campo95">
                            ${[1, 3, 6, 12].map((t) => `<button type="button" class="paint-tam" data-t="${t}" title="Tamanho ${t}"><i style="height:${Math.min(t, 8)}px"></i></button>`).join('')}
                        </div>
                    </div>
                    <div class="paint-area campo95"><canvas class="paint-canvas" width="900" height="600"></canvas></div>
                </div>
                <div class="paint-paleta">
                    <div class="paint-cores-atuais campo95"><i class="cor-bg"></i><i class="cor-fg"></i></div>
                    <div class="paint-cores">${PALETA.map((c) => `<button type="button" style="background:${c}" data-c="${c}" title="${c}"></button>`).join('')}</div>
                    <div class="paint-dica">Botão esquerdo: cor principal · Botão direito: cor de fundo</div>
                </div>`,
            onMount: iniciarPaint,
        });
    }

    function iniciarPaint(body) {
        const canvas = $('.paint-canvas', body);
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // Uma assinatura de boas-vindas no canto
        ctx.fillStyle = '#c0c0c0';
        ctx.font = 'italic 14px serif';
        ctx.fillText('Desenhe algo pro Miguel!', 12, canvas.height - 14);

        let ferr = 'pincel';
        let tam = 3;
        let fg = '#000000';
        let bg = '#ffffff';
        let desenhando = false;
        let corAtual = fg;
        let ultimo = null;
        let inicio = null;
        let snapshot = null;
        const desfazer = [];

        function marcar() {
            $$('.paint-ferr', body).forEach((b) => b.classList.toggle('ativo', b.dataset.f === ferr));
            $$('.paint-tam', body).forEach((b) => b.classList.toggle('ativo', Number(b.dataset.t) === tam));
            $('.cor-fg', body).style.background = fg;
            $('.cor-bg', body).style.background = bg;
        }
        marcar();

        $$('.paint-ferr', body).forEach((b) => b.addEventListener('click', () => { ferr = b.dataset.f; marcar(); }));
        $$('.paint-tam', body).forEach((b) => b.addEventListener('click', () => { tam = Number(b.dataset.t); marcar(); }));
        $$('.paint-cores button', body).forEach((b) => {
            b.addEventListener('click', () => { fg = b.dataset.c; marcar(); });
            b.addEventListener('contextmenu', (e) => { e.preventDefault(); bg = b.dataset.c; marcar(); });
        });

        function salvarEstado() {
            desfazer.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
            if (desfazer.length > 20) desfazer.shift();
        }
        $('[data-x="desfazer"]', body).addEventListener('click', () => { const s = desfazer.pop(); if (s) ctx.putImageData(s, 0, 0); });
        $('[data-x="novo"]', body).addEventListener('click', () => { salvarEstado(); ctx.fillStyle = bg; ctx.fillRect(0, 0, canvas.width, canvas.height); });
        $('[data-x="salvar"]', body).addEventListener('click', () => {
            canvas.toBlob((blob) => baixar(blob, 'desenho-miguelos.png'));
        });

        function pos(e) {
            const r = canvas.getBoundingClientRect();
            return { x: Math.round((e.clientX - r.left) * canvas.width / r.width), y: Math.round((e.clientY - r.top) * canvas.height / r.height) };
        }
        function traco(a, b) {
            ctx.strokeStyle = corAtual;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';
            ctx.lineWidth = ferr === 'lapis' ? 1 : ferr === 'borracha' ? tam * 3 : tam;
            if (ferr === 'borracha') ctx.strokeStyle = bg;
            ctx.beginPath();
            ctx.moveTo(a.x + 0.5, a.y + 0.5);
            ctx.lineTo(b.x + 0.5, b.y + 0.5);
            ctx.stroke();
        }
        function spray(p) {
            ctx.fillStyle = corAtual;
            const raio = tam * 3 + 4;
            for (let i = 0; i < 14; i++) {
                const ang = Math.random() * Math.PI * 2;
                const d = Math.random() * raio;
                ctx.fillRect(p.x + Math.cos(ang) * d, p.y + Math.sin(ang) * d, 1, 1);
            }
        }
        function forma(a, b) {
            ctx.putImageData(snapshot, 0, 0);
            ctx.strokeStyle = corAtual;
            ctx.lineWidth = tam;
            ctx.beginPath();
            if (ferr === 'linha') { ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); }
            if (ferr === 'retangulo') ctx.rect(a.x, a.y, b.x - a.x, b.y - a.y);
            if (ferr === 'elipse') ctx.ellipse((a.x + b.x) / 2, (a.y + b.y) / 2, Math.abs(b.x - a.x) / 2, Math.abs(b.y - a.y) / 2, 0, 0, Math.PI * 2);
            ctx.stroke();
        }
        function preencher(p) {
            const w = canvas.width;
            const h = canvas.height;
            const img = ctx.getImageData(0, 0, w, h);
            const dados = new Uint32Array(img.data.buffer);
            const alvo = dados[p.y * w + p.x];
            const t = document.createElement('canvas').getContext('2d');
            t.fillStyle = corAtual;
            t.fillRect(0, 0, 1, 1);
            const cd = t.getImageData(0, 0, 1, 1).data;
            const nova = new Uint32Array(new Uint8ClampedArray([cd[0], cd[1], cd[2], 255]).buffer)[0];
            if (alvo === nova) return;
            const pilha = [p.x, p.y];
            while (pilha.length) {
                const y = pilha.pop();
                let x = pilha.pop();
                let i = y * w + x;
                while (x >= 0 && dados[i] === alvo) { x--; i--; }
                x++; i++;
                let cima = false;
                let baixo = false;
                while (x < w && dados[i] === alvo) {
                    dados[i] = nova;
                    if (y > 0) {
                        if (dados[i - w] === alvo) { if (!cima) { pilha.push(x, y - 1); cima = true; } } else cima = false;
                    }
                    if (y < h - 1) {
                        if (dados[i + w] === alvo) { if (!baixo) { pilha.push(x, y + 1); baixo = true; } } else baixo = false;
                    }
                    x++; i++;
                }
            }
            ctx.putImageData(img, 0, 0);
        }

        canvas.addEventListener('contextmenu', (e) => e.preventDefault());
        canvas.addEventListener('pointerdown', (e) => {
            e.preventDefault();
            canvas.setPointerCapture(e.pointerId);
            corAtual = e.button === 2 ? bg : fg;
            const p = pos(e);
            salvarEstado();
            if (ferr === 'balde') { preencher(p); return; }
            desenhando = true;
            ultimo = p;
            inicio = p;
            if (['linha', 'retangulo', 'elipse'].includes(ferr)) snapshot = ctx.getImageData(0, 0, canvas.width, canvas.height);
            else if (ferr === 'spray') spray(p);
            else traco(p, p);
        });
        canvas.addEventListener('pointermove', (e) => {
            if (!desenhando) return;
            const p = pos(e);
            if (['linha', 'retangulo', 'elipse'].includes(ferr)) forma(inicio, p);
            else if (ferr === 'spray') spray(p);
            else traco(ultimo, p);
            ultimo = p;
        });
        const parar = () => { desenhando = false; snapshot = null; };
        canvas.addEventListener('pointerup', parar);
        canvas.addEventListener('pointercancel', parar);
    }

    // ======================================================================
    // Campo Minado
    // ======================================================================
    const NIVEIS = { iniciante: [9, 9, 10], intermediario: [16, 16, 40] };

    function abrirMinas() {
        openWindow('minas', {
            title: 'Campo Minado', icon: ICON('minesweeper'),
            left: 260, top: 70, width: 220, height: 300, resizable: false,
            bodyClass: 'sem-fundo minas-wrap',
            bodyHtml: `
                <div class="barra-menu">
                    <button type="button" class="menu-btn" data-n="iniciante">Iniciante</button>
                    <button type="button" class="menu-btn" data-n="intermediario">Intermediário</button>
                </div>
                <div class="minas-jogo">
                    <div class="minas-topo campo95">
                        <div class="led" data-x="minas">010</div>
                        <button type="button" class="minas-rosto" aria-label="Novo jogo">🙂</button>
                        <div class="led" data-x="tempo">000</div>
                    </div>
                    <div class="minas-grade campo95"></div>
                </div>`,
            onMount: (body, win) => iniciarMinas(body, win),
        });
    }

    function iniciarMinas(body, win) {
        const grade = $('.minas-grade', body);
        const rosto = $('.minas-rosto', body);
        const ledMinas = $('[data-x="minas"]', body);
        const ledTempo = $('[data-x="tempo"]', body);
        let nivel = 'iniciante';
        let L, C, N, campo, aberto, marcado, fim, primeiro, tempo, timer, restantes;

        const led = (el, n) => { el.textContent = String(Math.max(-99, Math.min(999, n))).padStart(3, '0'); };

        function novo() {
            [L, C, N] = NIVEIS[nivel];
            campo = Array(L * C).fill(0);
            aberto = Array(L * C).fill(false);
            marcado = Array(L * C).fill(false);
            fim = false;
            primeiro = true;
            tempo = 0;
            restantes = N;
            clearInterval(timer);
            led(ledMinas, N);
            led(ledTempo, 0);
            rosto.textContent = '🙂';
            grade.style.gridTemplateColumns = `repeat(${C}, var(--cel, 16px))`;
            grade.innerHTML = Array(L * C).fill(0).map((_, i) => `<button type="button" class="celula" data-i="${i}"></button>`).join('');
            if (!isMobile()) {
                win.style.width = (C * 16 + 34) + 'px';
                win.style.height = (L * 16 + 120) + 'px';
            }
        }

        const vizinhos = (i) => {
            const r = Math.floor(i / C);
            const c = i % C;
            const v = [];
            for (let dr = -1; dr <= 1; dr++) {
                for (let dc = -1; dc <= 1; dc++) {
                    if (!dr && !dc) continue;
                    const nr = r + dr;
                    const nc = c + dc;
                    if (nr >= 0 && nr < L && nc >= 0 && nc < C) v.push(nr * C + nc);
                }
            }
            return v;
        };

        function plantar(seguro) {
            const proibidos = new Set([seguro, ...vizinhos(seguro)]);
            let n = 0;
            while (n < N) {
                const i = Math.floor(Math.random() * L * C);
                if (campo[i] === -1 || proibidos.has(i)) continue;
                campo[i] = -1;
                n++;
            }
            for (let i = 0; i < L * C; i++) {
                if (campo[i] !== -1) campo[i] = vizinhos(i).filter((v) => campo[v] === -1).length;
            }
        }

        function desenhar(i) {
            const el = grade.children[i];
            el.className = 'celula';
            el.textContent = '';
            if (aberto[i]) {
                el.classList.add('aberta');
                if (campo[i] === -1) { el.textContent = '✹'; el.classList.add('mina'); } else if (campo[i] > 0) { el.textContent = campo[i]; el.classList.add('n' + campo[i]); }
            } else if (marcado[i]) {
                el.textContent = '🚩';
            }
        }

        function abrir(i) {
            if (fim || marcado[i] || aberto[i]) return;
            if (primeiro) {
                primeiro = false;
                plantar(i);
                timer = setInterval(() => { tempo++; led(ledTempo, tempo); }, 1000);
            }
            if (campo[i] === -1) return perder(i);
            const fila = [i];
            while (fila.length) {
                const k = fila.pop();
                if (aberto[k] || marcado[k]) continue;
                aberto[k] = true;
                desenhar(k);
                if (campo[k] === 0) vizinhos(k).forEach((v) => { if (!aberto[v]) fila.push(v); });
            }
            if (aberto.filter((a, k) => !a && campo[k] !== -1).length === 0) ganhar();
        }

        function marcar(i) {
            if (fim || aberto[i]) return;
            marcado[i] = !marcado[i];
            restantes += marcado[i] ? -1 : 1;
            led(ledMinas, restantes);
            desenhar(i);
        }

        function perder(i) {
            fim = true;
            clearInterval(timer);
            rosto.textContent = '😵';
            for (let k = 0; k < L * C; k++) if (campo[k] === -1) { aberto[k] = true; desenhar(k); }
            grade.children[i].classList.add('explodiu');
        }

        function ganhar() {
            fim = true;
            clearInterval(timer);
            rosto.textContent = '😎';
            const recordes = guardar.ler('recordes_minas', {});
            const novoRecorde = !recordes[nivel] || tempo < recordes[nivel];
            if (novoRecorde) { recordes[nivel] = tempo; guardar.salvar('recordes_minas', recordes); }
            msgBox({
                titulo: 'Campo Minado', icone: 'info',
                texto: 'Você venceu em ' + tempo + ' segundos!' + (novoRecorde ? ' 🏆 Novo recorde no nível ' + (nivel === 'iniciante' ? 'Iniciante' : 'Intermediário') + '!' : ''),
            });
        }

        let pressTimer = null;
        let longo = false;
        grade.addEventListener('mousedown', (e) => { if (e.button === 0 && !fim && e.target.classList.contains('celula')) rosto.textContent = '😮'; });
        document.addEventListener('mouseup', () => { if (!fim) rosto.textContent = '🙂'; });
        grade.addEventListener('click', (e) => {
            const el = e.target.closest('.celula');
            if (!el || longo) { longo = false; return; }
            abrir(Number(el.dataset.i));
        });
        grade.addEventListener('contextmenu', (e) => {
            e.preventDefault();
            const el = e.target.closest('.celula');
            if (el) marcar(Number(el.dataset.i));
        });
        // Toque longo = bandeira (celular)
        grade.addEventListener('touchstart', (e) => {
            const el = e.target.closest('.celula');
            if (!el) return;
            longo = false;
            pressTimer = setTimeout(() => { longo = true; marcar(Number(el.dataset.i)); if (navigator.vibrate) navigator.vibrate(30); }, 420);
        }, { passive: true });
        grade.addEventListener('touchend', () => clearTimeout(pressTimer));
        grade.addEventListener('touchmove', () => clearTimeout(pressTimer), { passive: true });

        rosto.addEventListener('click', novo);
        $$('[data-n]', body).forEach((b) => b.addEventListener('click', () => { nivel = b.dataset.n; novo(); }));
        openWindows.minas.onClose = () => clearInterval(timer);
        novo();
    }

    // ======================================================================
    // Reprodutor de Mídia (com linha do tempo de editor de vídeo)
    // ======================================================================
    let ytApiPromessa = null;
    function carregarYouTubeApi() {
        if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
        if (ytApiPromessa) return ytApiPromessa;
        ytApiPromessa = new Promise((resolve, reject) => {
            const anterior = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => { if (anterior) anterior(); resolve(window.YT); };
            const s = document.createElement('script');
            s.src = 'https://www.youtube.com/iframe_api';
            s.onerror = () => { ytApiPromessa = null; reject(new Error('sem YouTube')); };
            document.head.appendChild(s);
            setTimeout(() => reject(new Error('timeout')), 8000);
        });
        return ytApiPromessa;
    }

    function hashTexto(s) {
        let h = 2166136261;
        for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
        return () => { h ^= h << 13; h ^= h >>> 17; h ^= h << 5; return ((h >>> 0) % 1000) / 1000; };
    }

    function timecode(seg) {
        seg = Math.max(0, seg || 0);
        const h = Math.floor(seg / 3600);
        const m = Math.floor((seg % 3600) / 60);
        const s = Math.floor(seg % 60);
        const f = Math.floor((seg % 1) * 30);
        return [h, m, s, f].map((n) => String(n).padStart(2, '0')).join(':');
    }

    function abrirVideos(ytInicial) {
        if (!M.videos.length) return msgBox({ titulo: 'Reprodutor de Mídia', icone: 'aviso', texto: 'Nenhum vídeo encontrado.' });
        if (openWindows.videos) {
            restoreWindow('videos');
            focusWindow('videos');
            if (ytInicial && openWindows.videos.tocar) openWindows.videos.tocar(ytInicial);
            return;
        }
        openWindow('videos', {
            title: 'Reprodutor de Mídia - Meus Vídeos', icon: ICON('videos'),
            left: 130, top: 16, width: 900, height: 640, minWidth: 520, minHeight: 420,
            bodyClass: 'sem-fundo player-wrap',
            bodyHtml: `
                <div class="player-cima">
                    <div class="player-tela-wrap">
                        <div class="player-tela campo95"><div class="player-video"></div></div>
                        <div class="player-controles">
                            <button type="button" class="btn95 player-btn" data-x="ant" title="Anterior"><img src="${ICON('rewind')}" alt="Anterior"></button>
                            <button type="button" class="btn95 player-btn" data-x="play" title="Reproduzir/Pausar"><img src="${ICON('play')}" alt="Reproduzir"></button>
                            <button type="button" class="btn95 player-btn" data-x="prox" title="Próximo"><img src="${ICON('forward')}" alt="Próximo"></button>
                            <div class="player-busca campo95"><div class="player-busca-cheio"></div></div>
                            <div class="player-tc campo95">00:00:00:00</div>
                        </div>
                        <div class="player-info"><b class="player-titulo"></b><span class="player-cat"></span><p class="player-texto"></p></div>
                    </div>
                    <div class="player-lista-wrap">
                        <div class="player-lista-titulo">Lista de reprodução</div>
                        <div class="player-lista campo95">
                            ${M.videos.map((v, i) => `
                                <button type="button" class="player-item" data-i="${i}">
                                    <img src="https://i.ytimg.com/vi/${v.yt}/default.jpg" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
                                    <span><b>${esc(v.titulo)}</b><small>${esc(v.categoria || '')}</small></span>
                                </button>`).join('')}
                        </div>
                    </div>
                </div>
                <div class="player-timeline">
                    <div class="timeline-topo"><span>Linha do tempo — <i class="timeline-nome"></i></span><span class="timeline-tc">00:00:00:00</span></div>
                    <div class="timeline-trilhas campo95">
                        <div class="timeline-regua"></div>
                        ${['V2', 'V1', 'A1', 'A2'].map((t) => `<div class="trilha"><span class="trilha-nome">${t}</span><div class="trilha-clipes" data-t="${t}"></div></div>`).join('')}
                        <div class="timeline-cabeca"></div>
                    </div>
                </div>`,
            onMount: (body) => iniciarPlayer(body, ytInicial),
        });
    }

    function iniciarPlayer(body, ytInicial) {
        const tela = $('.player-video', body);
        const btnPlay = $('[data-x="play"] img', body);
        const busca = $('.player-busca', body);
        const buscaCheio = $('.player-busca-cheio', body);
        const tc = $('.player-tc', body);
        const tcTimeline = $('.timeline-tc', body);
        const cabeca = $('.timeline-cabeca', body);
        let atual = 0;
        let player = null;
        let tocando = false;
        let usaApi = true;
        let loop = null;

        function montarTimeline(v) {
            const rnd = hashTexto(v.yt);
            $('.timeline-nome', body).textContent = v.titulo;
            $$('.trilha-clipes', body).forEach((tr) => {
                const tipo = tr.dataset.t;
                let x = tipo === 'V2' ? 10 + rnd() * 20 : 0;
                let html = '';
                while (x < 98) {
                    const w = tipo[0] === 'A' && tipo === 'A1' ? 100 - x : 6 + rnd() * (tipo === 'V2' ? 10 : 18);
                    const larg = Math.min(w, 100 - x);
                    const nome = tipo === 'A1' ? 'trilha_sonora.wav' : tipo === 'A2' ? 'sfx_' + Math.floor(rnd() * 90 + 10) + '.wav' : 'clip_' + Math.floor(rnd() * 900 + 100);
                    html += `<div class="clipe clipe-${tipo}" style="left:${x}%;width:${larg}%"><span>${nome}</span></div>`;
                    x += larg + (tipo === 'V1' ? 0 : tipo === 'A1' ? 100 : 4 + rnd() * 18);
                }
                tr.innerHTML = html;
            });
            const regua = $('.timeline-regua', body);
            regua.innerHTML = Array(10).fill(0).map((_, i) => `<span style="left:${i * 10}%">${String(i).padStart(2, '0')}:00</span>`).join('');
        }

        function mostrarCapa(v) {
            tela.innerHTML = `<button type="button" class="player-capa" aria-label="Reproduzir ${esc(v.titulo)}">
                <img src="https://i.ytimg.com/vi/${v.yt}/hqdefault.jpg" alt="" onerror="this.style.display='none'">
                <span class="player-capa-play">▶</span></button>`;
            $('.player-capa', tela).addEventListener('click', () => iniciarVideo(true));
        }

        function selecionar(i, tocar) {
            atual = (i + M.videos.length) % M.videos.length;
            const v = M.videos[atual];
            $$('.player-item', body).forEach((b) => b.classList.toggle('ativo', Number(b.dataset.i) === atual));
            $('.player-titulo', body).textContent = v.titulo;
            $('.player-cat', body).textContent = v.categoria ? ' — ' + v.categoria : '';
            $('.player-texto', body).textContent = v.texto || '';
            montarTimeline(v);
            pararLoop();
            if (player && player.destroy) { try { player.destroy(); } catch (e) { /* ok */ } }
            player = null;
            tocando = false;
            atualizarTempo(0, 0);
            btnPlay.src = ICON('play');
            if (tocar) iniciarVideo(true); else mostrarCapa(v);
        }

        function iniciarVideo() {
            const v = M.videos[atual];
            tela.innerHTML = '<div class="player-carregando">Carregando…</div>';
            if (!usaApi) return embedSimples(v);
            carregarYouTubeApi().then((YT) => {
                if (!openWindows.videos || M.videos[atual].yt !== v.yt) return;
                tela.innerHTML = '<div id="player-yt"></div>';
                player = new YT.Player('player-yt', {
                    videoId: v.yt,
                    playerVars: { autoplay: 1, rel: 0, playsinline: 1, modestbranding: 1 },
                    events: {
                        onStateChange: (ev) => {
                            tocando = ev.data === 1;
                            btnPlay.src = ICON(tocando ? 'pause' : 'play');
                            if (ev.data === 0) selecionar(atual + 1, true);
                        },
                    },
                });
                iniciarLoop();
            }).catch(() => { usaApi = false; embedSimples(v); });
        }

        function embedSimples(v) {
            tela.innerHTML = `<iframe src="https://www.youtube.com/embed/${v.yt}?autoplay=1&rel=0&playsinline=1" title="${esc(v.titulo)}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe>`;
            tocando = true;
            btnPlay.src = ICON('pause');
        }

        function atualizarTempo(t, d) {
            const p = d ? Math.min(1, t / d) : 0;
            buscaCheio.style.width = (p * 100) + '%';
            cabeca.style.left = `calc(34px + (100% - 34px) * ${p})`;
            tc.textContent = timecode(t);
            tcTimeline.textContent = timecode(t) + ' / ' + (d > 1 ? timecode(d) : '--:--:--:--');
        }
        function iniciarLoop() {
            pararLoop();
            loop = setInterval(() => {
                if (!player || !player.getCurrentTime) return;
                try { atualizarTempo(player.getCurrentTime(), player.getDuration()); } catch (e) { /* ok */ }
            }, 100);
        }
        function pararLoop() { clearInterval(loop); }

        $('[data-x="play"]', body).addEventListener('click', () => {
            if (!player) { if (!tocando) iniciarVideo(true); return; }
            try { if (tocando) player.pauseVideo(); else player.playVideo(); } catch (e) { /* ok */ }
        });
        $('[data-x="ant"]', body).addEventListener('click', () => selecionar(atual - 1, true));
        $('[data-x="prox"]', body).addEventListener('click', () => selecionar(atual + 1, true));
        busca.addEventListener('click', (e) => {
            if (!player || !player.seekTo) return;
            const r = busca.getBoundingClientRect();
            try { player.seekTo(((e.clientX - r.left) / r.width) * player.getDuration(), true); } catch (err) { /* ok */ }
        });
        $('.timeline-trilhas', body).addEventListener('click', (e) => {
            if (!player || !player.seekTo) return;
            const r = e.currentTarget.getBoundingClientRect();
            const p = (e.clientX - r.left - 34) / (r.width - 34);
            if (p >= 0) try { player.seekTo(p * player.getDuration(), true); } catch (err) { /* ok */ }
        });
        $$('.player-item', body).forEach((b) => b.addEventListener('click', () => selecionar(Number(b.dataset.i), true)));

        const ini = ytInicial ? Math.max(0, M.videos.findIndex((v) => v.yt === ytInicial)) : 0;
        selecionar(ini, !!ytInicial);
        openWindows.videos.tocar = (yt) => selecionar(Math.max(0, M.videos.findIndex((v) => v.yt === yt)), true);
        openWindows.videos.onClose = () => { pararLoop(); if (player && player.destroy) try { player.destroy(); } catch (e) { /* ok */ } };
    }

    // ======================================================================
    // Propriedades de Vídeo (papel de parede + proteção de tela)
    // ======================================================================
    const PAPEIS = [
        ['classico', 'Azul-petróleo (clássico)'],
        ['arcade', 'Fliperama (pixels)'],
        ['nuvens', 'Nuvens'],
        ['noite', 'Noite estrelada'],
        ['vaporwave', 'Pôr do sol retrô'],
        ['filme', 'Película de cinema'],
        ['xadrez', 'Xadrez'],
        ['tijolos', 'Tijolos'],
        ['preto', 'Nenhum (preto)'],
    ];
    const PROTECOES = [['nenhuma', '(Nenhuma)'], ['arcade', 'Fliperama (demonstração)'], ['estrelas', 'Campo de estrelas'], ['texto', 'Texto voador'], ['matrix', 'Chuva de código']];

    function aplicarPapel(id) {
        const root = $('#desktop-root');
        PAPEIS.forEach(([p]) => root.classList.remove('wp-' + p));
        root.classList.add('wp-' + id);
    }

    function abrirPropriedades(abaInicial) {
        const cfgProt = guardar.ler('protecao', { tipo: 'arcade', minutos: 2 });
        openWindow('propriedades', {
            title: 'Propriedades de Vídeo', icon: ICON('display'),
            center: true, width: 420, height: 470, resizable: false, dialogo: true,
            bodyClass: 'sem-fundo props-wrap',
            bodyHtml: `
                <div class="abas">
                    <button type="button" class="aba" data-aba="0">Papel de parede</button>
                    <button type="button" class="aba" data-aba="1">Proteção de tela</button>
                </div>
                <div class="aba-painel">
                    <div class="monitor-preview"><div class="monitor-tela"><div class="monitor-mini wallpaper"></div><canvas class="monitor-ss" hidden></canvas></div></div>
                    <div class="aba-conteudo" data-painel="0">
                        <label>Papel de parede:</label>
                        <div class="lista95 campo95" tabindex="0">
                            ${PAPEIS.map(([id, nome]) => `<div class="lista95-item" data-wp="${id}">${nome}</div>`).join('')}
                        </div>
                    </div>
                    <div class="aba-conteudo" data-painel="1" hidden>
                        <fieldset><legend>Proteção de tela</legend>
                            <select class="campo95 sel-prot">${PROTECOES.map(([id, nome]) => `<option value="${id}">${nome}</option>`).join('')}</select>
                            <button type="button" class="btn95" data-x="visualizar">Visualizar</button>
                            <div class="prot-espera">Aguardar: <input type="number" min="1" max="30" class="campo95 inp-min" value="${cfgProt.minutos}"> minutos</div>
                        </fieldset>
                    </div>
                </div>
                <div class="msgbox-botoes">
                    <button type="button" class="btn95" data-x="ok">OK</button>
                    <button type="button" class="btn95" data-x="cancelar">Cancelar</button>
                    <button type="button" class="btn95" data-x="aplicar">Aplicar</button>
                </div>`,
            onMount: (body) => {
                let papel = guardar.ler('papel', 'classico');
                const mini = $('.monitor-mini', body);
                const ssCanvas = $('.monitor-ss', body);
                const sel = $('.sel-prot', body);
                sel.value = cfgProt.tipo;
                let pararPreview = null;

                function marcarPapel() {
                    $$('.lista95-item', body).forEach((it) => it.classList.toggle('ativo', it.dataset.wp === papel));
                    PAPEIS.forEach(([p]) => mini.classList.remove('wp-' + p));
                    mini.classList.add('wp-' + papel);
                }
                function previewProt() {
                    if (pararPreview) pararPreview();
                    pararPreview = null;
                    const mostrarSS = abaAtual === 1 && sel.value !== 'nenhuma';
                    ssCanvas.hidden = !mostrarSS;
                    mini.hidden = mostrarSS;
                    if (mostrarSS) pararPreview = rodarProtecao(ssCanvas, sel.value, true);
                }
                let abaAtual = abaInicial || 0;
                function mostrarAba(n) {
                    abaAtual = n;
                    $$('.aba', body).forEach((a) => a.classList.toggle('ativa', Number(a.dataset.aba) === n));
                    $$('.aba-conteudo', body).forEach((p) => { p.hidden = Number(p.dataset.painel) !== n; });
                    previewProt();
                }
                $$('.aba', body).forEach((a) => a.addEventListener('click', () => mostrarAba(Number(a.dataset.aba))));
                $$('.lista95-item', body).forEach((it) => it.addEventListener('click', () => { papel = it.dataset.wp; marcarPapel(); }));
                sel.addEventListener('change', previewProt);
                $('[data-x="visualizar"]', body).addEventListener('click', () => { if (sel.value !== 'nenhuma') iniciarProtecao(sel.value); });

                function aplicar() {
                    guardar.salvar('papel', papel);
                    aplicarPapel(papel);
                    const minutos = Math.max(1, Math.min(30, parseInt($('.inp-min', body).value, 10) || 2));
                    guardar.salvar('protecao', { tipo: sel.value, minutos });
                }
                $('[data-x="aplicar"]', body).addEventListener('click', aplicar);
                $('[data-x="ok"]', body).addEventListener('click', () => { aplicar(); closeWindow('propriedades'); });
                $('[data-x="cancelar"]', body).addEventListener('click', () => closeWindow('propriedades'));
                openWindows.propriedades.onClose = () => { if (pararPreview) pararPreview(); };
                marcarPapel();
                mostrarAba(abaAtual);
            },
            onReopen: () => {},
        });
    }

    // ======================================================================
    // Proteção de tela
    // ======================================================================
    function rodarProtecao(canvas, tipo, mini) {
        const ctx = canvas.getContext('2d');
        canvas.width = canvas.clientWidth || 300;
        canvas.height = canvas.clientHeight || 200;
        if (tipo === 'matrix') return chuvaMatrix(canvas, '#0f0');
        if (tipo === 'arcade') return window.Arcade.attract(canvas, mini);
        let vivo = true;
        const W = canvas.width;
        const H = canvas.height;
        if (tipo === 'estrelas') {
            const est = Array(mini ? 80 : 300).fill(0).map(() => ({ x: Math.random() * 2 - 1, y: Math.random() * 2 - 1, z: Math.random() }));
            const quadro = () => {
                if (!vivo) return;
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, W, H);
                est.forEach((s) => {
                    s.z -= 0.008;
                    if (s.z <= 0.01) { s.x = Math.random() * 2 - 1; s.y = Math.random() * 2 - 1; s.z = 1; }
                    const px = W / 2 + (s.x / s.z) * W / 2;
                    const py = H / 2 + (s.y / s.z) * H / 2;
                    const t = (1 - s.z) * (mini ? 2 : 3.5);
                    ctx.fillStyle = `rgba(255,255,255,${1 - s.z})`;
                    ctx.fillRect(px, py, t, t);
                });
                requestAnimationFrame(quadro);
            };
            requestAnimationFrame(quadro);
        } else if (tipo === 'texto') {
            const texto = M.nome.toUpperCase();
            let x = 20;
            let y = 40;
            let vx = mini ? 1 : 2.2;
            let vy = mini ? 0.8 : 1.6;
            let hue = 0;
            const tamanho = mini ? 16 : 64;
            const quadro = () => {
                if (!vivo) return;
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, W, H);
                ctx.font = `bold ${tamanho}px "Times New Roman", serif`;
                const w = ctx.measureText(texto).width;
                x += vx;
                y += vy;
                if (x < 0 || x + w > W) { vx *= -1; hue += 60; }
                if (y - tamanho < 0 || y > H) { vy *= -1; hue += 60; }
                const g = ctx.createLinearGradient(x, y - tamanho, x, y);
                g.addColorStop(0, `hsl(${hue},100%,75%)`);
                g.addColorStop(1, `hsl(${hue + 40},100%,45%)`);
                ctx.fillStyle = g;
                ctx.fillText(texto, x, y);
                ctx.font = `${tamanho / 3}px monospace`;
                ctx.fillStyle = '#888';
                ctx.fillText((M.cargo || '').toUpperCase(), x, y + tamanho / 2.4);
                requestAnimationFrame(quadro);
            };
            requestAnimationFrame(quadro);
        }
        return () => { vivo = false; };
    }

    let protecaoAtiva = null;
    function iniciarProtecao(tipoForcado) {
        if (protecaoAtiva) return;
        const tipo = tipoForcado || guardar.ler('protecao', { tipo: 'arcade' }).tipo;
        if (tipo === 'nenhuma') return;
        const el = document.createElement('canvas');
        el.id = 'protecao-tela';
        document.body.appendChild(el);
        const parar = rodarProtecao(el, tipo, false);
        const inicioMs = Date.now();
        let mx = null;
        let my = null;
        const sair = (e) => {
            if (Date.now() - inicioMs < 500) return;
            if (e && e.type === 'mousemove') {
                if (mx === null) { mx = e.clientX; my = e.clientY; return; }
                if (Math.abs(e.clientX - mx) + Math.abs(e.clientY - my) < 10) return;
            }
            parar();
            el.remove();
            protecaoAtiva = null;
            ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'].forEach((t) => document.removeEventListener(t, sair, true));
            ultimaAtividade = Date.now();
        };
        ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'].forEach((t) => document.addEventListener(t, sair, true));
        protecaoAtiva = sair;
    }

    let ultimaAtividade = Date.now();
    function iniciarVigiaOcioso() {
        const mexeu = () => { ultimaAtividade = Date.now(); };
        ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel'].forEach((t) => document.addEventListener(t, mexeu, { passive: true, capture: true }));
        // As páginas do portfólio (mesmo site) também contam como atividade
        const observar = (ifr) => {
            ifr.addEventListener('load', () => {
                try {
                    ['mousemove', 'mousedown', 'keydown', 'touchstart', 'wheel', 'scroll'].forEach((t) => ifr.contentWindow.document.addEventListener(t, mexeu, { passive: true, capture: true }));
                } catch (e) { /* iframe de outro site */ }
            });
        };
        new MutationObserver((muts) => muts.forEach((m) => m.addedNodes.forEach((n) => {
            if (n.nodeType !== 1) return;
            if (n.tagName === 'IFRAME') observar(n);
            $$('iframe', n).forEach(observar);
        }))).observe(document.body, { childList: true, subtree: true });

        setInterval(() => {
            const cfg = guardar.ler('protecao', { tipo: 'arcade', minutos: 2 });
            if (cfg.tipo === 'nenhuma' || protecaoAtiva || $('#boot') || $('#shutdown-overlay') || $('#bsod')) return;
            // Não atrapalha quem está vendo vídeo ou jogando
            const assistindo = $$('.win').some((w) => w.style.display !== 'none' && (w.querySelector('iframe[src*="youtube"], .dos-root, #player-yt, iframe#player-yt')));
            if (assistindo) return;
            if (Date.now() - ultimaAtividade > cfg.minutos * 60000) iniciarProtecao();
        }, 5000);
    }

    // ======================================================================
    // Executar...
    // ======================================================================
    function abrirExecutar() {
        openWindow('executar', {
            title: 'Executar', icon: ICON('run'),
            left: 8, top: window.innerHeight - TASKBAR_H() - 190, width: 380, height: 180, resizable: false, dialogo: true,
            bodyClass: 'sem-fundo',
            bodyHtml: `
                <div class="executar">
                    <div class="msgbox-corpo">
                        <img src="${ICON('run')}" alt="" class="executar-icone">
                        <p>Digite o nome de um programa, pasta ou documento, e o MiguelOS o abrirá para você.</p>
                    </div>
                    <div class="executar-campo"><label for="exec-inp"><u>A</u>brir:</label><input id="exec-inp" class="campo95" list="exec-sugestoes" autocomplete="off" value="notepad">
                        <datalist id="exec-sugestoes"><option value="notepad"><option value="mspaint"><option value="command"><option value="winmine"><option value="mplayer"><option value="explorer"><option value="curriculo.pdf"><option value="doom"></datalist></div>
                    <div class="msgbox-botoes">
                        <button type="button" class="btn95" data-x="ok">OK</button>
                        <button type="button" class="btn95" data-x="cancelar">Cancelar</button>
                    </div>
                </div>`,
            onMount: (body) => {
                const inp = $('input', body);
                inp.focus();
                inp.select();
                const mapa = {
                    notepad: 'notepad-novo', 'notepad.exe': 'notepad-novo', mspaint: 'paint', paint: 'paint', command: 'msdos', cmd: 'msdos', 'command.com': 'msdos',
                    winmine: 'minas', minas: 'minas', mplayer: 'videos', videos: 'videos', explorer: 'meucomputador', 'curriculo.pdf': 'curriculo', curriculo: 'curriculo',
                    doom: 'doom', tetris: 'tetris', wolf3d: 'wolf3d', digger: 'digger', scrabble: 'scrabble', control: 'propriedades', sobre: 'sobre', contato: 'contato',
                    projetos: 'projetos', experiencia: 'experiencia', 'leia-me.txt': 'notepad', bsod: 'bsod',
                };
                const ok = () => {
                    const v = inp.value.trim().toLowerCase().replace(/\.exe$/, '');
                    closeWindow('executar');
                    if (mapa[v]) executarAcao(mapa[v]);
                    else if (v) msgBox({ titulo: inp.value, icone: 'erro', texto: `Não foi possível encontrar '${inp.value}'. Verifique se o nome foi digitado corretamente e tente novamente.` });
                };
                $('[data-x="ok"]', body).addEventListener('click', ok);
                $('[data-x="cancelar"]', body).addEventListener('click', () => closeWindow('executar'));
                inp.addEventListener('keydown', (e) => { if (e.key === 'Enter') ok(); if (e.key === 'Escape') closeWindow('executar'); });
            },
        });
    }

    // ======================================================================
    // Ajuda
    // ======================================================================
    function abrirAjuda() {
        const topicos = [
            ['Primeiros passos', `<p>Este é o portfólio do <b>${esc(M.nome)}</b>, em forma de um computador dos anos 90.</p>
                <p>• <b>Dois cliques</b> num ícone abrem o programa (no celular, um toque).<br>
                • Arraste as janelas pela barra azul. Dois cliques nela maximizam.<br>
                • Puxe o canto inferior direito para redimensionar.<br>
                • A barra de tarefas mostra tudo que está aberto.</p>`],
            ['Onde está o portfólio?', `<p>• <a href="#" data-a="sobre">Sobre Mim</a> — quem eu sou<br>
                • <a href="#" data-a="experiencia">Experiência</a> — onde trabalhei<br>
                • <a href="#" data-a="videos">Meus Vídeos</a> — meus trabalhos<br>
                • <a href="#" data-a="curriculo">Currículo.pdf</a><br>
                • <a href="#" data-a="contato">Contato</a> — fale comigo!</p>`],
            ['Segredos 🤫', `<p>• No <a href="#" data-a="msdos">Prompt do MS-DOS</a>, experimente: <code>render</code>, <code>matrix</code>, <code>hack</code>, <code>ping</code>, <code>cafe</code>, <code>tardis</code>, <code>insertcoin</code>, <code>rolinho</code>, <code>color 0a</code>.<br>
                • Clique com o botão direito na área de trabalho.<br>
                • Um rolinho de filme passeia pela tela às vezes. Clique nele para ganhar fichas para o <a href="#" data-a="fliperama">Fliperama</a>!<br>
                • Deixe o computador parado por uns minutos...<br>
                • ↑ ↑ ↓ ↓ ← → ← → B A<br>
                • Tente desligar o computador. Várias vezes.<br>
                • Tem uma pasta em C:\\MIGUEL que é... maior por dentro.<br>
                • Não abra o NAO_ABRA.EXE. Sério.<br>
                • Lá fora, na sala 3D, quase tudo é clicável: claquete, câmera, luzes, fitas, o fez...</p>`],
            ['Sobre o MiguelOS', `<p><b>MiguelOS 95</b> — Versão 4.00.2026<br>Edição Produtor Audiovisual</p>
                <p>Inspirado no Windows 95. Nenhum computador foi desligado durante a produção deste site.</p>`],
        ];
        openWindow('ajuda', {
            title: 'Ajuda do MiguelOS', icon: ICON('help'),
            center: true, width: 560, height: 380,
            bodyClass: 'sem-fundo ajuda-wrap',
            bodyHtml: `
                <div class="ajuda-topicos campo95">${topicos.map(([t], i) => `<button type="button" class="ajuda-topico" data-i="${i}">📖 ${t}</button>`).join('')}</div>
                <div class="ajuda-texto campo95"></div>`,
            onMount: (body) => {
                const mostrar = (i) => {
                    $$('.ajuda-topico', body).forEach((b) => b.classList.toggle('ativo', Number(b.dataset.i) === i));
                    $('.ajuda-texto', body).innerHTML = `<h3>${topicos[i][0]}</h3>${topicos[i][1]}`;
                };
                $$('.ajuda-topico', body).forEach((b) => b.addEventListener('click', () => mostrar(Number(b.dataset.i))));
                $('.ajuda-texto', body).addEventListener('click', (e) => {
                    const a = e.target.closest('[data-a]');
                    if (a) { e.preventDefault(); executarAcao(a.dataset.a); }
                });
                mostrar(0);
            },
        });
    }

    // ======================================================================
    // Tela azul e código secreto
    // ======================================================================
    function telaAzul() {
        if ($('#bsod')) return;
        const el = document.createElement('div');
        el.id = 'bsod';
        el.innerHTML = `
            <div class="bsod-caixa">
                <div class="bsod-titulo">MiguelOS</div>
                <p>Ocorreu uma exceção fatal 0E em 0028:C0DE2026 no VXD CRIATIVIDADE(01) + 00001995. O aplicativo atual será finalizado.</p>
                <p>* Motivo provável: excesso de talento por pixel.<br>
                * Pressione qualquer tecla para voltar ao portfólio.<br>
                * Pressione CTRL+ALT+DEL para... não, por favor, não faça isso.</p>
                <p class="bsod-centro">Pressione qualquer tecla para continuar <span class="bsod-cursor">_</span></p>
            </div>`;
        document.body.appendChild(el);
        const sair = () => {
            el.remove();
            document.removeEventListener('keydown', sair, true);
        };
        setTimeout(() => {
            document.addEventListener('keydown', sair, true);
            el.addEventListener('click', sair);
            el.addEventListener('touchend', sair);
        }, 200);
    }

    function iniciarKonami() {
        const seq = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
        let pos = 0;
        document.addEventListener('keydown', (e) => {
            const k = (e.key || '').toLowerCase();
            pos = k === seq[pos] ? pos + 1 : (k === seq[0] ? 1 : 0);
            if (pos === seq.length) {
                pos = 0;
                document.body.classList.add('modo-festa');
                msgBox({
                    titulo: 'Código secreto!', icone: 'info', largura: 400,
                    texto: '🎉 Modo festa ativado! Você é das antigas, hein? Clique em OK para voltar ao normal.',
                    aoClicar: () => document.body.classList.remove('modo-festa'),
                });
            }
        });
    }

    // ======================================================================
    // Início
    // ======================================================================
    function iniciar() {
        aplicarPapel(guardar.ler('papel', 'classico'));
        iniciarDesktop();
        iniciarVigiaOcioso();
        iniciarKonami();

        const pularBoot = new URLSearchParams(location.search).has('semboot');
        const depoisDoBoot = () => {
            somStartup.play().catch(() => {});
            abrirShowcase();
            setTimeout(balaoBoasVindas, 1200);
        };
        if (pularBoot) depoisDoBoot(); else mostrarBoot(depoisDoBoot);
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();
})();

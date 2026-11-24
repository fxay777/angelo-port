// ============================================================================
// MiguelOS 95 — easter eggs e piadas
//   • recebe pedidos da sala 3D (cartaz, fitas VHS, Rolinho...) via postMessage
//   • NAO_ABRA.EXE (os ícones despencam)
//   • ORCAMENTO.EXE (a resposta é sempre... depende)
//   • Rolinho assistente (aparece uma vez por visita)
//   • relógio que não gosta de ser cutucado, piscada, desculpas de editor
// ============================================================================
(function () {
    'use strict';

    const $ = (s, el) => (el || document).querySelector(s);
    const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
    const M = window.MIGUEL || {};
    const sorteia = (lista) => lista[Math.floor(Math.random() * lista.length)];

    const DESCULPAS = [
        'O render travou em 99%.',
        'O cliente mandou o material em 240p.',
        'O Premiere fechou sozinho. De novo.',
        'Estava esperando a aprovação do logo maior.',
        'O HD externo resolveu tirar férias.',
        'A trilha que o cliente escolheu tem direitos autorais.',
        'Era pra ser só um ajustezinho rápido...',
        'O proxy não gerou.',
        'Faltou café. Isso afeta a correção de cor.',
        'O computador estava atualizando. Por 3 horas.',
    ];
    const CLIENTES = [
        'Dá pra deixar mais "uau"?',
        'Coloca uma música, mas sem música.',
        'Pode aumentar o logo? Mais. Mais um pouco.',
        'Gostei, mas e se fosse totalmente diferente?',
        'Faz um vídeo viral, por favor.',
        'Consegue dar um zoom e melhorar a foto, tipo nos filmes?',
        'É rapidinho, só mudar tudo.',
        'Meu sobrinho faz isso de graça no celular.',
        'Ficou ótimo! Agora volta pra primeira versão.',
        'Pode entregar ontem?',
    ];

    // ------------------------------------------------------------- piscada
    function piscar() {
        const p = document.createElement('div');
        p.className = 'piscada-tela';
        document.body.appendChild(p);
        setTimeout(() => p.remove(), 160);
    }

    // ------------------------------------------------ notificação na bandeja
    function avisar(titulo, texto) {
        const b = document.createElement('div');
        b.className = 'aviso-bandeja';
        b.innerHTML = `<b></b><p></p>`;
        b.querySelector('b').textContent = titulo;
        b.querySelector('p').textContent = texto;
        document.body.appendChild(b);
        setTimeout(() => { b.classList.add('saindo'); setTimeout(() => b.remove(), 400); }, 4200);
    }

    // =========================================== pedidos vindos da sala 3D
    window.addEventListener('message', (e) => {
        if (e.source !== window.parent || window.parent === window) return;
        const d = e.data;
        if (!d || d.fonte !== 'sala3d') return;
        switch (d.acao) {
        case 'videos':
            window.abrirVideosEm && window.abrirVideosEm();
            break;
        case 'video':
            if (typeof d.yt === 'string' && /^[\w-]{6,20}$/.test(d.yt)) window.abrirVideosEm && window.abrirVideosEm(d.yt);
            break;
        case 'ficha':
            if (window.Arcade) { window.Arcade.mudarFichas(1); window.Arcade.SONS.ficha(); }
            avisar('🪙 +1 ficha!', 'Presente do Rolinho lá da sala. Use no Fliperama.');
            break;
        case 'maiorpordentro':
            window.executarAcao && window.executarAcao('maiorpordentro');
            break;
        case 'sonico':
            pifar();
            break;
        default:
            break;
        }
    });

    // =================================== interferência sônica: glitch + Oopsie
    let pifando = false;
    function chiado(duracao) {
        try {
            const C = window.AudioContext || window.webkitAudioContext;
            const a = window.__mosAudio || (window.__mosAudio = new C());
            const n = Math.floor(a.sampleRate * duracao);
            const buf = a.createBuffer(1, n, a.sampleRate);
            const d = buf.getChannelData(0);
            for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * (Math.random() < 0.02 ? 1 : 0.25);
            const src = a.createBufferSource();
            src.buffer = buf;
            const g = a.createGain();
            g.gain.value = window.siteMutado ? 0 : 0.12;
            src.connect(g).connect(a.destination);
            src.start();
        } catch (e) { /* sem som */ }
    }
    function pifar() {
        if (pifando) return;
        pifando = true;
        const camada = document.createElement('div');
        camada.id = 'glitch';
        let faixas = '';
        for (let i = 0; i < 9; i++) faixas += '<i></i>';
        camada.innerHTML = faixas + '<canvas></canvas>';
        document.body.appendChild(camada);
        document.body.classList.add('glitchando');
        chiado(1.9);
        const c = camada.querySelector('canvas');
        c.width = 320;
        c.height = 256;
        const ctx = c.getContext('2d');
        const barras = Array.from(camada.querySelectorAll('i'));
        const t0 = performance.now();
        (function quadro() {
            const t = performance.now() - t0;
            const img = ctx.createImageData(c.width, c.height);
            for (let i = 0; i < img.data.length; i += 4) {
                const v = Math.random() * 255;
                img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v; img.data[i + 3] = Math.random() < 0.3 ? 90 : 0;
            }
            ctx.putImageData(img, 0, 0);
            barras.forEach((b) => {
                b.style.top = (Math.random() * 100) + '%';
                b.style.height = (2 + Math.random() * 9) + '%';
                b.style.transform = `translateX(${(Math.random() - 0.5) * 120}px)`;
                b.style.opacity = Math.random() < 0.7 ? 1 : 0;
            });
            const raiz = document.getElementById('desktop-root');
            raiz.style.transform = `translate(${(Math.random() - 0.5) * 18}px, ${(Math.random() - 0.5) * 10}px) skewX(${(Math.random() - 0.5) * 6}deg)`;
            raiz.style.filter = `hue-rotate(${Math.random() * 360}deg) contrast(${1 + Math.random()}) saturate(${1 + Math.random() * 3})`;
            if (t < 1900) requestAnimationFrame(quadro);
            else oopsie(camada, raiz);
        })();
    }
    function oopsie(camada, raiz) {
        camada.remove();
        document.body.classList.remove('glitchando');
        raiz.style.transform = '';
        raiz.style.filter = '';
        const tela = document.createElement('div');
        tela.id = 'oopsie';
        tela.innerHTML = `
            <div class="oopsie-caixa">
                <div class="oopsie-titulo">OOPSIE! :(</div>
                <p>Uma interferência sônica desconhecida bagunçou os circuitos do MiguelOS.</p>
                <p class="oopsie-dim">Código do erro: 0x50N1C0 · FREQUENCIA_ALTA_DEMAIS</p>
                <p>Acho que temos que resetar<span class="oopsie-pontos"></span></p>
                <div class="oopsie-barra"><b></b></div>
            </div>`;
        document.body.appendChild(tela);
        const pontos = tela.querySelector('.oopsie-pontos');
        let n = 0;
        const timer = setInterval(() => { pontos.textContent = '.'.repeat(1 + (n++ % 3)); }, 380);
        if (window.Arcade) window.Arcade.SONS.morrer();
        setTimeout(() => {
            clearInterval(timer);
            tela.remove();
            pifando = false;
            if (window.mostrarBoot) window.mostrarBoot();
        }, 3600);
    }

    // =================================================== NAO_ABRA.EXE
    let pegadinhaRodando = false;
    function naoAbra() {
        if (pegadinhaRodando) return;
        msgBox({
            titulo: 'NAO_ABRA.EXE', icone: 'aviso', botoes: ['Abrir mesmo assim', 'Melhor não'], largura: 420,
            texto: 'O nome do arquivo é literalmente "NÃO ABRA". Tem certeza que quer continuar?',
            aoClicar: (i) => {
                if (i !== 0) { msgBox({ titulo: 'NAO_ABRA.EXE', icone: 'info', texto: 'Sábia decisão. 🧐' }); return; }
                pegadinha();
            },
        });
    }

    function pegadinha() {
        pegadinhaRodando = true;
        document.body.classList.add('tremendo');
        if (window.Arcade) window.Arcade.SONS.morrer();
        const icones = $$('.desktop-icon');
        const chao = window.innerHeight - TASKBAR_H() - 8;
        const estado = icones.map((el) => {
            const r = el.getBoundingClientRect();
            return { el, y: 0, vy: -Math.random() * 6, x: 0, vx: (Math.random() - 0.5) * 4, rot: 0, vr: (Math.random() - 0.5) * 12, base: r.bottom };
        });
        let quadros = 0;
        function cair() {
            quadros++;
            estado.forEach((s) => {
                s.vy += 0.9;
                s.y += s.vy;
                s.x += s.vx;
                s.rot += s.vr;
                if (s.base + s.y > chao) { s.y = chao - s.base; s.vy *= -0.45; s.vx *= 0.8; s.vr *= 0.7; }
                s.el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.rot}deg)`;
            });
            if (quadros < 150) requestAnimationFrame(cair);
            else depois();
        }
        setTimeout(() => requestAnimationFrame(cair), 400);

        function depois() {
            document.body.classList.remove('tremendo');
            msgBox({
                titulo: 'Antivírus MiguelOS', icone: 'erro', largura: 430, altura: 190,
                texto: 'VÍRUS DETECTADO: ROLINHO.EXE derrubou todos os seus ícones! 🦠\n\n...brincadeira. Foi só um susto. Clique em OK que eu arrumo tudo.',
                aoClicar: () => {
                    estado.forEach((s) => {
                        s.el.style.transition = 'transform 0.6s cubic-bezier(.2,1.4,.4,1)';
                        s.el.style.transform = '';
                    });
                    setTimeout(() => { estado.forEach((s) => { s.el.style.transition = ''; }); pegadinhaRodando = false; }, 700);
                },
            });
        }
    }

    // =================================================== ORCAMENTO.EXE
    function abrirOrcamento() {
        openWindow('orcamento', {
            title: 'Orçamento.exe — Calculadora de Vídeo', icon: '/static/icons/orcamento.png',
            center: true, width: 430, height: 420, resizable: false,
            bodyClass: 'sem-fundo orcamento-wrap',
            bodyHtml: `
                <div class="orcamento">
                    <p class="orc-intro">Preencha os dados do seu projeto e descubra quanto custa o vídeo dos seus sonhos.</p>
                    <label>Tipo de vídeo
                        <select class="campo95" data-c="tipo">
                            <option>Institucional</option><option>Reels / TikTok</option><option>Casamento</option>
                            <option>Documentário</option><option>Clipe musical</option><option>Vídeo viral (garantido)</option>
                        </select></label>
                    <label>Duração final (minutos) <input class="campo95" type="number" min="1" max="999" value="3" data-c="dur"></label>
                    <label>Prazo (dias) <input class="campo95" type="number" min="0" max="365" value="7" data-c="prazo"></label>
                    <label>Rodadas de revisão: <b data-c="revtxt">2</b>
                        <input type="range" min="0" max="20" value="2" data-c="rev"></label>
                    <div class="msgbox-botoes"><button type="button" class="btn95" data-c="calc">Calcular</button></div>
                    <div class="orc-resultado campo95" data-c="res"></div>
                </div>`,
            onMount: (body) => {
                const v = (k) => $(`[data-c="${k}"]`, body);
                v('rev').addEventListener('input', () => { v('revtxt').textContent = v('rev').value; });
                v('calc').addEventListener('click', () => {
                    const res = v('res');
                    const passos = ['Calculando horas de edição...', 'Estimando cafés necessários...', 'Consultando o cliente interior...', 'Aplicando taxa de "é rapidinho"...'];
                    let i = 0;
                    v('calc').disabled = true;
                    res.innerHTML = '';
                    const t = setInterval(() => {
                        res.textContent = passos[i++];
                        if (i > passos.length) {
                            clearInterval(t);
                            v('calc').disabled = false;
                            const rev = parseInt(v('rev').value, 10);
                            const prazo = parseInt(v('prazo').value, 10);
                            let extra = '';
                            if (prazo === 0) extra = 'Prazo de 0 dias? Isso é viagem no tempo, não edição. ⏳';
                            else if (rev >= 10) extra = `Com ${rev} rodadas de revisão, o "depende" vira "depende MUITO".`;
                            else if (v('tipo').value.indexOf('viral') >= 0) extra = 'Viral garantido? Isso nem o algoritmo sabe. 😅';
                            res.innerHTML = `<div class="orc-depende">DEPENDE.</div>
                                <p>${extra ? extra + '<br>' : ''}Todo editor responde isso. 😅 Para um orçamento de verdade, me chama:</p>
                                <p><a href="#" data-c="contato">${M.email || 'Contato'}</a></p>`;
                            v('contato').addEventListener('click', (e) => { e.preventDefault(); executarAcao('contato'); });
                        }
                    }, 550);
                });
            },
        });
    }

    // ============================================= Rolinho assistente
    function assistente() {
        try { if (sessionStorage.getItem('mos_assistente')) return; sessionStorage.setItem('mos_assistente', '1'); } catch (e) { /* ok */ }
        if ($('#boot') || $('#protecao-tela') || !window.Arcade) return;
        const el = document.createElement('div');
        el.id = 'assistente';
        el.innerHTML = `
            <div class="assist-balao">
                <p>Parece que você está explorando um portfólio. Quer ajuda?</p>
                <button type="button" class="btn95" data-a="videos">🎬 Me mostra os vídeos</button>
                <button type="button" class="btn95" data-a="fliperama">🕹️ Quero jogar</button>
                <button type="button" class="btn95" data-a="nao">Não, obrigado</button>
            </div>
            <img src="${window.Arcade.spriteURL('rolinhoA', 4)}" alt="Rolinho, o assistente">`;
        document.body.appendChild(el);
        const fechar = () => { el.classList.add('saindo'); setTimeout(() => el.remove(), 400); };
        $$('[data-a]', el).forEach((b) => b.addEventListener('click', () => {
            const a = b.dataset.a;
            if (a === 'nao') {
                $('.assist-balao p', el).textContent = 'Ok! Vou ficar rolando por aí. Se me vir passando, clica em mim! 😉';
                $$('button', el).forEach((x) => x.remove());
                setTimeout(fechar, 2600);
                return;
            }
            executarAcao(a);
            fechar();
        }));
    }

    // ============================================= relógio cutucado
    let cutucadas = 0;
    let zerar = null;
    function relogioCutucado() {
        cutucadas++;
        clearTimeout(zerar);
        zerar = setTimeout(() => { cutucadas = 0; }, 2500);
        if (cutucadas === 7) {
            cutucadas = 0;
            msgBox({ titulo: 'Relógio', icone: 'aviso', texto: 'Para de mexer no tempo! ⏳ Isso é coisa de Senhor do Tempo.' });
        }
    }

    function iniciar() {
        const rel = $('#clock');
        if (rel) rel.addEventListener('click', relogioCutucado);
        setTimeout(assistente, 75000);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();

    window.Extras = {
        naoAbra, abrirOrcamento, piscar, assistente, pifar,
        desculpa: () => sorteia(DESCULPAS),
        cliente: () => sorteia(CLIENTES),
    };
})();

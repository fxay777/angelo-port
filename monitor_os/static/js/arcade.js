// ============================================================================
// MiguelOS 95 — Fliperama
// Mascote "Rolinho" (pixel art original), som 8-bit, fichas, o jogo
// "Cabo de Vídeo" e o modo demonstração (proteção de tela de fliperama).
// ============================================================================
(function () {
    'use strict';

    const FONTE = '"Press Start 2P", "Courier New", monospace';
    const $ = (sel, el) => (el || document).querySelector(sel);

    // ---------------------------------------------------------------- sprites
    const PALETA = {
        K: '#000000', G: '#8a8a8a', L: '#c8c8c8', D: '#282828', W: '#ffffff', R: '#d02020',
        Y: '#ffd200', O: '#c88a00', B: '#2a2a2a', S: '#5a5a5a', T: '#ffe680',
    };
    const CORPO_ROLINHO = [
        '....KKKKKKKK....',
        '..KKGGGGGGGGKK..',
        '.KGGGGKKKKGGGGK.',
        '.KGGGKDDDDKGGGK.',
        'KGLGGGKKKKGGGGGK',
        'KGKKKGGGGGGKKKGK',
        'KKDDDKWWGWWKDDDK',
        'KKDDDKWKGWKKDDDK',
        'KGKKKGGGGGGKKKGK',
        'KGGGGGGRRGGGGGGK',
        '.KGGGKDDDDKGGGK.',
        '.KGGGGKKKKGGGGK.',
        '..KKGGGGGGGGKK..',
        '....KKKKKKKK....',
    ];
    const SPR = {
        rolinhoA: CORPO_ROLINHO.concat(['...KK......KK...', '..RRR......RRR..']),
        rolinhoB: CORPO_ROLINHO.concat(['....KK....KK....', '...RRR....RRR...']),
        rolo: [
            '..KKKK..',
            '.KGGGGK.',
            'KGKGGKGK',
            'KGGDDGGK',
            'KGGDDGGK',
            'KGKGGKGK',
            '.KGGGGK.',
            '..KKKK..',
        ],
        roloOuro: [
            '..KKKK..',
            '.KYYYYK.',
            'KYKTTKYK',
            'KYTOOTYK',
            'KYTOOTYK',
            'KYKTTKYK',
            '.KYYYYK.',
            '..KKKK..',
        ],
        // Plugue RCA amarelo (cabeça do cabo), virado para a direita
        plugue: [
            '........',
            'KKKKK...',
            'KYYYYKKK',
            'KYTYYKSL',
            'KYYYYKSL',
            'KYOOYKKK',
            'KKKKK...',
            '........',
        ],
    };

    // A fonte pixelada não desenha bem letras acentuadas — fliperama de verdade também não tinha acento :)
    const semAcento = (t) => String(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const cacheSprites = {};
    function spriteCanvas(nome, escala) {
        const chave = nome + '@' + escala;
        if (cacheSprites[chave]) return cacheSprites[chave];
        const linhas = SPR[nome];
        const c = document.createElement('canvas');
        c.width = linhas[0].length * escala;
        c.height = linhas.length * escala;
        const ctx = c.getContext('2d');
        linhas.forEach((linha, y) => {
            for (let x = 0; x < linha.length; x++) {
                const ch = linha[x];
                if (ch === '.') continue;
                ctx.fillStyle = PALETA[ch];
                ctx.fillRect(x * escala, y * escala, escala, escala);
            }
        });
        cacheSprites[chave] = c;
        return c;
    }
    const spriteURL = (nome, escala) => spriteCanvas(nome, escala).toDataURL();

    // ------------------------------------------------------------- som 8-bit
    let audioCtx = null;
    function bip(notas, tipo, volume) {
        if (window.siteMutado) return;
        try {
            audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') audioCtx.resume();
            let t = audioCtx.currentTime;
            notas.forEach(([freq, dur]) => {
                if (freq) {
                    const o = audioCtx.createOscillator();
                    const g = audioCtx.createGain();
                    o.type = tipo || 'square';
                    o.frequency.setValueAtTime(freq, t);
                    g.gain.setValueAtTime(volume || 0.06, t);
                    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
                    o.connect(g).connect(audioCtx.destination);
                    o.start(t);
                    o.stop(t + dur);
                }
                t += dur;
            });
        } catch (e) { /* sem áudio */ }
    }
    const SONS = {
        ficha: () => bip([[988, 0.07], [1319, 0.25]]),
        comer: () => bip([[660, 0.04], [880, 0.05]], 'square', 0.05),
        ouro: () => bip([[523, 0.06], [659, 0.06], [784, 0.06], [1047, 0.15]]),
        morrer: () => bip([[440, 0.1], [370, 0.1], [311, 0.1], [262, 0.3]], 'triangle', 0.12),
        start: () => bip([[392, 0.08], [523, 0.08], [659, 0.08], [784, 0.08], [0, 0.04], [659, 0.08], [784, 0.25]]),
        recorde: () => bip([[523, 0.1], [523, 0.1], [523, 0.1], [698, 0.3], [880, 0.4]]),
        tecla: () => bip([[1200, 0.03]], 'square', 0.03),
    };

    // ------------------------------------------------------------------ fichas
    const ler = (k, p) => { try { const v = localStorage.getItem('mos_' + k); return v === null ? p : JSON.parse(v); } catch (e) { return p; } };
    const salvar = (k, v) => { try { localStorage.setItem('mos_' + k, JSON.stringify(v)); } catch (e) { /* ok */ } };

    let fichas = ler('fichas', 3);
    function atualizarFichas() {
        document.querySelectorAll('.contador-fichas').forEach((el) => { el.textContent = fichas; });
    }
    function mudarFichas(n) {
        fichas = Math.max(0, Math.min(99, fichas + n));
        salvar('fichas', fichas);
        atualizarFichas();
    }

    function criarContadorBandeja() {
        const relogio = $('#clock-wrapper');
        if (!relogio || $('#bandeja-fichas')) return;
        const el = document.createElement('span');
        el.id = 'bandeja-fichas';
        el.title = 'Fichas de fliperama — clique no Rolinho quando ele passar para ganhar mais!';
        el.innerHTML = '<img src="/static/icons/ficha.png" alt="Fichas"><b class="contador-fichas"></b>';
        el.addEventListener('click', () => window.executarAcao && window.executarAcao('fliperama'));
        relogio.insertBefore(el, relogio.firstChild);
        atualizarFichas();
    }

    function textoFlutuante(x, y, texto) {
        const t = document.createElement('div');
        t.className = 'texto-8bit';
        t.textContent = texto;
        t.style.left = x + 'px';
        t.style.top = y + 'px';
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 1100);
    }

    // ------------------------------------------------------- mascote Rolinho
    let mascoteAndando = false;
    function passeioDoRolinho(forcar) {
        if (mascoteAndando) return;
        if (!forcar && ($('#boot') || $('#protecao-tela') || $('#bsod') || $('#shutdown-overlay'))) return;
        mascoteAndando = true;

        const el = document.createElement('button');
        el.type = 'button';
        el.id = 'mascote';
        el.title = 'Rolinho! Clique para ganhar uma ficha';
        el.setAttribute('aria-label', 'Rolinho, o mascote. Clique para ganhar uma ficha.');
        const imgA = spriteURL('rolinhoA', 3);
        const imgB = spriteURL('rolinhoB', 3);
        el.innerHTML = `<img src="${imgA}" alt="">`;
        const img = el.querySelector('img');
        document.body.appendChild(el);

        const paraDireita = Math.random() > 0.5;
        const largura = window.innerWidth;
        let x = paraDireita ? -60 : largura + 10;
        let vel = (paraDireita ? 1 : -1) * (1.2 + Math.random() * 0.6);
        let pulo = 0;
        let quadro = 0;
        let pego = false;
        let tempoQuadro = 0;
        el.style.transform = paraDireita ? '' : 'scaleX(-1)';

        el.addEventListener('click', (e) => {
            if (pego) return;
            pego = true;
            mudarFichas(1);
            SONS.ficha();
            const r = el.getBoundingClientRect();
            textoFlutuante(r.left + r.width / 2, r.top - 10, '+1 FICHA');
            pulo = 1;
            vel *= 3.2; // sai correndo, envergonhado
            e.stopPropagation();
        });

        let ultimo = performance.now();
        function passo(agora) {
            const dt = Math.min(50, agora - ultimo) / 16.7;
            ultimo = agora;
            x += vel * dt;
            tempoQuadro += dt;
            if (tempoQuadro > 7) { tempoQuadro = 0; quadro ^= 1; img.src = quadro ? imgB : imgA; }
            if (pulo > 0) { pulo += 0.09 * dt; if (pulo > Math.PI) pulo = 0; }
            // pulinho aleatório
            if (!pulo && Math.random() < 0.004) pulo = 0.01;
            const y = pulo ? Math.sin(pulo) * 26 : 0;
            el.style.left = x + 'px';
            el.style.bottom = (TASKBAR_H() - 2 + y) + 'px';
            if ((vel > 0 && x > largura + 20) || (vel < 0 && x < -80)) {
                el.remove();
                mascoteAndando = false;
                return;
            }
            requestAnimationFrame(passo);
        }
        requestAnimationFrame(passo);
    }

    function agendarRolinho(primeiro) {
        const espera = primeiro ? 16000 : 35000 + Math.random() * 40000;
        setTimeout(() => { passeioDoRolinho(); agendarRolinho(false); }, espera);
    }

    // =================================================================== JOGO
    const N = 20;          // grade 20x20
    const CEL = 16;        // pixels por célula
    const HUD = 24;
    const W = N * CEL;
    const H = N * CEL + HUD;
    const RECORDES_PADRAO = [['MIG', 2026], ['ROL', 1500], ['CAF', 1000], ['PIX', 500], ['VHS', 250]];

    function abrirFliperama() {
        openWindow('fliperama', {
            title: 'Miguel Arcade — Cabo de Vídeo', icon: '/static/icons/arcade.png',
            left: 300, top: 14, width: 430, height: 680, minWidth: 340, minHeight: 520,
            bodyClass: 'arcade-wrap',
            bodyHtml: `
                <div class="arcade">
                    <div class="arcade-letreiro"><span>★ MIGUEL ARCADE ★</span></div>
                    <div class="arcade-moldura">
                        <div class="arcade-tela">
                            <canvas width="${W}" height="${H}"></canvas>
                            <div class="crt-linhas"></div>
                        </div>
                    </div>
                    <div class="arcade-painel">
                        <div class="dpad">
                            <button type="button" data-k="cima" aria-label="Cima">▲</button>
                            <button type="button" data-k="esq" aria-label="Esquerda">◀</button>
                            <button type="button" data-k="dir" aria-label="Direita">▶</button>
                            <button type="button" data-k="baixo" aria-label="Baixo">▼</button>
                        </div>
                        <div class="arcade-botoes">
                            <button type="button" class="bt-arcade bt-vermelho" data-k="start">START</button>
                            <button type="button" class="bt-arcade bt-amarelo" data-k="ficha">FICHA</button>
                        </div>
                        <div class="arcade-moedeiro" title="Fichas disponíveis">
                            <img src="/static/icons/ficha.png" alt=""> <b class="contador-fichas"></b>
                        </div>
                    </div>
                </div>`,
            onMount: (body) => iniciarJogo(body),
        });
    }

    function iniciarJogo(body) {
        const canvas = $('canvas', body);
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = false;
        atualizarFichas();

        let estado = 'titulo';
        let cobra, dir, proxDir, comida, ouro, pontos, vidas, velocidade, acumulado, ultimo, quadroTitulo = 0;
        let piscar = 0;
        let recordes = ler('recordes_arcade', RECORDES_PADRAO);
        let iniciais = ['A', 'A', 'A'];
        let posInicial = 0;
        let vivo = true;
        let mensagem = '';
        let msgAte = 0;
        vidas = 1;

        function aviso(txt) { mensagem = txt; msgAte = performance.now() + 1600; }

        function novaComida() {
            let p;
            do { p = { x: Math.floor(Math.random() * N), y: Math.floor(Math.random() * N) }; }
            while (cobra.some((s) => s.x === p.x && s.y === p.y) || (ouro && ouro.x === p.x && ouro.y === p.y));
            return p;
        }

        function reiniciarCobra() {
            cobra = [{ x: 6, y: 10 }, { x: 5, y: 10 }, { x: 4, y: 10 }];
            dir = { x: 1, y: 0 };
            proxDir = dir;
            comida = novaComida();
            ouro = null;
            acumulado = 0;
        }

        function comecar() {
            pontos = 0;
            velocidade = 150;
            reiniciarCobra();
            estado = 'jogando';
            SONS.start();
        }

        function morrer() {
            SONS.morrer();
            vidas--;
            if (vidas > 0) {
                aviso('-1 VIDA!');
                reiniciarCobra();
                estado = 'pronto';
                setTimeout(() => { if (estado === 'pronto') estado = 'jogando'; }, 900);
                return;
            }
            vidas = 1;
            const entra = recordes.length < 5 || pontos > recordes[recordes.length - 1][1];
            if (entra && pontos > 0) {
                estado = 'iniciais';
                iniciais = ['A', 'A', 'A'];
                posInicial = 0;
                SONS.recorde();
            } else {
                estado = 'fim';
                setTimeout(() => { if (estado === 'fim') estado = 'titulo'; }, 2600);
            }
        }

        function passo() {
            dir = proxDir;
            const cab = { x: cobra[0].x + dir.x, y: cobra[0].y + dir.y };
            if (cab.x < 0 || cab.y < 0 || cab.x >= N || cab.y >= N || cobra.some((s) => s.x === cab.x && s.y === cab.y)) return morrer();
            cobra.unshift(cab);
            let cresceu = false;
            if (cab.x === comida.x && cab.y === comida.y) {
                pontos += 10;
                velocidade = Math.max(65, velocidade - 3);
                comida = novaComida();
                cresceu = true;
                SONS.comer();
                if (!ouro && Math.random() < 0.18) ouro = Object.assign(novaComida(), { ate: performance.now() + 6000 });
            }
            if (ouro && cab.x === ouro.x && cab.y === ouro.y) {
                pontos += 50;
                ouro = null;
                cresceu = true;
                SONS.ouro();
                aviso('+50 ROLO DE OURO!');
            }
            if (!cresceu) cobra.pop();
        }

        // ----------------------------------------------------------- desenho
        function texto(t, x, y, cor, tam, alinhar) {
            t = semAcento(t);
            ctx.font = `${tam || 8}px ${FONTE}`;
            ctx.textAlign = alinhar || 'center';
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#000';
            ctx.fillText(t, x + 1, y + 1);
            ctx.fillStyle = cor || '#fff';
            ctx.fillText(t, x, y);
        }

        function desenharFundo() {
            ctx.fillStyle = '#05051a';
            ctx.fillRect(0, 0, W, H);
            ctx.fillStyle = '#0d0d33';
            for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) if ((i + j) % 2) ctx.fillRect(i * CEL, HUD + j * CEL, CEL, CEL);
            ctx.strokeStyle = '#3b2bd9';
            ctx.lineWidth = 2;
            ctx.strokeRect(1, HUD + 1, W - 2, H - HUD - 2);
        }

        function desenharHUD() {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, W, HUD);
            texto('PONTOS ' + String(pontos || 0).padStart(5, '0'), 6, 8, '#ffd200', 8, 'left');
            texto('RECORDE ' + String(recordes[0][1]).padStart(5, '0'), W - 6, 8, '#ff5a5a', 8, 'right');
            for (let i = 0; i < vidas; i++) ctx.drawImage(spriteCanvas('rolo', 1), W / 2 - 14 + i * 10, 8);
        }

        function desenharCobra() {
            for (let i = cobra.length - 1; i >= 1; i--) {
                const s = cobra[i];
                const px = s.x * CEL;
                const py = HUD + s.y * CEL;
                const prox = cobra[i - 1];
                // cabo RCA amarelo: contorno escuro + miolo amarelo + brilho
                ctx.fillStyle = '#4a3600';
                ctx.fillRect(px + 2, py + 2, CEL - 4, CEL - 4);
                if (prox.x !== s.x) ctx.fillRect(px + (prox.x > s.x ? CEL - 4 : -2), py + 2, 6, CEL - 4);
                if (prox.y !== s.y) ctx.fillRect(px + 2, py + (prox.y > s.y ? CEL - 4 : -2), CEL - 4, 6);
                ctx.fillStyle = '#f2c200';
                ctx.fillRect(px + 4, py + 4, CEL - 8, CEL - 8);
                if (prox.x !== s.x) ctx.fillRect(px + (prox.x > s.x ? CEL - 4 : -4), py + 4, 8, CEL - 8);
                if (prox.y !== s.y) ctx.fillRect(px + 4, py + (prox.y > s.y ? CEL - 4 : -4), CEL - 8, 8);
                ctx.fillStyle = '#fff3a0';
                ctx.fillRect(px + 5, py + 5, 3, 3);
            }
            const c = cobra[0];
            ctx.save();
            ctx.translate(c.x * CEL + CEL / 2, HUD + c.y * CEL + CEL / 2);
            ctx.rotate(Math.atan2(dir.y, dir.x));
            ctx.drawImage(spriteCanvas('plugue', 2), -CEL / 2, -CEL / 2);
            ctx.restore();
        }

        function desenharJogo() {
            desenharFundo();
            desenharHUD();
            const balanco = Math.sin(performance.now() / 150) > 0 ? 0 : 1;
            ctx.drawImage(spriteCanvas('rolo', 2), comida.x * CEL, HUD + comida.y * CEL + balanco);
            if (ouro) {
                if (performance.now() > ouro.ate) ouro = null;
                else if ((ouro.ate - performance.now()) > 1500 || Math.floor(performance.now() / 120) % 2) {
                    ctx.drawImage(spriteCanvas('roloOuro', 2), ouro.x * CEL, HUD + ouro.y * CEL - balanco);
                }
            }
            desenharCobra();
            if (estado === 'pausa') {
                ctx.fillStyle = 'rgba(0,0,0,0.6)';
                ctx.fillRect(0, HUD, W, H - HUD);
                texto('PAUSA', W / 2, H / 2 - 8, '#fff', 16);
            }
            if (estado === 'pronto') texto('PRONTO!', W / 2, H / 2 - 8, '#ffd200', 16);
            if (mensagem && performance.now() < msgAte) texto(mensagem, W / 2, HUD + 10, '#7cff7c', 8);
        }

        function desenharTitulo() {
            quadroTitulo++;
            ctx.fillStyle = '#05051a';
            ctx.fillRect(0, 0, W, H);
            // estrelas
            for (let i = 0; i < 40; i++) {
                const sx = (i * 73 + quadroTitulo * (1 + (i % 3))) % W;
                const sy = (i * 131) % H;
                ctx.fillStyle = i % 5 ? '#334' : '#99f';
                ctx.fillRect(W - sx, sy, 2, 2);
            }
            const hue = (quadroTitulo * 2) % 360;
            texto('CABO DE', W / 2, 34, `hsl(${hue},100%,65%)`, 16);
            texto('VÍDEO', W / 2, 58, `hsl(${(hue + 60) % 360},100%,65%)`, 24);
            texto('UM JOGO MIGUEL ARCADE', W / 2, 92, '#8888ff', 8);

            // Rolinho correndo atrás de um rolo
            const rx = ((quadroTitulo * 2) % (W + 120)) - 60;
            ctx.drawImage(spriteCanvas('rolo', 2), rx + 48, 120 + (Math.floor(quadroTitulo / 8) % 2) * 2);
            ctx.drawImage(spriteCanvas(Math.floor(quadroTitulo / 8) % 2 ? 'rolinhoA' : 'rolinhoB', 2), rx, 110);

            const mostrarRecordes = Math.floor(quadroTitulo / 240) % 2 === 1;
            if (mostrarRecordes) {
                texto('MELHORES PONTUAÇÕES', W / 2, 160, '#ffd200', 8);
                recordes.forEach(([n, p], i) => {
                    const cor = ['#ff5a5a', '#ffd200', '#7cff7c', '#5ad7ff', '#ff7cff'][i];
                    texto(`${i + 1}.  ${n}  ${String(p).padStart(5, '0')}`, W / 2, 184 + i * 18, cor, 8);
                });
            } else {
                texto('COMO JOGAR', W / 2, 160, '#ffd200', 8);
                texto('SETAS / WASD: MOVER O CABO', W / 2, 184, '#ccc', 8);
                texto('PEGUE OS ROLOS DE FILME', W / 2, 202, '#ccc', 8);
                texto('NÃO BATA NAS BORDAS!', W / 2, 220, '#ccc', 8);
                texto('P: PAUSA', W / 2, 238, '#ccc', 8);
            }
            texto('FICHAS ' + fichas + '   VIDAS ' + vidas, W / 2, 284, '#fff', 8);
            if (Math.floor(quadroTitulo / 30) % 2) texto('APERTE START', W / 2, 306, '#ff5a5a', 8);
            texto('FICHA = +1 VIDA (MÁX. 3)', W / 2, 326, '#8888ff', 8);
            if (mensagem && performance.now() < msgAte) texto(mensagem, W / 2, 262, '#7cff7c', 8);
        }

        function desenharFim() {
            desenharJogo();
            ctx.fillStyle = 'rgba(0,0,0,0.7)';
            ctx.fillRect(0, HUD, W, H - HUD);
            texto('FIM DE JOGO', W / 2, 140, '#ff5a5a', 16);
            texto('PONTOS: ' + pontos, W / 2, 176, '#fff', 8);
        }

        function desenharIniciais() {
            ctx.fillStyle = '#05051a';
            ctx.fillRect(0, 0, W, H);
            texto('NOVO RECORDE!', W / 2, 60, `hsl(${(performance.now() / 8) % 360},100%,65%)`, 16);
            texto(String(pontos).padStart(5, '0') + ' PONTOS', W / 2, 96, '#fff', 8);
            texto('DIGITE SUAS INICIAIS', W / 2, 140, '#ffd200', 8);
            iniciais.forEach((l, i) => {
                const x = W / 2 - 40 + i * 40;
                texto(l, x, 176, i === posInicial ? '#ff5a5a' : '#fff', 24);
                if (i === posInicial && Math.floor(performance.now() / 250) % 2) {
                    ctx.fillStyle = '#ff5a5a';
                    ctx.fillRect(x - 12, 206, 24, 3);
                }
            });
            texto('▲▼ TROCA  ▶ PRÓXIMA  START OK', W / 2, 250, '#8888ff', 8);
        }

        function salvarIniciais() {
            recordes.push([iniciais.join(''), pontos]);
            recordes.sort((a, b) => b[1] - a[1]);
            recordes = recordes.slice(0, 5);
            salvar('recordes_arcade', recordes);
            estado = 'titulo';
            quadroTitulo = 239; // já mostra a tabela
        }

        function loop(agora) {
            if (!vivo) return;
            if (estado === 'jogando') {
                acumulado += agora - (ultimo || agora);
                while (acumulado >= velocidade && estado === 'jogando') { acumulado -= velocidade; passo(); }
            }
            ultimo = agora;
            if (estado === 'titulo') desenharTitulo();
            else if (estado === 'iniciais') desenharIniciais();
            else if (estado === 'fim') desenharFim();
            else desenharJogo();
            requestAnimationFrame(loop);
        }

        // ---------------------------------------------------------- controles
        const ALFABETO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        function acao(k) {
            if (estado === 'iniciais') {
                const idx = ALFABETO.indexOf(iniciais[posInicial]);
                if (k === 'cima') iniciais[posInicial] = ALFABETO[(idx + 1) % ALFABETO.length];
                if (k === 'baixo') iniciais[posInicial] = ALFABETO[(idx - 1 + ALFABETO.length) % ALFABETO.length];
                if (k === 'dir') posInicial = Math.min(2, posInicial + 1);
                if (k === 'esq') posInicial = Math.max(0, posInicial - 1);
                if (k === 'start') { if (posInicial < 2) posInicial++; else salvarIniciais(); }
                SONS.tecla();
                return;
            }
            if (k === 'ficha') {
                if (estado !== 'titulo') return;
                if (fichas <= 0) { aviso('SEM FICHAS! PEGUE O ROLINHO'); bip([[200, 0.15]]); return; }
                if (vidas >= 3) { aviso('MÁXIMO DE 3 VIDAS'); return; }
                mudarFichas(-1);
                vidas++;
                SONS.ficha();
                aviso('+1 VIDA!');
                return;
            }
            if (k === 'start') {
                if (estado === 'titulo') comecar();
                else if (estado === 'jogando') estado = 'pausa';
                else if (estado === 'pausa') estado = 'jogando';
                return;
            }
            if (k === 'pausa') {
                if (estado === 'jogando') estado = 'pausa'; else if (estado === 'pausa') estado = 'jogando';
                return;
            }
            const d = { cima: { x: 0, y: -1 }, baixo: { x: 0, y: 1 }, esq: { x: -1, y: 0 }, dir: { x: 1, y: 0 } }[k];
            if (d && estado === 'jogando' && !(d.x === -dir.x && d.y === -dir.y)) proxDir = d;
        }

        const TECLAS = {
            ArrowUp: 'cima', w: 'cima', W: 'cima', ArrowDown: 'baixo', s: 'baixo', S: 'baixo',
            ArrowLeft: 'esq', a: 'esq', A: 'esq', ArrowRight: 'dir', d: 'dir', D: 'dir',
            Enter: 'start', ' ': 'start', p: 'pausa', P: 'pausa', c: 'ficha', C: 'ficha', '5': 'ficha',
        };
        function teclado(e) {
            const w = openWindows.fliperama;
            if (!w || !w.el.classList.contains('ativa') || w.minimized) return;
            const k = TECLAS[e.key];
            if (!k) return;
            e.preventDefault();
            e.stopPropagation();
            acao(k);
        }
        document.addEventListener('keydown', teclado, true);

        body.querySelectorAll('[data-k]').forEach((b) => {
            const disparar = (e) => { e.preventDefault(); acao(b.dataset.k); b.classList.add('apertado'); setTimeout(() => b.classList.remove('apertado'), 120); };
            b.addEventListener('touchstart', disparar, { passive: false });
            b.addEventListener('mousedown', disparar);
        });

        // deslizar o dedo na tela também controla
        let toque = null;
        canvas.addEventListener('touchstart', (e) => { const t = e.touches[0]; toque = { x: t.clientX, y: t.clientY }; }, { passive: true });
        canvas.addEventListener('touchend', (e) => {
            if (!toque) return;
            const t = e.changedTouches[0];
            const dx = t.clientX - toque.x;
            const dy = t.clientY - toque.y;
            toque = null;
            if (Math.abs(dx) < 20 && Math.abs(dy) < 20) { if (estado === 'titulo') acao('start'); return; }
            if (Math.abs(dx) > Math.abs(dy)) acao(dx > 0 ? 'dir' : 'esq'); else acao(dy > 0 ? 'baixo' : 'cima');
        });
        canvas.addEventListener('click', () => { if (estado === 'titulo') acao('start'); });

        openWindows.fliperama.onClose = () => {
            vivo = false;
            document.removeEventListener('keydown', teclado, true);
        };

        const comecarLoop = () => requestAnimationFrame(loop);
        if (document.fonts && document.fonts.load) {
            document.fonts.load(`8px ${FONTE}`).then(comecarLoop, comecarLoop);
        } else comecarLoop();
    }

    // ============================================ modo demonstração (protetor)
    function attract(canvas, mini) {
        const ctx = canvas.getContext('2d');
        const Wc = canvas.width;
        const Hc = canvas.height;
        const esc = mini ? 1 : Math.max(3, Math.floor(Math.min(Wc, Hc) / 160));
        let vivo = true;
        let t = 0;
        const recordes = ler('recordes_arcade', RECORDES_PADRAO);
        const estrelas = Array(mini ? 40 : 140).fill(0).map(() => ({ x: Math.random() * Wc, y: Math.random() * Hc, v: 0.5 + Math.random() * 2.5 }));
        const rolos = Array(6).fill(0).map((_, i) => ({ x: Wc + i * 140 * esc / 2, ouro: i === 3 }));
        let rx = -100;

        function txt(s, x, y, cor, tam) {
            s = semAcento(s);
            ctx.font = `${tam}px ${FONTE}`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillStyle = '#000';
            ctx.fillText(s, x + Math.max(1, tam / 8), y + Math.max(1, tam / 8));
            ctx.fillStyle = cor;
            ctx.fillText(s, x, y);
        }

        function quadro() {
            if (!vivo) return;
            t++;
            ctx.imageSmoothingEnabled = false;
            ctx.fillStyle = '#05051a';
            ctx.fillRect(0, 0, Wc, Hc);
            estrelas.forEach((s) => {
                s.x -= s.v * (mini ? 0.5 : 1);
                if (s.x < 0) { s.x = Wc; s.y = Math.random() * Hc; }
                ctx.fillStyle = s.v > 2 ? '#aaf' : '#446';
                ctx.fillRect(s.x, s.y, esc, esc);
            });

            const hue = (t * 2) % 360;
            const tt = mini ? 10 : 12 * esc;
            const tTit = mini ? tt : Math.min(tt, Wc / 12);
            txt('MIGUEL', Wc / 2, Hc * 0.1, `hsl(${hue},100%,65%)`, tTit * 1.4);
            txt('ARCADE', Wc / 2, Hc * 0.1 + tTit * 1.9, `hsl(${(hue + 50) % 360},100%,60%)`, tTit * 1.4);

            // corrida no "chão"
            const chao = Hc * 0.62;
            ctx.fillStyle = '#3b2bd9';
            ctx.fillRect(0, chao + 16 * esc, Wc, esc);
            rx += 1.6 * (mini ? 0.5 : esc);
            if (rx > Wc + 60) rx = -100;
            rolos.forEach((r) => {
                r.x -= 0.6 * (mini ? 0.5 : esc);
                if (r.x < -20) r.x = Wc + Math.random() * 200;
                if (Math.abs(r.x - rx - 8 * esc) < 6 * esc) r.x = Wc + 40 + Math.random() * 300;
                ctx.drawImage(spriteCanvas(r.ouro ? 'roloOuro' : 'rolo', esc), r.x, chao + 8 * esc);
            });
            const pul = Math.abs(Math.sin(t / 10)) * 6 * esc;
            ctx.drawImage(spriteCanvas(Math.floor(t / 8) % 2 ? 'rolinhoA' : 'rolinhoB', esc), rx, chao - pul);

            if (!mini) {
                const y0 = chao + 26 * esc;
                const tr = Math.min(14, 3 * esc);
                txt('MELHORES PONTUAÇÕES', Wc / 2, y0, '#ffd200', tr);
                recordes.slice(0, 3).forEach(([n, p], i) => txt(`${i + 1}. ${n} ${String(p).padStart(5, '0')}`, Wc / 2, y0 + (i + 1.6) * tr * 1.8, '#ccc', tr));
            }
            if (Math.floor(t / 35) % 2) txt('INSERT COIN', Wc / 2, Hc * (mini ? 0.8 : 0.9), '#ff5a5a', mini ? 9 : Math.min(22, 4 * esc));
            requestAnimationFrame(quadro);
        }
        const ir = () => requestAnimationFrame(quadro);
        if (document.fonts && document.fonts.load) document.fonts.load(`8px ${FONTE}`).then(ir, ir); else ir();
        return () => { vivo = false; };
    }

    // ================================================================= início
    function iniciar() {
        criarContadorBandeja();
        agendarRolinho(true);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
    else iniciar();

    window.Arcade = { abrirFliperama, attract, passeioDoRolinho, mudarFichas, SONS, spriteURL };
})();

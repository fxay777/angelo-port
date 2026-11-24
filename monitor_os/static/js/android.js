// ============================================================================
// HoloFone — sistema do celular holográfico do portfólio.
// Este arquivo cuida do "sistema": fundo animado, relógio, desbloqueio por
// digital, tela inicial, abrir/fechar apps, notificações, central de controle
// e os easter eggs de sistema. Os apps em si ficam em holo-apps.js.
// ============================================================================
(function () {
    'use strict';

    var D = window.DADOS || {};
    var $ = function (id) { return document.getElementById(id); };
    if (/[?&]cena3d=1/.test(location.search)) document.body.classList.add('in3d');

    // ------------------------------------------------------------- ícones SVG
    var ICONES = {
        usuario: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>',
        maleta: '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5h6v2M3 12h18"/>',
        filme: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 4v16M17 4v16M3 9h4M3 15h4M17 9h4M17 15h4"/>',
        email: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
        doc: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4M9 12h6M9 16h6"/>',
        jogo: '<rect x="2" y="7" width="20" height="11" rx="5"/><path d="M7 10.5v4M5 12.5h4"/><circle cx="16" cy="11.5" r="1"/><circle cx="18.5" cy="14" r="1"/>',
        maia: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="1" fill="currentColor"/>',
        scanner: '<circle cx="12" cy="12" r="7"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="1.5"/>',
        status: '<path d="M4 17a8 8 0 1 1 16 0"/><path d="M12 17l4-6"/><path d="M7 17h10"/>',
        onda: '<path d="M2 12c2-7 4-7 6 0s4 7 6 0 4-7 6 0"/>',
        roteiro: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9.3 4v16M14.7 4v16"/><path d="M6 12h1.5M11.3 10.5v3M16.5 11h2"/>',
        claquete: '<path d="M3 10h18v10H3z"/><path d="M3 10l1.5-5.5 16 0L19 10M8.5 4.5L7 10M13.5 4.5L12 10"/>',
        info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
        labirinto: '<path d="M3 3h18v18H3z"/><path d="M7 3v6h4M17 7v6h-6v4M7 13v8M13 17h4"/>',
        trofeu: '<path d="M8 4h8v5a4 4 0 0 1-8 0z"/><path d="M8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8 21h8M10 17h4"/>',
    };
    function icone(nome) {
        return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + (ICONES[nome] || '') + '</svg>';
    }

    // ----------------------------------------------------- utilidades e estado
    var APPS = {};
    var ordem = [];
    var atual = null;
    var aoFechar = null;
    var estado = { desbloqueado: false, dnd: false, voz: false };

    function toast(msg, ms) {
        var t = $('toast');
        t.textContent = msg;
        t.classList.add('mostrar');
        clearTimeout(toast._t);
        toast._t = setTimeout(function () { t.classList.remove('mostrar'); }, ms || 2600);
    }

    // Voz da M.A.I.A. (sintetizador do próprio navegador)
    function falar(texto) {
        if (!estado.voz || !window.speechSynthesis) return;
        try {
            speechSynthesis.cancel();
            var u = new SpeechSynthesisUtterance(texto.replace(/[\u{1F300}-\u{1FAFF}☀-➿]/gu, ''));
            u.lang = 'pt-BR';
            u.rate = 1.05;
            u.pitch = 1.1;
            u.onstart = function () { pulsoFala(0.8); };
            u.onboundary = function () { pulsoFala(1); };
            u.onend = function () { pulsoFala(0); };
            speechSynthesis.speak(u);
        } catch (e) { /* sem voz */ }
    }

    var audioCtx = null;
    function bip(notas, tipo, volume) {
        try {
            audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
            if (audioCtx.state === 'suspended') audioCtx.resume();
            var t = audioCtx.currentTime;
            notas.forEach(function (n) {
                if (n[0]) {
                    var o = audioCtx.createOscillator();
                    var g = audioCtx.createGain();
                    o.type = tipo || 'sine';
                    o.frequency.setValueAtTime(n[0], t);
                    g.gain.setValueAtTime(volume || 0.05, t);
                    g.gain.exponentialRampToValueAtTime(0.0001, t + n[1]);
                    o.connect(g).connect(audioCtx.destination);
                    o.start(t);
                    o.stop(t + n[1]);
                }
                t += n[1];
            });
        } catch (e) { /* sem áudio */ }
    }
    function vibrar(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) { /* ok */ } }

    // -------------------------------------------------------- fundo animado
    (function fundo() {
        var c = $('fundo-holo');
        var ctx = c.getContext('2d');
        var pts = [];
        function ajustar() {
            c.width = c.clientWidth * (window.devicePixelRatio > 1 ? 1.5 : 1);
            c.height = c.clientHeight * (window.devicePixelRatio > 1 ? 1.5 : 1);
            pts = [];
            for (var i = 0; i < 46; i++) pts.push({ x: Math.random() * c.width, y: Math.random() * c.height, v: 0.15 + Math.random() * 0.5, r: Math.random() * 1.6 + 0.4 });
        }
        ajustar();
        window.addEventListener('resize', ajustar);
        var t = 0;
        (function quadro() {
            requestAnimationFrame(quadro);
            if (document.hidden || document.body.classList.contains('sem-holo')) return;
            t++;
            ctx.clearRect(0, 0, c.width, c.height);
            // grade em perspectiva no rodapé
            ctx.strokeStyle = 'rgba(61,85,255,0.16)';
            ctx.lineWidth = 1;
            var hz = c.height * 0.62;
            for (var i = -8; i <= 8; i++) {
                ctx.beginPath(); ctx.moveTo(c.width / 2 + i * 30, hz); ctx.lineTo(c.width / 2 + i * 160, c.height); ctx.stroke();
            }
            for (var j = 0; j < 9; j++) {
                var y = hz + Math.pow((j + (t % 60) / 60) / 9, 2) * (c.height - hz);
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(c.width, y); ctx.stroke();
            }
            // partículas
            pts.forEach(function (p) {
                p.y -= p.v;
                if (p.y < -5) { p.y = c.height + 5; p.x = Math.random() * c.width; }
                ctx.fillStyle = p.r > 1.6 ? 'rgba(255,210,63,0.7)' : p.r > 1.1 ? 'rgba(255,79,163,0.55)' : 'rgba(184,243,255,0.45)';
                var lado = Math.round(p.r * 2);
                ctx.fillRect(Math.round(p.x), Math.round(p.y), lado, lado);
            });
        })();
    })();

    // ------------------------------------------------------------- relógio
    var viagemNoTempo = 0;
    function tick() {
        var d = new Date();
        if (Date.now() < viagemNoTempo) d.setFullYear(1995);
        var hm = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        $('sb-clock').textContent = hm;
        $('bl-hora').textContent = hm;
        $('nucleo-hora').textContent = hm;
        $('bl-data').textContent = d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: Date.now() < viagemNoTempo ? 'numeric' : undefined });
    }
    tick();
    setInterval(tick, 5000);
    // marcas do relógio da tela de bloqueio
    (function () {
        var g = document.querySelector('.aneis .ticks');
        var h = '';
        for (var i = 0; i < 60; i += 5) {
            var a = i / 60 * Math.PI * 2;
            h += '<line x1="' + (150 + Math.sin(a) * 128) + '" y1="' + (150 - Math.cos(a) * 128) + '" x2="' + (150 + Math.sin(a) * 116) + '" y2="' + (150 - Math.cos(a) * 116) + '"/>';
        }
        g.innerHTML = h;
    })();

    // ------------------------------------------------------- notificações
    function notificar(n, alvo) {
        var box = alvo || $('notificacoes');
        var el = document.createElement('button');
        el.type = 'button';
        el.className = 'notif';
        el.innerHTML = '<span class="n-ic"></span><span><b></b><small></small></span><span class="n-hora">agora</span>';
        el.querySelector('.n-ic').textContent = n.icone || '🔔';
        el.querySelector('b').textContent = n.titulo;
        el.querySelector('small').textContent = n.texto;
        box.appendChild(el);
        if (!alvo) bip([[1320, 0.06], [1760, 0.09]], 'sine', 0.04);
        var x0 = null;
        var arrastou = false;
        el.addEventListener('pointerdown', function (e) { x0 = e.clientX; arrastou = false; });
        el.addEventListener('pointermove', function (e) {
            if (x0 === null) return;
            var dx = e.clientX - x0;
            if (Math.abs(dx) > 6) arrastou = true;
            el.style.transform = 'translateX(' + dx + 'px)';
            el.style.opacity = 1 - Math.min(1, Math.abs(dx) / 220);
        });
        el.addEventListener('pointerup', function (e) {
            var dx = x0 === null ? 0 : e.clientX - x0;
            x0 = null;
            if (Math.abs(dx) > 90) { tirar(); return; }
            el.style.transform = '';
            el.style.opacity = '';
            if (!arrastou && n.app) { tirar(); abrir(n.app); }
        });
        function tirar() { el.classList.add('saindo'); setTimeout(function () { el.remove(); }, 350); }
        if (!alvo) setTimeout(function () { if (el.isConnected) tirar(); }, n.ms || 6500);
        return el;
    }

    var NOTIFS = [
        { icone: '💬', titulo: 'Cliente', texto: '"Só mais um ajustezinho, rapidinho." (é o 14º)', app: 'maia' },
        { icone: '⏳', titulo: 'Render', texto: 'Exportando final_FINAL_v8.mp4... 99%... 99%...', app: 'status' },
        { icone: '🎞️', titulo: 'Rolinho', texto: 'curtiu seu portfólio ❤️', app: 'projetos' },
        { icone: '☕', titulo: 'Lembrete', texto: 'Nível de café abaixo de 20%. Recarregue o editor.', app: 'status' },
        { icone: '🛰️', titulo: 'Scanner', texto: 'Talentos não identificados por perto. Toque para escanear.', app: 'scanner' },
        { icone: '🎬', titulo: 'Roteirista', texto: 'Nova ideia de filme gerada. Spoiler: tem um plot twist.', app: 'roteiro' },
        { icone: '📧', titulo: 'Caixa de entrada', texto: 'Você tem 1 vaga de emprego esperando resposta. Seria pro Miguel?', app: 'contato' },
        { icone: '🎵', titulo: 'Teremim', texto: 'Seu dedo foi convocado para tocar música espacial.', app: 'teremim' },
    ];
    var iNotif = Math.floor(Math.random() * NOTIFS.length);
    function agendarNotificacao() {
        setTimeout(function () {
            if (estado.desbloqueado && !atual && !estado.dnd && !document.hidden) {
                notificar(NOTIFS[iNotif % NOTIFS.length]);
                iNotif++;
            }
            agendarNotificacao();
        }, 22000 + Math.random() * 18000);
    }

    // --------------------------------------------------------- desbloqueio
    notificar({ icone: '◉', titulo: 'M.A.I.A.', texto: 'Desbloqueie para conhecer o ' + (D.nome || 'Miguel') + '.' }, $('bl-notif'));
    (function digital() {
        var btn = $('digital');
        var dica = $('dig-dica');
        var timer = null;
        function iniciar(e) {
            if (estado.desbloqueado) return;
            if (e) e.preventDefault();
            btn.classList.add('segurando');
            dica.textContent = 'Escaneando digital...';
            bip([[660, 0.05]], 'sine', 0.03);
            timer = setTimeout(sucesso, 1100);
        }
        function cancelar() {
            if (!timer) return;
            clearTimeout(timer);
            timer = null;
            btn.classList.remove('segurando');
            dica.textContent = 'Rápido demais! Segure um pouquinho. 👆';
        }
        function sucesso() {
            timer = null;
            btn.classList.remove('segurando');
            btn.classList.add('ok');
            vibrar(40);
            bip([[880, 0.08], [1320, 0.14]], 'sine', 0.05);
            dica.innerHTML = 'Identidade confirmada: <b style="color:var(--verde)">VISITANTE VIP</b> ✓';
            setTimeout(desbloquear, 700);
        }
        btn.addEventListener('pointerdown', iniciar);
        btn.addEventListener('pointerup', cancelar);
        btn.addEventListener('pointerleave', cancelar);
        btn.addEventListener('contextmenu', function (e) { e.preventDefault(); });
    })();

    function desbloquear() {
        estado.desbloqueado = true;
        var bl = $('bloqueio');
        bl.classList.add('saindo');
        setTimeout(function () {
            bl.classList.remove('ativa', 'saindo');
            var home = $('home');
            home.classList.add('ativa', 'entrando');
            setTimeout(function () { home.classList.remove('entrando'); }, 700);
            montarHome();
            digitarIdentidade();
            somarPontos(100);
            setTimeout(function () { conquistar('start'); }, 900);
            agendarNotificacao();
            setTimeout(function () { if (!atual) notificar({ icone: '◉', titulo: 'M.A.I.A.', texto: 'Oi! Eu sou a assistente do Miguel. Toque aqui pra conversar.', app: 'maia' }); }, 3500);
        }, 650);
    }

    function bloquear() {
        estado.desbloqueado = false;
        fechar(true);
        $('home').classList.remove('ativa');
        var bl = $('bloqueio');
        bl.classList.add('ativa');
        $('digital').classList.remove('ok');
        $('dig-dica').textContent = 'Segure a digital para desbloquear';
    }

    function digitarIdentidade() {
        var nome = $('id-nome');
        var cargo = $('id-cargo');
        nome.textContent = '';
        cargo.textContent = '';
        nome.classList.remove('pronto');
        var a = (D.nome || '').toUpperCase();
        var b = D.cargo || '';
        var i = 0;
        (function passo() {
            if (i < a.length) { nome.textContent = a.slice(0, ++i); setTimeout(passo, 55); return; }
            nome.classList.add('pronto');
            cargo.classList.add('digitando');
            var k = 0;
            (function passo2() {
                if (k < b.length) { cargo.textContent = b.slice(0, ++k); setTimeout(passo2, 40); } else cargo.classList.remove('digitando');
            })();
        })();
    }

    // ----------------------------------------------------------- tela inicial
    var DOCK = ['maia', 'projetos', 'labirinto', 'jogos'];
    // ícones em pixel no mesmo estilo do MiguelOS 95 do PC
    var ICONES_95 = {
        sobre: 'holo/usuario', experiencia: 'folder', projetos: 'trailIcon', contato: 'holo/email', curriculo: 'credits',
        maia: 'holo/maia', scanner: 'holo/scanner', status: 'holo/status', teremim: 'volumeOn', roteiro: 'notepad',
        claquete: 'videos', placar: 'holo/trofeu', labirinto: 'holo/labirinto', jogos: 'holo/joystick',
    };
    function imgApp(id) { return ICONES_95[id] ? '<img src="/static/icons/' + ICONES_95[id] + '.png" alt="">' : null; }
    function botaoApp(id, atraso) {
        var app = APPS[id];
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'app-icone' + (app.novo ? ' novo' : '');
        b.dataset.app = id;
        b.innerHTML = '<span class="hex" style="--cor:' + (app.cor || 'var(--ciano)') + '">' + (imgApp(id) || icone(app.icone)) + '</span><span>' + app.rotulo + '</span>';
        if (atraso !== undefined) b.style.animationDelay = atraso + 'ms';
        return b;
    }
    function montarHome() {
        var grade = $('grade');
        var dock = $('dock');
        grade.innerHTML = '';
        dock.innerHTML = '';
        ordem.forEach(function (id, i) { grade.appendChild(botaoApp(id, 80 + i * 45)); });
        DOCK.forEach(function (id) { if (APPS[id]) dock.appendChild(botaoApp(id)); });
    }
    document.addEventListener('click', function (e) {
        var b = e.target.closest('[data-app]');
        if (b && !$('central').classList.contains('aberta')) abrir(b.dataset.app);
    });

    // --------------------------------------------------------- abrir / fechar
    function abrir(id, deHistorico) {
        var app = APPS[id];
        if (!app || !estado.desbloqueado) return;
        if (app.link) { window.open(app.link, '_blank', 'noopener'); return; }
        if (atual) fechar(true);
        atual = id;
        $('app-titulo').innerHTML = imgApp(id) || '';
        $('app-titulo').appendChild(document.createTextNode(app.titulo || app.rotulo));
        $('navbar').dataset.janela = app.rotulo;
        $('app-status').textContent = app.status || '● ONLINE';
        var v = $('appview');
        v.classList.add('aberto');
        v.setAttribute('aria-hidden', 'false');
        var corpo = $('app-corpo');
        corpo.innerHTML = '';
        corpo.scrollTop = 0;
        bip([[520, 0.04], [780, 0.06]], 'sine', 0.03);
        aoFechar = app.montar(corpo) || null;
        var bh = $('app-holo');
        bh.hidden = !app.holo;
        bh.classList.toggle('ativo', !!(holoEstado && holoEstado.app === id));
        if (!abertos[id]) {
            abertos[id] = true;
            somarPontos(50, window.innerWidth / 2, 120);
            var n = Object.keys(abertos).length;
            if (n >= 5) conquistar('turista');
            var todos = Object.keys(APPS).filter(function (k) { return !APPS[k].link; });
            if (todos.every(function (k) { return abertos[k]; })) conquistar('completista');
        }
        if (!deHistorico) { try { history.pushState({ app: id }, ''); } catch (e) { /* ok */ } }
    }
    function fechar(silencioso) {
        if (!atual) return;
        if (holoEstado && holoEstado.app === atual) desprojetar();
        if (typeof aoFechar === 'function') { try { aoFechar(); } catch (e) { /* ok */ } }
        aoFechar = null;
        atual = null;
        delete $('navbar').dataset.janela;
        var v = $('appview');
        v.classList.remove('aberto');
        v.setAttribute('aria-hidden', 'true');
        var corpo = $('app-corpo');
        setTimeout(function () { if (!atual) corpo.innerHTML = ''; }, 200);
        if (!silencioso) bip([[780, 0.04], [520, 0.05]], 'sine', 0.03);
    }
    function voltar() {
        if ($('central').classList.contains('aberta')) { central(false); return; }
        if (atual) { try { history.back(); } catch (e) { fechar(); } } else toast('Você já está na tela inicial');
    }
    window.addEventListener('popstate', function (e) {
        if (e.state && e.state.app) abrir(e.state.app, true); else fechar();
    });
    $('app-voltar').addEventListener('click', voltar);
    $('nav-voltar').addEventListener('click', voltar);
    $('nav-home').addEventListener('click', function () {
        if ($('central').classList.contains('aberta')) central(false);
        else if (atual) voltar();
    });

    // ------------------------------------------------------- central de controle
    function central(abrirC) {
        var c = $('central');
        var ok = abrirC === undefined ? !c.classList.contains('aberta') : abrirC;
        c.classList.toggle('aberta', ok);
        c.setAttribute('aria-hidden', ok ? 'false' : 'true');
    }
    $('nav-central').addEventListener('click', function () { central(); });
    $('statusbar').addEventListener('click', function (e) { if (!e.target.closest('#sb-bateria')) central(true); });
    // gesto: puxar do topo para baixo abre, empurrar para cima fecha
    var y0 = null;
    document.addEventListener('touchstart', function (e) { y0 = e.touches[0].clientY; }, { passive: true });
    document.addEventListener('touchend', function (e) {
        if (y0 === null) return;
        var dy = e.changedTouches[0].clientY - y0;
        if (y0 < 60 && dy > 70 && estado.desbloqueado) central(true);
        else if ($('central').classList.contains('aberta') && dy < -60) central(false);
        y0 = null;
    });
    document.querySelectorAll('.cc-btn').forEach(function (b) {
        b.addEventListener('click', function () {
            var k = b.dataset.cc;
            var on = !b.classList.contains('ativo');
            b.classList.toggle('ativo', on);
            if (k === 'cinema') { document.body.classList.toggle('cinema', on); toast(on ? '🎬 Modo Cinema: proporção 2.39:1' : 'Modo Cinema desligado'); }
            if (k === 'noturna') { document.body.classList.toggle('noturna', on); toast(on ? '🌙 Visão noturna ativada' : 'Visão noturna desligada'); }
            if (k === 'holo') { document.body.classList.toggle('sem-holo', !on); toast(on ? '✦ Hologramas ligados' : 'Hologramas desligados (economia de energia)'); }
            if (k === 'clientes') { estado.dnd = on; toast(on ? '🔕 Clientes silenciados. Paz e criatividade.' : '🔔 Clientes podem chamar de novo. Boa sorte.'); }
            if (k === 'lanterna') { document.body.classList.toggle('lanterna', on); toast(on ? '🔦 Toque na tela para mirar a lanterna' : 'Lanterna desligada'); }
            if (k === 'voz') {
                estado.voz = on;
                toast(on ? '🔊 A M.A.I.A. agora fala em voz alta' : 'Voz da M.A.I.A. desligada');
                if (on) falar('Olá! Agora eu falo.');
            }
        });
    });
    $('cc-brilho').addEventListener('input', function (e) { $('escurecer').style.opacity = (1 - e.target.value / 100) * 0.85; });
    document.addEventListener('pointermove', function (e) {
        if (!document.body.classList.contains('lanterna')) return;
        var r = $('phone').getBoundingClientRect();
        $('phone').style.setProperty('--lx', ((e.clientX - r.left) / r.width * 100) + '%');
        $('phone').style.setProperty('--ly', ((e.clientY - r.top) / r.height * 100) + '%');
    });

    // =========================================================== easter eggs
    // núcleo: 7 toques rápidos = sobrecarga · segurar = viagem no tempo
    (function () {
        var n = $('nucleo');
        var toques = 0;
        var zerar = null;
        var segurar = null;
        var segurou = false;
        n.addEventListener('pointerdown', function () {
            segurou = false;
            segurar = setTimeout(function () {
                segurou = true;
                viagemNoTempo = Date.now() + 7000;
                tick();
                $('nucleo-sub').textContent = 'ANO: 1995';
                bip([[300, 0.2], [600, 0.2], [1200, 0.3]], 'triangle', 0.06);
                toast('⏳ Viagem no tempo! Bem-vindo a 1995. Celulares ainda não existem, então... finja.', 4200);
                conquistar('1995');
                setTimeout(function () { tick(); $('nucleo-sub').textContent = 'SISTEMA ONLINE'; }, 7100);
            }, 900);
        });
        n.addEventListener('pointerup', function () {
            clearTimeout(segurar);
            if (segurou) return;
            toques++;
            clearTimeout(zerar);
            zerar = setTimeout(function () { toques = 0; }, 1500);
            bip([[400 + toques * 120, 0.05]], 'square', 0.03);
            if (toques === 4) toast('Hm, o núcleo está esquentando... 🔥');
            if (toques >= 7) { toques = 0; sobrecarga(); }
        });
        n.addEventListener('pointerleave', function () { clearTimeout(segurar); });
    })();

    function glitch(ms, depois) {
        var g = document.createElement('div');
        g.className = 'glitch-tela';
        for (var i = 0; i < 8; i++) g.appendChild(document.createElement('i'));
        $('phone').appendChild(g);
        var t0 = Date.now();
        (function q() {
            g.querySelectorAll('i').forEach(function (b) {
                b.style.top = Math.random() * 100 + '%';
                b.style.height = (1 + Math.random() * 7) + '%';
                b.style.background = ['#ff4fa3', '#3ee8ff', '#5dffb0'][Math.floor(Math.random() * 3)];
                b.style.opacity = Math.random() < 0.6 ? 0.7 : 0;
                b.style.transform = 'translateX(' + (Math.random() - 0.5) * 60 + 'px)';
            });
            if (Date.now() - t0 < ms) requestAnimationFrame(q); else { g.remove(); if (depois) depois(); }
        })();
    }

    function sobrecarga() {
        var n = $('nucleo');
        n.classList.add('sobrecarga');
        $('nucleo-sub').textContent = 'SOBRECARGA!';
        document.body.classList.add('tremer');
        vibrar([60, 40, 60, 40, 200]);
        bip([[200, 0.1], [180, 0.1], [160, 0.1], [140, 0.4]], 'sawtooth', 0.06);
        glitch(1300, function () {
            document.body.classList.remove('tremer');
            n.classList.remove('sobrecarga');
            $('nucleo-sub').textContent = 'SISTEMA ONLINE';
            var r = document.createElement('div');
            r.className = 'reboot';
            r.innerHTML = '<div class="r-logo">HOLOFONE 95</div><div>Ocorreu um erro fatal: núcleo superaquecido.</div><div>Reiniciando o sistema…</div><div class="r-barra"><i></i></div><div style="font-size:12px;opacity:.8">(dica: 7 toques é demais)</div>';
            $('phone').appendChild(r);
            setTimeout(function () { r.remove(); bloquear(); setTimeout(function () { conquistar('sobrecarga'); }, 400); }, 2400);
        });
    }

    // bateria: 3 toques
    (function () {
        var b = $('sb-bateria');
        var c = 0;
        var z = null;
        b.addEventListener('click', function (e) {
            e.stopPropagation();
            c++;
            clearTimeout(z);
            z = setTimeout(function () { c = 0; }, 900);
            if (c >= 3) {
                c = 0;
                $('bat-txt').textContent = '3000%';
                $('bat-nivel').style.background = 'var(--ambar)';
                toast('🔋 Bateria recarregada com café. Duração estimada: até o fim do render.');
                conquistar('bateria');
                setTimeout(function () { $('bat-txt').textContent = '100%'; $('bat-nivel').style.background = ''; }, 6000);
            }
        });
    })();

    // chacoalhar o celular
    (function () {
        var ultimo = 0;
        window.addEventListener('devicemotion', function (e) {
            var a = e.accelerationIncludingGravity || e.acceleration;
            if (!a) return;
            var f = Math.abs(a.x || 0) + Math.abs(a.y || 0) + Math.abs(a.z || 0);
            if (f > 38 && Date.now() - ultimo > 4000) {
                ultimo = Date.now();
                document.body.classList.add('tremer');
                vibrar(200);
                toast('Ei! Calma! 🤢 A M.A.I.A. ficou tonta.');
                conquistar('tonto');
                setTimeout(function () { document.body.classList.remove('tremer'); }, 900);
            }
        });
    })();

    // Konami por gestos na tela inicial: ↑ ↑ ↓ ↓ ← → ← → e dois toques
    (function () {
        var seq = ['c', 'c', 'b', 'b', 'e', 'd', 'e', 'd'];
        var pos = 0;
        var ini = null;
        var ultimoToque = 0;
        var home = $('home');
        home.addEventListener('pointerdown', function (e) { ini = [e.clientX, e.clientY]; });
        home.addEventListener('pointerup', function (e) {
            if (!ini) return;
            var dx = e.clientX - ini[0];
            var dy = e.clientY - ini[1];
            ini = null;
            if (Math.max(Math.abs(dx), Math.abs(dy)) < 40) {
                if (pos === seq.length) {
                    if (Date.now() - ultimoToque < 450) { pos = 0; festa(); conquistar('konami'); }
                    ultimoToque = Date.now();
                }
                return;
            }
            var g = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'd' : 'e') : (dy > 0 ? 'b' : 'c');
            pos = g === seq[pos] ? pos + 1 : (g === seq[0] ? 1 : 0);
            if (pos === seq.length) toast('...e agora dois toques rápidos 😏');
        });
    })();
    function festa() {
        document.body.classList.add('festa');
        bip([[523, 0.1], [659, 0.1], [784, 0.1], [1047, 0.1], [784, 0.1], [1047, 0.3]], 'square', 0.05);
        toast('🎉 MODO FESTA HOLOGRÁFICO! 🎉', 3500);
        if (!holoEstado || holoEstado.tipo === 'confete') projetar('confete', {}, { titulo: 'FESTA!' });
        setTimeout(function () { document.body.classList.remove('festa'); }, 8000);
    }


    // =========================================================== placar
    var guardar = {
        ler: function (k, padrao) { try { var v = localStorage.getItem('holofone.' + k); return v === null ? padrao : JSON.parse(v); } catch (e) { return padrao; } },
        gravar: function (k, v) { try { localStorage.setItem('holofone.' + k, JSON.stringify(v)); } catch (e) { /* sem armazenamento */ } },
    };
    var pontos = 0;
    var recorde = guardar.ler('recorde', 0);
    var conquistas = guardar.ler('conquistas', {});
    var abertos = {};
    function seis(n) { return ('000000' + Math.max(0, Math.min(999999, Math.floor(n)))).slice(-6); }
    function somarPontos(n, x, y) {
        pontos += n;
        if (pontos > recorde) { recorde = pontos; guardar.gravar('recorde', recorde); }
        $('placar-pts').textContent = seis(pontos);
        var sp = $('sb-placar');
        sp.classList.remove('pulo');
        void sp.offsetWidth;
        sp.classList.add('pulo');
        if (x !== undefined) {
            var r = $('phone').getBoundingClientRect();
            var el = document.createElement('div');
            el.className = 'mais-pontos';
            el.textContent = '+' + n;
            el.style.left = Math.max(4, Math.min(r.width - 70, x - r.left - 16)) + 'px';
            el.style.top = Math.max(50, y - r.top - 12) + 'px';
            $('phone').appendChild(el);
            setTimeout(function () { el.remove(); }, 900);
        }
    }
    var CONQUISTAS = {
        start: ['PRESS START', 'Desbloqueou o HoloFone.'],
        turista: ['TURISTA DIGITAL', 'Abriu 5 apps diferentes.'],
        completista: ['100% COMPLETO', 'Abriu todos os apps do HoloFone.'],
        sobrecarga: ['DEDO NERVOSO', 'Superaqueceu o núcleo (7 toques).'],
        '1995': ['VIAJANTE DO TEMPO', 'Voltou para 1995 segurando o núcleo.'],
        bateria: ['MOVIDO A CAFÉ', 'Bateria em 3000%.'],
        tonto: ['TERREMOTO', 'Chacoalhou o celular.'],
        konami: ['CÓDIGO SECRETO', 'Fez o código em gestos.'],
        holograma: ['TONY QUEM?', 'Projetou o primeiro holograma.'],
        maia: ['PAPO RETO', 'Conversou 5 vezes com a M.A.I.A.'],
        scanner: ['CAÇADOR DE TALENTOS', 'Achou todos os talentos no scanner.'],
        labirinto: ['RENDER CONCLUÍDO', 'Limpou uma fase do labirinto.'],
        rolinho: ['AMIGO DO ROLINHO', 'Cutucou o Rolinho 5 vezes.'],
        maestro: ['MAESTRO ESPACIAL', 'Tocou o teremim por 10 segundos.'],
        diretor: ['TAKE 10', 'Bateu a claquete 10 vezes.'],
        quiz: ['FÃ NÚMERO 1', 'Acertou tudo no quiz da M.A.I.A.'],
    };
    var filaConquistas = [];
    var mostrandoConquista = false;
    function conquistar(id) {
        if (!CONQUISTAS[id] || conquistas[id]) return;
        conquistas[id] = Date.now();
        guardar.gravar('conquistas', conquistas);
        filaConquistas.push(id);
        proximaConquista();
    }
    function proximaConquista() {
        if (mostrandoConquista || !filaConquistas.length) return;
        mostrandoConquista = true;
        var c = CONQUISTAS[filaConquistas.shift()];
        var el = $('conquista');
        el.innerHTML = '<div class="cq-a">★ CONQUISTA DESBLOQUEADA ★</div><div class="cq-b"></div><div class="cq-c"></div>';
        el.querySelector('.cq-b').textContent = c[0] + '  +500';
        el.querySelector('.cq-c').textContent = c[1];
        el.classList.add('mostrar');
        somarPontos(500);
        bip([[523, 0.08], [659, 0.08], [784, 0.08], [1047, 0.2]], 'square', 0.04);
        vibrar([30, 40, 30]);
        setTimeout(function () {
            el.classList.remove('mostrar');
            setTimeout(function () { mostrandoConquista = false; proximaConquista(); }, 450);
        }, 3000);
    }

    // =========================================================== Rolinho
    // o mascote: um rolo de filme com tênis vermelhos, desenhado em pixel
    function desenharRolinho(ctx, x, y, s, quadro, dir) {
        ctx.save();
        ctx.translate(Math.round(x), Math.round(y));
        var passo = Math.sin(quadro * 0.45) * s * 0.35;
        // pernas e tênis
        ctx.fillStyle = '#b8f3ff';
        ctx.fillRect(-s * 0.45 + passo * 0.3, s * 0.7, s * 0.14, s * 0.5);
        ctx.fillRect(s * 0.3 - passo * 0.3, s * 0.7, s * 0.14, s * 0.5);
        ctx.fillStyle = '#ff3b3b';
        ctx.fillRect(-s * 0.6 + passo, s * 1.12, s * 0.5, s * 0.24);
        ctx.fillRect(s * 0.2 - passo, s * 1.12, s * 0.5, s * 0.24);
        ctx.fillStyle = '#fff';
        ctx.fillRect(-s * 0.6 + passo, s * 1.3, s * 0.5, s * 0.08);
        ctx.fillRect(s * 0.2 - passo, s * 1.3, s * 0.5, s * 0.08);
        // rolo
        ctx.fillStyle = '#5b5f73';
        ctx.beginPath(); ctx.arc(0, 0, s, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#a3a8bd';
        ctx.beginPath(); ctx.arc(0, 0, s * 0.86, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = '#2a2640';
        for (var i = 0; i < 5; i++) {
            var a = i * Math.PI * 2 / 5 + quadro * 0.08 * dir;
            ctx.beginPath(); ctx.arc(Math.cos(a) * s * 0.55, Math.sin(a) * s * 0.55, s * 0.17, 0, Math.PI * 2); ctx.fill();
        }
        // carinha
        var olhar = dir * s * 0.06;
        ctx.fillStyle = '#fff';
        ctx.fillRect(-s * 0.34, -s * 0.2, s * 0.24, s * 0.28);
        ctx.fillRect(s * 0.1, -s * 0.2, s * 0.24, s * 0.28);
        ctx.fillStyle = '#000';
        ctx.fillRect(-s * 0.27 + olhar, -s * 0.12, s * 0.12, s * 0.16);
        ctx.fillRect(s * 0.17 + olhar, -s * 0.12, s * 0.12, s * 0.16);
        ctx.fillStyle = '#ff4fa3';
        ctx.fillRect(-s * 0.12, s * 0.22, s * 0.24, s * 0.08);
        ctx.restore();
    }

    (function trilha() {
        var bt = $('trilha');
        var c = $('trilha-c');
        var ctx = c.getContext('2d');
        var W = 0, H = 0;
        var pontinhos = [];
        var rol = { x: 30, dir: 1, v: 1.3, pulo: 0, turbo: 0 };
        var quadro = 0;
        var cutucadas = 0;
        function ajustar() {
            W = c.width = bt.clientWidth || 358;
            H = c.height = bt.clientHeight || 46;
            pontinhos = [];
            for (var x = 16; x < W - 8; x += 18) pontinhos.push({ x: x, cafe: (x / 18 | 0) % 9 === 4, volta: 0 });
        }
        ajustar();
        window.addEventListener('resize', ajustar);
        bt.addEventListener('click', function (e) {
            e.stopPropagation();
            var r = c.getBoundingClientRect();
            var x = (e.clientX - r.left) * (W / r.width);
            if (Math.abs(x - rol.x) < 30) {
                rol.pulo = 1;
                cutucadas++;
                somarPontos(50, e.clientX, e.clientY);
                bip([[880, 0.05], [1320, 0.08]], 'square', 0.03);
                toast(['Oi! 👋', 'Ei, isso faz cócegas!', 'Tô comendo os frames, peraí!', 'Quer jogar? O labirinto é logo ali.', 'Rolinho a serviço!'][cutucadas % 5], 1800);
                if (cutucadas >= 5) conquistar('rolinho');
            } else abrir('labirinto');
        });
        (function q() {
            requestAnimationFrame(q);
            if (document.hidden || !$('home').classList.contains('ativa') || atual) return;
            if (bt.clientWidth && (bt.clientWidth !== W || bt.clientHeight !== H)) ajustar();
            quadro++;
            var vel = rol.v * (rol.turbo > 0 ? 2.2 : 1);
            rol.x += vel * rol.dir;
            if (rol.turbo > 0) rol.turbo--;
            if (rol.x > W - 18) rol.dir = -1;
            if (rol.x < 18) rol.dir = 1;
            if (rol.pulo > 0) rol.pulo = Math.max(0, rol.pulo - 0.05);
            ctx.clearRect(0, 0, W, H);
            // parede de labirinto
            ctx.strokeStyle = 'rgba(61,85,255,0.7)';
            ctx.lineWidth = 2;
            ctx.strokeRect(2, 4, W - 4, H - 8);
            var cy = H / 2;
            pontinhos.forEach(function (p) {
                if (p.volta > 0) { p.volta--; return; }
                if (Math.abs(p.x - rol.x) < 6) {
                    p.volta = 360;
                    if (p.cafe) { rol.turbo = 120; bip([[300, 0.05], [600, 0.08]], 'square', 0.02); }
                    return;
                }
                ctx.fillStyle = p.cafe ? '#ffd23f' : '#ffe9b0';
                var t = p.cafe ? 8 + (quadro % 30 < 15 ? 2 : 0) : 4;
                ctx.fillRect(Math.round(p.x - t / 2), Math.round(cy - t / 2), t, t);
            });
            var salto = Math.sin(rol.pulo * Math.PI) * 14;
            desenharRolinho(ctx, rol.x, cy - 4 - salto, 11, quadro * (rol.turbo > 0 ? 2 : 1), rol.dir);
        })();
    })();

    // =========================================================== hologramas
    // Na sala 3D, a página "pai" desenha os hologramas de verdade saindo da
    // tela. Sem a sala (página aberta sozinha), desenhamos uma versão local.
    var temPai = window.parent !== window;
    var holo3d = false;
    var holoEstado = null;     // { tipo, app, i, total, aoAbrir, aoMudar }
    function paraPai(m) {
        if (!temPai) return;
        try { window.parent.postMessage(Object.assign({ fonte: 'holofone' }, m), '*'); } catch (e) { /* ok */ }
    }
    window.addEventListener('message', function (e) {
        if (e.source !== window.parent || !e.data || e.data.fonte !== 'sala3d') return;
        if (e.data.acao === 'holo-pong') holo3d = true;
    });
    [0, 1500, 4000, 9000].forEach(function (ms) { setTimeout(function () { if (!holo3d) paraPai({ acao: 'holo-ping' }); }, ms); });

    var falaNivel = 0;
    var falaTimer = null;
    function pulsoFala(n) {
        falaNivel = n;
        if (holoEstado && holoEstado.tipo === 'orbe') {
            if (holo3d) paraPai({ acao: 'holo-fala', nivel: n });
            else if (local && local.falar) local.falar(n);
        }
        clearTimeout(falaTimer);
        if (n > 0) falaTimer = setTimeout(function () { pulsoFala(0); }, 380);
    }

    function projetar(tipo, dados, opcoes) {
        opcoes = opcoes || {};
        desprojetar(true);
        holoEstado = { tipo: tipo, app: opcoes.app || atual, i: opcoes.i || 0, total: opcoes.total || 0, aoAbrir: opcoes.aoAbrir, aoMudar: opcoes.aoMudar };
        if (holo3d) paraPai({ acao: 'holo', tipo: tipo, dados: dados || {} });
        else holoLocal(tipo, dados || {});
        document.body.classList.add('holo-on');
        $('hh-tit').textContent = '✦ ' + (opcoes.titulo || 'HOLOGRAMA');
        $('holo-hud').classList.toggle('sem-nav', !holoEstado.total);
        $('hh-abrir').textContent = opcoes.rotuloAbrir || 'VER';
        $('app-holo').classList.add('ativo');
        bip([[220, 0.08], [440, 0.08], [880, 0.16]], 'sawtooth', 0.03);
        vibrar(30);
        conquistar('holograma');
        if (tipo === 'confete') setTimeout(function () { if (holoEstado && holoEstado.tipo === 'confete') desprojetar(); }, 3300);
    }
    function desprojetar(silencioso) {
        if (!holoEstado) return;
        holoEstado = null;
        if (holo3d) paraPai({ acao: 'holo-off' });
        holoLocalOff();
        document.body.classList.remove('holo-on');
        $('app-holo').classList.remove('ativo');
        if (!silencioso) bip([[660, 0.06], [330, 0.1]], 'sine', 0.03);
    }
    function holoIr(i) {
        if (!holoEstado || !holoEstado.total) return;
        var n = holoEstado.total;
        holoEstado.i = ((i % n) + n) % n;
        if (holo3d) paraPai({ acao: 'holo-ir', i: holoEstado.i });
        else if (local && local.ir) local.ir(holoEstado.i);
        if (holoEstado.aoMudar) holoEstado.aoMudar(holoEstado.i);
        bip([[740, 0.04]], 'square', 0.02);
    }
    $('holo-hud').addEventListener('click', function (e) {
        var b = e.target.closest('[data-h]');
        if (!b || !holoEstado) return;
        var h = b.dataset.h;
        if (h === 'off') desprojetar();
        else if (h === 'ant') holoIr(holoEstado.i - 1);
        else if (h === 'prox') holoIr(holoEstado.i + 1);
        else if (h === 'abrir' && holoEstado.aoAbrir) holoEstado.aoAbrir(holoEstado.i);
    });
    $('app-holo').addEventListener('click', function () {
        if (holoEstado && holoEstado.app === atual) { desprojetar(); return; }
        var app = APPS[atual];
        if (!app || !app.holo) return;
        var h = app.holo();
        projetar(h.tipo, h.dados, Object.assign({ app: atual }, h.opcoes));
    });

    // -------- versão local (CSS 3D) para quando não há sala 3D por trás
    var local = null;
    function holoLocalOff() {
        if (local) { local.vivo = false; local = null; }
        document.body.classList.remove('holo-local-on');
        $('holo-local').innerHTML = '';
    }
    function holoLocal(tipo, dados) {
        holoLocalOff();
        var raiz = $('holo-local');
        raiz.innerHTML = '<div class="hl-cone"></div><div class="hl-palco"></div>';
        document.body.classList.add('holo-local-on');
        var palco = raiz.querySelector('.hl-palco');
        var L = { vivo: true };
        local = L;
        function item(w, h, html) {
            var d = document.createElement('div');
            d.className = 'hl-item';
            d.style.width = w + 'px';
            d.style.height = h + 'px';
            d.style.left = -w / 2 + 'px';
            d.style.top = -h / 2 + 'px';
            if (html) d.innerHTML = html;
            palco.appendChild(d);
            return d;
        }
        var anim = function () {};
        var ang = 0, alvo = 0;
        if (tipo === 'carrossel') {
            var itens = dados.itens || [];
            var passo = 360 / Math.max(1, itens.length);
            var raio = 190;
            itens.forEach(function (it, i) {
                var d = item(200, 120, '<div style="padding:10px"><div style="font:8px var(--pixel);color:var(--amarelo)">' + String(it.categoria || '').toUpperCase() + '</div><div style="margin-top:8px">' + it.titulo + '</div></div>');
                d.style.transform = 'rotateY(' + (i * passo) + 'deg) translateZ(' + raio + 'px)';
            });
            alvo = ang = -(dados.i || 0) * passo;
            L.ir = function (i) {
                var destino = -i * passo;
                alvo = destino + Math.round((alvo - destino) / 360) * 360;
            };
            anim = function (t) { ang += (alvo - ang) * 0.12; palco.style.transform = 'translateZ(-120px) rotateX(-8deg) rotateY(' + ang + 'deg)'; };
        } else if (tipo === 'barras' || tipo === 'aneis') {
            var lista = dados.itens || [];
            lista.forEach(function (it, i) {
                var d = item(300, 30, '<div style="position:absolute;inset:3px;width:0;background:' + ['#ffd23f', '#ff4fa3', '#4de1ff', '#5dffb0', '#ff8a3d', '#a98bff'][i % 6] + ';opacity:.6;transition:width 1.2s ' + (i * 0.12) + 's" data-w="' + it.nivel + '"></div><span style="position:relative;padding-left:8px">' + (it.nome || '') + ' ' + Math.round(it.nivel) + '%</span>');
                d.style.top = (i - lista.length / 2) * 40 + 'px';
            });
            setTimeout(function () { palco.querySelectorAll('[data-w]').forEach(function (b) { b.style.width = 'calc(' + b.dataset.w + '% - 6px)'; }); }, 80);
            anim = function (t) { palco.style.transform = 'rotateY(' + Math.sin(t * 0.6) * 18 + 'deg) rotateX(' + Math.sin(t * 0.4) * 6 + 'deg)'; };
        } else if (tipo === 'cartao') {
            item(300, 170, '<div style="padding:16px"><div style="font:12px var(--pixel);color:#fff">' + String(dados.nome || '').toUpperCase() + '</div><div style="font:8px var(--pixel);color:var(--amarelo);margin:10px 0 18px">' + String(dados.cargo || '').toUpperCase() + '</div><div>' + (dados.email || '') + '</div><div style="font:7px var(--pixel);color:var(--rosa);margin-top:16px">PRESS START ▶ CONTRATAR</div></div>');
            anim = function (t) { palco.style.transform = 'rotateY(' + Math.sin(t * 0.9) * 30 + 'deg) translateY(' + Math.sin(t * 1.3) * 8 + 'px)'; };
        } else if (tipo === 'orbe') {
            var aneis = [0, 1, 2].map(function (i) { var d = item(150 + i * 50, 150 + i * 50); d.style.borderRadius = '50%'; d.style.background = 'transparent'; d.style.borderColor = ['#ffd23f', '#ff4fa3', '#4de1ff'][i]; return d; });
            var nucleo = item(80, 80);
            nucleo.style.borderRadius = '50%';
            nucleo.style.background = 'radial-gradient(circle,#fff,#4de1ff 45%,transparent 70%)';
            var fala = 0, falaAlvo = 0;
            L.falar = function (n) { falaAlvo = n; };
            anim = function (t) {
                fala += (falaAlvo - fala) * 0.25;
                aneis.forEach(function (a, i) { a.style.transform = 'rotateX(' + (60 + i * 20) + 'deg) rotateZ(' + t * (40 + i * 30) * (1 + fala * 2) + 'deg)'; });
                nucleo.style.transform = 'scale(' + (1 + Math.sin(t * 2) * 0.06 + fala * 0.4) + ')';
            };
        } else if (tipo === 'rolinho') {
            var d = item(160, 180);
            d.style.border = '0'; d.style.background = 'transparent'; d.style.boxShadow = 'none';
            var cv = document.createElement('canvas');
            cv.width = 160; cv.height = 180;
            d.appendChild(cv);
            var cx = cv.getContext('2d');
            var q = 0;
            anim = function (t) {
                q++;
                cx.clearRect(0, 0, 160, 180);
                desenharRolinho(cx, 80, 70 - Math.abs(Math.sin(t * 5)) * 20, 50, q, Math.sin(t * 0.9) > 0 ? 1 : -1);
                palco.style.transform = 'translateX(' + Math.sin(t * 0.9) * 70 + 'px) rotateY(' + Math.sin(t * 1.2) * 30 + 'deg)';
            };
        } else if (tipo === 'confete') {
            var cores = ['#ffd23f', '#ff4fa3', '#4de1ff', '#5dffb0', '#ff8a3d', '#a98bff'];
            var ps = [];
            for (var k = 0; k < 90; k++) {
                var p = document.createElement('i');
                p.className = 'hl-pix';
                p.style.background = cores[k % 6];
                palco.appendChild(p);
                ps.push({ el: p, x: 0, y: 0, z: 0, vx: (Math.random() - 0.5) * 9, vy: -4 - Math.random() * 9, vz: Math.random() * 12 });
            }
            anim = function () {
                ps.forEach(function (o) {
                    o.vy += 0.35; o.x += o.vx; o.y += o.vy; o.z += o.vz;
                    o.el.style.transform = 'translate3d(' + o.x + 'px,' + o.y + 'px,' + o.z + 'px) rotate(' + o.z + 'deg)';
                });
            };
        }
        var t0 = performance.now();
        (function q() {
            if (!L.vivo) return;
            requestAnimationFrame(q);
            anim((performance.now() - t0) / 1000);
        })();
    }

    // =============================================================== API
    window.Holo = {
        D: D,
        icone: icone,
        toast: toast,
        falar: falar,
        bip: bip,
        vibrar: vibrar,
        notificar: notificar,
        abrir: abrir,
        fechar: fechar,
        festa: festa,
        sobrecarga: sobrecarga,
        glitch: glitch,
        estado: estado,
        registrar: function (id, def) { APPS[id] = def; if (!def.soDock) ordem.push(id); },
        pontos: somarPontos,
        placar: function () { return { pontos: pontos, recorde: recorde, conquistas: conquistas, lista: CONQUISTAS }; },
        conquistar: conquistar,
        projetar: projetar,
        desprojetar: desprojetar,
        holoIr: holoIr,
        holoAtivo: function () { return holoEstado ? holoEstado.tipo : null; },
        holo3d: function () { return holo3d; },
        pulsoFala: pulsoFala,
        desenharRolinho: desenharRolinho,
        atual: function () { return atual; },
        central: function (k, ligar) {
            var b = document.querySelector('.cc-btn[data-cc="' + k + '"]');
            if (b && b.classList.contains('ativo') !== ligar) b.click();
        },
        desbloquearJa: function () { if (!estado.desbloqueado) desbloquear(); },
    };
    if (/[?&]semtrava/.test(location.search)) setTimeout(function () { window.Holo.desbloquearJa(); }, 50);
})();

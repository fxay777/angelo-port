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
            ctx.strokeStyle = 'rgba(62,232,255,0.07)';
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
                ctx.fillStyle = 'rgba(159,244,255,' + (0.25 + p.r / 4) + ')';
                ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
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
    var DOCK = ['maia', 'projetos', 'contato', 'jogos'];
    function botaoApp(id, atraso) {
        var app = APPS[id];
        var b = document.createElement('button');
        b.type = 'button';
        b.className = 'app-icone' + (app.novo ? ' novo' : '');
        b.dataset.app = id;
        b.innerHTML = '<span class="hex" style="--cor:' + (app.cor || 'var(--ciano)') + '">' + icone(app.icone) + '</span><span>' + app.rotulo + '</span>';
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
        $('app-titulo').textContent = app.titulo || app.rotulo;
        $('app-status').textContent = app.status || '● ONLINE';
        var v = $('appview');
        v.classList.add('aberto');
        v.setAttribute('aria-hidden', 'false');
        var corpo = $('app-corpo');
        corpo.innerHTML = '';
        corpo.scrollTop = 0;
        bip([[520, 0.04], [780, 0.06]], 'sine', 0.03);
        aoFechar = app.montar(corpo) || null;
        if (!deHistorico) { try { history.pushState({ app: id }, ''); } catch (e) { /* ok */ } }
    }
    function fechar(silencioso) {
        if (!atual) return;
        if (typeof aoFechar === 'function') { try { aoFechar(); } catch (e) { /* ok */ } }
        aoFechar = null;
        atual = null;
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
            r.innerHTML = '<div class="r-logo">HOLOFONE</div><div>Núcleo superaquecido. Reiniciando…</div><div class="r-barra"><i></i></div><div style="font-size:11px;color:var(--texto-2)">(dica: 7 toques é demais)</div>';
            $('phone').appendChild(r);
            setTimeout(function () { r.remove(); bloquear(); }, 2400);
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
                    if (Date.now() - ultimoToque < 450) { pos = 0; festa(); }
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
        setTimeout(function () { document.body.classList.remove('festa'); }, 8000);
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
        desbloquearJa: function () { if (!estado.desbloqueado) desbloquear(); },
    };
    if (/[?&]semtrava/.test(location.search)) setTimeout(function () { window.Holo.desbloquearJa(); }, 50);
})();

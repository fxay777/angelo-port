// ============================================================================
// HoloFone — apps
//   Portfólio: Sobre, Experiência, Projetos, Contato, Currículo, Jogos
//   Novos: M.A.I.A. (assistente que fala), Scanner de Talentos (giroscópio),
//          Status do Editor, Teremim, Roteirista, Claquete
// ============================================================================
(function () {
    'use strict';
    var H = window.Holo;
    var D = H.D;
    function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
    function sorteia(l) { return l[Math.floor(Math.random() * l.length)]; }
    var primeiroNome = (D.nome || 'Miguel').split(' ')[0];

    // =================================================================== SOBRE
    H.registrar('sobre', {
        rotulo: 'Sobre', titulo: 'Sobre mim', icone: 'usuario',
        montar: function (el) {
            var s = D.sobre || {};
            var h = '<div class="pag">';
            h += '<div class="painel"><span class="etiqueta">Perfil</span><p>' + esc(s.intro || '') + '</p></div>';
            h += '<h2>Quem sou eu</h2>';
            (s.paragrafos || []).forEach(function (p, i) {
                h += '<p>' + esc(p) + '</p>';
                if (i === 1 && s.fotos && s.fotos[0]) h += '<img class="foto-holo" src="' + s.fotos[0].src + '" alt="' + esc(s.fotos[0].legenda) + '" loading="lazy"><div class="foto-legenda">' + esc(s.fotos[0].legenda) + '</div>';
            });
            h += '<h2>Hobbies</h2>';
            (s.hobbies || []).forEach(function (p) { h += '<p>' + esc(p) + '</p>'; });
            if (s.fotos && s.fotos[1]) h += '<img class="foto-holo" src="' + s.fotos[1].src + '" alt="' + esc(s.fotos[1].legenda) + '" loading="lazy"><div class="foto-legenda">' + esc(s.fotos[1].legenda) + '</div>';
            h += '<div class="chips" style="margin-top:14px"><button class="btn-holo" data-app="projetos">Ver trabalhos</button><button class="btn-holo contorno" data-app="contato">Contato</button></div>';
            h += '<p style="margin-top:22px;font-size:13px;color:var(--texto-2)">Cena 3D original: Henry Heffernan · Computador 3D: Mickael Boitte · Ambiente: Sean Nicolas.</p>';
            el.innerHTML = h + '</div>';
        },
    });

    // ============================================================= EXPERIÊNCIA
    H.registrar('experiencia', {
        rotulo: 'Carreira', titulo: 'Experiência', icone: 'maleta', cor: 'var(--ambar)',
        montar: function (el) {
            var x = D.experiencia || {};
            var h = '<div class="pag"><span class="etiqueta">' + esc(x.area || '') + '</span><p>' + esc(x.resumo || '') + '</p>';
            h += '<h2>Trabalhos</h2>';
            (x.trabalhos || []).forEach(function (t) {
                h += '<div class="painel"><span class="etiqueta">' + esc(t.funcao) + (t.periodo ? ' · ' + esc(t.periodo) : '') + '</span>';
                h += '<p style="font-size:20px;font-weight:700;margin-bottom:6px">' + esc(t.nome) + '</p><p>' + esc(t.descricao) + '</p>';
                if (t.links && t.links.length) {
                    h += '<div class="chips">';
                    t.links.forEach(function (l) { h += '<a class="chip" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.texto) + ' ↗</a>'; });
                    h += '</div>';
                }
                h += '</div>';
            });
            h += '<h2>Habilidades</h2>';
            (x.habilidades || []).forEach(function (s, i) {
                var nivel = [96, 90, 84, 88, 80, 94][i % 6];
                h += '<div class="painel"><span class="etiqueta">' + esc(s.nome) + '</span><p style="margin-bottom:8px">' + esc(s.desc) + '</p>' +
                    '<div style="height:6px;border-radius:3px;background:rgba(62,232,255,.12);overflow:hidden"><i style="display:block;height:100%;width:0;background:linear-gradient(90deg,var(--ciano),var(--verde));box-shadow:var(--brilho);transition:width 1.2s ' + (i * 0.12) + 's" data-nivel="' + nivel + '"></i></div></div>';
            });
            h += '<a class="btn-holo" href="' + esc(D.curriculo) + '" target="_blank" rel="noopener">Currículo em PDF</a></div>';
            el.innerHTML = h;
            requestAnimationFrame(function () { requestAnimationFrame(function () { el.querySelectorAll('[data-nivel]').forEach(function (b) { b.style.width = b.dataset.nivel + '%'; }); }); });
        },
    });

    // ================================================================ PROJETOS
    H.registrar('projetos', {
        rotulo: 'Projetos', titulo: 'Projetos', icone: 'filme', cor: 'var(--rosa)',
        montar: function (el) {
            var lista = D.videos || [];
            function galeria() {
                var h = '<div class="pag"><p>Toque num vídeo para assistir aqui mesmo.</p>';
                lista.forEach(function (v, i) {
                    h += '<button type="button" class="video-card" data-v="' + i + '"><div class="video-thumb"><img src="https://i.ytimg.com/vi/' + esc(v.yt) + '/hqdefault.jpg" alt="" loading="lazy" onerror="this.style.visibility=\'hidden\'"><span class="hud"></span><span class="play"></span></div>' +
                        '<div class="video-info"><small>' + esc(v.categoria || '') + '</small><b>' + esc(v.titulo) + '</b></div></button>';
                });
                el.innerHTML = h + '</div>';
                el.querySelectorAll('[data-v]').forEach(function (b) { b.addEventListener('click', function () { tocar(+b.dataset.v); }); });
            }
            function tocar(i) {
                var v = lista[i];
                el.innerHTML = '<div class="pag"><div class="player"><iframe src="https://www.youtube.com/embed/' + esc(v.yt) + '?autoplay=1&playsinline=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="' + esc(v.titulo) + '"></iframe></div>' +
                    '<span class="etiqueta">' + esc(v.categoria || '') + '</span><p style="font-size:21px;font-weight:700;margin-bottom:6px">' + esc(v.titulo) + '</p><p>' + esc(v.texto || '') + '</p>' +
                    '<div class="chips"><button class="btn-holo contorno" data-acao="lista">‹ Todos os vídeos</button>' + (lista.length > 1 ? '<button class="btn-holo" data-acao="prox">Próximo ›</button>' : '') + '</div></div>';
                el.querySelector('[data-acao="lista"]').addEventListener('click', galeria);
                var p = el.querySelector('[data-acao="prox"]');
                if (p) p.addEventListener('click', function () { tocar((i + 1) % lista.length); });
                el.scrollTop = 0;
            }
            galeria();
        },
    });

    // ================================================================= CONTATO
    H.registrar('contato', {
        rotulo: 'Contato', titulo: 'Contato', icone: 'email', cor: 'var(--verde)',
        montar: function (el) {
            el.innerHTML = '<div class="pag"><p>Quer conversar sobre um projeto, uma vaga ou só dar um oi? Manda uma mensagem holográfica:</p>' +
                '<label class="campo"><span>Nome</span><input id="c-nome" autocomplete="name"></label>' +
                '<label class="campo"><span>E-mail</span><input id="c-email" type="email" autocomplete="email" inputmode="email"></label>' +
                '<label class="campo"><span>Mensagem</span><textarea id="c-msg" rows="4"></textarea></label>' +
                '<button class="btn-holo" id="c-enviar" style="width:100%">Transmitir mensagem</button><div class="form-status" id="c-status"></div>' +
                '<div class="painel" style="margin-top:18px"><span class="etiqueta">Canal direto</span><p style="margin:0"><a href="mailto:' + esc(D.email) + '" style="color:var(--ciano)">' + esc(D.email) + '</a></p></div></div>';
            var st = el.querySelector('#c-status');
            el.querySelector('#c-enviar').addEventListener('click', function () {
                var nome = el.querySelector('#c-nome').value.trim();
                var email = el.querySelector('#c-email').value.trim();
                var msg = el.querySelector('#c-msg').value.trim();
                if (!nome || !msg || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { st.className = 'form-status erro'; st.textContent = 'Preencha nome, um e-mail válido e a mensagem.'; return; }
                st.className = 'form-status'; st.textContent = 'Codificando sinal... transmitindo...';
                fetch('https://formsubmit.co/ajax/' + D.email, {
                    method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                    body: JSON.stringify({ nome: nome, email: email, mensagem: msg, _subject: 'Mensagem do HoloFone — ' + nome, _template: 'table' }),
                }).then(function (r) { return r.json(); }).then(function (d) {
                    if (String(d && d.success) !== 'true') throw new Error('x');
                    st.className = 'form-status ok'; st.textContent = 'Transmissão recebida! ✓ O Miguel responde em breve.';
                    H.bip([[880, 0.08], [1320, 0.16]]);
                }).catch(function () {
                    st.className = 'form-status erro'; st.textContent = 'Sinal fraco — abrindo seu app de e-mail...';
                    location.href = 'mailto:' + D.email + '?subject=' + encodeURIComponent('Contato pelo portfólio — ' + nome) + '&body=' + encodeURIComponent(msg + '\n\n— ' + nome + ' (' + email + ')');
                });
            });
        },
    });

    // =============================================================== CURRÍCULO
    H.registrar('curriculo', { rotulo: 'Currículo', icone: 'doc', link: D.curriculo });

    // ================================================================= M.A.I.A.
    var RESPOSTAS = [
        [/quem|miguel|sobre|apresent/, function () { return 'O ' + D.nome + ' é ' + (D.cargo || '').toLowerCase() + ', formado pela Estácio, especialista em edição de vídeo. Trabalha com clientes do Brasil e de fora — e fala inglês fluente desde os 12 anos (certificado de Cambridge!).'; }, ['Mostra os vídeos', 'Ele faz freelance?', 'Como falo com ele?']],
        [/v[ií]deo|projeto|trabalho|portf|showreel/, function () { setTimeout(function () { H.abrir('projetos'); }, 1600); return 'Claro! Abrindo os projetos... Recomendo começar pelo showreel. 🍿'; }, []],
        [/contat|falar|email|e-mail|contrat|vaga|freela|or[cç]amento/, function () { setTimeout(function () { H.abrir('contato'); }, 1800); return 'Ótima ideia! Ele faz freelance sim, inclusive para clientes internacionais. Vou abrir o contato pra você. 📡'; }, []],
        [/ingl[eê]s|english|cambridge/, function () { return 'Yes! O Miguel tirou o certificado de proficiência de Cambridge aos 12 anos, em 2014. A motivação? Uma certa série britânica de ficção científica... 👀'; }, ['Que série?', 'Ele é bom mesmo?']],
        [/s[ée]rie|doctor|who|tardis|sonic|s[oô]nic/, function () { return 'Não posso dar spoilers, mas digamos que envolve uma cabine azul que é maior por dentro. 😉 Allons-y!'; }, ['Conta uma piada', 'Modo festa']],
        [/bom|talent|confi|recomend|vale/, function () { return 'Analisei 4.096 frames do trabalho dele e meu veredito é: contrata. Minha análise é 100% imparcial. (Fui programada por ele, mas isso é detalhe.)'; }, ['Mostra os vídeos', 'Como falo com ele?']],
        [/piada|engra|rir|humor/, function () { return sorteia(['Por que o editor levou uma escada pro trabalho? Pra subir o nível do áudio. 🥁', 'Qual o filme favorito do editor? "O Render Infinito". Ainda tá em 99%.', 'O cliente pediu "algo mais minimalista". Entreguei uma tela preta. Ele pediu pra aumentar o logo.']); }, ['Outra piada', 'Modo festa']],
        [/festa|party|dan[cç]/, function () { setTimeout(H.festa, 900); return 'Ativando protocolo de festa! 🎉'; }, []],
        [/rolinho/, function () { return 'O Rolinho é o mascote do Miguel: um rolo de filme com tênis vermelho. Ele mora no computador da sala e dá fichas pro fliperama. 🎞️'; }, []],
        [/caf[eé]/, function () { return 'Nível de café do editor: 87%. Abaixo de 20% a qualidade da correção de cor cai drasticamente. Dados científicos. ☕'; }, []],
        [/voc[eê]|maia|quem [eé] voc/, function () { return 'Eu sou a M.A.I.A. — Miguel Angelo Inteligência Assistente. Sou feita de JavaScript, café e muito carinho. 💙'; }, ['Quem é o Miguel?', 'Conta uma piada']],
        [/oi|ol[aá]|e a[ií]|bom dia|boa tarde|boa noite/, function () { return 'Oi! 👋 Em que posso ajudar? Posso falar do Miguel, mostrar os vídeos ou contar uma piada ruim.'; }, ['Quem é o Miguel?', 'Mostra os vídeos', 'Conta uma piada']],
        [/obrigad|valeu|thanks/, function () { return 'Disponha! Se precisar, é só chamar. E não esquece de falar com o Miguel. 😉'; }, []],
    ];
    var historicoMaia = [];
    H.registrar('maia', {
        rotulo: 'M.A.I.A.', titulo: 'M.A.I.A. — assistente', icone: 'maia', novo: true, status: '◉ OUVINDO',
        montar: function (el) {
            el.innerHTML = '<div style="display:flex;flex-direction:column;height:100%">' +
                '<div id="m-chat" style="flex:1;overflow-y:auto;padding:14px 14px 6px"></div>' +
                '<div class="chips" id="m-chips" style="padding:6px 14px"></div>' +
                '<div style="display:flex;gap:8px;padding:10px 14px 14px;border-top:1px solid var(--borda)">' +
                '<input id="m-in" placeholder="Pergunte algo à M.A.I.A..." style="flex:1;padding:12px;border-radius:12px;border:1px solid var(--borda);background:rgba(2,10,18,.7);color:var(--texto);font-size:17px;outline:none">' +
                '<button class="btn-holo" id="m-env" aria-label="Enviar">➤</button></div></div>';
            var chat = el.querySelector('#m-chat');
            var chips = el.querySelector('#m-chips');
            var inp = el.querySelector('#m-in');
            function balao(txt, eu) {
                var b = document.createElement('div');
                b.style.cssText = 'max-width:84%;margin:0 0 10px;padding:10px 13px;border-radius:16px;font-size:17px;line-height:1.35;' +
                    (eu ? 'margin-left:auto;background:rgba(255,184,77,.15);border:1px solid rgba(255,184,77,.4);border-bottom-right-radius:4px'
                        : 'background:rgba(62,232,255,.1);border:1px solid var(--borda);border-bottom-left-radius:4px');
                chat.appendChild(b);
                if (eu) { b.textContent = txt; chat.scrollTop = chat.scrollHeight; return; }
                var i = 0;
                b.textContent = '▍';
                (function digita() {
                    if (!b.isConnected) return;
                    if (i <= txt.length) { b.textContent = txt.slice(0, i) + (i < txt.length ? '▍' : ''); i += 2; chat.scrollTop = chat.scrollHeight; setTimeout(digita, 16); }
                })();
            }
            function sugestoes(l) {
                chips.innerHTML = '';
                l.forEach(function (t) {
                    var c = document.createElement('button');
                    c.className = 'chip';
                    c.textContent = t;
                    c.addEventListener('click', function () { perguntar(t); });
                    chips.appendChild(c);
                });
            }
            function perguntar(txt) {
                if (!txt.trim()) return;
                balao(txt, true);
                historicoMaia.push(txt);
                inp.value = '';
                sugestoes([]);
                var t = txt.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
                var achou = null;
                for (var i = 0; i < RESPOSTAS.length; i++) {
                    var re = new RegExp(RESPOSTAS[i][0].source.normalize('NFD').replace(/[̀-ͯ]/g, ''), 'i');
                    if (re.test(t)) { achou = RESPOSTAS[i]; break; }
                }
                var resp = achou ? achou[1]() : sorteia([
                    'Hmm, essa eu não sei. Mas sei que o Miguel edita vídeos muito bem. Isso ajuda? 😅',
                    'Processando... processando... Não encontrei. Tente perguntar sobre vídeos, contato ou o Miguel!',
                    'Pergunta interessante! Vou fingir que entendi e sugerir: veja os projetos. 🎬',
                ]);
                setTimeout(function () {
                    H.bip([[990, 0.05]], 'sine', 0.03);
                    balao(resp, false);
                    H.falar(resp);
                    sugestoes(achou && achou[2].length ? achou[2] : ['Quem é o Miguel?', 'Mostra os vídeos', 'Conta uma piada']);
                }, 500 + Math.random() * 400);
            }
            el.querySelector('#m-env').addEventListener('click', function () { perguntar(inp.value); });
            inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') perguntar(inp.value); });
            setTimeout(function () {
                var oi = 'Olá, visitante! Eu sou a M.A.I.A., a assistente do ' + primeiroNome + '. O que você quer saber?';
                balao(oi, false);
                H.falar(oi);
                sugestoes(['Quem é o Miguel?', 'Mostra os vídeos', 'Ele é bom mesmo?', 'Conta uma piada']);
            }, 250);
            return function () { try { speechSynthesis.cancel(); } catch (e) { /* ok */ } };
        },
    });

    // ===================================================== SCANNER DE TALENTOS
    var ALVOS = [
        ['EDIÇÃO', 'Premiere, DaVinci Resolve, Vegas Pro — cortes com ritmo.'],
        ['COR', 'Tratamento e correção de cor cinematográfica.'],
        ['ROTEIRO', 'Narrativas que prendem desde o primeiro segundo.'],
        ['INGLÊS', 'Fluente — certificado de Cambridge aos 12 anos.'],
        ['DESIGN', 'Photoshop e Canva para thumbnails e identidade visual.'],
        ['ACESSIBILIDADE', 'Libras, legendagem e audiodescrição.'],
    ];
    H.registrar('scanner', {
        rotulo: 'Scanner', titulo: 'Scanner de talentos', icone: 'scanner', cor: 'var(--verde)', novo: true, status: '◎ RASTREANDO',
        montar: function (el) {
            el.style.overflow = 'hidden';
            el.innerHTML = '<div id="sc" style="position:absolute;inset:0;overflow:hidden;touch-action:none">' +
                '<canvas id="sc-c" style="position:absolute;inset:0;width:100%;height:100%"></canvas>' +
                '<div id="sc-info" style="position:absolute;left:12px;right:12px;bottom:12px;padding:10px 12px;border-radius:14px;background:var(--vidro-forte);border:1px solid var(--borda);font-size:16px;min-height:62px"></div>' +
                '<div style="position:absolute;top:10px;left:12px;font:700 11px Orbitron;letter-spacing:1.5px;color:var(--verde)" id="sc-cont"></div></div>';
            var c = el.querySelector('#sc-c');
            var ctx = c.getContext('2d');
            var info = el.querySelector('#sc-info');
            var cont = el.querySelector('#sc-cont');
            var W, Hh;
            function ajustar() { W = c.width = c.clientWidth; Hh = c.height = c.clientHeight; }
            ajustar();
            // mundo virtual 3x maior que a tela; a "câmera" anda com o giroscópio ou arrastando
            var mundo = { w: 1100, h: 1400 };
            var cam = { x: mundo.w / 2, y: mundo.h / 2 };
            var alvos = ALVOS.map(function (a, i) {
                return { nome: a[0], desc: a[1], x: 140 + (i % 3) * 400 + Math.random() * 80, y: 200 + Math.floor(i / 3) * 700 + Math.random() * 120, achado: false, carga: 0 };
            });
            var achados = 0;
            var giroOk = false;
            info.innerHTML = '<b style="color:var(--ciano)">Incline o celular</b> (ou arraste a tela) para procurar talentos escondidos. Pare a mira em cima de um sinal para analisar.';
            function onGiro(e) {
                if (e.gamma === null) return;
                giroOk = true;
                cam.x = mundo.w / 2 + Math.max(-1, Math.min(1, e.gamma / 35)) * (mundo.w / 2 - W / 2);
                cam.y = mundo.h / 2 + Math.max(-1, Math.min(1, (e.beta - 45) / 35)) * (mundo.h / 2 - Hh / 2);
            }
            window.addEventListener('deviceorientation', onGiro);
            var arr = null;
            c.addEventListener('pointerdown', function (e) { arr = [e.clientX, e.clientY, cam.x, cam.y]; c.setPointerCapture(e.pointerId); });
            c.addEventListener('pointermove', function (e) {
                if (!arr) return;
                cam.x = Math.max(W / 2, Math.min(mundo.w - W / 2, arr[2] - (e.clientX - arr[0]) * 1.4));
                cam.y = Math.max(Hh / 2, Math.min(mundo.h - Hh / 2, arr[3] - (e.clientY - arr[1]) * 1.4));
            });
            c.addEventListener('pointerup', function () { arr = null; });
            var vivo = true;
            var t = 0;
            (function q() {
                if (!vivo) return;
                requestAnimationFrame(q);
                t++;
                ctx.fillStyle = '#020a10';
                ctx.fillRect(0, 0, W, Hh);
                var ox = cam.x - W / 2;
                var oy = cam.y - Hh / 2;
                // grade do mundo
                ctx.strokeStyle = 'rgba(93,255,176,0.08)';
                for (var gx = -(ox % 60); gx < W; gx += 60) { ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, Hh); ctx.stroke(); }
                for (var gy = -(oy % 60); gy < Hh; gy += 60) { ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(W, gy); ctx.stroke(); }
                // ruído
                for (var k = 0; k < 40; k++) { ctx.fillStyle = 'rgba(93,255,176,' + Math.random() * 0.15 + ')'; ctx.fillRect(Math.random() * W, Math.random() * Hh, 2, 2); }
                var mx = W / 2;
                var my = Hh / 2 - 30;
                var foco = null;
                alvos.forEach(function (a) {
                    var sx = a.x - ox;
                    var sy = a.y - oy;
                    if (sx < -60 || sy < -60 || sx > W + 60 || sy > Hh + 60) return;
                    var d = Math.hypot(sx - mx, sy - my);
                    var pulso = 8 + Math.sin(t / 8) * 3;
                    ctx.strokeStyle = a.achado ? 'rgba(255,184,77,0.9)' : 'rgba(93,255,176,0.6)';
                    ctx.lineWidth = 2;
                    ctx.beginPath(); ctx.arc(sx, sy, pulso + (a.achado ? 6 : 0), 0, Math.PI * 2); ctx.stroke();
                    ctx.fillStyle = a.achado ? '#ffb84d' : 'rgba(93,255,176,0.9)';
                    ctx.beginPath(); ctx.arc(sx, sy, 3, 0, Math.PI * 2); ctx.fill();
                    if (a.achado) { ctx.font = '700 13px Orbitron'; ctx.fillText(a.nome, sx + 18, sy + 4); }
                    if (d < 46 && !a.achado) foco = a;
                });
                // mira
                ctx.strokeStyle = foco ? '#ffb84d' : '#3ee8ff';
                ctx.lineWidth = 2;
                var r = 44 + (foco ? Math.sin(t / 3) * 3 : 0);
                ctx.beginPath(); ctx.arc(mx, my, r, 0, Math.PI * 2); ctx.stroke();
                [[0, -1], [0, 1], [-1, 0], [1, 0]].forEach(function (v) { ctx.beginPath(); ctx.moveTo(mx + v[0] * (r - 10), my + v[1] * (r - 10)); ctx.lineTo(mx + v[0] * (r + 14), my + v[1] * (r + 14)); ctx.stroke(); });
                if (foco) {
                    foco.carga += 1;
                    ctx.strokeStyle = '#ffb84d';
                    ctx.lineWidth = 4;
                    ctx.beginPath(); ctx.arc(mx, my, r + 8, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(1, foco.carga / 55)); ctx.stroke();
                    if (foco.carga >= 55) {
                        foco.achado = true;
                        achados++;
                        H.bip([[880, 0.07], [1175, 0.07], [1568, 0.12]], 'square', 0.04);
                        H.vibrar(40);
                        info.innerHTML = '<span class="etiqueta">Talento identificado · ' + achados + '/' + alvos.length + '</span><br><b style="font-size:19px">' + foco.nome + '</b> — ' + esc(foco.desc);
                        if (achados === alvos.length) {
                            setTimeout(function () {
                                info.innerHTML = '<span class="etiqueta" style="color:var(--verde)">Análise completa ✓</span><br><b>Candidato altamente recomendado.</b> Probabilidade de vídeo incrível: 99,9%. <button class="btn-holo" data-app="contato" style="margin-top:8px;padding:8px 12px">Falar com ele</button>';
                                H.festa();
                            }, 1400);
                        }
                    }
                } else alvos.forEach(function (a) { if (!a.achado) a.carga = Math.max(0, a.carga - 2); });
                // radar mini
                ctx.strokeStyle = 'rgba(62,232,255,0.5)';
                ctx.lineWidth = 1;
                ctx.strokeRect(W - 72, 10, 60, 76);
                alvos.forEach(function (a) { ctx.fillStyle = a.achado ? '#ffb84d' : '#5dffb0'; ctx.fillRect(W - 72 + a.x / mundo.w * 60 - 1.5, 10 + a.y / mundo.h * 76 - 1.5, 3, 3); });
                ctx.strokeStyle = '#3ee8ff';
                ctx.strokeRect(W - 72 + ox / mundo.w * 60, 10 + oy / mundo.h * 76, W / mundo.w * 60, Hh / mundo.h * 76);
                cont.textContent = 'TALENTOS: ' + achados + '/' + alvos.length + (giroOk ? ' · GIROSCÓPIO' : ' · ARRASTE');
            })();
            return function () { vivo = false; window.removeEventListener('deviceorientation', onGiro); };
        },
    });

    // ========================================================= STATUS DO EDITOR
    H.registrar('status', {
        rotulo: 'Status', titulo: 'Status do editor', icone: 'status', cor: 'var(--ambar)', status: '▲ ESTÁVEL',
        montar: function (el) {
            var itens = [
                ['CAFÉ', 87, '%', 'var(--ambar)'], ['CRIATIVIDADE', 100, '∞', 'var(--ciano)'], ['PACIÊNCIA C/ CLIENTE', 42, '%', 'var(--rosa)'],
                ['FOCO', 76, '%', 'var(--verde)'], ['SONO', 18, '%', '#8a7dff'], ['INSPIRAÇÃO', 93, '%', 'var(--ciano)'],
            ];
            var h = '<div class="pag"><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px">';
            itens.forEach(function (it, i) {
                var C = 2 * Math.PI * 34;
                h += '<div class="painel" style="padding:10px 4px;text-align:center;margin:0"><svg viewBox="0 0 80 80" width="76" height="76">' +
                    '<circle cx="40" cy="40" r="34" fill="none" stroke="rgba(62,232,255,.12)" stroke-width="6"/>' +
                    '<circle cx="40" cy="40" r="34" fill="none" stroke="' + it[3] + '" stroke-width="6" stroke-linecap="round" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '" transform="rotate(-90 40 40)" data-off="' + (C * (1 - it[1] / 100)) + '" style="transition:stroke-dashoffset 1.4s ' + (i * 0.1) + 's;filter:drop-shadow(0 0 4px ' + it[3] + ')"/>' +
                    '<text x="40" y="46" text-anchor="middle" fill="#d9f7ff" font-family="Orbitron" font-weight="700" font-size="' + (it[2] === '∞' ? 22 : 16) + '">' + (it[2] === '∞' ? '∞' : it[1] + '%') + '</text></svg>' +
                    '<div style="font:700 10px Orbitron;letter-spacing:1px;color:var(--texto-2);margin-top:2px">' + it[0] + '</div></div>';
            });
            h += '</div><div class="painel" style="margin-top:12px"><span class="etiqueta">Fila de render</span><div id="st-render" style="font-size:16px"></div></div>' +
                '<div class="painel"><span class="etiqueta">Registro do sistema</span><div id="st-log" style="font:15px monospace;color:var(--verde);min-height:130px;white-space:pre-wrap"></div></div>' +
                '<button class="btn-holo" id="st-diag" style="width:100%">Rodar diagnóstico</button></div>';
            el.innerHTML = h;
            requestAnimationFrame(function () { requestAnimationFrame(function () { el.querySelectorAll('[data-off]').forEach(function (c) { c.style.strokeDashoffset = c.dataset.off; }); }); });
            var render = el.querySelector('#st-render');
            var p = 0;
            var timer = setInterval(function () {
                p = p < 99 ? p + 3 : 99;
                render.innerHTML = 'final_FINAL_v8_agoravai.mp4<div style="height:8px;border-radius:4px;background:rgba(62,232,255,.12);margin-top:6px;overflow:hidden"><i style="display:block;height:100%;width:' + p + '%;background:var(--ciano)"></i></div><small style="color:var(--texto-2)">' + p + '% ' + (p === 99 ? '— travado em 99% desde 2019. Normal.' : '') + '</small>';
            }, 120);
            var log = el.querySelector('#st-log');
            el.querySelector('#st-diag').addEventListener('click', function () {
                log.textContent = '';
                var linhas = ['> Verificando cafeína...... OK', '> Verificando criatividade... ESTOURO DE ESCALA', '> Verificando prazos......... ⚠ "ontem"', '> Inglês (Cambridge)......... OK', '> Plugin de transições....... desativado (bom gosto)', '> Contratável............... SIM ✓', '', 'Diagnóstico: editor em perfeito estado.'];
                var i = 0;
                (function prox() { if (i < linhas.length) { log.textContent += linhas[i++] + '\n'; H.bip([[1400, 0.02]], 'square', 0.02); setTimeout(prox, 330); } })();
            });
            return function () { clearInterval(timer); };
        },
    });

    // ================================================================= TEREMIM
    H.registrar('teremim', {
        rotulo: 'Teremim', titulo: 'Teremim holográfico', icone: 'onda', cor: '#b48cff', novo: true, status: '♪ AO VIVO',
        montar: function (el) {
            el.style.overflow = 'hidden';
            el.innerHTML = '<div style="position:absolute;inset:0;touch-action:none" id="tm"><canvas id="tm-c" style="position:absolute;inset:0;width:100%;height:100%"></canvas>' +
                '<div style="position:absolute;top:12px;left:12px;right:12px;display:flex;justify-content:space-between;align-items:center;pointer-events:none"><span style="font-size:15px;color:var(--texto-2)">Arraste o dedo: ↔ nota · ↕ volume</span></div>' +
                '<div style="position:absolute;bottom:12px;left:12px;right:12px;display:flex;gap:8px">' +
                '<button class="chip" data-m="espacial">🛸 Espacial</button><button class="chip" data-m="afinado">🎹 Afinado</button><button class="chip" data-m="8bit">👾 8-bit</button></div></div>';
            var c = el.querySelector('#tm-c');
            var ctx = c.getContext('2d');
            var W = c.width = c.clientWidth;
            var Hh = c.height = c.clientHeight;
            var modo = 'espacial';
            var A = null, o = null, g = null, lfo = null;
            var ondas = [];
            var dedo = null;
            el.querySelectorAll('[data-m]').forEach(function (b) {
                b.addEventListener('click', function () {
                    modo = b.dataset.m;
                    el.querySelectorAll('[data-m]').forEach(function (x) { x.style.borderColor = x === b ? 'var(--ciano)' : ''; });
                    H.toast({ espacial: 'Modo espacial: o som de todo disco voador de filme antigo 🛸', afinado: 'Modo afinado: só notas da escala maior 🎹', '8bit': 'Modo 8-bit: trilha de fliperama 👾' }[modo]);
                });
            });
            el.querySelector('[data-m="espacial"]').style.borderColor = 'var(--ciano)';
            var ESCALA = [261.6, 293.7, 329.6, 349.2, 392, 440, 493.9, 523.3, 587.3, 659.3, 698.5, 784, 880];
            function freq(x) {
                var p = x / W;
                if (modo === 'afinado' || modo === '8bit') return ESCALA[Math.min(ESCALA.length - 1, Math.floor(p * ESCALA.length))];
                return 180 * Math.pow(2, p * 3);
            }
            function ligar(x, y) {
                try {
                    A = A || new (window.AudioContext || window.webkitAudioContext)();
                    if (A.state === 'suspended') A.resume();
                    o = A.createOscillator();
                    g = A.createGain();
                    o.type = modo === '8bit' ? 'square' : 'sine';
                    if (modo === 'espacial') {
                        lfo = A.createOscillator();
                        var lg = A.createGain();
                        lfo.frequency.value = 6;
                        lg.gain.value = 9;
                        lfo.connect(lg).connect(o.frequency);
                        lfo.start();
                    }
                    g.gain.value = 0.0001;
                    o.connect(g).connect(A.destination);
                    o.start();
                    mover(x, y);
                } catch (e) { /* sem áudio */ }
            }
            function mover(x, y) {
                dedo = [x, y];
                if (!o) return;
                o.frequency.setTargetAtTime(freq(x), A.currentTime, modo === 'espacial' ? 0.05 : 0.005);
                g.gain.setTargetAtTime(Math.max(0.0001, (1 - y / Hh) * (modo === '8bit' ? 0.06 : 0.14)), A.currentTime, 0.03);
                if (Math.random() < 0.5) ondas.push({ x: x, y: y, r: 4, a: 1 });
            }
            function desligar() {
                dedo = null;
                if (o) { try { g.gain.setTargetAtTime(0.0001, A.currentTime, 0.05); var oo = o, ll = lfo; setTimeout(function () { try { oo.stop(); if (ll) ll.stop(); } catch (e) { /* ok */ } }, 200); } catch (e) { /* ok */ } }
                o = null; lfo = null;
            }
            var area = el.querySelector('#tm');
            function pos(e) { var r = c.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; }
            area.addEventListener('pointerdown', function (e) { if (e.target.closest('button')) return; area.setPointerCapture(e.pointerId); var p = pos(e); ligar(p[0], p[1]); });
            area.addEventListener('pointermove', function (e) { if (dedo) { var p = pos(e); mover(p[0], p[1]); } });
            area.addEventListener('pointerup', desligar);
            area.addEventListener('pointercancel', desligar);
            var vivo = true;
            (function q() {
                if (!vivo) return;
                requestAnimationFrame(q);
                ctx.fillStyle = 'rgba(2,6,14,0.25)';
                ctx.fillRect(0, 0, W, Hh);
                ctx.strokeStyle = 'rgba(180,140,255,0.12)';
                for (var i = 0; i <= 12; i++) { var x = i / 12 * W; ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, Hh); ctx.stroke(); }
                ondas = ondas.filter(function (w) { return w.a > 0.02; });
                ondas.forEach(function (w) {
                    w.r += 3; w.a *= 0.95;
                    ctx.strokeStyle = 'rgba(180,140,255,' + w.a + ')';
                    ctx.lineWidth = 2;
                    ctx.beginPath(); ctx.arc(w.x, w.y, w.r, 0, Math.PI * 2); ctx.stroke();
                });
                if (dedo) {
                    var gr = ctx.createRadialGradient(dedo[0], dedo[1], 0, dedo[0], dedo[1], 60);
                    gr.addColorStop(0, 'rgba(200,170,255,0.9)');
                    gr.addColorStop(1, 'rgba(200,170,255,0)');
                    ctx.fillStyle = gr;
                    ctx.beginPath(); ctx.arc(dedo[0], dedo[1], 60, 0, Math.PI * 2); ctx.fill();
                    // onda senoidal atravessando a tela
                    ctx.strokeStyle = 'rgba(62,232,255,0.7)';
                    ctx.beginPath();
                    var f = freq(dedo[0]) / 60;
                    for (var px = 0; px < W; px += 4) ctx.lineTo(px, dedo[1] + Math.sin(px / W * Math.PI * 2 * f + Date.now() / 80) * 18 * (1 - dedo[1] / Hh + 0.2));
                    ctx.stroke();
                }
            })();
            return function () { vivo = false; desligar(); };
        },
    });

    // =============================================================== ROTEIRISTA
    var ROLOS = [
        ['Um editor de vídeo', 'Uma claquete falante', 'Um estagiário viajante do tempo', 'O Rolinho', 'Uma influencer de 1995', 'Um cliente indeciso', 'Uma IA que só fala em legendas'],
        ['preso num render infinito', 'que perdeu o HD do casamento', 'que descobre que é personagem de um vlog', 'que só pode falar em slow motion', 'contratado para filmar o fim do mundo', 'que viaja no tempo a cada corte seco', 'que precisa deixar o logo MAIOR'],
        ['precisa entregar tudo até ontem.', 'e o único aliado é um pato de borracha.', 'mas o plot twist é que era tudo um sonho... dentro de um storyboard.', 'e o filme ganha Oscar de melhor transição.', 'enquanto o café acaba no terceiro ato.', 'e descobre que a cabine azul era maior por dentro.', 'e tudo isso em formato vertical 9:16.'],
    ];
    H.registrar('roteiro', {
        rotulo: 'Roteirista', titulo: 'Gerador de roteiros', icone: 'roteiro', cor: 'var(--rosa)', novo: true, status: '✎ CRIANDO',
        montar: function (el) {
            el.innerHTML = '<div class="pag"><p>Puxe a alavanca e gere a premissa do seu próximo curta-metragem.</p>' +
                '<div id="rt-rolos" style="display:flex;flex-direction:column;gap:10px;margin:14px 0"></div>' +
                '<button class="btn-holo" id="rt-gira" style="width:100%">🎰 Gerar roteiro</button>' +
                '<div class="painel" id="rt-res" style="margin-top:14px;display:none"><span class="etiqueta">Logline aprovada</span><p id="rt-txt" style="font-size:19px;margin:6px 0 10px"></p>' +
                '<div class="chips"><button class="chip" id="rt-copiar">📋 Copiar</button><button class="chip" data-app="contato">🎬 Quero filmar isso</button></div></div></div>';
            var box = el.querySelector('#rt-rolos');
            var rolos = ROLOS.map(function (lista, i) {
                var r = document.createElement('div');
                r.className = 'painel';
                r.style.cssText = 'margin:0;padding:14px;font-size:18px;font-weight:700;text-align:center;min-height:56px;display:flex;align-items:center;justify-content:center';
                r.textContent = ['QUEM?', 'O QUÊ?', 'E AÍ?'][i];
                box.appendChild(r);
                return r;
            });
            var girando = false;
            var escolha = [];
            el.querySelector('#rt-gira').addEventListener('click', function () {
                if (girando) return;
                girando = true;
                el.querySelector('#rt-res').style.display = 'none';
                escolha = ROLOS.map(function (l) { return Math.floor(Math.random() * l.length); });
                rolos.forEach(function (r, i) {
                    var n = 0;
                    var total = 12 + i * 8;
                    (function gira() {
                        r.textContent = sorteia(ROLOS[i]);
                        r.style.color = 'var(--texto-2)';
                        H.bip([[300 + i * 120, 0.02]], 'square', 0.015);
                        if (++n < total) setTimeout(gira, 50 + n * 4);
                        else {
                            r.textContent = ROLOS[i][escolha[i]];
                            r.style.color = 'var(--ciano)';
                            H.bip([[700 + i * 200, 0.08]], 'sine', 0.04);
                            if (i === rolos.length - 1) {
                                girando = false;
                                var txt = ROLOS.map(function (l, k) { return l[escolha[k]]; }).join(' ');
                                el.querySelector('#rt-txt').textContent = '"' + txt + '"';
                                el.querySelector('#rt-res').style.display = 'block';
                                H.vibrar(30);
                            }
                        }
                    })();
                });
            });
            el.querySelector('#rt-copiar').addEventListener('click', function () {
                var t = el.querySelector('#rt-txt').textContent;
                try { navigator.clipboard.writeText(t); H.toast('Copiado! Agora é só contratar um editor. 😉'); } catch (e) { H.toast('Não consegui copiar 😅'); }
            });
        },
    });

    // ================================================================ CLAQUETE
    H.registrar('claquete', {
        rotulo: 'Claquete', titulo: 'Claquete digital', icone: 'claquete', status: '● REC',
        montar: function (el) {
            var cena = 26;
            var take = 1;
            el.innerHTML = '<div class="pag" style="display:flex;flex-direction:column;align-items:center;gap:16px;padding-top:24px">' +
                '<button id="cq" style="width:300px;touch-action:manipulation" aria-label="Bater a claquete"><svg viewBox="0 0 300 260" width="300" height="260">' +
                '<g id="cq-bastao" style="transform-origin:12px 70px;transition:transform .08s"><rect x="10" y="40" width="282" height="34" rx="4" fill="#111" stroke="#3ee8ff" stroke-width="2"/>' +
                '<g fill="#d9f7ff">' + [0, 1, 2, 3, 4, 5].map(function (i) { return '<polygon points="' + (24 + i * 46) + ',40 ' + (48 + i * 46) + ',40 ' + (34 + i * 46) + ',74 ' + (10 + i * 46) + ',74"/>'; }).join('') + '</g></g>' +
                '<rect x="10" y="78" width="282" height="168" rx="8" fill="#0b141c" stroke="#3ee8ff" stroke-width="2"/>' +
                '<g font-family="Orbitron" font-weight="700" fill="#8fb8c6" font-size="12"><text x="24" y="104">PRODUÇÃO</text><text x="24" y="150">CENA</text><text x="158" y="150">TAKE</text><text x="24" y="206">DIREÇÃO</text></g>' +
                '<g font-family="Rajdhani" font-weight="700" fill="#d9f7ff"><text x="24" y="128" font-size="22">PORTFÓLIO 2026</text><text id="cq-cena" x="24" y="182" font-size="34">26</text><text id="cq-take" x="158" y="182" font-size="34">1</text><text x="24" y="232" font-size="22">M. ANGELO</text></g>' +
                '<line x1="10" y1="160" x2="292" y2="160" stroke="#3ee8ff" stroke-opacity=".3"/><line x1="148" y1="136" x2="148" y2="190" stroke="#3ee8ff" stroke-opacity=".3"/></svg></button>' +
                '<p style="text-align:center;color:var(--texto-2)">Toque para bater · segure para mudar de cena</p><div id="cq-msg" style="font:700 22px Orbitron;letter-spacing:2px;color:var(--ambar);min-height:30px"></div></div>';
            var b = el.querySelector('#cq');
            var bastao = el.querySelector('#cq-bastao');
            var msg = el.querySelector('#cq-msg');
            bastao.style.transform = 'rotate(-18deg)';
            var seg = null;
            var segurou = false;
            function clap() {
                var A;
                try {
                    A = new (window.AudioContext || window.webkitAudioContext)();
                    var n = A.sampleRate * 0.12;
                    var buf = A.createBuffer(1, n, A.sampleRate);
                    var d = buf.getChannelData(0);
                    for (var i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 4);
                    var s = A.createBufferSource();
                    s.buffer = buf;
                    s.connect(A.destination);
                    s.start();
                    setTimeout(function () { A.close(); }, 400);
                } catch (e) { /* ok */ }
            }
            b.addEventListener('pointerdown', function () {
                segurou = false;
                seg = setTimeout(function () {
                    segurou = true;
                    cena++;
                    take = 1;
                    el.querySelector('#cq-cena').textContent = cena;
                    el.querySelector('#cq-take').textContent = take;
                    msg.textContent = 'CENA ' + cena + '!';
                    H.vibrar(60);
                }, 650);
            });
            b.addEventListener('pointerup', function () {
                clearTimeout(seg);
                if (segurou) return;
                bastao.style.transform = 'rotate(0deg)';
                setTimeout(clap, 60);
                H.vibrar(25);
                document.getElementById('phone').animate([{ filter: 'brightness(2.2)' }, { filter: 'none' }], { duration: 220 });
                msg.textContent = sorteia(['AÇÃO!', 'GRAVANDO!', 'VALENDO!', 'AÇÃO! 🎬']);
                setTimeout(function () {
                    if (!b.isConnected) return;
                    bastao.style.transform = 'rotate(-18deg)';
                    take++;
                    el.querySelector('#cq-take').textContent = take;
                    if (take === 10) H.toast('Take 10? O ator tá precisando de café. ☕');
                    if (take === 30) H.toast('Take 30. É, vamos usar o take 1 mesmo.');
                }, 500);
            });
        },
    });

    // =================================================================== JOGOS
    var dos = null;
    var tetrisLimpa = null;
    H.registrar('jogos', {
        rotulo: 'Jogos', titulo: 'Jogos', icone: 'jogo', cor: '#8a7dff',
        montar: function (el) {
            var JOGOS = [['tetris', 'Tetris', 'tetrisIcon'], ['doom', 'Doom', 'doomIcon'], ['wolf3d', 'Wolfenstein 3D', 'wolf3dIcon'], ['digger', 'Digger', 'diggerIcon'], ['scrabble', 'Scrabble', 'scrabbleIcon']];
            function menu() {
                el.innerHTML = '<div class="pag"><p>Clássicos rodando de verdade no navegador. Os de DOS ficam melhores com o celular deitado.</p><div class="lista-jogos">' +
                    JOGOS.map(function (j) { return '<button class="jogo" data-j="' + j[0] + '"><img src="/static/icons/' + j[2] + '.png" alt="">' + j[1] + '</button>'; }).join('') + '</div></div>';
                el.querySelectorAll('[data-j]').forEach(function (b) { b.addEventListener('click', function () { jogar(b.dataset.j); }); });
            }
            function jogar(id) {
                parar();
                if (id === 'tetris') {
                    el.innerHTML = '<div class="tetris-wrap"><div id="t-score">Pontos: 0</div><canvas id="t-canvas"></canvas>' +
                        '<div class="pad"><button data-k="ArrowLeft">◀</button><button data-k="ArrowUp">⟳</button><button data-k="ArrowDown">▼</button><button data-k="ArrowRight">▶</button><button class="wide" data-k=" ">SOLTAR</button></div></div>';
                    tetrisLimpa = initTetris(el.querySelector('#t-canvas'), el.querySelector('#t-score'), null, function () {});
                    el.querySelectorAll('.pad button').forEach(function (b) {
                        var press = function (e) { e.preventDefault(); document.dispatchEvent(new KeyboardEvent('keydown', { key: b.dataset.k })); };
                        b.addEventListener('touchstart', press, { passive: false });
                        b.addEventListener('mousedown', press);
                    });
                    return;
                }
                el.innerHTML = '<div class="dos-root"></div>';
                H.toast('Dica: deite o celular para jogar melhor');
                requestAnimationFrame(function () {
                    // eslint-disable-next-line no-undef
                    dos = Dos(el.firstChild);
                    dos.run('/static/jsdos/' + id + '.jsdos');
                });
            }
            function parar() {
                if (dos) { var d = dos; dos = null; try { d.stop().catch(function () {}); } catch (e) { /* ok */ } }
                if (tetrisLimpa) { try { tetrisLimpa(); } catch (e) { /* ok */ } tetrisLimpa = null; }
            }
            menu();
            return parar;
        },
    });

    // frases que mudam no cartão da M.A.I.A.
    var FRASES = ['Toque para conversar comigo.', 'Pergunte sobre o Miguel. 😉', 'Psiu... chacoalhe o celular.', 'Já tentou segurar o núcleo?', 'Puxe a tela do topo pra baixo.', 'Tenho piadas ruins. Muitas.'];
    var iF = 0;
    setInterval(function () {
        var el = document.getElementById('maia-frase');
        if (el) el.textContent = FRASES[++iF % FRASES.length];
    }, 7000);
})();

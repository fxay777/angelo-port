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
    var NIVEIS = [96, 90, 84, 88, 80, 94];
    function habilidadesHolo() {
        return ((D.experiencia && D.experiencia.habilidades) || []).map(function (h, i) {
            return { nome: h.nome.split(' ')[0], nivel: NIVEIS[i % NIVEIS.length] };
        });
    }
    function itensVideo() {
        return (D.videos || []).map(function (v) { return { titulo: v.titulo, categoria: v.categoria, yt: v.yt }; });
    }

    // =================================================================== SOBRE
    H.registrar('sobre', {
        rotulo: 'Sobre', titulo: 'Sobre mim', icone: 'usuario', cor: '#ffd23f',
        holo: function () { return { tipo: 'cartao', dados: { nome: D.nome, cargo: D.cargo, email: D.email }, opcoes: { titulo: 'CARTÃO DE VISITA' } }; },
        montar: function (el) {
            var s = D.sobre || {};
            var h = '<div class="pag">';
            h += '<div class="painel"><span class="etiqueta">Perfil</span><p>' + esc(s.intro || '') + '</p></div>';
            h += '<p style="color:var(--ciano)">✦ Toque em <b>3D</b> lá em cima para projetar meu cartão de visita.</p><h2>Quem sou eu</h2>';
            (s.paragrafos || []).forEach(function (p, i) {
                h += '<p>' + esc(p) + '</p>';
                if (i === 1 && s.fotos && s.fotos[0]) h += '<img class="foto-holo" src="' + s.fotos[0].src + '" alt="' + esc(s.fotos[0].legenda) + '"><div class="foto-legenda">' + esc(s.fotos[0].legenda) + '</div>';
            });
            h += '<h2>Hobbies</h2>';
            (s.hobbies || []).forEach(function (p) { h += '<p>' + esc(p) + '</p>'; });
            if (s.fotos && s.fotos[1]) h += '<img class="foto-holo" src="' + s.fotos[1].src + '" alt="' + esc(s.fotos[1].legenda) + '"><div class="foto-legenda">' + esc(s.fotos[1].legenda) + '</div>';
            h += '<div class="chips" style="margin-top:14px"><button class="btn-holo" data-app="projetos">Ver trabalhos</button><button class="btn-holo contorno" data-app="contato">Contato</button></div>';
            el.innerHTML = h + '</div>';
        },
    });

    // ============================================================= EXPERIÊNCIA
    H.registrar('experiencia', {
        rotulo: 'Carreira', titulo: 'Experiência', icone: 'maleta', cor: '#ff8a3d',
        holo: function () { return { tipo: 'barras', dados: { itens: habilidadesHolo() }, opcoes: { titulo: 'HABILIDADES' } }; },
        montar: function (el) {
            var x = D.experiencia || {};
            var h = '<div class="pag"><span class="etiqueta">' + esc(x.area || '') + '</span><p>' + esc(x.resumo || '') + '</p>';
            h += '<h2>Trabalhos</h2>';
            (x.trabalhos || []).forEach(function (t) {
                h += '<div class="painel"><span class="etiqueta">' + esc(t.funcao) + (t.periodo ? ' · ' + esc(t.periodo) : '') + '</span>';
                h += '<p style="font-size:25px;font-weight:700;margin-bottom:6px">' + esc(t.nome) + '</p><p>' + esc(t.descricao) + '</p>';
                if (t.links && t.links.length) {
                    h += '<div class="chips">';
                    t.links.forEach(function (l) { h += '<a class="chip" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.texto) + ' ↗</a>'; });
                    h += '</div>';
                }
                h += '</div>';
            });
            h += '<h2>Habilidades</h2>';
            (x.habilidades || []).forEach(function (s, i) {
                var nivel = NIVEIS[i % NIVEIS.length];
                h += '<div class="painel"><span class="etiqueta">' + esc(s.nome) + '</span><p style="margin-bottom:8px">' + esc(s.desc) + '</p>' +
                    '<div style="height:6px;border-radius:3px;background:rgba(62,232,255,.12);overflow:hidden"><i style="display:block;height:100%;width:0;background:linear-gradient(90deg,var(--ciano),var(--verde));box-shadow:var(--brilho);transition:width 1.2s ' + (i * 0.12) + 's" data-nivel="' + nivel + '"></i></div></div>';
            });
            h += '<a class="btn-holo" href="' + esc(D.curriculo) + '" target="_blank" rel="noopener">Currículo em PDF</a></div>';
            el.innerHTML = h;
            requestAnimationFrame(function () { requestAnimationFrame(function () { el.querySelectorAll('[data-nivel]').forEach(function (b) { b.style.width = b.dataset.nivel + '%'; }); }); });
        },
    });

    // ================================================================ PROJETOS
    var projetosCtl = null;
    H.registrar('projetos', {
        rotulo: 'Projetos', titulo: 'Projetos', icone: 'filme', cor: '#ff5d73',
        holo: function () {
            return {
                tipo: 'carrossel', dados: { itens: itensVideo(), i: 0 },
                opcoes: {
                    titulo: 'CARROSSEL DE VÍDEOS', total: (D.videos || []).length, rotuloAbrir: '▶ PLAY',
                    aoMudar: function (i) { if (projetosCtl) projetosCtl.destacar(i); },
                    aoAbrir: function (i) { if (projetosCtl) projetosCtl.tocar(i); },
                },
            };
        },
        montar: function (el) {
            var lista = D.videos || [];
            function galeria() {
                var h = '<div class="pag"><p>Toque num vídeo para assistir aqui mesmo — ou aperte <b style="color:var(--ciano)">3D</b> para ver todos num carrossel holográfico.</p>';
                lista.forEach(function (v, i) {
                    h += '<button type="button" class="video-card" data-v="' + i + '"><div class="video-thumb"><img src="https://i.ytimg.com/vi/' + esc(v.yt) + '/hqdefault.jpg" alt="" onerror="this.style.visibility=\'hidden\'"><span class="hud"></span><span class="play"></span></div>' +
                        '<div class="video-info"><small>' + esc(v.categoria || '') + '</small><b>' + esc(v.titulo) + '</b></div></button>';
                });
                el.innerHTML = h + '</div>';
                el.querySelectorAll('[data-v]').forEach(function (b) { b.addEventListener('click', function () { tocar(+b.dataset.v); }); });
            }
            function tocar(i) {
                var v = lista[i];
                el.innerHTML = '<div class="pag"><div class="player"><iframe src="https://www.youtube.com/embed/' + esc(v.yt) + '?autoplay=1&playsinline=1&rel=0" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen title="' + esc(v.titulo) + '"></iframe></div>' +
                    '<span class="etiqueta">' + esc(v.categoria || '') + '</span><p style="font-size:26px;font-weight:700;margin-bottom:6px">' + esc(v.titulo) + '</p><p>' + esc(v.texto || '') + '</p>' +
                    '<div class="chips"><button class="btn-holo contorno" data-acao="lista">‹ Todos os vídeos</button>' + (lista.length > 1 ? '<button class="btn-holo" data-acao="prox">Próximo ›</button>' : '') + '</div></div>';
                el.querySelector('[data-acao="lista"]').addEventListener('click', galeria);
                var p = el.querySelector('[data-acao="prox"]');
                if (p) p.addEventListener('click', function () { tocar((i + 1) % lista.length); });
                el.scrollTop = 0;
            }
            projetosCtl = {
                tocar: tocar,
                destacar: function (i) {
                    var c = el.querySelector('[data-v="' + i + '"]');
                    if (!c) return;
                    el.querySelectorAll('[data-v]').forEach(function (x) { x.style.outline = ''; });
                    c.style.outline = '3px solid var(--amarelo)';
                    c.scrollIntoView({ behavior: 'smooth', block: 'center' });
                },
            };
            galeria();
            return function () { projetosCtl = null; };
        },
    });

    // ================================================================= CONTATO
    H.registrar('contato', {
        rotulo: 'Contato', titulo: 'Contato', icone: 'email', cor: '#5dffb0',
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
    H.registrar('curriculo', { rotulo: 'Currículo', icone: 'doc', link: D.curriculo, cor: '#b8f3ff' });

    // ================================================================= M.A.I.A.
    // Assistente com comandos de verdade: abre apps, projeta hologramas, faz
    // contas, timer, dado, moeda, quiz, música, liga modos do celular e escuta
    // pelo microfone (quando o navegador deixa).
    var NOMES_APPS = [
        [/sobre|quem [eé] (ele|o miguel)|biografia/, 'sobre'], [/carreira|experi[eê]ncia|curr[ií]culo profissional|trabalhos?/, 'experiencia'],
        [/projeto|v[ií]deo|portf[oó]lio|showreel/, 'projetos'], [/contato|e-?mail|mensagem/, 'contato'], [/scanner|talento/, 'scanner'],
        [/status|diagn[oó]stico/, 'status'], [/teremim|instrumento/, 'teremim'], [/roteir/, 'roteiro'], [/claquete/, 'claquete'],
        [/labirinto|rolinho come|pac|arcade|fliperama/, 'labirinto'], [/placar|conquista|pontos|recorde|ranking/, 'placar'], [/jogo|tetris|doom|wolf|digger|scrabble/, 'jogos'],
    ];
    var FATOS = [
        'O Miguel tirou o certificado de proficiência em inglês de Cambridge com 12 anos, em 2014 — e isso saiu até na imprensa.',
        'Ele aprendeu inglês rápido pra acompanhar uma série britânica de ficção científica. Uma com uma cabine azul. 👀',
        'Formado em Produção Audiovisual pela Estácio em julho de 2026.',
        'Edita no Premiere, DaVinci Resolve, Vegas Pro, CapCut e Filmora. Thumbnails? Photoshop e Canva.',
        'Trabalha com práticas de acessibilidade: Libras, legendagem e audiodescrição.',
        'Fora da edição: musculação, cozinhar e videogame. Prioridades corretas.',
        'Faz freelance de edição para clientes de fora do Brasil, tudo em inglês.',
        'No documentário "O Peso da Amarelinha", foi ele quem fez a introdução.',
    ];
    var PIADAS = [
        'Por que o editor levou uma escada pro trabalho? Pra subir o nível do áudio. 🥁',
        'Qual o filme favorito do editor? "O Render Infinito". Ainda tá em 99%.',
        'O cliente pediu "algo mais minimalista". Entreguei uma tela preta. Ele pediu pra aumentar o logo.',
        'Quantos editores são necessários pra trocar uma lâmpada? Só um, mas o cliente vai pedir pra trocar de volta.',
        'Meu arquivo favorito: final_FINAL_agoravai_v8_REAL.mp4.',
    ];
    var QUIZ = [
        ['Com quantos anos o Miguel tirou o certificado de Cambridge?', ['10', '12', '16'], 1],
        ['Qual série fez ele aprender inglês?', ['Uma de ficção científica britânica', 'Uma novela mexicana', 'Um desenho japonês'], 0],
        ['Onde ele se formou?', ['Estácio', 'Hogwarts', 'Na Escola do Rolinho'], 0],
        ['Qual destes ele NÃO usa pra editar?', ['DaVinci Resolve', 'Premiere', 'Calculadora do Windows'], 2],
    ];
    function contaSegura(txt) {
        var e = txt.replace(/x|×/g, '*').replace(/÷/g, '/').replace(/,/g, '.').replace(/\^/g, '**').replace(/\s+/g, '');
        e = e.replace(/(\d+(?:\.\d+)?)%/g, '($1/100)');
        if (!/^[\d.+\-*/()]+$/.test(e) || !/\d/.test(e)) return null;
        try {
            // só números e operadores chegam aqui
            var v = Function('"use strict";return (' + e + ')')();
            return typeof v === 'number' && isFinite(v) ? Math.round(v * 1e6) / 1e6 : null;
        } catch (err) { return null; }
    }
    function musiquinha() {
        // tema original do HoloFone em 8 bits
        var n = [[523, .12], [659, .12], [784, .12], [1047, .24], [988, .12], [784, .12], [659, .24], [698, .12], [880, .12], [1047, .24], [988, .12], [784, .36]];
        H.bip(n, 'square', 0.035);
        setTimeout(function () { H.bip([[262, .48], [330, .48], [349, .48], [392, .72]], 'triangle', 0.04); }, 40);
    }
    var conversas = 0;
    var timers = [];

    H.registrar('maia', {
        rotulo: 'M.A.I.A.', titulo: 'M.A.I.A.', icone: 'maia', novo: true, status: '◉ OUVINDO', cor: '#4de1ff', soDock: true,
        holo: function () { return { tipo: 'orbe', dados: {}, opcoes: { titulo: 'M.A.I.A. EM 3D' } }; },
        montar: function (el) {
            var Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
            el.innerHTML = '<div style="display:flex;flex-direction:column;height:100%">' +
                '<div id="m-chat" style="flex:1;overflow-y:auto;padding:14px 14px 6px"></div>' +
                '<div class="chips" id="m-chips" style="padding:6px 14px"></div>' +
                '<div style="display:flex;gap:8px;padding:10px 14px 14px;border-top:3px double var(--labirinto)">' +
                (Rec ? '<button class="btn-holo contorno" id="m-mic" aria-label="Falar com a M.A.I.A." style="padding:10px 12px">🎤</button>' : '') +
                '<input id="m-in" placeholder="Peça algo à M.A.I.A..." style="flex:1;min-width:0;padding:10px 12px;border-radius:10px;border:3px double var(--labirinto);background:rgba(7,6,26,.9);color:var(--texto);font:21px var(--lcd);outline:none">' +
                '<button class="btn-holo" id="m-env" aria-label="Enviar">▶</button></div></div>';
            var chat = el.querySelector('#m-chat');
            var chips = el.querySelector('#m-chips');
            var inp = el.querySelector('#m-in');
            var vivo = true;
            function balao(txt, eu) {
                var b = document.createElement('div');
                b.style.cssText = 'max-width:86%;margin:0 0 10px;padding:9px 12px;border-radius:12px;font:21px/1.2 var(--lcd);white-space:pre-wrap;' +
                    (eu ? 'margin-left:auto;background:rgba(255,210,63,.14);border:2px solid var(--amarelo);border-bottom-right-radius:3px'
                        : 'background:rgba(77,225,255,.1);border:2px solid var(--ciano);border-bottom-left-radius:3px');
                chat.appendChild(b);
                if (eu) { b.textContent = txt; chat.scrollTop = chat.scrollHeight; return b; }
                var i = 0;
                b.textContent = '▍';
                (function digita() {
                    if (!b.isConnected) return;
                    if (i <= txt.length) {
                        b.textContent = txt.slice(0, i) + (i < txt.length ? '▍' : '');
                        i += 2;
                        if (i % 6 === 0) H.pulsoFala(0.6 + Math.random() * 0.4);
                        chat.scrollTop = chat.scrollHeight;
                        setTimeout(digita, 16);
                    }
                })();
                return b;
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
            function responder(r) {
                if (typeof r === 'string') r = { texto: r };
                setTimeout(function () {
                    if (!vivo) return;
                    H.bip([[990, 0.05]], 'square', 0.02);
                    balao(r.texto, false);
                    H.falar(r.texto);
                    sugestoes(r.chips || ['O que você sabe fazer?', 'Projeta um holograma', 'Me conta uma curiosidade']);
                    if (r.depois) setTimeout(r.depois, r.espera || 1500);
                }, 420 + Math.random() * 300);
            }

            // ---------------------------------------------- quiz
            var quiz = null;
            function perguntaQuiz() {
                var q = QUIZ[quiz.i];
                responder({ texto: 'Pergunta ' + (quiz.i + 1) + '/' + QUIZ.length + ': ' + q[0], chips: q[1].map(function (o, k) { return String.fromCharCode(65 + k) + ') ' + o; }) });
            }
            function respostaQuiz(t) {
                var q = QUIZ[quiz.i];
                var k = -1;
                var m = t.match(/^([abc])\)/i);
                if (m) k = m[1].toLowerCase().charCodeAt(0) - 97;
                else q[1].forEach(function (o, j) { if (t.toLowerCase().indexOf(o.toLowerCase()) >= 0) k = j; });
                var certo = k === q[2];
                if (certo) { quiz.acertos++; H.pontos(100); }
                quiz.i++;
                var txt = (certo ? '✓ Acertou! +100' : '✗ Errou! A certa era: ' + q[1][q[2]]) + '\n';
                if (quiz.i >= QUIZ.length) {
                    var tudo = quiz.acertos === QUIZ.length;
                    txt += 'Fim do quiz: ' + quiz.acertos + '/' + QUIZ.length + '. ' + (tudo ? 'Você é fã número 1! 🏆' : 'Nada mal! Tenta de novo?');
                    if (tudo) { H.conquistar('quiz'); H.projetar('confete', {}, { titulo: 'GABARITOU!' }); }
                    quiz = null;
                    responder({ texto: txt, chips: ['Quiz de novo', 'Mostra os vídeos', 'Placar'] });
                } else {
                    responder({ texto: txt + 'Próxima!', chips: [] });
                    setTimeout(perguntaQuiz, 1300);
                }
            }

            // ---------------------------------------------- cérebro
            function pensar(original) {
                var t = original.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').trim();
                var m;
                if (quiz) return respostaQuiz(original);
                if (/^(o que|oque) (voce|vc) (sabe|faz|consegue)|ajuda|comandos|^help/.test(t)) {
                    return responder({
                        texto: 'Eu sei um monte de coisas! Posso:\n• abrir qualquer app ("abre o labirinto")\n• projetar hologramas 3D ("projeta seu cartão")\n• fazer contas ("quanto é 12*7")\n• timer ("timer 30 segundos")\n• rolar dado, jogar moeda\n• quiz sobre o Miguel\n• tocar música, contar piada e curiosidade\n• ligar modo cinema, festa, lanterna, noturno',
                        chips: ['Quiz', 'Projeta seu cartão', 'Timer 10 segundos', 'Rola um dado'],
                    });
                }
                if (/quiz|desafio|me testa|pergunta pra mim/.test(t)) { quiz = { i: 0, acertos: 0 }; responder({ texto: 'Bora! Quiz relâmpago sobre o Miguel. Cada acerto vale 100 pontos.', chips: [] }); setTimeout(perguntaQuiz, 1300); return; }
                // hologramas
                if (/(desliga|apaga|some com|tira) (o )?holo/.test(t)) { H.desprojetar(); return responder('Holograma desligado. 💤'); }
                if (/holo|projet[ae]|3d|tony|stark/.test(t)) {
                    var tipo = 'orbe', dados = {}, tit = 'M.A.I.A. EM 3D', fala = 'Projetando eu mesma em 3D! Olha pra cima da tela. ✨';
                    if (/cart(ao|a)|contato|nome/.test(t)) { tipo = 'cartao'; dados = { nome: D.nome, cargo: D.cargo, email: D.email }; tit = 'CARTÃO DE VISITA'; fala = 'Cartão de visita holográfico na área! 💳'; }
                    else if (/habilidade|skill|talento|barra/.test(t)) { tipo = 'barras'; dados = { itens: habilidadesHolo() }; tit = 'HABILIDADES'; fala = 'Aqui estão as habilidades do Miguel, em barras de luz.'; }
                    else if (/rolinho|mascote/.test(t)) { tipo = 'rolinho'; tit = 'ROLINHO 3D'; fala = 'Rolinho, sai da tela e dá um oi! 🎞️'; }
                    else if (/video|projeto|carrossel/.test(t)) { setTimeout(function () { H.abrir('projetos'); setTimeout(function () { var b = document.getElementById('app-holo'); if (b) b.click(); }, 500); }, 1200); return responder('Abrindo os projetos em carrossel holográfico...'); }
                    else if (/confete|festa/.test(t)) { tipo = 'confete'; tit = 'FESTA!'; fala = 'Confete de pixel pra todo lado! 🎉'; }
                    H.projetar(tipo, dados, { titulo: tit, app: 'maia' });
                    return responder({ texto: fala + (H.holo3d() ? '' : ' (Na sala 3D isso sai de verdade da tela do celular!)'), chips: ['Projeta seu cartão', 'Projeta as habilidades', 'Projeta o Rolinho', 'Desliga o holograma'] });
                }
                // contas
                m = t.match(/(?:quanto (?:e|da|eh)|calcul[ae]|conta)\s*:?\s*(.+)/);
                var expr = m ? m[1] : (/^[\d\s+\-*/().,x×÷^%]+$/.test(t) && /\d\s*[+\-*/x×÷^]/.test(t) ? t : null);
                if (expr) {
                    var v = contaSegura(expr.replace(/\?/g, ''));
                    if (v !== null) return responder({ texto: '🧮 ' + expr.replace(/\?/g, '').trim() + ' = ' + String(v).replace('.', ','), chips: ['Quanto é 2^10', 'Timer 1 minuto', 'Conta uma piada'] });
                    if (m) return responder('Hmm, essa conta eu não entendi. Tenta algo como "quanto é 15*4".');
                }
                // timer
                m = t.match(/(?:timer|temporizador|cronometro|me avisa em|alarme)\s*(?:de|em|para)?\s*(\d+)\s*(s|seg|segundos?|m|min|minutos?)?/);
                if (m) {
                    var seg = +m[1] * (m[2] && m[2][0] === 'm' ? 60 : 1);
                    seg = Math.max(1, Math.min(3600, seg));
                    var fim = Date.now() + seg * 1000;
                    var b = balao('⏱ ' + seg + 's', false);
                    var iv = setInterval(function () {
                        var r = Math.max(0, Math.ceil((fim - Date.now()) / 1000));
                        if (b.isConnected) b.textContent = '⏱ ' + (r >= 60 ? Math.floor(r / 60) + 'min ' : '') + (r % 60) + 's';
                        if (r <= 0) {
                            clearInterval(iv);
                            H.bip([[880, .15], [0, .08], [880, .15], [0, .08], [1320, .3]], 'square', 0.05);
                            H.vibrar([200, 100, 200]);
                            H.notificar({ icone: '⏰', titulo: 'M.A.I.A.', texto: 'Tempo esgotado! (' + seg + 's)', app: 'maia' });
                            H.falar('Tempo esgotado!');
                            if (b.isConnected) b.textContent = '⏰ TEMPO ESGOTADO!';
                        }
                    }, 250);
                    timers.push(iv);
                    return responder('Timer de ' + (seg >= 60 ? Math.round(seg / 60 * 10) / 10 + ' minuto(s)' : seg + ' segundos') + ' valendo! Te aviso. ⏱');
                }
                // hora / data
                if (/que horas|horas? sao|hora agora/.test(t)) return responder('Agora são ' + new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' }) + '. Hora perfeita pra ver um vídeo do Miguel. 😉');
                if (/que dia|data de hoje|hoje e/.test(t)) return responder('Hoje é ' + new Date().toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) + '.');
                // sorte
                if (/moeda|cara ou coroa/.test(t)) { var cara = Math.random() < 0.5; H.bip([[600, .05], [900, .05], [600, .05], [1200, .1]], 'square', 0.03); return responder('🪙 Joguei a moeda... deu ' + (cara ? 'CARA!' : 'COROA!')); }
                m = t.match(/dado(?: de)?\s*(?:d)?(\d+)?|\bd(\d+)\b/);
                if (m) { var lados = +(m[1] || m[2] || 6); lados = Math.max(2, Math.min(1000, lados)); var v2 = 1 + Math.floor(Math.random() * lados); return responder('🎲 D' + lados + ': ' + v2 + (v2 === lados ? ' — CRÍTICO! 🔥' : v2 === 1 ? ' — falha crítica 💀' : '')); }
                // modos do celular
                var modos = [[/cinema/, 'cinema', '🎬 Modo cinema'], [/noturn|visao noturna/, 'noturna', '🌙 Visão noturna'], [/lanterna/, 'lanterna', '🔦 Lanterna'], [/nao perturbe|silencia/, 'clientes', '🔕 Não perturbe']];
                for (var k = 0; k < modos.length; k++) {
                    if (modos[k][0].test(t)) {
                        var desligar = /deslig|tira|para|sai/.test(t);
                        H.central(modos[k][1], !desligar);
                        return responder(modos[k][2] + (desligar ? ' desligado.' : ' ligado!'));
                    }
                }
                if (/(liga|ativa).*(voz|fala)|fala comigo|fala em voz/.test(t)) { H.central('voz', true); return responder('Pronto! Agora eu falo em voz alta. 🔊'); }
                if (/festa|party|danc/.test(t)) { setTimeout(H.festa, 700); return responder('Ativando protocolo de festa! 🎉'); }
                if (/musica|toca|canta|som/.test(t)) { musiquinha(); return responder('🎵 Tocando o tema do HoloFone, versão 8 bits. Composição original da M.A.I.A.!'); }
                // abrir app
                if (/abr[ea]|abrir|mostra|vai pr?a|ir pr?a|quero ver|me leva|joga|jogar/.test(t)) {
                    for (var a = 0; a < NOMES_APPS.length; a++) {
                        if (NOMES_APPS[a][0].test(t)) { var id = NOMES_APPS[a][1]; setTimeout(function () { H.abrir(id); }, 1300); return responder('Abrindo ' + id + '... 🚀', null); }
                    }
                }
                // conversa
                var C = [
                    [/quem|miguel|apresent/, function () { return { texto: 'O ' + D.nome + ' é ' + (D.cargo || '').toLowerCase() + ', formado pela Estácio e especialista em edição de vídeo. Faz freelance para clientes do Brasil e de fora — fala inglês fluente desde os 12 anos (Cambridge!).', chips: ['Mostra os vídeos', 'Quiz', 'Projeta seu cartão'] }; }],
                    [/contrat|vaga|freela|orcamento|trabalhar com/, function () { setTimeout(function () { H.abrir('contato'); }, 1800); return 'Ótima ideia! Ele faz freelance, inclusive para clientes internacionais. Abrindo o contato... 📡'; }],
                    [/ingles|english|cambridge/, function () { return 'Yes! Certificado de proficiência de Cambridge aos 12 anos, em 2014. A motivação? Uma certa série britânica de ficção científica... 👀'; }],
                    [/serie|doctor|who|tardis|sonic/, function () { return 'Não posso dar spoilers, mas digamos que envolve uma cabine azul que é maior por dentro. 😉 Allons-y!'; }],
                    [/bom|talent|confi|recomend|vale a pena/, function () { return 'Analisei 4.096 frames do trabalho dele e meu veredito é: contrata. Minha análise é 100% imparcial. (Fui programada por ele, mas isso é detalhe.)'; }],
                    [/piada|engracad|rir|humor/, function () { return { texto: sorteia(PIADAS), chips: ['Outra piada', 'Toca uma música', 'Quiz'] }; }],
                    [/curiosidade|fato|sabia|segredo/, function () { return { texto: '💡 ' + sorteia(FATOS), chips: ['Outra curiosidade', 'Quiz', 'Mostra os vídeos'] }; }],
                    [/rolinho/, function () { return { texto: 'O Rolinho é o mascote: um rolo de filme de tênis vermelho. Ele passeia na tela inicial comendo frames. Cutuca ele!', chips: ['Projeta o Rolinho', 'Abre o labirinto'] }; }],
                    [/cafe/, function () { return 'Nível de café do editor: 87%. Abaixo de 20% a correção de cor fica... criativa demais. ☕'; }],
                    [/placar|pontos|score|recorde/, function () { var p = H.placar(); return { texto: '🕹 Você tem ' + p.pontos + ' pontos. Recorde: ' + p.recorde + '. Conquistas: ' + Object.keys(p.conquistas).length + '/' + Object.keys(p.lista).length + '.', chips: ['Abre o placar', 'Abre o labirinto'] }; }],
                    [/voce|maia|quem e voce/, function () { return 'Eu sou a M.A.I.A. — Miguel Angelo Inteligência Assistente. Feita de JavaScript, café e pixels. 💙'; }],
                    [/^(oi|ola|e ai|eai|bom dia|boa tarde|boa noite|hey|hello)/, function () { return { texto: 'Oi! 👋 Posso falar do Miguel, projetar hologramas, fazer contas, rolar dados... pergunta "o que você sabe fazer?"', chips: ['O que você sabe fazer?', 'Quem é o Miguel?', 'Quiz'] }; }],
                    [/obrigad|valeu|thanks/, function () { return 'Disponha! E não esquece de falar com o Miguel. 😉'; }],
                ];
                for (var c2 = 0; c2 < C.length; c2++) if (C[c2][0].test(t)) return responder(C[c2][1]());
                return responder({ texto: sorteia(['Hmm, essa eu não sei. Mas sei fazer contas, timers, hologramas e quiz! 😅', 'Processando... não encontrei. Tenta "o que você sabe fazer?"', 'Vou fingir que entendi e sugerir: veja os projetos. 🎬']), chips: ['O que você sabe fazer?', 'Mostra os vídeos', 'Quiz'] });
            }
            function perguntar(txt) {
                if (!txt || !txt.trim()) return;
                balao(txt, true);
                inp.value = '';
                sugestoes([]);
                conversas++;
                if (conversas === 5) H.conquistar('maia');
                pensar(txt.trim());
            }
            el.querySelector('#m-env').addEventListener('click', function () { perguntar(inp.value); });
            inp.addEventListener('keydown', function (e) { if (e.key === 'Enter') perguntar(inp.value); });
            var mic = el.querySelector('#m-mic');
            var rec = null;
            if (mic) {
                mic.addEventListener('click', function () {
                    if (rec) { try { rec.stop(); } catch (e) { /* ok */ } return; }
                    try {
                        rec = new Rec();
                        rec.lang = 'pt-BR';
                        rec.interimResults = true;
                        rec.onresult = function (e) {
                            var r = e.results[e.results.length - 1];
                            inp.value = r[0].transcript;
                            if (r.isFinal) perguntar(r[0].transcript);
                        };
                        rec.onend = function () { rec = null; mic.textContent = '🎤'; mic.classList.add('contorno'); };
                        rec.onerror = function () { H.toast('Não consegui ouvir. O microfone está liberado?'); };
                        rec.start();
                        mic.textContent = '●';
                        mic.classList.remove('contorno');
                        H.toast('🎤 Pode falar...');
                    } catch (e) { rec = null; H.toast('Microfone indisponível neste navegador'); }
                });
            }
            setTimeout(function () {
                var oi = 'Olá, visitante! Eu sou a M.A.I.A., a assistente do ' + primeiroNome + '. Agora eu também projeto hologramas, faço contas, timers e quiz!';
                balao(oi, false);
                H.falar(oi);
                sugestoes(['O que você sabe fazer?', 'Projeta um holograma', 'Quiz', 'Quem é o Miguel?']);
            }, 250);
            return function () {
                vivo = false;
                try { speechSynthesis.cancel(); } catch (e) { /* ok */ }
                if (rec) try { rec.stop(); } catch (e) { /* ok */ }
            };
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
        rotulo: 'Scanner', titulo: 'Scanner de talentos', icone: 'scanner', cor: '#4de1ff', novo: true, status: '◎ RASTREANDO',
        montar: function (el) {
            el.style.overflow = 'hidden';
            el.innerHTML = '<div id="sc" style="position:absolute;inset:0;overflow:hidden;touch-action:none">' +
                '<canvas id="sc-c" style="position:absolute;inset:0;width:100%;height:100%"></canvas>' +
                '<div id="sc-info" style="position:absolute;left:12px;right:12px;bottom:12px;padding:10px 12px;border-radius:14px;background:var(--vidro-forte);border:1px solid var(--borda);font-size:21px;min-height:62px"></div>' +
                '<div style="position:absolute;top:10px;left:12px;font:8px var(--pixel);letter-spacing:0;color:var(--verde)" id="sc-cont"></div></div>';
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
                    if (a.achado) { ctx.font = '9px "Press Start 2P"'; ctx.fillText(a.nome, sx + 18, sy + 4); }
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
                        info.innerHTML = '<span class="etiqueta">Talento identificado · ' + achados + '/' + alvos.length + '</span><br><b style="font-size:24px">' + foco.nome + '</b> — ' + esc(foco.desc);
                        if (achados === alvos.length) {
                            setTimeout(function () {
                                info.innerHTML = '<span class="etiqueta" style="color:var(--verde)">Análise completa ✓</span><br><b>Candidato altamente recomendado.</b> Probabilidade de vídeo incrível: 99,9%. <button class="btn-holo" data-app="contato" style="margin-top:8px;padding:8px 12px">Falar com ele</button>';
                                H.festa();
                                H.conquistar('scanner');
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
        rotulo: 'Status', titulo: 'Status do editor', icone: 'status', cor: 'var(--verde)', status: '▲ ESTÁVEL',
        holo: function () { return { tipo: 'aneis', dados: { itens: [{ nivel: 87 }, { nivel: 100 }, { nivel: 42 }, { nivel: 76 }, { nivel: 18 }] }, opcoes: { titulo: 'MEDIDORES 3D' } }; },
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
                    '<text x="40" y="46" text-anchor="middle" fill="#d9f7ff" font-family="VT323" font-size="' + (it[2] === '∞' ? 34 : 26) + '">' + (it[2] === '∞' ? '∞' : it[1] + '%') + '</text></svg>' +
                    '<div style="font:6px/1.5 var(--pixel);letter-spacing:0;color:var(--texto-2);margin-top:2px">' + it[0] + '</div></div>';
            });
            h += '</div><div class="painel" style="margin-top:12px"><span class="etiqueta">Fila de render</span><div id="st-render" style="font-size:21px"></div></div>' +
                '<div class="painel"><span class="etiqueta">Registro do sistema</span><div id="st-log" style="font:19px var(--lcd);color:var(--verde);min-height:130px;white-space:pre-wrap"></div></div>' +
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
                '<div style="position:absolute;top:12px;left:12px;right:12px;display:flex;justify-content:space-between;align-items:center;pointer-events:none"><span style="font-size:20px;color:var(--texto-2)">Arraste o dedo: ↔ nota · ↕ volume</span></div>' +
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
            var tocando = 0;
            var tocouDesde = 0;
            function ligar(x, y) {
                tocouDesde = Date.now();
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
                if (dedo && tocouDesde) { tocando += Date.now() - tocouDesde; tocouDesde = 0; if (tocando > 10000) H.conquistar('maestro'); }
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
                '<div class="painel" id="rt-res" style="margin-top:14px;display:none"><span class="etiqueta">Logline aprovada</span><p id="rt-txt" style="font-size:24px;margin:6px 0 10px"></p>' +
                '<div class="chips"><button class="chip" id="rt-copiar">📋 Copiar</button><button class="chip" data-app="contato">🎬 Quero filmar isso</button></div></div></div>';
            var box = el.querySelector('#rt-rolos');
            var rolos = ROLOS.map(function (lista, i) {
                var r = document.createElement('div');
                r.className = 'painel';
                r.style.cssText = 'margin:0;padding:14px;font-size:23px;font-weight:700;text-align:center;min-height:56px;display:flex;align-items:center;justify-content:center';
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
        rotulo: 'Claquete', titulo: 'Claquete digital', icone: 'claquete', cor: '#ffe9b0', status: '● REC',
        montar: function (el) {
            var cena = 26;
            var take = 1;
            el.innerHTML = '<div class="pag" style="display:flex;flex-direction:column;align-items:center;gap:16px;padding-top:24px">' +
                '<button id="cq" style="width:300px;touch-action:manipulation" aria-label="Bater a claquete"><svg viewBox="0 0 300 260" width="300" height="260">' +
                '<g id="cq-bastao" style="transform-origin:12px 70px;transition:transform .08s"><rect x="10" y="40" width="282" height="34" rx="4" fill="#111" stroke="#3ee8ff" stroke-width="2"/>' +
                '<g fill="#d9f7ff">' + [0, 1, 2, 3, 4, 5].map(function (i) { return '<polygon points="' + (24 + i * 46) + ',40 ' + (48 + i * 46) + ',40 ' + (34 + i * 46) + ',74 ' + (10 + i * 46) + ',74"/>'; }).join('') + '</g></g>' +
                '<rect x="10" y="78" width="282" height="168" rx="8" fill="#0b141c" stroke="#3ee8ff" stroke-width="2"/>' +
                '<g font-family="Press Start 2P" fill="#a9a4d6" font-size="9"><text x="24" y="104">PRODUÇÃO</text><text x="24" y="150">CENA</text><text x="158" y="150">TAKE</text><text x="24" y="206">DIREÇÃO</text></g>' +
                '<g font-family="VT323" fill="#d9f7ff"><text x="24" y="128" font-size="22">PORTFÓLIO 2026</text><text id="cq-cena" x="24" y="182" font-size="34">26</text><text id="cq-take" x="158" y="182" font-size="34">1</text><text x="24" y="232" font-size="22">M. ANGELO</text></g>' +
                '<line x1="10" y1="160" x2="292" y2="160" stroke="#3ee8ff" stroke-opacity=".3"/><line x1="148" y1="136" x2="148" y2="190" stroke="#3ee8ff" stroke-opacity=".3"/></svg></button>' +
                '<p style="text-align:center;color:var(--texto-2)">Toque para bater · segure para mudar de cena</p><div id="cq-msg" style="font:14px var(--pixel);letter-spacing:2px;color:var(--ambar);min-height:30px"></div></div>';
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
                    if (take === 10) { H.toast('Take 10? O ator tá precisando de café. ☕'); H.conquistar('diretor'); }
                    if (take === 30) H.toast('Take 30. É, vamos usar o take 1 mesmo.');
                }, 500);
            });
        },
    });

    // ============================================================ LABIRINTO
    // Jogo original: o Rolinho come os frames do labirinto e foge dos bugs.
    // Pegar um café ☕ deixa os bugs "corrigíveis" por alguns segundos.
    var MAPA = [
        '###############',
        '#o....#.#....o#',
        '#.###.#.#.###.#',
        '#.............#',
        '#.##.##-##.##.#',
        '#....#BBB#....#',
        '####.#####.####',
        '#.##.......##.#',
        '#....##R##....#',
        '##.#.......#.##',
        '#..#.#####.#..#',
        '#o.....#.....o#',
        '#.###.....###.#',
        '#...#.###.#...#',
        '#.#...#.#...#.#',
        '#.............#',
        '###############',
    ];
    var NOMES_BUGS = [['BUG DO RENDER', '#ff4fa3'], ['BUG DO ÁUDIO', '#4de1ff'], ['BUG DO CODEC', '#ff8a3d']];
    H.registrar('labirinto', {
        rotulo: 'Labirinto', titulo: 'Rolinho no labirinto', icone: 'labirinto', cor: '#ffd23f', novo: true, soDock: true, status: '🕹 1 FICHA',
        holo: function () { return { tipo: 'rolinho', dados: {}, opcoes: { titulo: 'ROLINHO 3D' } }; },
        montar: function (el) {
            el.style.overflow = 'hidden';
            el.innerHTML = '<div style="display:flex;flex-direction:column;align-items:center;height:100%;padding:8px 0 0;gap:8px">' +
                '<div style="display:flex;justify-content:space-between;width:360px;font:9px var(--pixel)"><span style="color:var(--rosa)">SCORE <b id="lb-pts" style="color:var(--amarelo);font-weight:400">0</b></span><span id="lb-fase" style="color:var(--ciano)">FASE 1</span><span id="lb-vidas" style="color:#ff3b3b"></span></div>' +
                '<div style="position:relative"><canvas id="lb-c" width="360" height="408" style="display:block;touch-action:none;background:#05041a;border-radius:8px"></canvas>' +
                '<div id="lb-msg" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;font:11px/1.8 var(--pixel);color:var(--amarelo);text-shadow:2px 2px 0 #000;background:rgba(5,4,26,.55)"></div></div>' +
                '<div class="pad" style="grid-template-columns:repeat(3,58px);gap:6px">' +
                '<span></span><button data-d="0,-1">▲</button><span></span><button data-d="-1,0">◀</button><button data-d="0,1">▼</button><button data-d="1,0">▶</button></div></div>';
            var c = el.querySelector('#lb-c');
            var ctx = c.getContext('2d');
            var msg = el.querySelector('#lb-msg');
            var T = 24;
            var grade, totalPontinhos, comidos;
            var rol, bugs, cafe, pts = 0, vidas = 3, fase = 1, estado = 'pronto', quadro = 0, vivo = true, esperaAte = 0;
            function livre(x, y, ehBug) {
                var l = grade[y];
                if (!l) return false;
                var ch = l[x];
                if (ch === undefined) return false;
                if (ch === '#') return false;
                if ((ch === '-' || ch === 'B') && !ehBug) return false;
                return true;
            }
            function iniciarFase(nova) {
                if (nova) {
                    grade = MAPA.map(function (l) { return l.split(''); });
                    totalPontinhos = 0;
                    comidos = 0;
                    grade.forEach(function (l) { l.forEach(function (ch) { if (ch === '.' || ch === 'o') totalPontinhos++; }); });
                }
                var ini = null;
                var casas = [];
                MAPA.forEach(function (l, y) { l.split('').forEach(function (ch, x) { if (ch === 'R') ini = [x, y]; if (ch === 'B') casas.push([x, y]); }); });
                rol = { x: ini[0], y: ini[1], px: ini[0], py: ini[1], dx: 0, dy: 0, qx: 0, qy: 0, dir: 1, prog: 0 };
                bugs = NOMES_BUGS.map(function (b, i) {
                    var p = casas[i % casas.length];
                    return { x: p[0], y: p[1], px: p[0], py: p[1], dx: 0, dy: -1, prog: 0, cor: b[1], nome: b[0], casa: p, sai: 150 + i * 120, comido: false };
                });
                cafe = 0;
            }
            function mostrar(txt, botao) {
                msg.style.display = 'flex';
                msg.innerHTML = '<div>' + txt + '</div>' + (botao ? '<button class="btn-holo" id="lb-ir">' + botao + '</button>' : '');
                var b = msg.querySelector('#lb-ir');
                if (b) b.addEventListener('click', comecar);
            }
            function comecar() {
                msg.style.display = 'none';
                if (estado === 'fim') { pts = 0; vidas = 3; fase = 1; iniciarFase(true); }
                estado = 'jogando';
                H.bip([[523, .08], [659, .08], [784, .08], [1047, .16]], 'square', 0.035);
            }
            function atualizarHud() {
                el.querySelector('#lb-pts').textContent = pts;
                el.querySelector('#lb-fase').textContent = 'FASE ' + fase;
                el.querySelector('#lb-vidas').textContent = '♥'.repeat(Math.max(0, vidas));
            }
            iniciarFase(true);
            atualizarHud();
            mostrar('COMA TODOS OS FRAMES<br><span style="color:var(--ciano);font-size:8px">☕ CAFÉ = BUGS CORRIGÍVEIS<br>DESLIZE OU USE AS SETAS</span>', 'PRESS START');

            function querer(dx, dy) { rol.qx = dx; rol.qy = dy; if (estado === 'pronto') comecar(); }
            el.querySelectorAll('[data-d]').forEach(function (b) {
                var f = function (e) { e.preventDefault(); var d = b.dataset.d.split(','); querer(+d[0], +d[1]); };
                b.addEventListener('touchstart', f, { passive: false });
                b.addEventListener('mousedown', f);
            });
            var ini = null;
            c.addEventListener('pointerdown', function (e) { ini = [e.clientX, e.clientY]; });
            c.addEventListener('pointermove', function (e) {
                if (!ini) return;
                var dx = e.clientX - ini[0], dy = e.clientY - ini[1];
                if (Math.max(Math.abs(dx), Math.abs(dy)) > 18) {
                    if (Math.abs(dx) > Math.abs(dy)) querer(dx > 0 ? 1 : -1, 0); else querer(0, dy > 0 ? 1 : -1);
                    ini = [e.clientX, e.clientY];
                }
            });
            c.addEventListener('pointerup', function () { ini = null; });
            function tecla(e) {
                var m = { ArrowUp: [0, -1], ArrowDown: [0, 1], ArrowLeft: [-1, 0], ArrowRight: [1, 0] }[e.key];
                if (m) { e.preventDefault(); querer(m[0], m[1]); }
            }
            document.addEventListener('keydown', tecla);

            // ---- movimento em grade com deslize suave
            function andar(o, vel, ehBug) {
                o.prog += vel;
                while (o.prog >= 1) {
                    o.prog -= 1;
                    o.x += o.dx; o.y += o.dy;
                    escolher(o, ehBug);
                }
                o.px = o.x + o.dx * o.prog;
                o.py = o.y + o.dy * o.prog;
            }
            function escolher(o, ehBug) {
                if (!ehBug) {
                    comer(o.x, o.y);
                    if ((o.qx || o.qy) && livre(o.x + o.qx, o.y + o.qy)) { o.dx = o.qx; o.dy = o.qy; }
                    if (!livre(o.x + o.dx, o.y + o.dy)) { o.dx = 0; o.dy = 0; o.prog = 0; }
                    if (o.dx) o.dir = o.dx;
                    return;
                }
                // bug: escolhe nas bifurcações, sem dar meia-volta
                var opcoes = [[1, 0], [-1, 0], [0, 1], [0, -1]].filter(function (d) {
                    return !(d[0] === -o.dx && d[1] === -o.dy) && livre(o.x + d[0], o.y + d[1], true) && !(grade[o.y + d[1]][o.x + d[0]] === 'B' && grade[o.y][o.x] !== 'B' && grade[o.y][o.x] !== '-' && !o.comido);
                });
                if (!opcoes.length) { o.dx = -o.dx; o.dy = -o.dy; return; }
                var alvo;
                if (o.comido) alvo = o.casa;
                else if (grade[o.y][o.x] === 'B' || grade[o.y][o.x] === '-') alvo = [7, 3];
                else if (cafe > 0) alvo = [o.x * 2 - rol.x, o.y * 2 - rol.y];
                else alvo = Math.random() < 0.75 ? [rol.x, rol.y] : [Math.floor(Math.random() * 15), Math.floor(Math.random() * 17)];
                opcoes.sort(function (a, b) {
                    return Math.hypot(o.x + a[0] - alvo[0], o.y + a[1] - alvo[1]) - Math.hypot(o.x + b[0] - alvo[0], o.y + b[1] - alvo[1]);
                });
                var d = opcoes[0];
                o.dx = d[0]; o.dy = d[1];
                if (o.comido && o.x === o.casa[0] && o.y === o.casa[1]) { o.comido = false; o.sai = 60; }
            }
            function comer(x, y) {
                var ch = grade[y][x];
                if (ch === '.' || ch === 'o') {
                    grade[y][x] = ' ';
                    comidos++;
                    pts += ch === 'o' ? 50 : 10;
                    H.pontos(ch === 'o' ? 50 : 10);
                    if (ch === 'o') { cafe = 420; H.bip([[200, .06], [400, .06], [800, .1]], 'square', 0.03); }
                    else if (comidos % 2) H.bip([[700 + (comidos % 4) * 60, .03]], 'square', 0.015);
                    atualizarHud();
                    if (comidos >= totalPontinhos) {
                        estado = 'venceu';
                        H.conquistar('labirinto');
                        H.bip([[523, .1], [659, .1], [784, .1], [1047, .1], [784, .1], [1047, .3]], 'square', 0.04);
                        mostrar('RENDER CONCLUÍDO!<br><span style="color:var(--ciano)">FASE ' + fase + ' LIMPA</span>', 'PRÓXIMA FASE');
                        fase++;
                        iniciarFase(true);
                    }
                }
            }
            function colisoes() {
                bugs.forEach(function (b) {
                    if (b.comido || b.sai > 0) return;
                    if (Math.hypot(b.px - rol.px, b.py - rol.py) < 0.6) {
                        if (cafe > 0) {
                            b.comido = true;
                            pts += 200;
                            H.pontos(200);
                            atualizarHud();
                            H.bip([[1200, .05], [1500, .05], [1800, .1]], 'square', 0.035);
                        } else {
                            vidas--;
                            atualizarHud();
                            H.vibrar(200);
                            H.bip([[400, .1], [300, .1], [200, .1], [120, .3]], 'sawtooth', 0.04);
                            if (vidas <= 0) {
                                estado = 'fim';
                                mostrar('GAME OVER<br><span style="color:var(--rosa)">SCORE ' + pts + '</span><span style="color:var(--texto-2);font-size:8px">O ' + b.nome + ' VENCEU DESSA VEZ</span>', 'CONTINUAR?');
                            } else {
                                estado = 'pronto';
                                iniciarFase(false);
                                mostrar('OPS! ' + b.nome + '<br><span style="font-size:8px;color:var(--texto-2)">VIDAS: ' + vidas + '</span>', 'DE NOVO');
                            }
                        }
                    }
                });
            }
            function desenhar() {
                ctx.fillStyle = '#05041a';
                ctx.fillRect(0, 0, c.width, c.height);
                // paredes: linhas duplas azuis
                grade.forEach(function (l, y) {
                    l.forEach(function (ch, x) {
                        var px = x * T, py = y * T;
                        if (ch === '#') {
                            ctx.fillStyle = '#0b0a3a';
                            ctx.fillRect(px, py, T, T);
                            ctx.strokeStyle = '#3d55ff';
                            ctx.lineWidth = 2;
                            [[0, -1, px + 2, py + 2, px + T - 2, py + 2], [0, 1, px + 2, py + T - 2, px + T - 2, py + T - 2], [-1, 0, px + 2, py + 2, px + 2, py + T - 2], [1, 0, px + T - 2, py + 2, px + T - 2, py + T - 2]].forEach(function (s) {
                                var v = grade[y + s[1]] && grade[y + s[1]][x + s[0]];
                                if (v !== undefined && v !== '#') { ctx.beginPath(); ctx.moveTo(s[2], s[3]); ctx.lineTo(s[4], s[5]); ctx.stroke(); }
                            });
                        } else if (ch === '-') {
                            ctx.fillStyle = '#ff9ff3';
                            ctx.fillRect(px, py + T / 2 - 2, T, 4);
                        } else if (ch === '.') {
                            ctx.fillStyle = '#ffe9b0';
                            ctx.fillRect(px + T / 2 - 2, py + T / 2 - 2, 4, 4);
                        } else if (ch === 'o') {
                            if (quadro % 30 < 20) { ctx.font = '16px serif'; ctx.textAlign = 'center'; ctx.fillText('☕', px + T / 2, py + T / 2 + 6); }
                        }
                    });
                });
                // bugs: quadrados com falha de cor (glitch)
                bugs.forEach(function (b) {
                    var x = b.px * T + T / 2, y = b.py * T + T / 2;
                    if (b.comido) {
                        ctx.fillStyle = '#fff';
                        ctx.fillRect(x - 6, y - 3, 4, 5); ctx.fillRect(x + 2, y - 3, 4, 5);
                        return;
                    }
                    var assustado = cafe > 0;
                    var cor = assustado ? (cafe < 120 && quadro % 16 < 8 ? '#ffffff' : '#3d55ff') : b.cor;
                    var j = (quadro + b.x * 3) % 12 < 2 ? 3 : 0;
                    ctx.globalAlpha = 0.6;
                    ctx.fillStyle = '#ff004c'; ctx.fillRect(x - 9 - j, y - 9, 18, 18);
                    ctx.fillStyle = '#00e5ff'; ctx.fillRect(x - 9 + j, y - 9, 18, 18);
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = cor;
                    ctx.fillRect(x - 9, y - 9, 18, 18);
                    ctx.fillStyle = '#05041a';
                    for (var k = 0; k < 3; k++) ctx.fillRect(x - 9 + k * 7, y + 6, 4, 3);   // "dentinhos" de pixel quebrado
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(x - 6, y - 5, 5, 6); ctx.fillRect(x + 1, y - 5, 5, 6);
                    ctx.fillStyle = '#000';
                    ctx.fillRect(x - 5 + b.dx * 2, y - 3 + b.dy * 2, 3, 3); ctx.fillRect(x + 2 + b.dx * 2, y - 3 + b.dy * 2, 3, 3);
                });
                H.desenharRolinho(ctx, rol.px * T + T / 2, rol.py * T + T / 2 - 3, 8, quadro * (rol.dx || rol.dy ? 1 : 0), rol.dir);
            }
            (function loop() {
                if (!vivo) return;
                requestAnimationFrame(loop);
                quadro++;
                if (estado === 'jogando') {
                    var acel = 1 + (fase - 1) * 0.12;
                    if (!rol.dx && !rol.dy) escolher(rol, false);
                    andar(rol, 0.1 * acel, false);
                    bugs.forEach(function (b) {
                        if (b.sai > 0) { b.sai--; return; }
                        andar(b, (b.comido ? 0.2 : cafe > 0 ? 0.05 : 0.085) * acel, true);
                    });
                    if (cafe > 0) cafe--;
                    colisoes();
                }
                desenhar();
            })();
            return function () { vivo = false; document.removeEventListener('keydown', tecla); };
        },
    });

    // ================================================================ PLACAR
    H.registrar('placar', {
        rotulo: 'Placar', titulo: 'Placar e conquistas', icone: 'trofeu', cor: '#ff9ff3', status: '★ HI-SCORE',
        holo: function () { return { tipo: 'confete', dados: {}, opcoes: { titulo: 'PARABÉNS!' } }; },
        montar: function (el) {
            var p = H.placar();
            var tabela = [['MAIA', 31337], ['ROLINHO', 4200], ['MIGUEL', 2026], ['VOCÊ', p.recorde]].sort(function (a, b) { return b[1] - a[1]; });
            var h = '<div class="pag" style="text-align:center"><div style="font:10px var(--pixel);color:var(--rosa);margin:6px 0 10px">— HIGH SCORES —</div>';
            tabela.forEach(function (l, i) {
                var eu = l[0] === 'VOCÊ';
                h += '<div style="display:flex;justify-content:space-between;font:11px/2.4 var(--pixel);color:' + (eu ? 'var(--amarelo)' : 'var(--texto)') + ';' + (eu ? 'animation:piscaStart 1s steps(1) infinite' : '') + '"><span>' + (i + 1) + 'º</span><span>' + l[0] + '</span><span>' + ('000000' + l[1]).slice(-6) + '</span></div>';
            });
            h += '<p style="margin-top:12px">Agora: <b style="color:var(--amarelo)">' + p.pontos + '</b> pontos. Explore o celular, ache os segredos e jogue o labirinto pra subir no ranking.</p>';
            var ids = Object.keys(p.lista);
            var feitas = ids.filter(function (k) { return p.conquistas[k]; }).length;
            h += '<h2 style="text-align:left">Conquistas ' + feitas + '/' + ids.length + '</h2><div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;text-align:left">';
            ids.forEach(function (k) {
                var ok = p.conquistas[k];
                h += '<div class="painel" style="margin:0;padding:10px;' + (ok ? '' : 'opacity:.45') + '"><div style="font:7px/1.6 var(--pixel);color:' + (ok ? 'var(--amarelo)' : 'var(--texto-2)') + '">' + (ok ? '★ ' + esc(p.lista[k][0]) : '🔒 ???') + '</div>' +
                    '<div style="font:18px/1.1 var(--lcd);margin-top:4px">' + (ok ? esc(p.lista[k][1]) : 'Segredo ainda não encontrado.') + '</div></div>';
            });
            h += '</div><div class="chips" style="justify-content:center;margin-top:16px"><button class="btn-holo" data-app="labirinto">Jogar labirinto</button><button class="btn-holo contorno" data-app="maia">Pedir dicas</button></div></div>';
            el.innerHTML = h;
        },
    });

    // =================================================================== JOGOS
    var dos = null;
    var tetrisLimpa = null;
    H.registrar('jogos', {
        rotulo: 'Jogos', titulo: 'Jogos', icone: 'jogo', cor: '#8a7dff', soDock: true,
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
    var FRASES = ['Toque para conversar comigo.', 'Peça: "projeta seu cartão" ✦', 'Faço contas, timers e quiz!', 'Psiu... chacoalhe o celular.', 'Já tentou segurar o núcleo?', 'Cutuca o Rolinho lá embaixo.', 'Tem 16 conquistas escondidas.'];
    var iF = 0;
    setInterval(function () {
        var el = document.getElementById('maia-frase');
        if (el) el.textContent = FRASES[++iF % FRASES.length];
    }, 7000);
})();

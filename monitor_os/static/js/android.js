// Interface "Android" do portfólio (só celular). Reaproveita os mesmos
// jogos e páginas do desktop: showcase (iframe), js-dos e Tetris.
(function () {
    // Dentro do celular 3D da cena: mostra o furo da câmera
    if (/[?&]cena3d=1/.test(location.search)) document.body.classList.add('in3d');
    var appview = document.getElementById('appview');
    var body = document.getElementById('app-body');
    var title = document.getElementById('app-title');
    var current = null, dosInstance = null, tetrisCleanup = null;

    function $(id) { return document.getElementById(id); }

    // ----- relógio / data -----
    function tick() {
        var d = new Date();
        var hm = d.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        $('sb-clock').textContent = hm;
        $('w-time').textContent = hm;
        $('w-date').textContent = d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });
    }
    tick(); setInterval(tick, 15000);

    function toast(msg) {
        var t = $('toast'); t.textContent = msg; t.classList.add('show');
        clearTimeout(toast._t); toast._t = setTimeout(function () { t.classList.remove('show'); }, 2600);
    }

    // ----- definição dos apps -----
    function page(url) { return function (el) { el.innerHTML = '<iframe src="' + url + '"></iframe>'; }; }
    function dos(file, id) {
        return function (el) {
            el.innerHTML = '<div class="dos-root" id="dos-' + id + '"></div>';
            toast('Dica: gire o celular para jogar melhor');
            requestAnimationFrame(function () {
                dosInstance = Dos(el.firstChild);
                dosInstance.run('/static/jsdos/' + file);
            });
        };
    }
    function tetris(el) {
        el.innerHTML = '<div class="tetris-wrap"><div id="t-score">Score: 0</div><canvas id="t-canvas"></canvas>' +
            '<div class="pad"><button data-k="ArrowLeft">◀</button><button data-k="ArrowUp">⟳</button>' +
            '<button data-k="ArrowDown">▼</button><button data-k="ArrowRight">▶</button>' +
            '<button class="wide" data-k=" ">SOLTAR</button></div></div>';
        tetrisCleanup = initTetris($('t-canvas'), $('t-score'), null, function () {});
        el.querySelectorAll('.pad button').forEach(function (b) {
            function press(e) { e.preventDefault(); document.dispatchEvent(new KeyboardEvent('keydown', { key: b.dataset.k })); }
            b.addEventListener('touchstart', press, { passive: false });
            b.addEventListener('mousedown', press);
        });
    }

    var APPS = {
        sobre:       { title: 'Sobre Mim',   mount: page('/showcase/sobre?app=1') },
        experiencia: { title: 'Experiência', mount: page('/showcase/experiencia?app=1') },
        projetos:    { title: 'Projetos',    mount: page('/showcase/projetos?app=1') },
        contato:     { title: 'Contato',     mount: page('/showcase/contato?app=1') },
        creditos:    { title: 'Créditos',    mount: page('/creditos') },
        doom:        { title: 'Doom',            mount: dos('doom.jsdos', 'doom') },
        wolf3d:      { title: 'Wolfenstein 3D',  mount: dos('wolf3d.jsdos', 'wolf3d') },
        digger:      { title: 'Digger',          mount: dos('digger.jsdos', 'digger') },
        scrabble:    { title: 'Scrabble',        mount: dos('scrabble.jsdos', 'scrabble') },
        tetris:      { title: 'Tetris',          mount: tetris }
    };

    // ----- abrir / fechar -----
    function openApp(id, fromPop) {
        var app = APPS[id]; if (!app) return;
        if (current) closeApp(true);
        current = id;
        title.textContent = app.title;
        appview.classList.add('open');
        appview.setAttribute('aria-hidden', 'false');
        app.mount(body);
        if (!fromPop) history.pushState({ app: id }, '');
    }

    function closeApp(silent) {
        if (!current) return;
        if (dosInstance) { var d = dosInstance; dosInstance = null; try { d.stop().catch(function () {}); } catch (e) {} }
        if (tetrisCleanup) { try { tetrisCleanup(); } catch (e) {} tetrisCleanup = null; }
        current = null;
        appview.classList.remove('open');
        appview.setAttribute('aria-hidden', 'true');
        setTimeout(function () { if (!current) body.innerHTML = ''; }, 260);
    }

    function goBack() { if (current) history.back(); else toast('Você já está na tela inicial'); }
    function goHome() { if (current) history.back(); }

    document.querySelectorAll('[data-app]').forEach(function (el) {
        el.addEventListener('click', function () { openApp(el.dataset.app); });
    });
    $('app-back').addEventListener('click', goBack);
    $('nav-back').addEventListener('click', goBack);
    $('nav-home').addEventListener('click', goHome);
    $('nav-recent').addEventListener('click', function () { toast('Nenhum app recente'); });

    // botão voltar do próprio Android / gesto de voltar
    window.addEventListener('popstate', function (e) {
        if (e.state && e.state.app) openApp(e.state.app, true); else closeApp();
    });
})();

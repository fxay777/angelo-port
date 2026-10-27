/* touchscroll.js — rolagem por toque feita por script, só quando a página está
 * DENTRO de um iframe (celular 3D / apps do Android) e a tela é touch.
 *
 * Por quê: no Safari do iPhone, um iframe dentro de um objeto 3D com transformação
 * (o celular da cena) costuma aceitar toques mas ignorar o gesto de arrastar, então
 * não dava pra descer a página. Aqui a gente pega o dedo e move o scrollTop na mão,
 * com inércia. Fora de iframe (página aberta direto) nada muda: rola nativo.
 */
(function () {
    'use strict';
    var embedded = false;
    try { embedded = window.self !== window.top; } catch (e) { embedded = true; }
    var touch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (!embedded || !touch) return;

    // Desliga o gesto nativo de arrastar nas áreas roláveis (quem rola é o script)
    var css = document.createElement('style');
    css.textContent = 'body,.content-scroll,#home{touch-action:none !important}';
    document.head.appendChild(css);

    var THRESH = 6, st = null, raf = 0;

    function scroller(el) {
        while (el && el.nodeType === 1 && el !== document.documentElement) {
            var oy = getComputedStyle(el).overflowY;
            if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) return el;
            el = el.parentElement;
        }
        return null;
    }

    document.addEventListener('touchstart', function (e) {
        cancelAnimationFrame(raf);
        if (e.touches.length !== 1) { st = null; return; }
        var el = scroller(e.target);
        if (!el) { st = null; return; }
        var t = e.touches[0];
        st = { el: el, x: t.clientX, y: t.clientY, lastY: t.clientY, lastT: e.timeStamp, v: 0, moving: false };
    }, { passive: true });

    document.addEventListener('touchmove', function (e) {
        if (!st) return;
        var t = e.touches[0];
        if (!st.moving) {
            var ax = Math.abs(t.clientX - st.x), ay = Math.abs(t.clientY - st.y);
            if (ax < THRESH && ay < THRESH) return;
            if (ax > ay) { st = null; return; }          // gesto horizontal: não é rolagem
            st.moving = true;
        }
        var dy = st.lastY - t.clientY;
        st.el.scrollTop += dy;
        var dt = Math.max(1, e.timeStamp - st.lastT);
        st.v = 0.7 * st.v + 0.3 * (dy / dt);               // px por ms
        st.lastY = t.clientY; st.lastT = e.timeStamp;
        if (e.cancelable) e.preventDefault();
    }, { passive: false });

    function end() {
        if (!st || !st.moving) { st = null; return; }
        var el = st.el, v = st.v; st = null;
        (function glide() {
            if (Math.abs(v) < 0.02) return;
            var before = el.scrollTop;
            el.scrollTop += v * 16;
            if (el.scrollTop === before) return;             // chegou no fim
            v *= 0.95;
            raf = requestAnimationFrame(glide);
        })();
    }
    document.addEventListener('touchend', end, { passive: true });
    document.addEventListener('touchcancel', end, { passive: true });
})();

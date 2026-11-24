/* touchscroll.js — rolagem por arrasto feita por script quando a página está
 * DENTRO de um iframe (o celular da cena 3D) e a tela é touch.
 *
 * Por quê: em alguns navegadores (principalmente o Safari do iPhone), um iframe
 * dentro de um objeto com transformação 3D aceita toques mas ignora o gesto de
 * arrastar. Aqui a gente pega o dedo e move o scrollTop na mão, com inércia.
 * Usa Pointer Events quando existem (mais confiável) e Touch Events como reserva.
 * Fora de iframe (página aberta direto) nada muda: rola nativo.
 */
(function () {
    'use strict';
    var embedded = false;
    try { embedded = window.self !== window.top; } catch (e) { embedded = true; }
    var touch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    if (!embedded || !touch) return;

    // Quem rola é o script: desliga o gesto nativo (que o iframe 3D costuma engolir)
    var css = document.createElement('style');
    css.textContent = 'html,body,#phone,#app-corpo,#app-corpo *{touch-action:none !important}' +
        '#app-corpo input,#app-corpo textarea{touch-action:manipulation !important}';
    document.head.appendChild(css);

    var LIMIAR = 6, st = null, raf = 0;

    // áreas que cuidam do próprio dedo (jogos, scanner, teremim) não rolam
    function cuidaDoDedo(el) {
        return el && el.closest && el.closest('canvas, #sc, #tm, .pad, input[type=range], .rolagem95');
    }
    function rolavel(el) {
        while (el && el.nodeType === 1 && el !== document.documentElement) {
            var oy = getComputedStyle(el).overflowY;
            if ((oy === 'auto' || oy === 'scroll') && el.scrollHeight > el.clientHeight + 1) return el;
            el = el.parentElement;
        }
        return null;
    }

    function inicio(alvo, x, y, t) {
        cancelAnimationFrame(raf);
        if (cuidaDoDedo(alvo)) { st = null; return; }
        var el = rolavel(alvo);
        st = el ? { el: el, x: x, y: y, ultY: y, ultT: t, v: 0, movendo: false } : null;
    }
    function mover(x, y, t, evento) {
        if (!st) return;
        if (!st.movendo) {
            var ax = Math.abs(x - st.x), ay = Math.abs(y - st.y);
            if (ax < LIMIAR && ay < LIMIAR) return;
            if (ax > ay * 1.2) { st = null; return; }      // gesto horizontal: não é rolagem
            st.movendo = true;
            document.body.classList.add('rolando');
        }
        var dy = st.ultY - y;
        st.el.scrollTop += dy;
        var dt = Math.max(1, t - st.ultT);
        st.v = 0.7 * st.v + 0.3 * (dy / dt);
        st.ultY = y;
        st.ultT = t;
        if (evento && evento.cancelable) evento.preventDefault();
    }
    function fim() {
        document.body.classList.remove('rolando');
        if (!st || !st.movendo) { st = null; return; }
        var el = st.el, v = st.v;
        st = null;
        // engole o "clique" que o navegador dispara logo depois de um arrasto
        var engolir = function (e) { e.stopPropagation(); e.preventDefault(); };
        document.addEventListener('click', engolir, true);
        setTimeout(function () { document.removeEventListener('click', engolir, true); }, 60);
        (function deslizar() {
            if (Math.abs(v) < 0.02) return;
            var antes = el.scrollTop;
            el.scrollTop += v * 16;
            if (el.scrollTop === antes) return;
            v *= 0.95;
            raf = requestAnimationFrame(deslizar);
        })();
    }

    if (window.PointerEvent) {
        var id = null;
        document.addEventListener('pointerdown', function (e) {
            if (e.pointerType === 'mouse') return;
            id = e.pointerId;
            inicio(e.target, e.clientX, e.clientY, e.timeStamp);
        }, true);
        document.addEventListener('pointermove', function (e) {
            if (e.pointerId !== id) return;
            mover(e.clientX, e.clientY, e.timeStamp, e);
        }, true);
        var solta = function (e) { if (e.pointerId === id) { id = null; fim(); } };
        document.addEventListener('pointerup', solta, true);
        document.addEventListener('pointercancel', solta, true);
        // alguns Safari ainda precisam do touchmove cancelado para não "segurar" a página
        document.addEventListener('touchmove', function (e) { if (st && st.movendo && e.cancelable) e.preventDefault(); }, { passive: false });
    } else {
        document.addEventListener('touchstart', function (e) {
            if (e.touches.length !== 1) { st = null; return; }
            var t = e.touches[0];
            inicio(e.target, t.clientX, t.clientY, e.timeStamp);
        }, { passive: true });
        document.addEventListener('touchmove', function (e) {
            var t = e.touches[0];
            mover(t.clientX, t.clientY, e.timeStamp, e);
        }, { passive: false });
        document.addEventListener('touchend', fim, { passive: true });
        document.addEventListener('touchcancel', fim, { passive: true });
    }
})();

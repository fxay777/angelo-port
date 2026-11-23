// ============================================================================
// MiguelOS 95 — gerenciador de janelas estilo Windows 95 (JavaScript puro).
// Os aplicativos (Paint, MS-DOS, Campo Minado etc.) ficam em apps.js.
// ============================================================================

// ---------- Sons ----------
const somMouseDown = new Audio('/static/audio/mouse_down.mp3');
const somMouseUp = new Audio('/static/audio/mouse_up.mp3');
const somStartup = new Audio('/static/audio/startup.mp3');

somMouseDown.volume = 0.5;
somMouseUp.volume = 0.5;
somStartup.volume = 0.6;

var siteMutado = false; // var: fica visível em window.siteMutado (usado pelo som 8-bit)

function alternarMudo() {
    siteMutado = !siteMutado;
    const icon = document.getElementById('volume-icon');
    if (icon) {
        icon.src = siteMutado ? '/static/icons/volumeOff.png' : '/static/icons/volumeOn.png';
        icon.title = siteMutado ? 'Som desligado' : 'Volume';
    }
    somMouseDown.volume = siteMutado ? 0 : 0.5;
    somMouseUp.volume = siteMutado ? 0 : 0.5;
    somStartup.volume = siteMutado ? 0 : 0.6;
}

function tocarSom(audioEl) {
    if (siteMutado) return;
    const clone = audioEl.cloneNode();
    clone.volume = audioEl.volume;
    clone.play().catch(() => {});
}

document.addEventListener('mousedown', () => tocarSom(somMouseDown));
document.addEventListener('mouseup', () => tocarSom(somMouseUp));
document.addEventListener('touchstart', () => tocarSom(somMouseDown), { passive: true });
document.addEventListener('touchend', () => tocarSom(somMouseUp), { passive: true });

function desbloquearAudioMobile() {
    [somMouseDown, somMouseUp].forEach((audio) => {
        audio.play().then(() => { audio.pause(); audio.currentTime = 0; }).catch(() => {});
    });
}
document.addEventListener('touchstart', desbloquearAudioMobile, { passive: true, once: true });
document.addEventListener('click', desbloquearAudioMobile, { passive: true, once: true });

// ---------- Estado ----------
let zTop = 10;
const openWindows = {};
const dosInstances = {}; // emuladores/jogos abertos, por id de janela
const TASKBAR_H = () => (document.querySelector('.taskbar') || { offsetHeight: 34 }).offsetHeight;

function isMobile() {
    const isTouch = ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches) ||
        document.documentElement.classList.contains('touch-device') ||
        new URLSearchParams(window.location.search).has('touch');
    return window.innerWidth <= 768 || isTouch;
}

function escaparHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

// ---------- Janelas ----------
function openWindow(id, opts) {
    if (openWindows[id]) {
        restoreWindow(id);
        focusWindow(id);
        if (opts.onReopen) opts.onReopen(openWindows[id].el.querySelector('.win-body'));
        return openWindows[id];
    }

    const areaW = window.innerWidth;
    const areaH = window.innerHeight - TASKBAR_H();
    let width = Math.min(opts.width || 500, areaW - 16);
    let height = Math.min(opts.height || 400, areaH - 16);
    let left = opts.left;
    let top = opts.top;
    if (left === undefined || opts.center) left = Math.round((areaW - width) / 2);
    if (top === undefined || opts.center) top = Math.round((areaH - height) / 2);
    left = Math.max(0, Math.min(left, areaW - width));
    top = Math.max(0, Math.min(top, areaH - height));

    const win = document.createElement('div');
    win.className = 'win win-abrindo';
    win.dataset.id = id;
    if (opts.className) win.classList.add(opts.className);
    const resizable = opts.resizable !== false;

    if (isMobile()) {
        win.classList.add('win-fullscreen-mobile');
    } else {
        Object.assign(win.style, { top: top + 'px', left: left + 'px', width: width + 'px', height: height + 'px' });
    }
    win.style.zIndex = ++zTop;

    const icone = opts.icon ? `<img class="win-title-icon" src="${opts.icon}" alt="">` : '';
    win.innerHTML = `
        <div class="win-titlebar" data-id="${id}">
            <span class="win-title">${icone}<span>${escaparHtml(opts.title)}</span></span>
            <span class="win-buttons">
                ${opts.dialogo ? '' : `<button class="win-btn min" data-id="${id}" title="Minimizar" aria-label="Minimizar"></button>`}
                ${resizable ? `<button class="win-btn max" data-id="${id}" title="Maximizar" aria-label="Maximizar"></button>` : ''}
                <button class="win-btn close" data-id="${id}" title="Fechar" aria-label="Fechar"></button>
            </span>
        </div>
        ${opts.menu ? `<div class="win-menubar">${opts.menu.map((m) => `<span class="win-menu-item">${m}</span>`).join('')}</div>` : ''}
        <div class="win-body ${opts.bodyClass || ''}"></div>
        ${opts.statusBar ? `<div class="win-statusbar">${opts.statusBar}</div>` : ''}
        ${resizable ? '<div class="win-resize" aria-hidden="true"></div>' : ''}
    `;

    document.getElementById('desktop-root').appendChild(win);
    setTimeout(() => win.classList.remove('win-abrindo'), 220);

    const body = win.querySelector('.win-body');
    if (opts.iframeSrc) {
        body.innerHTML = `<iframe src="${opts.iframeSrc}" title="${escaparHtml(opts.title)}"></iframe>`;
    } else if (opts.bodyHtml) {
        body.innerHTML = opts.bodyHtml;
    }

    openWindows[id] = {
        el: win, minimized: false, maximized: false, title: opts.title,
        icon: opts.icon, onClose: opts.onClose, prevRect: null,
    };

    makeDraggable(win, id);
    if (resizable) makeResizable(win, id, opts.minWidth || 220, opts.minHeight || 140);
    addTaskbarItem(id, opts.title, opts.icon);

    win.addEventListener('mousedown', () => focusWindow(id));
    win.addEventListener('touchstart', () => focusWindow(id), { passive: true });
    win.querySelector('.win-titlebar').addEventListener('dblclick', (e) => {
        if (resizable && !e.target.closest('.win-btn')) toggleMaximize(id);
    });

    focusWindow(id);
    if (opts.maximized && !isMobile()) toggleMaximize(id);
    if (opts.onMount) requestAnimationFrame(() => opts.onMount(body, win));
    return openWindows[id];
}

function focusWindow(id) {
    const w = openWindows[id];
    if (!w) return;
    w.el.style.zIndex = ++zTop;
    document.querySelectorAll('.win.ativa').forEach((el) => el.classList.remove('ativa'));
    document.querySelectorAll('.task-item.ativo').forEach((el) => el.classList.remove('ativo'));
    w.el.classList.add('ativa');
    const item = document.querySelector(`.task-item[data-id="${id}"]`);
    if (item && !w.minimized) item.classList.add('ativo');
}

function focusTopWindow() {
    let topId = null;
    let topZ = -1;
    Object.keys(openWindows).forEach((id) => {
        const w = openWindows[id];
        const z = parseInt(w.el.style.zIndex, 10);
        if (!w.minimized && z > topZ) { topZ = z; topId = id; }
    });
    if (topId) focusWindow(topId);
}

function closeWindow(id) {
    const w = openWindows[id];
    if (!w) return;
    if (dosInstances[id]) {
        const instance = dosInstances[id];
        delete dosInstances[id];
        try { instance.stop().catch(() => {}); } catch (e) { /* já parado */ }
    }
    if (w.onClose) { try { w.onClose(); } catch (e) { /* ignora */ } }
    w.el.remove();
    delete openWindows[id];
    removeTaskbarItem(id);
    focusTopWindow();
}

function minimizeWindow(id) {
    const w = openWindows[id];
    if (!w) return;
    w.el.style.display = 'none';
    w.minimized = true;
    w.el.classList.remove('ativa');
    const item = document.querySelector(`.task-item[data-id="${id}"]`);
    if (item) item.classList.remove('ativo');
    focusTopWindow();
}

function restoreWindow(id) {
    const w = openWindows[id];
    if (!w) return;
    w.el.style.display = 'flex';
    w.minimized = false;
}

function toggleMaximize(id) {
    const w = openWindows[id];
    if (!w || isMobile()) return;
    const el = w.el;
    if (!w.maximized) {
        w.prevRect = { top: el.style.top, left: el.style.left, width: el.style.width, height: el.style.height };
        Object.assign(el.style, { top: '0px', left: '0px', width: window.innerWidth + 'px', height: (window.innerHeight - TASKBAR_H()) + 'px' });
        el.classList.add('maximizada');
        w.maximized = true;
    } else {
        Object.assign(el.style, w.prevRect);
        el.classList.remove('maximizada');
        w.maximized = false;
    }
}

// Enquanto arrasta/redimensiona, desliga os iframes pra não "engolirem" o mouse
function setArrastando(on) {
    document.body.classList.toggle('arrastando', on);
}

function makeDraggable(win, id) {
    if (win.classList.contains('win-fullscreen-mobile')) return;
    const bar = win.querySelector('.win-titlebar');
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    function start(x, y, target) {
        if (target.closest('.win-btn')) return;
        const w = openWindows[id];
        if (w && w.maximized) return;
        dragging = true;
        offsetX = x - win.offsetLeft;
        offsetY = y - win.offsetTop;
        setArrastando(true);
        focusWindow(id);
    }
    function move(x, y) {
        if (!dragging) return;
        const maxTop = window.innerHeight - TASKBAR_H() - 24;
        win.style.left = Math.min(window.innerWidth - 60, Math.max(-win.offsetWidth + 80, x - offsetX)) + 'px';
        win.style.top = Math.min(maxTop, Math.max(0, y - offsetY)) + 'px';
    }
    function end() {
        if (dragging) setArrastando(false);
        dragging = false;
    }

    bar.addEventListener('mousedown', (e) => start(e.clientX, e.clientY, e.target));
    document.addEventListener('mousemove', (e) => move(e.clientX, e.clientY));
    document.addEventListener('mouseup', end);
    bar.addEventListener('touchstart', (e) => { const t = e.touches[0]; start(t.clientX, t.clientY, e.target); }, { passive: true });
    document.addEventListener('touchmove', (e) => {
        if (!dragging) return;
        const t = e.touches[0];
        move(t.clientX, t.clientY);
        e.preventDefault();
    }, { passive: false });
    document.addEventListener('touchend', end);
}

function makeResizable(win, id, minW, minH) {
    const handle = win.querySelector('.win-resize');
    if (!handle || win.classList.contains('win-fullscreen-mobile')) return;
    let resizing = false;
    let sx = 0, sy = 0, sw = 0, sh = 0;

    handle.addEventListener('mousedown', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const w = openWindows[id];
        if (w && w.maximized) return;
        resizing = true;
        sx = e.clientX; sy = e.clientY; sw = win.offsetWidth; sh = win.offsetHeight;
        setArrastando(true);
        focusWindow(id);
    });
    document.addEventListener('mousemove', (e) => {
        if (!resizing) return;
        win.style.width = Math.max(minW, sw + e.clientX - sx) + 'px';
        win.style.height = Math.max(minH, sh + e.clientY - sy) + 'px';
        win.dispatchEvent(new CustomEvent('redimensionada'));
    });
    document.addEventListener('mouseup', () => {
        if (resizing) setArrastando(false);
        resizing = false;
    });
}

// Clicar dentro de um iframe não gera mousedown aqui fora — então quando
// o foco "some" pra dentro de um iframe, descobrimos qual janela é e focamos.
window.addEventListener('blur', () => {
    setTimeout(() => {
        const a = document.activeElement;
        if (a && a.tagName === 'IFRAME') {
            const win = a.closest('.win');
            if (win) focusWindow(win.dataset.id);
            fecharMenus();
        }
    }, 0);
});

// ---------- Barra de tarefas ----------
function addTaskbarItem(id, title, icon) {
    const bar = document.getElementById('taskbar-items');
    const item = document.createElement('button');
    item.type = 'button';
    item.className = 'task-item';
    item.dataset.id = id;
    item.title = title;
    item.innerHTML = `${icon ? `<img src="${icon}" alt="">` : ''}<span>${escaparHtml(title)}</span>`;
    item.addEventListener('click', () => {
        const w = openWindows[id];
        if (!w) return;
        if (w.minimized) {
            restoreWindow(id);
            focusWindow(id);
        } else if (w.el.classList.contains('ativa')) {
            minimizeWindow(id);
        } else {
            focusWindow(id);
        }
    });
    bar.appendChild(item);
}

function removeTaskbarItem(id) {
    const item = document.querySelector(`.task-item[data-id="${id}"]`);
    if (item) item.remove();
}

document.addEventListener('click', (e) => {
    const btn = e.target.closest('.win-btn');
    if (!btn) return;
    const id = btn.dataset.id;
    if (btn.classList.contains('close')) closeWindow(id);
    else if (btn.classList.contains('min')) minimizeWindow(id);
    else if (btn.classList.contains('max')) toggleMaximize(id);
});

// ---------- Relógio ----------
function updateClock() {
    const clock = document.getElementById('clock');
    if (!clock) return;
    const now = new Date();
    clock.innerText = now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const wrap = document.getElementById('clock-wrapper');
    if (wrap) wrap.title = now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
}
setInterval(updateClock, 1000);
updateClock();

// ---------- Jogos DOS (js-dos) ----------
function runDosGame(rootEl, bundleUrl, windowId) {
    // eslint-disable-next-line no-undef
    const instance = Dos(rootEl);
    instance.run(bundleUrl);
    if (windowId) dosInstances[windowId] = instance;
    return instance;
}

// ---------- Menu Iniciar e menus em geral ----------
function fecharMenus() {
    const menu = document.getElementById('start-menu');
    if (menu) menu.hidden = true;
    const btn = document.getElementById('start-btn');
    if (btn) btn.classList.remove('pressionado');
    document.querySelectorAll('.submenu-aberto').forEach((el) => el.classList.remove('submenu-aberto'));
    const ctx = document.getElementById('context-menu');
    if (ctx) ctx.hidden = true;
}

function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    const abrir = menu.hidden;
    fecharMenus();
    if (abrir) {
        menu.hidden = false;
        document.getElementById('start-btn').classList.add('pressionado');
    }
}

// Itens com submenu: no mouse abre no hover (CSS); no toque abre no clique
document.addEventListener('click', (e) => {
    const pai = e.target.closest('.menu-item.tem-submenu');
    if (pai && !e.target.closest('.submenu .menu-item:not(.tem-submenu)')) {
        const jaAberto = pai.classList.contains('submenu-aberto');
        pai.parentElement.querySelectorAll(':scope > .submenu-aberto').forEach((el) => el.classList.remove('submenu-aberto'));
        if (!jaAberto) pai.classList.add('submenu-aberto');
        e.stopPropagation();
        return;
    }
    const item = e.target.closest('.menu-item[data-acao]');
    if (item) {
        fecharMenus();
        executarAcao(item.dataset.acao);
    }
});

document.addEventListener('mousedown', (e) => {
    if (e.target.closest('#start-menu, #start-btn, #context-menu')) return;
    fecharMenus();
});

// ---------- Portfólio (Showcase) ----------
function abrirShowcase(rota) {
    const caminho = '/showcase' + (rota ? '/' + rota : '');
    if (openWindows.showcase) {
        if (rota) openWindows.showcase.el.querySelector('iframe').src = caminho;
        restoreWindow('showcase');
        focusWindow('showcase');
        return;
    }
    const margin = 10;
    const col = document.querySelector('.icons-column');
    const iconsW = isMobile() || !col ? 0 : col.offsetWidth + 14;
    openWindow('showcase', {
        title: 'Miguel Angelo - Showcase 2026',
        icon: '/static/icons/showcaseIcon.png',
        top: margin,
        left: iconsW,
        width: window.innerWidth - iconsW - margin,
        height: window.innerHeight - TASKBAR_H() - margin * 2,
        iframeSrc: caminho,
    });
}

// ---------- Jogos ----------
function abrirDoom() {
    openWindow('doom', {
        title: 'Doom', icon: '/static/icons/doomIcon.png',
        top: 30, left: 130, width: 1000, height: 720,
        bodyHtml: '<div class="dos-root" id="dos-doom"></div>',
        onMount: (body) => runDosGame(body.querySelector('#dos-doom'), '/static/jsdos/doom.jsdos', 'doom'),
    });
}

function abrirTetris() {
    openWindow('tetris', {
        title: 'Tetris', icon: '/static/icons/tetrisIcon.png',
        top: 30, left: 160, width: 320, height: 560, resizable: false,
        bodyHtml: `
            <div style="display:flex; flex-direction:column; align-items:center; background:#000; height:100%; padding:8px; box-sizing:border-box;">
                <div id="tetris-score" style="color:#fff; font-family:monospace; margin-bottom:6px;">Pontos: 0</div>
                <canvas id="tetris-canvas" style="border:1px solid #444;"></canvas>
                <div class="tetris-desktop-hint" style="color:#888; font-size:11px; font-family:monospace; margin-top:6px; text-align:center;">
                    ← → mover · ↑ girar · ↓ acelerar · espaço soltar
                </div>
                <div class="tetris-touch-controls">
                    <button data-key="ArrowLeft">◀</button>
                    <button data-key="ArrowUp">⟳</button>
                    <button data-key="ArrowRight">▶</button>
                    <button data-key="ArrowDown">▼</button>
                    <button data-key=" ">SOLTAR</button>
                </div>
            </div>
        `,
        onMount: (body) => {
            const canvas = body.querySelector('#tetris-canvas');
            const scoreEl = body.querySelector('#tetris-score');
            const cleanup = initTetris(canvas, scoreEl, null, () => {});
            dosInstances.tetris = { stop: () => { cleanup(); return Promise.resolve(); } };
            body.querySelectorAll('.tetris-touch-controls button').forEach((btn) => {
                btn.addEventListener('touchstart', (e) => {
                    e.preventDefault();
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: btn.dataset.key }));
                });
                btn.addEventListener('click', () => {
                    document.dispatchEvent(new KeyboardEvent('keydown', { key: btn.dataset.key }));
                });
            });
        },
    });
}

function abrirScrabble() {
    openWindow('scrabble', {
        title: 'Scrabble', icon: '/static/icons/scrabbleIcon.png',
        top: 40, left: 140, width: 1000, height: 780,
        bodyHtml: '<div class="dos-root" id="dos-scrabble"></div>',
        onMount: (body) => runDosGame(body.querySelector('#dos-scrabble'), '/static/jsdos/scrabble.jsdos', 'scrabble'),
    });
}

function abrirWolf3D() {
    openWindow('wolf3d', {
        title: 'Wolfenstein 3D', icon: '/static/icons/wolf3dIcon.png',
        top: 30, left: 150, width: 860, height: 580,
        bodyHtml: '<div class="dos-root" id="dos-wolf3d"></div>',
        onMount: (body) => runDosGame(body.querySelector('#dos-wolf3d'), '/static/jsdos/wolf3d.jsdos', 'wolf3d'),
    });
}

function abrirDigger() {
    openWindow('digger', {
        title: 'Digger', icon: '/static/icons/diggerIcon.png',
        top: 50, left: 170, width: 760, height: 580,
        bodyHtml: '<div class="dos-root" id="dos-digger"></div>',
        onMount: (body) => runDosGame(body.querySelector('#dos-digger'), '/static/jsdos/digger.jsdos', 'digger'),
    });
}

function abrirCreditos() {
    openWindow('creditos', {
        title: 'Créditos', icon: '/static/icons/credits.png',
        center: true, width: 520, height: 420,
        iframeSrc: '/creditos',
    });
}

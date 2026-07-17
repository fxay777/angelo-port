// ============================================================================
// Gerenciador de janelas estilo Windows 95 — puro JavaScript, sem framework.
// ============================================================================

// ---------- Sons ----------
const somMouseDown = new Audio('/static/audio/mouse_down.mp3');
const somMouseUp = new Audio('/static/audio/mouse_up.mp3');
const somStartup = new Audio('/static/audio/startup.mp3');

somMouseDown.volume = 0.5;
somMouseUp.volume = 0.5;
somStartup.volume = 0.6;

function tocarSom(audioEl) {
    // Clona o áudio pra permitir cliques rápidos em sequência sem cortar o som anterior
    const clone = audioEl.cloneNode();
    clone.volume = audioEl.volume;
    clone.play().catch(() => {
        // Navegadores bloqueiam autoplay antes da 1ª interação do usuário;
        // isso é esperado e inofensivo, por isso o catch vazio.
    });
}

// Toca o som de clique em QUALQUER mousedown/mouseup na página
document.addEventListener('mousedown', () => tocarSom(somMouseDown));
document.addEventListener('mouseup', () => tocarSom(somMouseUp));

let zTop = 10;
const openWindows = {};
const dosInstances = {}; // guarda as instâncias do emulador DOS abertas, por id de janela

function openWindow(id, opts) {
    // Se já está aberta, só foca/restaura
    if (openWindows[id]) {
        restoreWindow(id);
        focusWindow(id);
        return;
    }

    const win = document.createElement('div');
    win.className = 'win';
    win.style.top = opts.top + 'px';
    win.style.left = opts.left + 'px';
    win.style.width = opts.width + 'px';
    win.style.height = opts.height + 'px';
    win.style.zIndex = ++zTop;

    win.innerHTML = `
        <div class="win-titlebar" data-id="${id}">
            <span>${opts.title}</span>
            <span class="win-buttons">
                <button class="win-btn min" data-id="${id}">_</button>
                <button class="win-btn close" data-id="${id}">x</button>
            </span>
        </div>
        <div class="win-body"></div>
    `;

    document.getElementById('desktop-root').appendChild(win);

    const body = win.querySelector('.win-body');
    if (opts.iframeSrc) {
        body.innerHTML = `<iframe src="${opts.iframeSrc}"></iframe>`;
    } else if (opts.bodyHtml) {
        body.innerHTML = opts.bodyHtml;
    }

    openWindows[id] = { el: win, minimized: false, title: opts.title };

    makeDraggable(win, id);
    addTaskbarItem(id, opts.title);

    win.addEventListener('mousedown', () => focusWindow(id));

    if (opts.onMount) {
        // Espera o próximo frame pra garantir que o elemento já está no DOM
        requestAnimationFrame(() => opts.onMount(body));
    }
}

function focusWindow(id) {
    const w = openWindows[id];
    if (!w) return;
    w.el.style.zIndex = ++zTop;
}

function closeWindow(id) {
    const w = openWindows[id];
    if (!w) return;

    // Se essa janela tinha um jogo DOS rodando, desliga o emulador
    // de verdade (isso para o som também) antes de remover a janela.
    if (dosInstances[id]) {
        const instance = dosInstances[id];
        delete dosInstances[id];
        instance.stop().catch(() => {
            // Se der erro ao parar (ex: já tinha parado sozinho), ignora.
        });
    }

    w.el.remove();
    delete openWindows[id];
    removeTaskbarItem(id);
}

function minimizeWindow(id) {
    const w = openWindows[id];
    if (!w) return;
    w.el.style.display = 'none';
    w.minimized = true;
}

function restoreWindow(id) {
    const w = openWindows[id];
    if (!w) return;
    w.el.style.display = 'flex';
    w.minimized = false;
}

function makeDraggable(win, id) {
    const bar = win.querySelector('.win-titlebar');
    let dragging = false;
    let offsetX = 0;
    let offsetY = 0;

    bar.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('win-btn')) return;
        dragging = true;
        offsetX = e.clientX - win.offsetLeft;
        offsetY = e.clientY - win.offsetTop;
        focusWindow(id);
    });

    document.addEventListener('mousemove', (e) => {
        if (!dragging) return;
        win.style.left = Math.max(0, e.clientX - offsetX) + 'px';
        win.style.top = Math.max(0, e.clientY - offsetY) + 'px';
    });

    document.addEventListener('mouseup', () => {
        dragging = false;
    });
}

// ---------- Barra de tarefas ----------
function addTaskbarItem(id, title) {
    const bar = document.getElementById('taskbar-items');
    const item = document.createElement('div');
    item.className = 'task-item';
    item.dataset.id = id;
    item.innerText = title;
    item.addEventListener('click', () => {
        const w = openWindows[id];
        if (!w) return;
        if (w.minimized) {
            restoreWindow(id);
            focusWindow(id);
        } else {
            minimizeWindow(id);
        }
    });
    bar.appendChild(item);
}

function removeTaskbarItem(id) {
    const bar = document.getElementById('taskbar-items');
    const item = bar.querySelector(`[data-id="${id}"]`);
    if (item) item.remove();
}

// Delega clique nos botões de fechar/minimizar de qualquer janela
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close')) closeWindow(e.target.dataset.id);
    if (e.target.classList.contains('min')) minimizeWindow(e.target.dataset.id);
});

// ---------- Relógio da barra de tarefas ----------
function updateClock() {
    const clock = document.getElementById('clock');
    if (!clock) return;
    const now = new Date();
    clock.innerText = now.toLocaleTimeString('pt-BR');
}
setInterval(updateClock, 1000);
updateClock();

// ---------- Jogos DOS (js-dos) ----------
function runDosGame(rootEl, bundleUrl, windowId) {
    // eslint-disable-next-line no-undef
    const instance = Dos(rootEl);
    instance.run(bundleUrl);
    if (windowId) {
        dosInstances[windowId] = instance;
    }
    return instance;
}

// ---------- Menu Start ----------
function toggleStartMenu() {
    const menu = document.getElementById('start-menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Fecha o menu Start se clicar fora dele
document.addEventListener('mousedown', (e) => {
    const menu = document.getElementById('start-menu');
    const btn = document.getElementById('start-btn');
    if (!menu || menu.style.display === 'none') return;
    if (e.target === btn || menu.contains(e.target)) return;
    menu.style.display = 'none';
});

// ---------- Ícones da área de trabalho ----------
function abrirShowcase() {
    openWindow('showcase', {
        title: 'Miguel Angelo - Showcase 2026',
        top: 24,
        left: 110,
        width: 900,
        height: 600,
        iframeSrc: '/showcase',
    });
}

function abrirDoom() {
    openWindow('doom', {
        title: 'Doom',
        top: 30,
        left: 130,
        width: 980,
        height: 670,
        bodyHtml: '<div class="dos-root" id="dos-doom"></div>',
        onMount: (body) => {
            runDosGame(body.querySelector('#dos-doom'), '/static/jsdos/doom.jsdos', 'doom');
        },
    });
}

function abrirTetris() {
    openWindow('tetris', {
        title: 'Tetris',
        top: 30,
        left: 130,
        width: 320,
        height: 560,
        bodyHtml: `
            <div style="display:flex; flex-direction:column; align-items:center; background:#000; height:100%; padding:8px; box-sizing:border-box;">
                <div id="tetris-score" style="color:#fff; font-family:monospace; margin-bottom:6px;">Score: 0</div>
                <canvas id="tetris-canvas" style="border:1px solid #444;"></canvas>
                <div style="color:#888; font-size:11px; font-family:monospace; margin-top:6px; text-align:center;">
                    ← → mover · ↑ girar · ↓ acelerar · espaço soltar
                </div>
            </div>
        `,
        onMount: (body) => {
            const canvas = body.querySelector('#tetris-canvas');
            const scoreEl = body.querySelector('#tetris-score');
            const cleanup = initTetris(canvas, scoreEl, null, () => {});
            dosInstances['tetris'] = { stop: () => { cleanup(); return Promise.resolve(); } };
        },
    });
}

function abrirScrabble() {
    openWindow('scrabble', {
        title: 'Scrabble',
        top: 40,
        left: 140,
        width: 920,
        height: 750,
        bodyHtml: '<div class="dos-root" id="dos-scrabble"></div>',
        onMount: (body) => {
            runDosGame(body.querySelector('#dos-scrabble'), '/static/jsdos/scrabble.jsdos', 'scrabble');
        },
    });
}

function abrirWolf3D() {
    openWindow('wolf3d', {
        title: 'Wolfenstein 3D',
        top: 30,
        left: 150,
        width: 720,
        height: 480,
        bodyHtml: '<div class="dos-root" id="dos-wolf3d"></div>',
        onMount: (body) => {
            runDosGame(body.querySelector('#dos-wolf3d'), '/static/jsdos/wolf3d.jsdos', 'wolf3d');
        },
    });
}

function abrirDigger() {
    openWindow('digger', {
        title: 'Digger',
        top: 50,
        left: 170,
        width: 660,
        height: 500,
        bodyHtml: '<div class="dos-root" id="dos-digger"></div>',
        onMount: (body) => {
            runDosGame(body.querySelector('#dos-digger'), '/static/jsdos/digger.jsdos', 'digger');
        },
    });
}

function abrirCreditos() {
    openWindow('creditos', {
        title: 'Credits',
        top: 60,
        left: 200,
        width: 480,
        height: 520,
        iframeSrc: '/creditos',
    });
}

// Abre o "My Showcase" automaticamente ao carregar, igual ao site original
window.addEventListener('DOMContentLoaded', () => {
    somStartup.play().catch(() => {
        // Autoplay de som só funciona depois de alguma interação do
        // usuário em muitos navegadores — se falhar aqui, tudo bem,
        // o resto do site funciona normalmente mesmo assim.
    });
    abrirShowcase();
});

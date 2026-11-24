// Utilidades compartilhadas: texturas, material "matcap" que imita a luz da
// cena original, sombras de contato, formas básicas, sons e balões de texto.
import {
    BoxGeometry, CanvasTexture, Color, CylinderGeometry, Mesh, MeshBasicMaterial,
    MeshMatcapMaterial, PlaneGeometry, sRGBEncoding,
} from 'three';

export const CHAO = -2984;
export const MESA = -452;
export const DEG = Math.PI / 180;

export function canvas(w, h, desenhar) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    desenhar(c.getContext('2d'), w, h);
    const t = new CanvasTexture(c);
    t.encoding = sRGBEncoding;
    t.anisotropy = 4;
    t.userData.canvas = c;
    return t;
}

// Esfera de luz: luz principal suave de cima/esquerda e rebatida do chão claro
export const MATCAP = canvas(256, 256, (g, w) => {
    g.fillStyle = '#000';
    g.fillRect(0, 0, w, w);
    const r = w / 2;
    const base = g.createRadialGradient(r * 0.78, r * 0.62, r * 0.05, r, r, r);
    base.addColorStop(0, '#ffffff');
    base.addColorStop(0.45, '#d9d6d2');
    base.addColorStop(0.85, '#8d8a87');
    base.addColorStop(1, '#5f5c5a');
    g.fillStyle = base;
    g.beginPath();
    g.arc(r, r, r, 0, Math.PI * 2);
    g.fill();
    const reb = g.createLinearGradient(0, w * 0.6, 0, w);
    reb.addColorStop(0, 'rgba(255,250,240,0)');
    reb.addColorStop(1, 'rgba(255,250,240,0.22)');
    g.fillStyle = reb;
    g.beginPath();
    g.arc(r, r, r, 0, Math.PI * 2);
    g.fill();
});

const cacheMat = {};
export function mat(cor, mapa, extra) {
    const chave = cor + (mapa ? mapa.uuid : '') + (extra ? JSON.stringify(Object.keys(extra)) : '');
    if (!cacheMat[chave] || extra) {
        const m = new MeshMatcapMaterial(Object.assign({ matcap: MATCAP, color: new Color(cor), map: mapa || null }, extra || {}));
        if (extra) return m;
        cacheMat[chave] = m;
    }
    return cacheMat[chave];
}

export const SOMBRA = canvas(128, 128, (g, w) => {
    const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    gr.addColorStop(0, 'rgba(0,0,0,0.55)');
    gr.addColorStop(0.55, 'rgba(0,0,0,0.25)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, w);
});
export function sombra(larg, prof, x, y, z, rot, opacidade) {
    const m = new Mesh(new PlaneGeometry(larg, prof), new MeshBasicMaterial({ map: SOMBRA, transparent: true, depthWrite: false, opacity: opacidade || 0.8 }));
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = rot || 0;
    m.position.set(x, y + 2, z);
    m.renderOrder = 1;
    m.userData.sombra = true;
    return m;
}

export function caixa(w, h, d, material) {
    return new Mesh(new BoxGeometry(w, h, d), material);
}
export function cilindro(rTopo, rBase, h, material, seg) {
    return new Mesh(new CylinderGeometry(rTopo, rBase, h, seg || 24), material);
}
// cilindro entre dois pontos (pernas de tripé, hastes)
export function haste(a, b, raio, material) {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const dz = b[2] - a[2];
    const comp = Math.sqrt(dx * dx + dy * dy + dz * dz);
    const m = cilindro(raio, raio, comp, material, 10);
    m.position.set((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
    m.lookAt(b[0], b[1], b[2]);
    m.rotateX(Math.PI / 2);
    return m;
}

// Plano com texto desenhado (etiquetas, placas, fita no chão)
export function placaTexto(w, h, pxW, pxH, desenhar, opcoes) {
    const t = canvas(pxW, pxH, desenhar);
    const m = new Mesh(new PlaneGeometry(w, h), (opcoes && opcoes.basico)
        ? new MeshBasicMaterial({ map: t, transparent: !!(opcoes && opcoes.transparente) })
        : mat('#ffffff', t, opcoes && opcoes.transparente ? { transparent: true } : null));
    m.userData.textura = t;
    return m;
}

// ------------------------------------------------------------------- sons
let ctxAudio = null;
function audio() {
    if (!ctxAudio) {
        const C = window.AudioContext || window.webkitAudioContext;
        if (!C) return null;
        ctxAudio = new C();
    }
    if (ctxAudio.state === 'suspended') ctxAudio.resume();
    return ctxAudio;
}
// respeita o botão de mudo da cena 3D (o app avisa pelo evento 'muteToggle')
let mudo = false;
document.addEventListener('muteToggle', (e) => { mudo = !!e.detail; });
function somMudo() { return mudo; }
export function tons(notas, tipo, volume) {
    const a = audio();
    if (!a || somMudo()) return;
    let t = a.currentTime;
    notas.forEach(([f, d]) => {
        if (f) {
            const o = a.createOscillator();
            const g = a.createGain();
            o.type = tipo || 'square';
            o.frequency.setValueAtTime(f, t);
            g.gain.setValueAtTime(volume || 0.05, t);
            g.gain.exponentialRampToValueAtTime(0.0001, t + d);
            o.connect(g).connect(a.destination);
            o.start(t);
            o.stop(t + d);
        }
        t += d;
    });
}
export function ruido(duracao, volume, filtroHz) {
    const a = audio();
    if (!a || somMudo()) return;
    const n = Math.floor(a.sampleRate * duracao);
    const buf = a.createBuffer(1, n, a.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < n; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 3);
    const s = a.createBufferSource();
    s.buffer = buf;
    const g = a.createGain();
    g.gain.value = volume || 0.4;
    const f = a.createBiquadFilter();
    f.type = 'bandpass';
    f.frequency.value = filtroHz || 1800;
    s.connect(f).connect(g).connect(a.destination);
    s.start();
}

// ------------------------------------------------- balão de texto (toast)
let toastEl = null;
let toastTimer = null;
export function falar(texto, ms) {
    if (!toastEl) {
        toastEl = document.createElement('div');
        toastEl.id = 'sala-toast';
        document.body.appendChild(toastEl);
    }
    toastEl.textContent = '';
    toastEl.classList.add('visivel');
    clearTimeout(toastTimer);
    let i = 0;
    const digitar = () => {
        if (i <= texto.length) {
            toastEl.textContent = texto.slice(0, i++);
            toastTimer = setTimeout(digitar, 18);
        } else {
            toastTimer = setTimeout(() => toastEl.classList.remove('visivel'), ms || 3200);
        }
    };
    digitar();
}

// Manda um pedido para o computador (MiguelOS dentro do monitor)
export function pedirAoPC(dados, entrarNoMonitor) {
    const ifr = document.getElementById('computer-screen');
    if (ifr && ifr.contentWindow) ifr.contentWindow.postMessage(Object.assign({ fonte: 'sala3d' }, dados), '*');
    if (entrarNoMonitor) {
        if (typeof window.focusMonitorCamera === 'function') window.focusMonitorCamera();
        else if (window.Application) window.Application.camera.trigger('enterMonitor');
    }
}

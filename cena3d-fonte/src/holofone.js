// Hologramas do HoloFone: o celular 3D da mesa projeta objetos de luz que
// saem da tela e flutuam na frente dela (e para fora das bordas).
//
// A página do celular (/android, dentro de um iframe) manda mensagens:
//   { fonte:'holofone', acao:'holo-ping' }                 → respondemos 'holo-pong'
//   { fonte:'holofone', acao:'holo', tipo, dados }          → liga um holograma
//   { fonte:'holofone', acao:'holo-off' }                   → desliga
//   { fonte:'holofone', acao:'holo-girar', dx }             → gira (carrossel/cartão)
//   { fonte:'holofone', acao:'holo-ir', i }                 → item i do carrossel na frente
//   { fonte:'holofone', acao:'holo-fala', nivel }           → a M.A.I.A. está falando (0..1)
import {
    AdditiveBlending, BoxGeometry, FrontSide, CanvasTexture, Color, CylinderGeometry, DoubleSide, EdgesGeometry, Group,
    IcosahedronGeometry, LineBasicMaterial, LineSegments, Mesh, MeshBasicMaterial, PlaneGeometry, RingGeometry,
    SphereGeometry, TorusGeometry, Vector3,
} from 'three';

const CORES = { ciano: '#4de1ff', amarelo: '#ffd23f', rosa: '#ff4fa3', verde: '#5dffb0', laranja: '#ff8a3d', roxo: '#a98bff' };
const PALETA = [CORES.amarelo, CORES.rosa, CORES.ciano, CORES.verde, CORES.laranja, CORES.roxo];
const suave = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

function matLuz(cor, opacidade = 0.55, extra) {
    return new MeshBasicMaterial(Object.assign({
        color: new Color(cor), transparent: true, opacity: opacidade, blending: AdditiveBlending,
        depthWrite: false, side: FrontSide,
    }, extra));
}
function contorno(geo, cor, opacidade = 0.9) {
    return new LineSegments(new EdgesGeometry(geo), new LineBasicMaterial({
        color: new Color(cor), transparent: true, opacity: opacidade, blending: AdditiveBlending, depthWrite: false,
    }));
}
function texturaCanvas(w, h, desenhar) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    desenhar(c.getContext('2d'), w, h);
    const t = new CanvasTexture(c);
    t.userData.canvas = c;
    return t;
}
// linhas de varredura por cima de um painel
function riscas(g, w, h) {
    g.fillStyle = 'rgba(0,0,0,0.28)';
    for (let y = 0; y < h; y += 4) g.fillRect(0, y, w, 2);
}
function quebrarTexto(g, texto, x, y, larg, altLinha, maxLinhas) {
    const palavras = String(texto).split(' ');
    let linha = '';
    let n = 0;
    for (let i = 0; i < palavras.length; i++) {
        const tenta = linha ? linha + ' ' + palavras[i] : palavras[i];
        if (g.measureText(tenta).width > larg && linha) {
            g.fillText(linha, x, y + n * altLinha);
            linha = palavras[i];
            if (++n >= maxLinhas - 1) { linha = palavras.slice(i).join(' '); break; }
        } else linha = tenta;
    }
    if (linha) {
        while (g.measureText(linha).width > larg && linha.length > 3) linha = linha.slice(0, -4) + '…';
        g.fillText(linha, x, y + n * altLinha);
    }
}
const FONTE_PIXEL = '"Press Start 2P", "Courier New", monospace';

// ------------------------------------------------------------ peças comuns
function emissor() {
    const g = new Group();
    const anel = new Mesh(new RingGeometry(120, 132, 48), matLuz(CORES.ciano, 0.7));
    anel.position.z = 6;
    g.add(anel);
    const anel2 = new Mesh(new RingGeometry(60, 66, 6), matLuz(CORES.amarelo, 0.7));
    anel2.position.z = 7;
    g.add(anel2);
    // cone de luz saindo da tela
    const grad = texturaCanvas(8, 128, (c, w, h) => {
        const l = c.createLinearGradient(0, 0, 0, h);
        l.addColorStop(0, 'rgba(255,255,255,0)');
        l.addColorStop(1, 'rgba(255,255,255,0.9)');
        c.fillStyle = l;
        c.fillRect(0, 0, w, h);
    });
    const cone = new Mesh(new CylinderGeometry(260, 110, 300, 40, 1, true), matLuz(CORES.ciano, 0.16, { map: grad }));
    cone.rotation.x = Math.PI / 2;     // eixo do cilindro vira o eixo z (para fora da tela)
    cone.position.z = 150;
    g.add(cone);
    return { grupo: g, anel, anel2, cone };
}

// ------------------------------------------------------------ hologramas
function hCarrossel(dados) {
    const itens = (dados && dados.itens) || [];
    const g = new Group();
    const n = Math.max(itens.length, 1);
    const raio = Math.max(300, n * 62);
    const passo = (Math.PI * 2) / n;
    const paineis = itens.map((it, i) => {
        const tex = texturaCanvas(512, 320, (c, w, h) => desenharCartaoVideo(c, w, h, it, null));
        const p = new Mesh(new PlaneGeometry(250, 156), matLuz('#ffffff', 0.9, { map: tex }));
        const borda = contorno(new PlaneGeometry(250, 156), PALETA[i % PALETA.length], 1);
        p.add(borda);
        const a = i * passo;
        p.position.set(Math.sin(a) * raio, 0, Math.cos(a) * raio);
        p.rotation.y = a;
        g.add(p);
        // tenta a miniatura do YouTube (só funciona se o servidor permitir CORS)
        if (it.yt) {
            const img = new Image();
            img.crossOrigin = 'anonymous';
            img.onload = () => { desenharCartaoVideo(tex.userData.canvas.getContext('2d'), 512, 320, it, img); tex.needsUpdate = true; };
            img.src = 'https://i.ytimg.com/vi/' + it.yt + '/mqdefault.jpg';
        }
        return { p, borda };
    });
    const base = new Mesh(new RingGeometry(raio - 6, raio + 6, 64), matLuz(CORES.amarelo, 0.5, { side: DoubleSide }));
    base.rotation.x = -Math.PI / 2;
    base.position.y = -100;
    g.add(base);
    const roda = new Group();
    roda.add(g);
    roda.position.set(0, 20, 60 - raio + 520);   // o painel da frente fica bem perto da câmera
    let ang = -((dados && dados.i) || 0) * passo;
    let alvo = ang;
    return {
        grupo: roda,
        animar(t) {
            ang += (alvo - ang) * 0.12;
            g.rotation.y = ang;
            paineis.forEach((o, i) => {
                // o painel virado para a câmera fica mais forte
                const a = i * passo + ang;
                const frente = (Math.cos(a) + 1) / 2;
                o.p.material.opacity = 0.25 + frente * 0.75;
                o.p.scale.setScalar(0.8 + frente * 0.35);
                o.borda.material.opacity = 0.3 + frente * 0.7 + Math.sin(t * 6 + i) * 0.1;
                o.p.position.y = Math.sin(t * 1.5 + i) * 10;
            });
        },
        girar(dx) { alvo += dx * 0.006; },
        ir(i) {
            // menor caminho até o item i
            const destino = -i * passo;
            const voltas = Math.round((alvo - destino) / (Math.PI * 2));
            alvo = destino + voltas * Math.PI * 2;
        },
    };
}
function desenharCartaoVideo(c, w, h, it, img) {
    c.clearRect(0, 0, w, h);
    c.fillStyle = 'rgba(10,30,60,0.55)';
    c.fillRect(0, 0, w, h);
    if (img) {
        c.globalAlpha = 0.85;
        c.drawImage(img, 0, 0, w, h * 0.72);
        c.globalAlpha = 1;
    } else {
        c.fillStyle = 'rgba(77,225,255,0.18)';
        c.fillRect(0, 0, w, h * 0.72);
        c.fillStyle = CORES.ciano;
        c.beginPath(); c.moveTo(w / 2 - 26, h * 0.36 - 32); c.lineTo(w / 2 + 34, h * 0.36); c.lineTo(w / 2 - 26, h * 0.36 + 32); c.closePath(); c.fill();
    }
    c.fillStyle = 'rgba(0,0,0,0.6)';
    c.fillRect(0, h * 0.72, w, h * 0.28);
    c.fillStyle = CORES.amarelo;
    c.font = '14px ' + FONTE_PIXEL;
    c.fillText(String(it.categoria || 'VÍDEO').toUpperCase(), 16, h * 0.72 + 28);
    c.fillStyle = '#ffffff';
    c.font = 'bold 30px Arial, sans-serif';
    quebrarTexto(c, it.titulo || '', 16, h * 0.72 + 66, w - 32, 32, 1);
    riscas(c, w, h);
}

function hBarras(dados) {
    const itens = (dados && dados.itens) || [];
    const g = new Group();
    const alt = 46;
    const larguraMax = 380;
    const barras = itens.map((it, i) => {
        const cor = PALETA[i % PALETA.length];
        const y = ((itens.length - 1) / 2 - i) * (alt + 22);
        const fundo = contorno(new BoxGeometry(larguraMax, alt, 30), cor, 0.35);
        fundo.position.set(0, y, 0);
        g.add(fundo);
        const barra = new Mesh(new BoxGeometry(larguraMax, alt - 10, 24), matLuz(cor, 0.55));
        barra.position.set(-larguraMax / 2, y, 0);
        barra.geometry.translate(larguraMax / 2, 0, 0);   // cresce a partir da esquerda
        barra.scale.x = 0.001;
        g.add(barra);
        const rot = texturaCanvas(512, 64, (c, w, h) => {
            c.fillStyle = '#ffffff';
            c.font = '26px ' + FONTE_PIXEL;
            c.fillText(String(it.nome).toUpperCase().slice(0, 20), 8, 42);
            c.textAlign = 'right';
            c.fillStyle = cor;
            c.fillText(Math.round(it.nivel) + '%', w - 8, 42);
        });
        const rotulo = new Mesh(new PlaneGeometry(larguraMax, 48), matLuz('#ffffff', 0.95, { map: rot }));
        rotulo.position.set(0, y + alt / 2 + 14, 16);
        g.add(rotulo);
        return { barra, nivel: Math.max(0.05, Math.min(1, it.nivel / 100)), atraso: i * 0.15 };
    });
    g.position.set(0, 0, 260);
    let t0 = null;
    return {
        grupo: g,
        animar(t) {
            if (t0 === null) t0 = t;
            barras.forEach((b) => { b.barra.scale.x = Math.max(0.001, b.nivel * suave((t - t0 - 0.5 - b.atraso) / 1.1)); });
            g.rotation.y = Math.sin(t * 0.6) * 0.22;
            g.rotation.x = Math.sin(t * 0.45) * 0.06;
        },
    };
}

function hCartao(dados) {
    const d = dados || {};
    const g = new Group();
    const frente = texturaCanvas(640, 360, (c, w, h) => {
        c.fillStyle = 'rgba(8,24,48,0.5)';
        c.fillRect(0, 0, w, h);
        c.strokeStyle = CORES.ciano;
        c.lineWidth = 6;
        c.strokeRect(10, 10, w - 20, h - 20);
        // cantos de "mira"
        c.fillStyle = CORES.amarelo;
        [[18, 18], [w - 48, 18], [18, h - 48], [w - 48, h - 48]].forEach(([x, y]) => c.fillRect(x, y, 30, 30));
        c.fillStyle = '#ffffff';
        c.font = '34px ' + FONTE_PIXEL;
        c.fillText(String(d.nome || '').toUpperCase().slice(0, 16), 50, 120);
        c.fillStyle = CORES.amarelo;
        c.font = '18px ' + FONTE_PIXEL;
        c.fillText(String(d.cargo || '').toUpperCase(), 50, 168);
        c.fillStyle = CORES.ciano;
        c.font = 'bold 28px "Courier New", monospace';
        c.fillText(d.email || '', 50, 250);
        c.fillStyle = CORES.rosa;
        c.font = '16px ' + FONTE_PIXEL;
        c.fillText('PRESS START ▶ CONTRATAR', 50, 310);
        riscas(c, w, h);
    });
    const cartao = new Mesh(new PlaneGeometry(330, 186), matLuz('#ffffff', 0.95, { map: frente }));
    g.add(cartao);
    const borda = contorno(new BoxGeometry(330, 186, 10), CORES.ciano, 0.8);
    g.add(borda);
    g.position.set(0, 30, 280);
    let giro = 0;
    let velo = 0.6;
    return {
        grupo: g,
        animar(t, dt) {
            giro += velo * dt;
            velo += (0.6 - velo) * 0.02;
            g.rotation.y = Math.sin(giro) * 0.55;
            g.rotation.x = Math.sin(t * 0.8) * 0.08;
            g.position.y = 30 + Math.sin(t * 1.3) * 14;
            g.position.z = 280;
            cartao.material.opacity = 0.85 + (Math.random() < 0.04 ? -0.5 : 0);
        },
        girar(dx) { velo += dx * 0.02; },
    };
}

function hOrbe() {
    const g = new Group();
    const casca = contorno(new IcosahedronGeometry(130, 1), CORES.ciano, 0.85);
    g.add(casca);
    const nucleo = new Mesh(new SphereGeometry(62, 24, 16), matLuz(CORES.ciano, 0.35));
    g.add(nucleo);
    const olho = new Mesh(new SphereGeometry(22, 16, 12), matLuz('#ffffff', 0.9));
    olho.position.z = 70;
    g.add(olho);
    const aneis = [0, 1, 2].map((i) => {
        const a = new Mesh(new TorusGeometry(170 + i * 26, 2.5, 6, 80), matLuz([CORES.amarelo, CORES.rosa, CORES.ciano][i], 0.7));
        a.rotation.set(Math.PI / 2 + i * 0.5, i * 0.7, 0);
        g.add(a);
        return a;
    });
    const parts = [];
    for (let i = 0; i < 26; i++) {
        const p = new Mesh(new BoxGeometry(9, 9, 9), matLuz(PALETA[i % PALETA.length], 0.8));
        p.userData.a = Math.random() * Math.PI * 2;
        p.userData.r = 200 + Math.random() * 160;
        p.userData.v = 0.3 + Math.random() * 0.9;
        p.userData.y = (Math.random() - 0.5) * 300;
        g.add(p);
        parts.push(p);
    }
    g.position.set(0, 40, 320);
    let fala = 0;
    let falaAlvo = 0;
    return {
        grupo: g,
        animar(t, dt) {
            fala += (falaAlvo - fala) * 0.25;
            const pulso = 1 + fala * (0.25 + Math.sin(t * 28) * 0.12);
            casca.rotation.y = t * 0.5;
            casca.rotation.x = t * 0.3;
            casca.scale.setScalar(pulso);
            nucleo.scale.setScalar(0.9 + Math.sin(t * 2) * 0.08 + fala * 0.4);
            olho.position.x = Math.sin(t * 0.7) * 18;
            aneis.forEach((a, i) => { a.rotation.z += dt * (0.4 + i * 0.3) * (1 + fala * 3); });
            parts.forEach((p) => {
                p.userData.a += dt * p.userData.v * (1 + fala * 2);
                p.position.set(Math.cos(p.userData.a) * p.userData.r, p.userData.y + Math.sin(t + p.userData.a) * 20, Math.sin(p.userData.a) * p.userData.r * 0.6);
                p.rotation.x += dt * 2;
            });
        },
        falar(n) { falaAlvo = Math.max(0, Math.min(1, n)); },
    };
}

// Rolinho (rolo de filme com tênis) feito de luz, saindo da tela e dançando
function hRolinho() {
    const g = new Group();
    const corpo = new Group();
    const R = 120;
    const disco = new Mesh(new CylinderGeometry(R, R, 30, 32), matLuz(CORES.ciano, 0.18));
    disco.rotation.x = Math.PI / 2;
    corpo.add(disco);
    const borda = contorno(new CylinderGeometry(R, R, 30, 16), CORES.ciano, 0.9);
    borda.rotation.x = Math.PI / 2;
    corpo.add(borda);
    for (let i = 0; i < 5; i++) {
        const a = i * (Math.PI * 2 / 5) - Math.PI / 2;
        const aro = new Mesh(new TorusGeometry(22, 3, 6, 18), matLuz(CORES.amarelo, 0.9));
        aro.position.set(Math.cos(a) * 66, Math.sin(a) * 66, 17);
        corpo.add(aro);
    }
    // olhos e boca (pixel)
    [-26, 26].forEach((x) => {
        const o = new Mesh(new BoxGeometry(18, 22, 6), matLuz('#ffffff', 0.8));
        o.position.set(x, 8, 20);
        corpo.add(o);
    });
    const boca = new Mesh(new BoxGeometry(30, 8, 6), matLuz(CORES.rosa, 0.95));
    boca.position.set(0, -26, 20);
    corpo.add(boca);
    g.add(corpo);
    // pernas e tênis vermelhos
    const pernas = [-1, 1].map((l) => {
        const perna = new Group();
        const h = new Mesh(new BoxGeometry(10, 80, 10), matLuz(CORES.ciano, 0.7));
        h.position.y = -40;
        perna.add(h);
        const tenis = new Mesh(new BoxGeometry(56, 24, 34), matLuz('#ff3b3b', 0.6));
        tenis.position.set(14, -88, 0);
        perna.add(tenis);
        perna.add(contorno(new BoxGeometry(56, 24, 34), '#ffffff', 0.6).translateX(14).translateY(-88));
        perna.position.set(l * 44, -R + 10, 0);
        g.add(perna);
        return perna;
    });
    g.position.set(0, 0, 300);
    return {
        grupo: g,
        animar(t) {
            const pulo = Math.abs(Math.sin(t * 5)) * 40;
            corpo.position.y = 40 + pulo;
            corpo.rotation.z = Math.sin(t * 5) * 0.25;
            pernas[0].rotation.x = Math.sin(t * 10) * 0.6;
            pernas[1].rotation.x = -Math.sin(t * 10) * 0.6;
            pernas.forEach((p) => { p.position.y = -R + 10 + 40 + pulo * 0.6; });
            g.rotation.y = Math.sin(t * 1.2) * 0.8;
            g.position.x = Math.sin(t * 0.9) * 90;    // passeia para fora da largura do celular
        },
    };
}

function hConfete() {
    const g = new Group();
    const parts = [];
    for (let i = 0; i < 140; i++) {
        const s = 8 + Math.random() * 12;
        const p = new Mesh(new BoxGeometry(s, s, s), matLuz(PALETA[i % PALETA.length], 0.75));
        p.position.set((Math.random() - 0.5) * 200, (Math.random() - 0.5) * 300, 10);
        p.userData.v = new Vector3((Math.random() - 0.5) * 900, (Math.random() - 0.2) * 900, 300 + Math.random() * 900);
        g.add(p);
        parts.push(p);
    }
    return {
        grupo: g,
        duracao: 3.2,
        animar(t, dt) {
            parts.forEach((p) => {
                p.userData.v.y -= 900 * dt;
                p.position.addScaledVector(p.userData.v, dt);
                p.rotation.x += dt * 5;
                p.rotation.y += dt * 3;
            });
        },
    };
}

function hAneis(dados) {
    const itens = (dados && dados.itens) || [];
    const g = new Group();
    const aneis = itens.slice(0, 5).map((it, i) => {
        const cor = PALETA[i % PALETA.length];
        const raio = 90 + i * 48;
        const fundo = new Mesh(new TorusGeometry(raio, 4, 6, 90), matLuz(cor, 0.15));
        const arco = new Mesh(new TorusGeometry(raio, 12, 6, 90, 0.001), matLuz(cor, 0.45));
        g.add(fundo, arco);
        return { arco, raio, nivel: Math.min(1, (it.nivel || 0) / 100), atraso: i * 0.12 };
    });
    g.position.set(0, 30, 320);
    let t0 = null;
    return {
        grupo: g,
        animar(t) {
            if (t0 === null) t0 = t;
            aneis.forEach((a, i) => {
                const k = a.nivel * suave((t - t0 - 0.4 - a.atraso) / 1.2);
                a.arco.geometry.dispose();
                a.arco.geometry = new TorusGeometry(a.raio, 12, 6, 90, Math.max(0.001, k * Math.PI * 2));
                a.arco.rotation.z = Math.PI / 2 + Math.sin(t * 0.5 + i) * 0.1;
            });
            g.rotation.x = Math.sin(t * 0.5) * 0.35;
            g.rotation.y = Math.sin(t * 0.4) * 0.35;
        },
    };
}

const TIPOS = { carrossel: hCarrossel, barras: hBarras, cartao: hCartao, orbe: hOrbe, rolinho: hRolinho, confete: hConfete, aneis: hAneis };

// ------------------------------------------------------------ controle
export function iniciarHolofone(app) {
    let atual = null;          // { holo, raiz, t0, saindo, ... }
    let zoom = 1;
    let zoomAlvo = 1;
    const relogio = { t: 0, ultimo: performance.now() };

    function celular() { return window.__p3dCelular; }
    function iframe() { return document.querySelector('iframe[src*="android"]'); }

    function desligar(imediato) {
        if (!atual) return;
        const a = atual;
        if (imediato) { app.scene.remove(a.raiz); descartar(a.raiz); atual = null; return; }
        a.saindo = relogio.t;
        atual = null;
        saindo.push(a);
    }
    const saindo = [];

    function descartar(o) {
        o.traverse((x) => {
            if (x.geometry) x.geometry.dispose();
            if (x.material) {
                [].concat(x.material).forEach((m) => { if (m.map) m.map.dispose(); m.dispose(); });
            }
        });
    }

    function ligar(tipo, dados) {
        const cel = celular();
        if (!cel || !TIPOS[tipo]) return false;
        desligar(false);
        const holo = TIPOS[tipo](dados);
        const raiz = new Group();
        raiz.position.copy(cel.css.position);
        raiz.quaternion.copy(cel.css.quaternion);
        const em = emissor();
        raiz.add(em.grupo);
        const corpo = new Group();     // a parte que "sai" da tela
        corpo.add(holo.grupo);
        raiz.add(corpo);
        raiz.traverse((o) => { o.userData.semClique = true; o.renderOrder = 10; o.frustumCulled = false; });
        app.scene.add(raiz);
        atual = { holo, raiz, corpo, em, t0: relogio.t, tipo };
        zoomAlvo = tipo === 'confete' ? 1.15 : 1.45;
        return true;
    }

    function quadro() {
        requestAnimationFrame(quadro);
        const agora = performance.now();
        const dt = Math.min(0.05, (agora - relogio.ultimo) / 1000);
        relogio.ultimo = agora;
        relogio.t += dt;
        const t = relogio.t;

        // a câmera do modo celular se afasta enquanto há holograma
        if (!atual) zoomAlvo = 1;
        zoom += (zoomAlvo - zoom) * Math.min(1, dt * 3);
        window.__p3dZoom = zoom;

        if (atual) {
            const a = atual;
            const k = suave((t - a.t0) / 0.8);
            // nasce achatado na tela e "sai" dela
            a.corpo.scale.set(0.2 + 0.8 * k, 0.2 + 0.8 * k, 0.05 + 0.95 * k);
            a.corpo.position.z = -40 * (1 - k);
            a.em.cone.material.opacity = 0.16 * k + Math.random() * 0.03;
            a.em.anel.rotation.z = t * 1.5;
            a.em.anel2.rotation.z = -t * 2.5;
            a.holo.animar(t - a.t0, dt);
            if (a.holo.duracao && t - a.t0 > a.holo.duracao) desligar(false);
        }
        for (let i = saindo.length - 1; i >= 0; i--) {
            const a = saindo[i];
            const k = 1 - suave((t - a.saindo) / 0.45);
            a.corpo.scale.set(k, k, k * 0.6 + 0.01);
            a.raiz.traverse((o) => { if (o.material && o.material.opacity !== undefined && o.userData.op0 === undefined) o.userData.op0 = o.material.opacity; });
            a.raiz.traverse((o) => { if (o.material && o.userData.op0 !== undefined) o.material.opacity = o.userData.op0 * k; });
            a.holo.animar(t - a.t0, dt);
            if (k <= 0) { app.scene.remove(a.raiz); descartar(a.raiz); saindo.splice(i, 1); }
        }
    }
    requestAnimationFrame(quadro);

    window.addEventListener('message', (e) => {
        const d = e.data;
        if (!d || d.fonte !== 'holofone') return;
        const f = iframe();
        if (!f || e.source !== f.contentWindow) return;
        const responder = (msg) => { try { f.contentWindow.postMessage(Object.assign({ fonte: 'sala3d' }, msg), '*'); } catch (err) { /* ok */ } };
        if (d.acao === 'holo-ping') responder({ acao: 'holo-pong', tipos: Object.keys(TIPOS) });
        else if (d.acao === 'holo') responder({ acao: 'holo-estado', ativo: ligar(String(d.tipo), d.dados), tipo: d.tipo });
        else if (d.acao === 'holo-off') { desligar(false); responder({ acao: 'holo-estado', ativo: false }); }
        else if (atual && d.acao === 'holo-girar' && atual.holo.girar) atual.holo.girar(+d.dx || 0);
        else if (atual && d.acao === 'holo-ir' && atual.holo.ir) atual.holo.ir(+d.i || 0);
        else if (atual && d.acao === 'holo-fala' && atual.holo.falar) atual.holo.falar(+d.nivel || 0);
    });

    // ajuda nos testes
    window.__holofone = { ligar, desligar, ativo: () => (atual ? atual.tipo : null) };
}

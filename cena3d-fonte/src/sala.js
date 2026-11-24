// ============================================================================
// sala-extra.js — objetos de editor de vídeo na sala 3D do portfólio.
//
// Não recompila a cena: espera o bundle principal montar a sala e usa o
// window.Application (o mesmo jeito do celular3d.js) para adicionar:
//   • cartaz de cinema num cavalete         • câmera de vídeo num tripé
//   • luz de estúdio (softbox)              • claquete em cima dos papéis
//   • pilha de fitas VHS                    • fone de ouvido de edição
//   • um rolo de filme (o Rolinho!) encostado na mesa
//
// A cena original não tem luzes — tudo é iluminação "pintada" nas texturas.
// Por isso os objetos usam MeshMatcapMaterial com uma esfera de luz suave
// desenhada aqui, que imita o mesmo estúdio claro e difuso.
//
// Unidades da cena: ~34 unidades por centímetro. Chão em y = -2984,
// tampo da mesa em y = -452.
// Para editar: npm run build (dentro de sala-src/)
// ============================================================================
import {
    BoxGeometry, CanvasTexture, CircleGeometry, Color, CylinderGeometry, DoubleSide, Group,
    Mesh, MeshBasicMaterial, MeshMatcapMaterial, PlaneGeometry, RepeatWrapping, sRGBEncoding,
    TextureLoader, TorusGeometry, AdditiveBlending,
} from 'three';

const CHAO = -2984;
const MESA = -452;
const DEG = Math.PI / 180;

// ---------------------------------------------------------------- texturas
function canvas(w, h, desenhar) {
    const c = document.createElement('canvas');
    c.width = w;
    c.height = h;
    desenhar(c.getContext('2d'), w, h);
    const t = new CanvasTexture(c);
    t.encoding = sRGBEncoding;
    t.anisotropy = 4;
    return t;
}

// Esfera de luz: luz principal suave de cima/esquerda, preenchimento quente
const MATCAP = canvas(256, 256, (g, w) => {
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
    // luz de recorte embaixo (o chão claro rebatendo)
    const reb = g.createLinearGradient(0, w * 0.6, 0, w);
    reb.addColorStop(0, 'rgba(255,250,240,0)');
    reb.addColorStop(1, 'rgba(255,250,240,0.22)');
    g.fillStyle = reb;
    g.beginPath();
    g.arc(r, r, r, 0, Math.PI * 2);
    g.fill();
});

const cacheMat = {};
function mat(cor, mapa) {
    const chave = cor + (mapa ? mapa.uuid : '');
    if (!cacheMat[chave]) cacheMat[chave] = new MeshMatcapMaterial({ matcap: MATCAP, color: new Color(cor), map: mapa || null });
    return cacheMat[chave];
}

const SOMBRA = canvas(128, 128, (g, w) => {
    const gr = g.createRadialGradient(w / 2, w / 2, 0, w / 2, w / 2, w / 2);
    gr.addColorStop(0, 'rgba(0,0,0,0.55)');
    gr.addColorStop(0.55, 'rgba(0,0,0,0.25)');
    gr.addColorStop(1, 'rgba(0,0,0,0)');
    g.fillStyle = gr;
    g.fillRect(0, 0, w, w);
});
function sombra(larg, prof, x, y, z, rot) {
    const m = new Mesh(new PlaneGeometry(larg, prof), new MeshBasicMaterial({ map: SOMBRA, transparent: true, depthWrite: false, opacity: 0.8 }));
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = rot || 0;
    m.position.set(x, y + 2, z);
    m.renderOrder = 1;
    return m;
}

function caixa(w, h, d, material) {
    return new Mesh(new BoxGeometry(w, h, d), material);
}
function cilindro(rTopo, rBase, h, material, seg) {
    return new Mesh(new CylinderGeometry(rTopo, rBase, h, seg || 24), material);
}
// cilindro entre dois pontos (pernas de tripé, hastes)
function haste(a, b, raio, material) {
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

// ================================================================= objetos

// ---------- Cartaz de cinema num cavalete ----------
function cavalete() {
    const g = new Group();
    const madeira = mat('#a77b4f');
    const madeiraEsc = mat('#7a5634');
    const L = 2300;              // largura do cartaz (≈ 68 cm)
    const A = L * 1.5;           // altura (2:3)
    const base = CHAO + 1250;    // borda de baixo do cartaz

    const tex = new TextureLoader().load('textures/sala/cartaz.jpg');
    tex.encoding = sRGBEncoding;
    tex.anisotropy = 8;

    const painel = new Group();
    painel.rotation.x = -9 * DEG;            // encostado para trás
    painel.position.set(0, base, 0);
    const moldura = caixa(L + 90, A + 90, 40, madeiraEsc);
    moldura.position.set(0, A / 2, -26);
    painel.add(moldura);
    const poster = new Mesh(new PlaneGeometry(L, A), new MeshBasicMaterial({ map: tex, color: new Color('#e8e4dc') }));
    poster.position.set(0, A / 2, 0);
    painel.add(poster);
    // apoio onde o cartaz fica
    const apoio = caixa(L + 260, 70, 160, madeira);
    apoio.position.set(0, -20, 40);
    painel.add(apoio);
    g.add(painel);

    // pernas do cavalete (A)
    // o painel inclina 9° para trás: em cada altura y, a face fica em z = -(y-base)*tan(9°)
    const zAtras = (y) => -(y - base) * Math.tan(9 * DEG) - 90;
    const yTopo = base + A * 1.02;
    g.add(haste([-L / 2 - 140, CHAO, 330], [-L / 2 + 120, yTopo, zAtras(yTopo)], 36, madeira));
    g.add(haste([L / 2 + 140, CHAO, 330], [L / 2 - 120, yTopo, zAtras(yTopo)], 36, madeira));
    g.add(haste([0, CHAO, -1300], [0, yTopo - 60, zAtras(yTopo) - 40], 30, madeira));
    g.add(haste([-L / 2 - 60, CHAO + 800, 200], [L / 2 + 60, CHAO + 800, 200], 22, madeira));
    g.add(sombra(3400, 2000, 0, CHAO, -300));
    return g;
}

// ---------- Câmera de vídeo num tripé ----------
let luzRec = null;
function cameraTripe() {
    const g = new Group();
    const aluminio = mat('#9c9c9c');
    const preto = mat('#2b2b2b');
    const pretoFosco = mat('#3a3a3a');
    const alturaCabeca = CHAO + 3350;

    // tripé
    for (let i = 0; i < 3; i++) {
        const ang = i * 120 * DEG + 30 * DEG;
        const pe = [Math.cos(ang) * 820, CHAO, Math.sin(ang) * 820];
        g.add(haste(pe, [Math.cos(ang) * 90, alturaCabeca - 520, Math.sin(ang) * 90], 22, aluminio));
        const sapata = cilindro(36, 44, 40, preto, 12);
        sapata.position.set(pe[0], CHAO + 20, pe[2]);
        g.add(sapata);
    }
    const coluna = cilindro(32, 32, 560, aluminio, 16);
    coluna.position.y = alturaCabeca - 300;
    g.add(coluna);
    const cabeca = caixa(220, 120, 220, preto);
    cabeca.position.y = alturaCabeca - 40;
    g.add(cabeca);
    const alavanca = haste([0, alturaCabeca - 40, 0], [-720, alturaCabeca - 120, 160], 16, preto);
    g.add(alavanca);
    g.add(sombra(2200, 2200, 0, CHAO, 0));

    // corpo da câmera (aponta para +x)
    const cam = new Group();
    cam.position.y = alturaCabeca + 220;
    const corpo = caixa(820, 400, 360, pretoFosco);
    cam.add(corpo);
    const lateral = canvas(512, 256, (c, w, h) => {
        c.fillStyle = '#3a3a3a';
        c.fillRect(0, 0, w, h);
        c.fillStyle = '#c8c8c8';
        c.font = 'bold 54px Arial, sans-serif';
        c.fillText('MA-26', 40, 150);
        c.font = '28px Arial, sans-serif';
        c.fillStyle = '#e3b341';
        c.fillText('4K · CINEMA', 44, 195);
        c.fillStyle = '#555';
        c.fillRect(330, 60, 140, 130);
        c.fillStyle = '#2a2a2a';
        for (let i = 0; i < 5; i++) c.fillRect(342, 76 + i * 22, 116, 10);
    });
    const placa = new Mesh(new PlaneGeometry(700, 340), mat('#ffffff', lateral));
    placa.position.set(0, 0, 182);
    cam.add(placa);
    const lente = cilindro(150, 170, 420, preto, 28);
    lente.rotation.z = Math.PI / 2;
    lente.position.set(610, -10, 0);
    cam.add(lente);
    const anel = cilindro(178, 178, 60, mat('#c9a227'), 28);
    anel.rotation.z = Math.PI / 2;
    anel.position.set(520, -10, 0);
    cam.add(anel);
    const vidro = new Mesh(new CircleGeometry(140, 32), new MeshBasicMaterial({ color: new Color('#1d2b4a') }));
    vidro.rotation.y = Math.PI / 2;
    vidro.position.set(822, -10, 0);
    cam.add(vidro);
    const reflexo = new Mesh(new CircleGeometry(40, 16), new MeshBasicMaterial({ color: new Color('#8fb3ff'), transparent: true, opacity: 0.6 }));
    reflexo.rotation.y = Math.PI / 2;
    reflexo.position.set(824, 40, -50);
    cam.add(reflexo);
    const parasol = new Mesh(new CylinderGeometry(205, 165, 130, 24, 1, true), new MeshMatcapMaterial({ matcap: MATCAP, color: new Color('#2b2b2b'), side: DoubleSide }));
    parasol.rotation.z = -Math.PI / 2;   // a boca maior fica para frente (+x)
    parasol.position.set(880, -10, 0);
    cam.add(parasol);
    const alca = caixa(600, 60, 90, preto);
    alca.position.set(-40, 300, 0);
    cam.add(alca);
    [-280, 200].forEach((x) => {
        const p = caixa(50, 110, 70, preto);
        p.position.set(x, 240, 0);
        cam.add(p);
    });
    const visor = cilindro(70, 70, 260, preto, 16);
    visor.rotation.z = Math.PI / 2;
    visor.position.set(-520, 120, -120);
    cam.add(visor);
    const tela = caixa(20, 200, 300, preto);
    tela.position.set(-150, 40, -300);
    tela.rotation.y = -25 * DEG;
    cam.add(tela);
    const telaImg = new Mesh(new PlaneGeometry(260, 170), new MeshBasicMaterial({ color: new Color('#3a6ea5') }));
    telaImg.position.set(-150 + Math.sin(-25 * DEG) * 12, 40, -300 - 12);
    telaImg.rotation.y = Math.PI - 25 * DEG;
    cam.add(telaImg);
    luzRec = new Mesh(new CircleGeometry(26, 16), new MeshBasicMaterial({ color: new Color('#ff2a2a') }));
    luzRec.position.set(330, 140, 182);
    cam.add(luzRec);
    cam.rotation.x = 0; // nivelada
    g.add(cam);
    return { grupo: g, corpo: cam };
}

// ---------- Softbox (luz de estúdio) ----------
let brilhoSoftbox = null;
function softbox() {
    const g = new Group();
    const aluminio = mat('#8f8f8f');
    const preto = mat('#262626');
    const altura = CHAO + 4300;
    for (let i = 0; i < 3; i++) {
        const ang = i * 120 * DEG;
        g.add(haste([Math.cos(ang) * 620, CHAO, Math.sin(ang) * 620], [0, CHAO + 900, 0], 18, aluminio));
    }
    g.add(haste([0, CHAO + 860, 0], [0, altura - 200, 0], 26, aluminio));
    g.add(sombra(1600, 1600, 0, CHAO, 0));

    const caixaLuz = new Group();
    caixaLuz.position.y = altura;
    // pirâmide truncada (4 lados) virada para +z
    const corpo = cilindro(560, 170, 700, preto, 4);
    corpo.rotation.set(Math.PI / 2, Math.PI / 4, 0);
    caixaLuz.add(corpo);
    const aro = new Mesh(new PlaneGeometry(800, 800), preto);
    aro.position.z = 349;
    caixaLuz.add(aro);
    const difusor = new Mesh(new PlaneGeometry(690, 690), new MeshBasicMaterial({ color: new Color('#fbefd6') }));
    difusor.position.z = 352;
    caixaLuz.add(difusor);
    const brilho = canvas(256, 256, (c, w) => {
        const gr = c.createRadialGradient(w / 2, w / 2, w * 0.1, w / 2, w / 2, w / 2);
        gr.addColorStop(0, 'rgba(255,236,200,0.55)');
        gr.addColorStop(1, 'rgba(255,236,200,0)');
        c.fillStyle = gr;
        c.fillRect(0, 0, w, w);
    });
    brilhoSoftbox = new Mesh(new PlaneGeometry(1500, 1500), new MeshBasicMaterial({ map: brilho, transparent: true, blending: AdditiveBlending, depthWrite: false, opacity: 0.45 }));
    brilhoSoftbox.position.z = 380;
    caixaLuz.add(brilhoSoftbox);
    caixaLuz.rotation.x = -18 * DEG;
    g.add(caixaLuz);
    return { grupo: g, cabeca: caixaLuz };
}

// ---------- Claquete ----------
function claquete() {
    const g = new Group();
    const W = 780;
    const D = 560;
    const frente = canvas(780, 560, (c, w, h) => {
        c.fillStyle = '#1b1b1b';
        c.fillRect(0, 0, w, h);
        c.strokeStyle = '#e9e9e9';
        c.lineWidth = 4;
        const linhas = [140, 260, 380, 470];
        linhas.forEach((y) => { c.beginPath(); c.moveTo(20, y); c.lineTo(w - 20, y); c.stroke(); });
        c.beginPath(); c.moveTo(w / 2, 260); c.lineTo(w / 2, 470); c.stroke();
        c.fillStyle = '#e9e9e9';
        c.font = 'bold 26px Arial, sans-serif';
        c.fillText('PROD.', 28, 40);
        c.fillText('CENA', 28, 168);
        c.fillText('TAKE', w / 2 + 12, 168);
        c.fillText('DIREÇÃO', 28, 290);
        c.fillText('CÂMERA', w / 2 + 12, 290);
        c.fillText('DATA', 28, 410);
        c.font = 'bold 64px "Comic Sans MS", "Marker Felt", cursive';
        c.fillText('PORTFÓLIO 2026', 40, 115);
        c.font = 'bold 72px "Comic Sans MS", "Marker Felt", cursive';
        c.fillText('26', 110, 245);
        c.fillText('1', w / 2 + 140, 245);
        c.font = 'bold 40px "Comic Sans MS", "Marker Felt", cursive';
        c.fillText('M. ANGELO', 28, 355);
        c.fillText('A', w / 2 + 140, 355);
        c.fillText(new Date().toLocaleDateString('pt-BR'), 120, 450);
        c.font = 'bold 22px Arial, sans-serif';
        c.fillText('MIGUEL ANGELO AUDIOVISUAL', 28, 530);
    });
    const listras = canvas(512, 64, (c, w, h) => {
        c.fillStyle = '#f2f2f2';
        c.fillRect(0, 0, w, h);
        c.fillStyle = '#111';
        for (let x = -h; x < w + h; x += 64) {
            c.beginPath();
            c.moveTo(x, h); c.lineTo(x + 32, h); c.lineTo(x + 32 + h, 0); c.lineTo(x + h, 0);
            c.fill();
        }
    });
    const preto = mat('#1e1e1e');
    // prancha deitada, com a face de cima desenhada
    const prancha = new Mesh(new BoxGeometry(W, 26, D), [preto, preto, mat('#ffffff', frente), preto, preto, preto]);
    prancha.position.y = 13;
    g.add(prancha);
    const mListras = mat('#ffffff', listras);
    const bastao = () => new Mesh(new BoxGeometry(W, 30, 96), [preto, preto, mListras, preto, mListras, preto]);
    const baixo = bastao();
    baixo.position.set(0, 15, -D / 2 - 48);
    g.add(baixo);
    // bastão de cima aberto, girando na dobradiça da esquerda
    const dobra = new Group();
    dobra.position.set(-W / 2, 46, -D / 2 - 48);
    const cima = bastao();
    cima.position.set(W / 2, 0, 0);
    dobra.add(cima);
    dobra.rotation.y = 24 * DEG;
    g.add(dobra);
    g.add(sombra(W * 1.4, D * 1.6, 0, 0, -60));
    return g;
}

// ---------- Fitas VHS ----------
function fitasVHS() {
    const g = new Group();
    const titulos = [
        ['SHOWREEL 2026', '#e94e3c', 'MASTER — NÃO GRAVAR POR CIMA'],
        ['O PESO DA AMARELINHA', '#f2c200', 'DOCUMENTÁRIO · BRUTO'],
        ['BATTLEBITS', '#3c8ce9', 'COMUNIDADE · VERSÃO FINAL'],
    ];
    const plastico = mat('#262626');
    titulos.forEach(([titulo, cor, sub], i) => {
        const etiqueta = canvas(640, 86, (c, w, h) => {
            c.fillStyle = '#f4f1ea';
            c.fillRect(0, 0, w, h);
            c.fillStyle = cor;
            c.fillRect(0, 0, 26, h);
            c.fillStyle = '#222';
            c.font = 'bold 34px "Comic Sans MS", "Marker Felt", cursive';
            c.fillText(titulo, 42, 44);
            c.font = '18px Arial, sans-serif';
            c.fillStyle = '#666';
            c.fillText(sub, 44, 74);
        });
        const topo = canvas(320, 180, (c, w, h) => {
            c.fillStyle = '#2a2a2a';
            c.fillRect(0, 0, w, h);
            c.fillStyle = '#f4f1ea';
            c.fillRect(30, 30, w - 60, 70);
            c.fillStyle = '#222';
            c.font = 'bold 24px "Comic Sans MS", cursive';
            c.fillText(titulo.slice(0, 18), 42, 74);
            c.fillStyle = '#111';
            c.fillRect(70, 118, 180, 46);
            c.fillStyle = '#3a3a3a';
            c.beginPath(); c.arc(115, 141, 18, 0, Math.PI * 2); c.fill();
            c.beginPath(); c.arc(205, 141, 18, 0, Math.PI * 2); c.fill();
        });
        // faces: +x, -x, +y, -y, +z (lombada com etiqueta), -z
        const fita = new Mesh(new BoxGeometry(640, 86, 350), [plastico, plastico, mat('#ffffff', topo), plastico, mat('#ffffff', etiqueta), plastico]);
        fita.position.set((i - 1) * 24, 43 + i * 88, (i % 2) * 18);
        fita.rotation.y = (i - 1) * 6 * DEG;
        g.add(fita);
    });
    g.add(sombra(950, 600, 0, 0, 0));
    return g;
}

// ---------- Fone de ouvido ----------
function fone() {
    const g = new Group();
    const preto = mat('#232323');
    const cinza = mat('#4a4a4a');
    const R = 240;
    const aro = new Mesh(new TorusGeometry(R, 24, 10, 40, Math.PI), preto);
    aro.position.y = 150;
    g.add(aro);
    const almofadaAro = new Mesh(new TorusGeometry(R - 26, 20, 8, 30, Math.PI * 0.6), cinza);
    almofadaAro.position.y = 150;
    almofadaAro.rotation.z = Math.PI * 0.2;
    g.add(almofadaAro);
    [-1, 1].forEach((lado) => {
        const concha = cilindro(125, 125, 80, preto, 28);
        concha.rotation.z = Math.PI / 2;
        concha.position.set(lado * (R + 10), 130, 0);
        g.add(concha);
        const almofada = new Mesh(new TorusGeometry(92, 34, 10, 28), cinza);
        almofada.rotation.y = Math.PI / 2;
        almofada.position.set(lado * (R - 40), 130, 0);
        g.add(almofada);
        const logo = new Mesh(new CircleGeometry(48, 24), mat('#c9a227'));
        logo.rotation.y = lado * Math.PI / 2;
        logo.position.set(lado * (R + 52), 130, 0);
        g.add(logo);
    });
    // fio enrolado até a beira
    const fio = new Mesh(new TorusGeometry(160, 10, 6, 40, Math.PI * 1.4), preto);
    fio.rotation.x = Math.PI / 2;
    fio.position.set(R + 160, 10, 140);
    g.add(fio);
    g.add(sombra(900, 560, 0, 0, 0));
    return g;
}

// ---------- Rolo de filme (o Rolinho, mascote do MiguelOS) ----------
function rolinho() {
    const g = new Group();
    const face = canvas(256, 256, (c, w) => {
        const r = w / 2;
        c.fillStyle = '#8a8a8a';
        c.beginPath(); c.arc(r, r, r - 2, 0, Math.PI * 2); c.fill();
        c.strokeStyle = '#555'; c.lineWidth = 6;
        c.beginPath(); c.arc(r, r, r - 8, 0, Math.PI * 2); c.stroke();
        c.fillStyle = '#2a2a2a';
        for (let i = 0; i < 5; i++) {
            const a = i * (Math.PI * 2 / 5) - Math.PI / 2;
            c.beginPath(); c.arc(r + Math.cos(a) * 78, r + Math.sin(a) * 78, 30, 0, Math.PI * 2); c.fill();
        }
        // carinha
        c.fillStyle = '#fff';
        c.fillRect(r - 34, r - 14, 24, 24); c.fillRect(r + 10, r - 14, 24, 24);
        c.fillStyle = '#000';
        c.fillRect(r - 24, r - 6, 12, 14); c.fillRect(r + 20, r - 6, 12, 14);
        c.fillStyle = '#d02020';
        c.fillRect(r - 10, r + 22, 20, 8);
    });
    face.center.set(0.5, 0.5);
    face.rotation = Math.PI / 2;
    const R = 330;
    const disco = new Mesh(new CylinderGeometry(R, R, 60, 40), [mat('#7a7a7a'), mat('#ffffff', face), mat('#ffffff', face)]);
    disco.rotation.x = Math.PI / 2;
    disco.position.y = R;
    g.add(disco);
    // película desenrolando no chão
    const tira = canvas(512, 64, (c, w, h) => {
        c.fillStyle = '#2b2116';
        c.fillRect(0, 0, w, h);
        c.fillStyle = '#d8d2c0';
        for (let x = 6; x < w; x += 22) { c.fillRect(x, 5, 10, 8); c.fillRect(x, h - 13, 10, 8); }
        c.fillStyle = 'rgba(230,190,120,0.55)';
        for (let x = 10; x < w; x += 70) c.fillRect(x, 18, 60, 28);
    });
    tira.wrapS = RepeatWrapping;
    tira.repeat.set(3, 1);
    const fita = new Mesh(new PlaneGeometry(1300, 120), new MeshBasicMaterial({ map: tira, side: DoubleSide, color: new Color('#cfcac0') }));
    fita.rotation.x = -Math.PI / 2;
    fita.rotation.z = 18 * DEG;
    fita.position.set(640, 3, 260);
    g.add(fita);
    g.add(sombra(900, 500, 0, 0, 40));
    return { grupo: g, disco };
}

// ============================================================== montagem
function montar(app) {
    const raiz = new Group();
    raiz.name = 'sala-extra';

    const cart = cavalete();
    cart.position.set(-2900, 0, -3300);
    cart.rotation.y = 28 * DEG;
    raiz.add(cart);

    const { grupo: tripe, corpo: corpoCam } = cameraTripe();
    tripe.position.set(-5600, 0, 800);
    // aponta para a cadeira
    corpoCam.rotation.y = -Math.atan2(2400 - 800, 700 - -5600); // rotação em y: +x gira para -z
    raiz.add(tripe);

    const { grupo: luz, cabeca: luzCabeca } = softbox();
    luz.position.set(4400, 0, -3300);
    luzCabeca.rotation.y = -50 * DEG;
    raiz.add(luz);

    const claq = claquete();
    claq.position.set(-1640, -126, -150);
    claq.rotation.y = 16 * DEG;
    raiz.add(claq);

    const vhs = fitasVHS();
    vhs.position.set(-3020, MESA, 1180);
    vhs.rotation.y = 22 * DEG;
    raiz.add(vhs);

    const fones = fone();
    fones.position.set(1760, MESA, 1330);
    fones.rotation.y = -24 * DEG;
    raiz.add(fones);

    const { grupo: rolo, disco } = rolinho();
    rolo.position.set(-3900, CHAO, 2000);
    rolo.rotation.y = -35 * DEG;
    raiz.add(rolo);

    app.scene.add(raiz);

    // pequenas animações: luz REC piscando e o Rolinho balançando
    const t0 = performance.now();
    function animar() {
        const t = (performance.now() - t0) / 1000;
        if (luzRec) luzRec.visible = Math.floor(t * 1.4) % 2 === 0;
        disco.rotation.z = Math.sin(t * 1.6) * 0.05;
        if (brilhoSoftbox) brilhoSoftbox.material.opacity = 0.42 + Math.sin(t * 2.3) * 0.04;
        requestAnimationFrame(animar);
    }
    requestAnimationFrame(animar);
    window.salaExtra = raiz;
}

// Espera a sala original carregar (a mesa aparece na cena) e então monta
function esperar() {
    const app = window.Application;
    let pronta = false;
    if (app && app.scene) app.scene.traverse((o) => { if (o.name === 'desk') pronta = true; });
    if (pronta) montar(app);
    else setTimeout(esperar, 300);
}
esperar();

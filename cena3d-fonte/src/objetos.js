// Objetos de editor de vídeo (primeira leva): cartaz, câmera, softbox,
// claquete, fitas VHS, fone e o Rolinho. Cada função devolve o grupo e as
// partes que se mexem quando o visitante clica.
import {
    CircleGeometry, Color, CylinderGeometry, DoubleSide, Group, Mesh, MeshBasicMaterial,
    MeshMatcapMaterial, PlaneGeometry, RepeatWrapping, sRGBEncoding, TextureLoader, TorusGeometry,
    AdditiveBlending, BoxGeometry,
} from 'three';
import { CHAO, DEG, MATCAP, canvas, mat, sombra, caixa, cilindro, haste } from './util';

// ---------- Cartaz de cinema num cavalete ----------
export function cavalete() {
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
export function cameraTripe() {
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
    const luzRec = new Mesh(new CircleGeometry(26, 16), new MeshBasicMaterial({ color: new Color('#ff2a2a') }));
    luzRec.position.set(330, 140, 182);
    cam.add(luzRec);
    cam.rotation.x = 0; // nivelada
    g.add(cam);
    return { grupo: g, corpo: cam, luzRec };
}

// ---------- Softbox (luz de estúdio) ----------
export function softbox() {
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
    const brilhoSoftbox = new Mesh(new PlaneGeometry(1500, 1500), new MeshBasicMaterial({ map: brilho, transparent: true, blending: AdditiveBlending, depthWrite: false, opacity: 0.45 }));
    brilhoSoftbox.position.z = 380;
    caixaLuz.add(brilhoSoftbox);
    caixaLuz.rotation.x = -18 * DEG;
    g.add(caixaLuz);
    return { grupo: g, cabeca: caixaLuz, brilho: brilhoSoftbox, difusor };
}

// ---------- Claquete ----------
export function claquete() {
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
    return { grupo: g, dobra };
}

// ---------- Fitas VHS ----------
export function fitasVHS() {
    const g = new Group();
    // [título, cor, subtítulo, id do vídeo no YouTube (ou null)]
    const titulos = [
        ['SHOWREEL 2026', '#e94e3c', 'MASTER — NÃO GRAVAR POR CIMA', 'iF5JU_N1ldc'],
        ['O PESO DA AMARELINHA', '#f2c200', 'DOCUMENTÁRIO · BRUTO', 'm7TOXgqO92s'],
        ['BATTLEBITS', '#3c8ce9', 'COMUNIDADE · VERSÃO FINAL', 'tFOAZsP0evQ'],
        ['MAIOR POR DENTRO', '#2f4fa8', 'NÃO ABRIR · VIAGENS', null],
    ];
    const fitas = [];
    const plastico = mat('#262626');
    titulos.forEach(([titulo, cor, sub, yt], i) => {
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
        fita.rotation.y = ((i % 3) - 1) * 6 * DEG;
        fita.userData.fita = { titulo, yt };
        fitas.push(fita);
        g.add(fita);
    });
    g.add(sombra(950, 600, 0, 0, 0));
    return { grupo: g, fitas };
}

// ---------- Fone de ouvido ----------
export function fone() {
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
export function rolinho() {
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


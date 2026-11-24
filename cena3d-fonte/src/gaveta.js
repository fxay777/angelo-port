// Gavetas da mesa que abrem de verdade + a Multiferramenta Sônica MA-26
// (aparelho de design original, inspirado no "jeitinho" de ficção científica)
// e a mão de luva que segura o aparelho na cena em primeira pessoa.
//
// As gavetas fazem parte do modelo único da mesa ("desk"). Para abri-las,
// deslizamos os vértices da frente original (com o puxador) e montamos um
// interior escuro com as tralhas atrás dela.
import {
    AdditiveBlending, BackSide, BoxGeometry, Color, CylinderGeometry, Group, Matrix4, Mesh,
    MeshBasicMaterial, PlaneGeometry, TorusGeometry, Vector3,
} from 'three';
import { DEG, canvas, mat, caixa, cilindro, haste, placaTexto } from './util';

// Medidas tiradas dos vértices da mesa (coordenadas do mundo)
const FRENTE_Z = 1445;
const ESPESSURA_FRENTE = 82;   // a frente é uma placa de z = 1363 a 1444
const GAVETAS = [
    { nome: 'de cima', x0: -3112, x1: -1586, y0: -1074, y1: -619 },
    { nome: 'de baixo', x0: -3112, x1: -1586, y0: -1615, y1: -1161 },
];
const PROFUNDIDADE = 1250;
const ABERTURA = 1100;

// ------------------------------------------------- Multiferramenta Sônica
export function multiferramenta() {
    const g = new Group();               // comprimento ao longo de +x; a ponta fica em +x
    const borracha = mat('#1d1d1d');
    const laranja = mat('#e8731d');
    const metal = mat('#b9bcc0');
    const metalEsc = mat('#6f7378');
    const cabo = cilindro(42, 42, 300, borracha, 20);
    cabo.rotation.z = Math.PI / 2;
    cabo.position.x = 0;
    g.add(cabo);
    [-110, -10, 90].forEach((x) => {
        const anel = cilindro(46, 46, 22, laranja, 20);
        anel.rotation.z = Math.PI / 2;
        anel.position.x = x;
        g.add(anel);
    });
    const tampa = cilindro(36, 44, 50, metalEsc, 20);
    tampa.rotation.z = Math.PI / 2;
    tampa.position.x = -175;
    g.add(tampa);
    const argola = new Mesh(new TorusGeometry(26, 6, 6, 16), metal);
    argola.position.x = -212;
    g.add(argola);
    const colar = cilindro(52, 52, 40, metalEsc, 20);
    colar.rotation.z = Math.PI / 2;
    colar.position.x = 170;
    g.add(colar);
    const pescoco = cilindro(32, 32, 170, metal, 6);   // sextavado
    pescoco.rotation.z = Math.PI / 2;
    pescoco.position.x = 275;
    g.add(pescoco);
    const boca = cilindro(46, 32, 50, metalEsc, 6);
    boca.rotation.z = Math.PI / 2;
    boca.position.x = 385;
    g.add(boca);
    // cristal verde-chroma (octaedro alongado)
    const corCristal = new MeshBasicMaterial({ color: new Color('#58e08a') });
    const cristal = new Group();
    const c1 = new Mesh(new CylinderGeometry(0, 34, 70, 8), corCristal);
    c1.rotation.z = -Math.PI / 2;
    c1.position.x = 445;
    const c2 = new Mesh(new CylinderGeometry(34, 0, 26, 8), corCristal);
    c2.rotation.z = -Math.PI / 2;
    c2.position.x = 397;
    cristal.add(c1, c2);
    g.add(cristal);
    const brilho = new Mesh(new PlaneGeometry(320, 320), new MeshBasicMaterial({
        map: canvas(128, 128, (c, w) => {
            const gr = c.createRadialGradient(w / 2, w / 2, 2, w / 2, w / 2, w / 2);
            gr.addColorStop(0, 'rgba(140,255,180,0.9)');
            gr.addColorStop(1, 'rgba(140,255,180,0)');
            c.fillStyle = gr;
            c.fillRect(0, 0, w, w);
        }),
        transparent: true, blending: AdditiveBlending, depthWrite: false, opacity: 0.35,
    }));
    brilho.position.x = 440;
    brilho.userData.semClique = true;
    brilho.userData.billboard = true;
    g.add(brilho);
    const botao = caixa(34, 18, 24, mat('#d0201f'));
    botao.position.set(60, 44, 0);
    g.add(botao);
    const rotulo = placaTexto(120, 34, 256, 72, (c, w, h) => {
        c.fillStyle = '#1d1d1d';
        c.fillRect(0, 0, w, h);
        c.fillStyle = '#e8731d';
        c.font = 'bold 44px Arial Black, Arial, sans-serif';
        c.fillText('MA-26', 18, 54);
    });
    rotulo.rotation.x = -Math.PI / 2;
    rotulo.position.set(-60, 43, 0);
    g.add(rotulo);
    return { grupo: g, cristal: corCristal, brilho, pontaX: 470 };
}

// ------------------------------------------------- mão de luva (primeira pessoa)
export function maoLuva() {
    const g = new Group();
    const luva = mat('#2a2a2e');
    const manga = mat('#2f4a6b');
    const palma = caixa(210, 150, 120, luva);
    palma.position.set(-40, -70, 0);
    g.add(palma);
    // quatro dedos dando a volta no cabo (cabo ao longo de x, raio ~42)
    for (let i = 0; i < 4; i++) {
        const dedo = new Mesh(new TorusGeometry(64, 26, 8, 14, Math.PI * 1.25), luva);
        dedo.rotation.set(0, Math.PI / 2, Math.PI * 0.75);
        dedo.position.set(-100 + i * 58, 0, 0);
        g.add(dedo);
    }
    const polegar = haste([-130, 40, 70], [60, 70, 40], 26, luva);
    g.add(polegar);
    const antebraco = haste([-80, -120, 0], [-520, -700, 160], 95, manga);
    g.add(antebraco);
    const punho = cilindro(100, 100, 60, mat('#1c2f45'), 16);
    punho.position.set(-110, -160, 15);
    punho.rotation.z = 0.9;
    g.add(punho);
    return { grupo: g };
}

// ------------------------------------------------- tralhas dentro das gavetas
function tralhasDeCima(gaveta) {
    const g = new Group();
    const hd = placaTexto(380, 260, 256, 176, (c, w, h) => {
        c.fillStyle = '#2b2b2b';
        c.fillRect(0, 0, w, h);
        c.fillStyle = '#f4f1ea';
        c.fillRect(20, 40, w - 40, 90);
        c.fillStyle = '#222';
        c.font = 'bold 26px "Comic Sans MS", cursive';
        c.fillText('HD EXTERNO', 34, 76);
        c.font = '20px "Comic Sans MS", cursive';
        c.fillText('backup do backup', 34, 108);
    });
    const corpoHd = caixa(380, 70, 260, mat('#2b2b2b'));
    corpoHd.position.set(-420, 35, 120);
    g.add(corpoHd);
    hd.rotation.x = -Math.PI / 2;
    hd.position.set(-420, 72, 120);
    g.add(hd);
    hd.userData.piada = 'HD externo: "backup do backup". O backup do backup do backup está na nuvem. Provavelmente.';
    corpoHd.userData.piada = hd.userData.piada;
    const fita = new Mesh(new TorusGeometry(90, 38, 10, 24), mat('#8a8f96'));
    fita.rotation.x = Math.PI / 2;
    fita.position.set(430, 38, 220);
    fita.userData.piada = 'Fita gaffer. Conserta tudo no set. Menos prazo.';
    g.add(fita);
    // emaranhado de cabos
    const cabos = new Group();
    const preto = mat('#151515');
    for (let i = 0; i < 6; i++) {
        const t = new Mesh(new TorusGeometry(70 + i * 9, 9, 6, 20), preto);
        t.rotation.set(Math.PI / 2 + (i % 3) * 0.4, i * 0.6, 0);
        t.position.set(420 + (i % 2) * 40, 30, -180 + i * 10);
        cabos.add(t);
    }
    cabos.userData.piada = 'Um emaranhado de cabos. Ninguém sabe de qual aparelho é cada um. Ninguém joga fora.';
    cabos.traverse((o) => { o.userData.piada = cabos.userData.piada; });
    g.add(cabos);
    // cartões de memória
    for (let i = 0; i < 3; i++) {
        const cartao = caixa(90, 8, 70, mat(['#1f5fbf', '#d0201f', '#e8b800'][i]));
        cartao.position.set(-120 + i * 40, 4 + i * 8, -260 + i * 12);
        cartao.rotation.y = i * 0.3;
        cartao.userData.piada = 'Cartões de memória. Um deles tem aquela gravação que você jura que apagou.';
        g.add(cartao);
    }
    return g;
}

function tralhasDeBaixo() {
    const g = new Group();
    // patinho de borracha (para depurar código e roteiro)
    const pato = new Group();
    const amarelo = mat('#f2c200');
    const corpo = cilindro(90, 110, 120, amarelo, 16);
    corpo.position.y = 60;
    corpo.scale.set(1.3, 1, 1);
    pato.add(corpo);
    const cabeca = cilindro(60, 66, 90, amarelo, 16);
    cabeca.position.set(60, 160, 0);
    pato.add(cabeca);
    const bico = caixa(60, 22, 50, mat('#e8731d'));
    bico.position.set(120, 160, 0);
    pato.add(bico);
    pato.position.set(-300, 0, 60);
    pato.rotation.y = 0.6;
    pato.traverse((o) => { o.userData.piada = 'Patinho de borracha. Explicar o roteiro pra ele resolve 90% dos problemas.'; });
    g.add(pato);
    for (let i = 0; i < 4; i++) {
        const dvd = cilindro(150, 150, 10, mat(['#d8d8d8', '#c0c8d8', '#d8c8c0', '#e0e0e0'][i]), 28);
        dvd.position.set(250, 6 + i * 12, -60 + i * 8);
        dvd.userData.piada = 'DVDs: "projetos 2019 — NÃO ABRIR". Algumas coisas devem ficar no passado.';
        g.add(dvd);
    }
    return g;
}

// ------------------------------------------------- gavetas
// Triângulos que misturam vértices da gaveta com vértices do móvel (a moldura
// em volta) ganham cópias próprias desses vértices, para a moldura não esticar
// quando a gaveta desliza.
function descolarVertices(geo, ehDaGaveta) {
    const idx = geo.index;
    const n = geo.attributes.position.count;
    const copias = new Map();
    const novos = [];
    for (let t = 0; t < idx.count; t += 3) {
        const tri = [idx.getX(t), idx.getX(t + 1), idx.getX(t + 2)];
        const marc = tri.map(ehDaGaveta);
        if (marc.every(Boolean) || !marc.some(Boolean)) continue;
        tri.forEach((vi, k) => {
            if (!marc[k]) return;
            if (!copias.has(vi)) { copias.set(vi, n + novos.length); novos.push(vi); }
            idx.setX(t + k, copias.get(vi));
        });
    }
    if (!novos.length) return n;
    Object.keys(geo.attributes).forEach((nome) => {
        const at = geo.attributes[nome];
        const arr = new at.array.constructor((n + novos.length) * at.itemSize);
        arr.set(at.array);
        novos.forEach((vi, j) => {
            for (let c = 0; c < at.itemSize; c++) arr[(n + j) * at.itemSize + c] = at.array[vi * at.itemSize + c];
        });
        geo.setAttribute(nome, new at.constructor(arr, at.itemSize, at.normalized));
    });
    if (idx.array.length && (n + novos.length) > 65535 && idx.array instanceof Uint16Array) {
        geo.setIndex(Array.from(idx.array));
    }
    idx.needsUpdate = true;
    return n;   // vértices a partir daqui são as cópias (ficam paradas)
}

export function criarGavetas(app, raiz) {
    let desk = null;
    app.scene.traverse((o) => { if (o.name === 'desk') desk = o; });
    if (!desk) return [];
    desk.updateMatrixWorld(true);
    {
        const p0 = desk.geometry.attributes.position;
        const w = new Vector3();
        const naGaveta = (i) => {
            w.set(p0.getX(i), p0.getY(i), p0.getZ(i)).applyMatrix4(desk.matrixWorld);
            return w.z >= FRENTE_Z - ESPESSURA_FRENTE - 8 && GAVETAS.some((d) => w.x >= d.x0 - 6 && w.x <= d.x1 + 6 && w.y >= d.y0 - 6 && w.y <= d.y1 + 6);
        };
        desk.userData.copiasDescoladas = descolarVertices(desk.geometry, naGaveta);
    }
    const pos = desk.geometry.attributes.position;
    const inv = new Matrix4().copy(desk.matrixWorld).invert();
    const v = new Vector3();
    // quanto 1 unidade do mundo em z vale no espaço local da mesa
    const origemLocal = new Vector3(0, 0, 0).applyMatrix4(inv);
    const deltaLocal = new Vector3(0, 0, 1).applyMatrix4(inv).sub(origemLocal);

    return GAVETAS.map((def, iGaveta) => {
        const indices = [];
        const originais = [];
        const nOriginal = pos.count;
        for (let i = 0; i < nOriginal; i++) {
            if (desk.userData.copiasDescoladas && i >= desk.userData.copiasDescoladas) break;
            v.set(pos.getX(i), pos.getY(i), pos.getZ(i)).applyMatrix4(desk.matrixWorld);
            if (v.z >= FRENTE_Z - ESPESSURA_FRENTE - 8 && v.x >= def.x0 - 6 && v.x <= def.x1 + 6 && v.y >= def.y0 - 6 && v.y <= def.y1 + 6) {
                indices.push(i);
                originais.push([pos.getX(i), pos.getY(i), pos.getZ(i)]);
            }
        }
        const largura = def.x1 - def.x0;
        const altura = def.y1 - def.y0;
        const cx = (def.x0 + def.x1) / 2;

        // interior escuro que fica atrás da frente e anda junto
        const bandeja = new Group();
        const madeira = mat('#4a4540');
        const fundo = caixa(largura - 80, 20, PROFUNDIDADE, madeira);
        fundo.position.set(0, def.y0 + 40, -PROFUNDIDADE / 2);
        bandeja.add(fundo);
        [-1, 1].forEach((l) => {
            const lado = caixa(24, altura - 90, PROFUNDIDADE, madeira);
            lado.position.set(l * (largura / 2 - 52), def.y0 + 40 + (altura - 90) / 2, -PROFUNDIDADE / 2);
            bandeja.add(lado);
        });
        const traseira = caixa(largura - 80, altura - 90, 24, madeira);
        traseira.position.set(0, def.y0 + 40 + (altura - 90) / 2, -PROFUNDIDADE + 12);
        bandeja.add(traseira);
        const tralhas = iGaveta === 0 ? tralhasDeCima() : tralhasDeBaixo();
        tralhas.position.set(0, def.y0 + 50, -PROFUNDIDADE / 2);
        bandeja.add(tralhas);
        bandeja.position.set(cx, 0, FRENTE_Z - ESPESSURA_FRENTE - 2);
        bandeja.visible = false;
        raiz.add(bandeja);

        // vão escuro onde a gaveta estava (some com o "buraco" para dentro da mesa)
        const vao = new Mesh(new BoxGeometry(largura - 10, altura - 10, PROFUNDIDADE + 60), new MeshBasicMaterial({ color: new Color('#141210'), side: BackSide }));
        vao.position.set(cx, (def.y0 + def.y1) / 2, FRENTE_Z - ESPESSURA_FRENTE - PROFUNDIDADE / 2 + 20);
        vao.visible = false;
        vao.userData.semClique = true;
        raiz.add(vao);

        // alvo invisível de clique por cima da frente + puxador
        // ocupa só a placa da frente + puxador (z 1363 a 1550), para não tapar o interior
        const alvo = new Mesh(new BoxGeometry(largura, altura, 190), new MeshBasicMaterial({ transparent: true, opacity: 0, depthWrite: false, colorWrite: false }));
        alvo.position.set(cx, (def.y0 + def.y1) / 2, FRENTE_Z - 82 + 95);
        raiz.add(alvo);

        let aberta = 0;           // 0 = fechada, 1 = aberta
        let alvoAbertura = 0;
        const aplicar = () => {
            const d = aberta * ABERTURA;
            for (let k = 0; k < indices.length; k++) {
                const o = originais[k];
                pos.setXYZ(indices[k], o[0] + deltaLocal.x * d, o[1] + deltaLocal.y * d, o[2] + deltaLocal.z * d);
            }
            pos.needsUpdate = true;
            bandeja.position.z = FRENTE_Z - ESPESSURA_FRENTE - 2 + d;
            alvo.position.z = FRENTE_Z - 82 + 95 + d;
            bandeja.visible = aberta > 0.001;
            vao.visible = aberta > 0.001;
        };
        const atualizar = (dt) => {
            if (aberta === alvoAbertura) return;
            const passo = dt * 2.2;
            aberta = alvoAbertura > aberta ? Math.min(alvoAbertura, aberta + passo) : Math.max(alvoAbertura, aberta - passo);
            aplicar();
        };
        return {
            def, alvo, bandeja, tralhas, atualizar,
            estaAberta: () => alvoAbertura === 1,
            alternar: () => { alvoAbertura = alvoAbertura ? 0 : 1; return alvoAbertura === 1; },
            fechar: () => { alvoAbertura = 0; },
            encontrados: indices.length,
        };
    });
}

// Set de filmagem: fundo infinito (chroma key), refletor Fresnel, boom de
// microfone, cadeira de diretor, placa GRAVANDO, caixas de apoio, sacos de
// areia, marcações no chão e cabos. Mais algumas referências discretas a
// Doctor Who (cachecol listrado, fez, gravata-borboleta, bilhete "não pisque").
import {
    AdditiveBlending, BoxGeometry, CircleGeometry, Color, CylinderGeometry, DoubleSide, Group, Mesh,
    MeshBasicMaterial, PlaneGeometry, TorusGeometry,
} from 'three';
import { CHAO, MESA, DEG, canvas, mat, sombra, caixa, cilindro, haste, placaTexto } from './util';

// ---------- Fundo infinito de chroma key, com varredura curva até o chão ----------
export function fundoChroma() {
    const g = new Group();
    const L = 12500;                 // largura
    const A = 6400;                  // altura da parte reta
    const R = 1700;                  // raio da curva
    const P = 3800;                  // quanto avança no chão
    const cor = mat('#4fa865', null, { polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
    const alvo = canvas(128, 128, (c, w) => {
        c.clearRect(0, 0, w, w);
        c.strokeStyle = 'rgba(255,255,255,0.9)';
        c.lineWidth = 12;
        c.beginPath(); c.moveTo(24, 24); c.lineTo(104, 104); c.moveTo(104, 24); c.lineTo(24, 104); c.stroke();
    });
    const parede = new Mesh(new PlaneGeometry(L, A), cor);
    parede.position.set(0, CHAO + R + A / 2, 0);
    g.add(parede);
    const curva = new Mesh(new CylinderGeometry(R, R, L, 24, 1, true, Math.PI, Math.PI / 2), cor);
    curva.material.side = DoubleSide;
    curva.rotation.z = Math.PI / 2;
    curva.position.set(0, CHAO + R, R);
    g.add(curva);
    const piso = new Mesh(new PlaneGeometry(L, P), cor);
    piso.rotation.x = -Math.PI / 2;
    piso.position.set(0, CHAO + 8, R + P / 2);
    g.add(piso);
    // marcadores de rastreamento (X de fita) na parede
    const marcas = [];
    for (let i = 0; i < 8; i++) {
        const m = new Mesh(new PlaneGeometry(260, 260), new MeshBasicMaterial({ map: alvo, transparent: true, depthWrite: false }));
        m.position.set(-L * 0.38 + (i % 4) * L * 0.25, CHAO + R + A * (i < 4 ? 0.72 : 0.36), 3);
        g.add(m);
        marcas.push(m);
    }
    // suportes e travessa
    const aluminio = mat('#9a9a9a');
    [-1, 1].forEach((lado) => {
        const x = lado * (L / 2 + 160);
        g.add(haste([x, CHAO, 0], [x, CHAO + R + A + 400, 0], 34, aluminio));
        for (let k = 0; k < 3; k++) {
            const ang = k * 120 * DEG;
            g.add(haste([x + Math.cos(ang) * 700, CHAO, Math.sin(ang) * 700], [x, CHAO + 900, 0], 18, aluminio));
        }
        g.add(sacoAreia(x + 300, CHAO, 300, 0.4));
    });
    g.add(haste([-L / 2 - 200, CHAO + R + A + 250, 0], [L / 2 + 200, CHAO + R + A + 250, 0], 30, aluminio));
    const rolo = cilindro(150, 150, L + 200, mat('#3f8f55'), 20);
    rolo.rotation.z = Math.PI / 2;
    rolo.position.set(0, CHAO + R + A + 120, 40);
    g.add(rolo);
    return { grupo: g, material: cor, marcas };
}

// ---------- Saco de areia ----------
export function sacoAreia(x, y, z, rot) {
    const s = new Group();
    const lona = mat('#b0602a');
    [-1, 1].forEach((l) => {
        const lado = caixa(380, 150, 260, lona);
        lado.position.set(l * 210, 75, 0);
        lado.rotation.z = l * 0.12;
        s.add(lado);
    });
    const alca = caixa(120, 40, 280, mat('#222'));
    alca.position.y = 150;
    s.add(alca);
    s.position.set(x, y, z);
    s.rotation.y = rot || 0;
    s.add(sombra(1000, 600, 0, 0, 0));
    return s;
}

// ---------- Refletor Fresnel num C-stand ----------
export function refletorFresnel() {
    const g = new Group();
    const aco = mat('#8c8c8c');
    const preto = mat('#2b2b2b');
    const alt = CHAO + 5200;
    // C-stand: pernas em "degraus" e coluna
    [0, 1, 2].forEach((k) => {
        const ang = k * 120 * DEG + 20 * DEG;
        const comp = 900 - k * 120;
        g.add(haste([0, CHAO + 300 + k * 90, 0], [Math.cos(ang) * comp, CHAO + 30, Math.sin(ang) * comp], 20, aco));
    });
    g.add(haste([0, CHAO, 0], [0, alt - 300, 0], 32, aco));
    g.add(sacoAreia(500, CHAO, 300, 0.7));
    g.add(sombra(1900, 1900, 0, CHAO, 0));
    // garfo + corpo
    const cabeca = new Group();
    cabeca.position.y = alt;
    const garfo = caixa(40, 600, 40, preto);
    garfo.position.set(-340, 0, 0);
    const garfo2 = garfo.clone();
    garfo2.position.x = 340;
    cabeca.add(garfo, garfo2);
    const base = caixa(720, 40, 40, preto);
    base.position.y = -300;
    cabeca.add(base);
    const corpo = new Group();
    const lata = cilindro(300, 300, 620, preto, 28);
    lata.rotation.x = Math.PI / 2;
    corpo.add(lata);
    const aletas = cilindro(320, 320, 120, mat('#3a3a3a'), 28);
    aletas.rotation.x = Math.PI / 2;
    aletas.position.z = -220;
    corpo.add(aletas);
    const lente = new Mesh(new CircleGeometry(270, 32), new MeshBasicMaterial({ color: new Color('#ffe2a8') }));
    lente.position.z = 312;
    corpo.add(lente);
    // anéis da lente Fresnel
    for (let r = 70; r < 270; r += 50) {
        const anel = new Mesh(new TorusGeometry(r, 5, 4, 40), new MeshBasicMaterial({ color: new Color('#f3cf8a') }));
        anel.position.z = 314;
        corpo.add(anel);
    }
    // abas (barn doors)
    const abas = [];
    [[0, 1], [0, -1], [1, 0], [-1, 0]].forEach(([x, y]) => {
        const larg = y ? 620 : 540;
        const aba = new Group();
        const placa = caixa(larg, 330, 10, preto);
        placa.position.set(0, 165, 0);
        aba.add(placa);
        aba.position.set(x * 300, y * 300, 330);
        aba.rotation.z = x ? -x * Math.PI / 2 : (y < 0 ? Math.PI : 0);
        aba.rotateX(-35 * DEG);
        corpo.add(aba);
        abas.push(aba);
    });
    const brilho = new Mesh(new PlaneGeometry(1700, 1700), new MeshBasicMaterial({
        map: canvas(256, 256, (c, w) => {
            const gr = c.createRadialGradient(w / 2, w / 2, w * 0.08, w / 2, w / 2, w / 2);
            gr.addColorStop(0, 'rgba(255,214,150,0.6)');
            gr.addColorStop(1, 'rgba(255,214,150,0)');
            c.fillStyle = gr;
            c.fillRect(0, 0, w, w);
        }),
        transparent: true, blending: AdditiveBlending, depthWrite: false, opacity: 0.4,
    }));
    brilho.position.z = 340;
    corpo.add(brilho);
    corpo.rotation.x = 16 * DEG;   // inclinado para baixo, mirando a mesa
    cabeca.add(corpo);
    g.add(cabeca);
    return { grupo: g, cabeca, lente, brilho };
}

// ---------- Boom de microfone ----------
export function boom() {
    const g = new Group();
    const aco = mat('#8f8f8f');
    const preto = mat('#252525');
    const alt = CHAO + 6400;
    for (let k = 0; k < 3; k++) {
        const ang = k * 120 * DEG;
        g.add(haste([Math.cos(ang) * 650, CHAO, Math.sin(ang) * 650], [0, CHAO + 1000, 0], 18, aco));
    }
    g.add(haste([0, CHAO + 950, 0], [0, alt, 0], 28, aco));
    g.add(sacoAreia(-420, CHAO, -260, -0.5));
    g.add(sombra(1500, 1500, 0, CHAO, 0));
    // vara (aponta para +x local) e microfone pendurado com protetor "peludo"
    const vara = new Group();
    vara.position.y = alt;
    const ponta = [5600, -900, 0];
    vara.add(haste([-900, 260, 0], ponta, 22, preto));
    const contrapeso = cilindro(110, 110, 260, preto, 16);
    contrapeso.rotation.z = Math.PI / 2;
    contrapeso.position.set(-950, 270, 0);
    vara.add(contrapeso);
    const mic = new Group();
    mic.position.set(ponta[0], ponta[1] - 120, 0);
    const pelo = canvas(256, 64, (c, w, h) => {
        c.fillStyle = '#6b6b6b';
        c.fillRect(0, 0, w, h);
        for (let i = 0; i < 1600; i++) {
            const v = 70 + Math.random() * 90;
            c.fillStyle = `rgb(${v},${v},${v})`;
            c.fillRect(Math.random() * w, Math.random() * h, 2, 5);
        }
    });
    const peludo = new Mesh(new CylinderGeometry(120, 120, 760, 20), mat('#ffffff', pelo));
    peludo.rotation.z = Math.PI / 2;
    peludo.rotation.y = -20 * DEG;
    mic.add(peludo);
    const ponteira = cilindro(120, 10, 120, mat('#5e5e5e'), 20);
    ponteira.rotation.z = -Math.PI / 2;
    ponteira.position.x = 430;
    mic.add(ponteira);
    const suporte = caixa(30, 160, 30, preto);
    suporte.position.y = 120;
    mic.add(suporte);
    vara.add(mic);
    g.add(vara);
    return { grupo: g, vara, mic };
}

// ---------- Cadeira de diretor (com o cachecol listrado pendurado) ----------
export function cadeiraDiretor() {
    const g = new Group();
    const madeira = mat('#7b5a3c');
    const lona = canvas(512, 160, (c, w, h) => {
        c.fillStyle = '#1f1f1f';
        c.fillRect(0, 0, w, h);
        c.fillStyle = '#e9d9a6';
        c.font = 'bold 58px Arial Black, Arial, sans-serif';
        c.textAlign = 'center';
        c.fillText('DIRETOR', w / 2, 76);
        c.font = 'bold 34px Arial, sans-serif';
        c.fillStyle = '#c9a227';
        c.fillText('M. ANGELO', w / 2, 128);
    });
    const assento = 2000;
    const encosto = 3650;
    // pernas em X dos dois lados
    [-1, 1].forEach((l) => {
        const z = l * 560;
        g.add(haste([-560, CHAO, z], [560, CHAO + assento - 60, z], 34, madeira));
        g.add(haste([560, CHAO, z], [-560, CHAO + assento - 60, z], 34, madeira));
        g.add(haste([-560, CHAO + assento - 60, z], [-560, CHAO + encosto, z], 30, madeira));
        const braco = caixa(1150, 50, 90, madeira);
        braco.position.set(0, CHAO + assento + 520, z);
        g.add(braco);
        g.add(haste([520, CHAO + assento - 60, z], [520, CHAO + assento + 500, z], 26, madeira));
    });
    const banco = caixa(1100, 30, 1100, mat('#1f1f1f'));
    banco.position.y = CHAO + assento;
    g.add(banco);
    const costas = new Mesh(new PlaneGeometry(1100, 360), mat('#ffffff', lona, { side: DoubleSide }));
    costas.rotation.y = -Math.PI / 2;
    costas.position.set(-575, CHAO + encosto - 220, 0);
    g.add(costas);
    g.add(sombra(1800, 1800, 0, CHAO, 0));

    // cachecol bem comprido de listras (uma "certa" referência...)
    const listras = canvas(64, 512, (c, w, h) => {
        const cores = ['#7a2e2e', '#c99a3b', '#5b6b3a', '#8a5a2b', '#3d5c6b', '#a34d2f', '#d8c08a', '#6b3d5c'];
        let y = 0;
        let i = 0;
        while (y < h) {
            const alt = 18 + ((i * 37) % 40);
            c.fillStyle = cores[i % cores.length];
            c.fillRect(0, y, w, alt);
            y += alt;
            i++;
        }
    });
    const pontos = [
        [-600, encosto + 60, -420], [-640, encosto + 90, 0], [-600, encosto + 60, 420],
        [-420, encosto - 600, 560], [-200, assento + 300, 640], [80, assento - 400, 700],
        [260, 700, 760], [380, 120, 820], [700, 30, 1000], [1100, 30, 900],
    ];
    const cachecol = new Group();
    const lan = mat('#ffffff', listras);
    for (let i = 0; i < pontos.length - 1; i++) {
        const a = pontos[i];
        const b = pontos[i + 1];
        const pedaco = haste([a[0], CHAO + a[1], a[2]], [b[0], CHAO + b[1], b[2]], 55, lan);
        pedaco.scale.set(1, 1, 0.35);
        cachecol.add(pedaco);
    }
    // ponta caída por cima do encosto, do outro lado
    cachecol.add(haste([-640, CHAO + encosto + 80, -420], [-900, CHAO + encosto - 900, -380], 55, lan));
    g.add(cachecol);
    return { grupo: g, cachecol };
}

// ---------- Placa luminosa GRAVANDO ----------
export function placaGravando() {
    const desenhar = (aceso) => (c, w, h) => {
        c.fillStyle = aceso ? '#c3121e' : '#3a1214';
        c.fillRect(0, 0, w, h);
        c.fillStyle = aceso ? '#ffffff' : '#6a3a3a';
        c.font = 'bold 92px Arial Black, Arial, sans-serif';
        c.textAlign = 'center';
        c.textBaseline = 'middle';
        c.fillText('● GRAVANDO', w / 2, h / 2 + 4);
    };
    const g = new Group();
    const caixaPlaca = caixa(1500, 420, 200, mat('#1c1c1c'));
    g.add(caixaPlaca);
    const apagada = canvas(720, 200, desenhar(false));
    const acesa = canvas(720, 200, desenhar(true));
    const frente = new Mesh(new PlaneGeometry(1380, 340), new MeshBasicMaterial({ map: apagada }));
    frente.position.z = 102;
    g.add(frente);
    const brilho = new Mesh(new PlaneGeometry(2600, 1300), new MeshBasicMaterial({
        map: canvas(256, 128, (c, w, h) => {
            const gr = c.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, w / 2);
            gr.addColorStop(0, 'rgba(255,40,40,0.55)');
            gr.addColorStop(1, 'rgba(255,40,40,0)');
            c.fillStyle = gr;
            c.fillRect(0, 0, w, h);
        }),
        transparent: true, blending: AdditiveBlending, depthWrite: false,
    }));
    brilho.position.z = 110;
    brilho.visible = false;
    g.add(brilho);
    const ligar = (on) => {
        frente.material.map = on ? acesa : apagada;
        frente.material.needsUpdate = true;
        brilho.visible = on;
    };
    return { grupo: g, ligar };
}

// ---------- Caixas de apoio (apple boxes) ----------
export function appleBoxes() {
    const g = new Group();
    const madeira = mat('#c8a06a');
    const rotulo = (txt) => canvas(256, 128, (c, w, h) => {
        c.fillStyle = '#c8a06a';
        c.fillRect(0, 0, w, h);
        c.strokeStyle = '#8a6a3f';
        c.lineWidth = 8;
        c.strokeRect(6, 6, w - 12, h - 12);
        c.fillStyle = '#3a2a18';
        c.font = 'bold 40px Arial Black, Arial, sans-serif';
        c.textAlign = 'center';
        c.fillText(txt, w / 2, 70);
        c.beginPath(); c.ellipse(w / 2, 100, 40, 12, 0, 0, Math.PI * 2); c.fillStyle = '#2a1d10'; c.fill();
    });
    const inteira = new Mesh(new BoxGeometry(1700, 680, 1000), [madeira, madeira, madeira, madeira, mat('#ffffff', rotulo('FULL')), madeira]);
    inteira.position.y = CHAO + 340;
    g.add(inteira);
    const meia = new Mesh(new BoxGeometry(1700, 340, 1000), [madeira, madeira, madeira, madeira, mat('#ffffff', rotulo('HALF')), madeira]);
    meia.position.set(80, CHAO + 680 + 170, -30);
    meia.rotation.y = 9 * DEG;
    g.add(meia);
    g.add(sombra(2400, 1700, 0, CHAO, 0));
    return { grupo: g };
}

// ---------- Fita no chão: marcação de ator, X e cabos ----------
export function marcacoesChao() {
    const g = new Group();
    const fita = (w, h, cor) => new Mesh(new PlaneGeometry(w, h), new MeshBasicMaterial({ color: new Color(cor) }));
    const t = (x, z, cor, rot) => {
        const grupo = new Group();
        const a = fita(700, 110, cor);
        const b = fita(110, 520, cor);
        b.position.y = -300;
        grupo.add(a, b);
        grupo.rotation.x = -Math.PI / 2;
        grupo.rotation.z = rot;
        grupo.position.set(x, CHAO + 3, z);
        return grupo;
    };
    g.add(t(1000, 4400, '#f2c200', 0.2));      // marca do "ator" na frente da cadeira
    g.add(t(-1800, 4100, '#3c8ce9', -0.3));
    const x = new Group();
    [45, -45].forEach((ang) => {
        const f = fita(700, 100, '#e9e9e9');
        f.rotation.z = ang * DEG;
        x.add(f);
    });
    x.rotation.x = -Math.PI / 2;
    x.position.set(-4600, CHAO + 3, 2300);
    g.add(x);
    // cabo preto serpenteando do refletor até a mesa, com pedaços de fita por cima
    const cabo = [[-7200, -2400], [-6400, -1400], [-5900, -300], [-4700, 300], [-3700, 200]];
    const preto = mat('#1a1a1a');
    for (let i = 0; i < cabo.length - 1; i++) {
        g.add(haste([cabo[i][0], CHAO + 14, cabo[i][1]], [cabo[i + 1][0], CHAO + 14, cabo[i + 1][1]], 14, preto));
        if (i % 2 === 0) {
            const pedaco = fita(320, 140, '#2b2b2b');
            pedaco.rotation.x = -Math.PI / 2;
            pedaco.rotation.z = Math.atan2(cabo[i + 1][1] - cabo[i][1], cabo[i + 1][0] - cabo[i][0]) + Math.PI / 2;
            pedaco.position.set((cabo[i][0] + cabo[i + 1][0]) / 2, CHAO + 30, (cabo[i][1] + cabo[i + 1][1]) / 2);
            g.add(pedaco);
        }
    }
    return { grupo: g };
}

// ================================================ referências discretas
// Fez vermelho com pendão, em cima do monitor
export function fez() {
    const g = new Group();
    const corpo = cilindro(118, 150, 200, mat('#a3171d'), 28);
    corpo.position.y = 100;
    g.add(corpo);
    const topo = new Mesh(new CircleGeometry(118, 28), mat('#8f1419'));
    topo.rotation.x = -Math.PI / 2;
    topo.position.y = 201;
    g.add(topo);
    const preto = mat('#151515');
    g.add(haste([0, 205, 0], [70, 170, 40], 7, preto));
    g.add(haste([70, 170, 40], [120, 40, 70], 7, preto));
    const pendao = cilindro(10, 26, 70, preto, 10);
    pendao.position.set(122, 20, 72);
    g.add(pendao);
    g.rotation.z = -8 * DEG;
    return { grupo: g };
}

// Gravata-borboleta em cima da mesa
export function gravataBorboleta() {
    const g = new Group();
    const tecido = mat('#7a1f3d');
    [-1, 1].forEach((l) => {
        const asa = cilindro(70, 20, 190, tecido, 4);
        asa.rotation.set(0, Math.PI / 4, l * Math.PI / 2);
        asa.position.set(l * 100, 40, 0);
        asa.scale.set(1, 1, 0.45);
        g.add(asa);
    });
    const no = caixa(60, 70, 50, mat('#5e1730'));
    no.position.y = 40;
    g.add(no);
    g.add(sombra(520, 260, 0, 0, 0, 0, 0.6));
    return { grupo: g };
}

// Bilhete amarelo colado no gabinete do computador
export function bilheteNaoPisque() {
    const desenhar = (txt) => (c, w, h) => {
        c.fillStyle = '#ffe873';
        c.fillRect(0, 0, w, h);
        c.fillStyle = 'rgba(0,0,0,0.06)';
        c.fillRect(0, 0, w, 34);
        c.fillStyle = '#2a2a6a';
        c.font = 'bold 54px "Comic Sans MS", "Marker Felt", cursive';
        c.textAlign = 'center';
        txt.split('\n').forEach((l, i) => c.fillText(l, w / 2, 110 + i * 70));
    };
    const tex1 = canvas(256, 256, desenhar('NÃO\nPISQUE.'));
    const tex2 = canvas(256, 256, desenhar('VOCÊ\nPISCOU.'));
    const m = new Mesh(new PlaneGeometry(230, 230), new MeshBasicMaterial({ map: tex1, color: new Color('#eeeeee') }));
    m.rotation.z = 6 * DEG;
    const trocar = (piscou) => {
        m.material.map = piscou ? tex2 : tex1;
        m.material.needsUpdate = true;
    };
    return { grupo: m, trocar };
}

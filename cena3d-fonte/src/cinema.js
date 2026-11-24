// Cena em primeira pessoa: pegar a Multiferramenta Sônica, apontar para o
// computador e... pifar tudo. Assume a câmera da cena original durante a
// sequência e devolve com uma transição suave no final.
import {
    AdditiveBlending, Color, CylinderGeometry, Group, Matrix4, Mesh, MeshBasicMaterial,
    Quaternion, RingGeometry, Vector3, DoubleSide,
} from 'three';
import { tons, ruido, falar, pedirAoPC } from './util';

const ESTILO = `
#cine-bloqueio{position:fixed;inset:0;z-index:9500;cursor:none}
.cine-faixa{position:fixed;left:0;right:0;height:0;background:#000;z-index:9600;transition:height .7s cubic-bezier(.6,0,.2,1)}
.cine-faixa.cima{top:0}.cine-faixa.baixo{bottom:0}
body.cine-ativo .cine-faixa{height:11vh}
#cine-legenda{position:fixed;left:50%;bottom:calc(11vh + 18px);transform:translateX(-50%);z-index:9700;color:#fff6d8;
  font:italic 22px Georgia,'Times New Roman',serif;text-shadow:0 2px 4px #000,0 0 2px #000;opacity:0;transition:opacity .4s;
  white-space:nowrap;pointer-events:none}
#cine-legenda.visivel{opacity:1}
#cine-flash{position:fixed;inset:0;background:#eaffef;z-index:9550;opacity:0;pointer-events:none;transition:opacity .5s}
#cine-flash.on{opacity:.85;transition:none}
#cine-vinheta{position:fixed;inset:0;z-index:9540;pointer-events:none;opacity:0;transition:opacity .8s;
  background:radial-gradient(ellipse at center,transparent 55%,rgba(0,0,0,.55) 100%)}
body.cine-ativo #cine-vinheta{opacity:1}
`;

const suave = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
const mistura = (a, b, t) => a + (b - a) * t;

let rodando = false;
let elementos = null;

function prepararDom() {
    if (elementos) return elementos;
    const estilo = document.createElement('style');
    estilo.textContent = ESTILO;
    document.head.appendChild(estilo);
    const faixaCima = document.createElement('div');
    faixaCima.className = 'cine-faixa cima';
    const faixaBaixo = document.createElement('div');
    faixaBaixo.className = 'cine-faixa baixo';
    const legenda = document.createElement('div');
    legenda.id = 'cine-legenda';
    const flash = document.createElement('div');
    flash.id = 'cine-flash';
    const vinheta = document.createElement('div');
    vinheta.id = 'cine-vinheta';
    document.body.append(vinheta, flash, faixaCima, faixaBaixo, legenda);
    elementos = { legenda, flash };
    return elementos;
}

function legendar(txt) {
    const { legenda } = prepararDom();
    if (!txt) { legenda.classList.remove('visivel'); return; }
    legenda.textContent = txt;
    legenda.classList.add('visivel');
}

// zumbido "sônico": serra com vibrato subindo de tom
function zumbido(duracao) {
    const C = window.AudioContext || window.webkitAudioContext;
    if (!C) return;
    const a = window.__salaAudio || (window.__salaAudio = new C());
    if (a.state === 'suspended') a.resume();
    const t = a.currentTime;
    const o = a.createOscillator();
    const lfo = a.createOscillator();
    const lfoGanho = a.createGain();
    const g = a.createGain();
    const filtro = a.createBiquadFilter();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(520, t);
    o.frequency.exponentialRampToValueAtTime(1500, t + duracao);
    lfo.frequency.value = 28;
    lfoGanho.gain.value = 60;
    lfo.connect(lfoGanho).connect(o.frequency);
    filtro.type = 'bandpass';
    filtro.frequency.value = 1400;
    filtro.Q.value = 0.8;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.09, t + 0.15);
    g.gain.setValueAtTime(0.09, t + duracao - 0.2);
    g.gain.exponentialRampToValueAtTime(0.0001, t + duracao);
    o.connect(filtro).connect(g).connect(a.destination);
    o.start(t);
    lfo.start(t);
    o.stop(t + duracao + 0.05);
    lfo.stop(t + duracao + 0.05);
}

/**
 * @param app       window.Application
 * @param ferramenta { grupo, cristal, brilho, pontaX }
 * @param mao       { grupo }
 * @param raiz      grupo onde os objetos extras vivem
 * @param aoTerminar chamada no fim (guardar o aparelho, fechar a gaveta)
 */
export function cenaSonica(app, ferramenta, mao, raiz, aoTerminar) {
    if (rodando) return;
    rodando = true;
    prepararDom();
    const cam = app.camera;
    const inst = cam.instance;

    // bloqueia o mouse (pra não entrar no monitor por acidente) e liga o "modo cinema"
    const bloqueio = document.createElement('div');
    bloqueio.id = 'cine-bloqueio';
    document.body.appendChild(bloqueio);
    document.body.classList.add('cine-ativo');
    ruido(0.5, 0.35, 700);

    // ---------------- câmera: de onde está até o ponto de vista em primeira pessoa
    const posIni = inst.position.clone();
    const focIni = cam.focalPoint.clone();
    const focTela = new Vector3(0, 950, 300);           // centro da tela do monitor
    const posPOV = new Vector3(260, 1020, 3300);
    const posZap = new Vector3(140, 990, 2650);
    const pos = new Vector3();
    const foc = new Vector3();

    // ---------------- ferramenta: sai da gaveta e vai para a "mão"
    const f = ferramenta.grupo;
    f.updateMatrixWorld(true);
    const posFerIni = new Vector3().setFromMatrixPosition(f.matrixWorld);
    const quatFerIni = new Quaternion();
    f.getWorldQuaternion(quatFerIni);
    const paiOriginal = f.parent;
    const posLocalOriginal = f.position.clone();
    const rotLocalOriginal = f.rotation.clone();
    raiz.attach(f);                                      // passa a viver no mundo, mantendo a posição
    raiz.add(mao.grupo);
    mao.grupo.visible = false;

    // feixe e ondas
    const matFeixe = new MeshBasicMaterial({ color: new Color('#7dffab'), transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false });
    const feixe = new Mesh(new CylinderGeometry(6, 26, 1, 10, 1, true), matFeixe);
    feixe.userData.semClique = true;
    raiz.add(feixe);
    const ondas = [];
    for (let i = 0; i < 4; i++) {
        const m = new Mesh(new RingGeometry(40, 58, 40), new MeshBasicMaterial({ color: new Color('#9dffc0'), transparent: true, opacity: 0, blending: AdditiveBlending, depthWrite: false, side: DoubleSide }));
        m.position.copy(focTela).setZ(390);
        m.userData.semClique = true;
        raiz.add(m);
        ondas.push(m);
    }

    // posição da mão em relação à câmera (espaço da câmera: x direita, y cima, -z frente)
    const offsetMao = new Vector3(300, -255, -760);
    const offsetMaoBaixa = new Vector3(420, -900, -760);
    const tmp = new Vector3();
    const tmp2 = new Vector3();
    const qMira = new Quaternion();
    const mira = new Matrix4();
    const cimaMundo = new Vector3(0, 1, 0);
    const tamanhoMao = 0.85;

    const updateOriginal = cam.update.bind(cam);
    const t0 = performance.now();
    let enviouPc = false;
    let zumbiu = false;
    const etapas = { legenda1: false, legenda2: false, flash: false, fim: false };

    function pontoDaMao(offset) {
        return tmp.copy(offset).applyMatrix4(inst.matrixWorld);
    }

    cam.currentKeyframe = 'cinema';
    cam.update = function () {
        const t = (performance.now() - t0) / 1000;
        // ---------- câmera
        if (t < 1.8) {
            const k = suave(t / 1.8);
            pos.lerpVectors(posIni, posPOV, k);
            foc.lerpVectors(focIni, focTela, k);
        } else if (t < 3.2) {
            pos.copy(posPOV);
            foc.copy(focTela);
        } else if (t < 5.4) {
            const k = suave((t - 3.2) / 2.2);
            pos.lerpVectors(posPOV, posZap, k);
            foc.copy(focTela);
        } else {
            pos.copy(posZap);
            foc.copy(focTela);
        }
        // respiração de câmera na mão + tremor durante o zap
        const respira = Math.sin(t * 2.1) * 6;
        const tremor = t > 3.2 && t < 5.6 ? (t - 3.2) * 9 : 0;
        inst.position.set(pos.x + Math.sin(t * 1.3) * 8 + (Math.random() - 0.5) * tremor, pos.y + respira + (Math.random() - 0.5) * tremor, pos.z);
        inst.lookAt(foc.x + (Math.random() - 0.5) * tremor * 0.5, foc.y + (Math.random() - 0.5) * tremor * 0.5, foc.z);
        inst.updateMatrixWorld(true);

        // ---------- aparelho e mão
        let offset = offsetMao;
        if (t > 5.9) {
            tmp2.lerpVectors(offsetMao, offsetMaoBaixa, suave((t - 5.9) / 0.8));
            offset = tmp2;
        }
        const alvoMao = pontoDaMao(offset);
        // aponta o aparelho (+x) para a tela
        const apontar = t > 2.6 ? suave((t - 2.6) / 0.6) : 0;
        const destino = tmp2.copy(focTela).lerp(new Vector3().copy(foc).add(new Vector3(500, -400, 0)), 1 - apontar);
        mira.lookAt(alvoMao, destino, cimaMundo);
        qMira.setFromRotationMatrix(mira);
        // lookAt aponta -z para o alvo; o aparelho aponta +x → gira -90° em y
        qMira.multiply(new Quaternion().setFromAxisAngle(cimaMundo, Math.PI / 2));
        if (t < 1.4) {
            const k = suave(t / 1.4);
            f.position.lerpVectors(posFerIni, alvoMao, k);
            f.quaternion.copy(quatFerIni).slerp(qMira, k);
        } else {
            f.position.copy(alvoMao);
            f.quaternion.copy(qMira);
        }
        f.scale.setScalar(t < 1.4 ? mistura(1, tamanhoMao, suave(t / 1.4)) : tamanhoMao);
        mao.grupo.visible = t > 0.9 && t < 6.8;
        mao.grupo.position.copy(f.position);
        mao.grupo.quaternion.copy(f.quaternion);
        mao.grupo.scale.setScalar(tamanhoMao);
        ferramenta.brilho.quaternion.copy(inst.quaternion);
        ferramenta.brilho.material.opacity = t > 3.2 && t < 5.4 ? 0.9 + Math.random() * 0.1 : 0.35;
        ferramenta.brilho.scale.setScalar(t > 3.2 && t < 5.4 ? 1.8 + Math.sin(t * 40) * 0.2 : 1);

        // ---------- feixe sônico + ondas na tela
        const zap = t > 3.2 && t < 5.4;
        if (zap) {
            const ponta = new Vector3(ferramenta.pontaX * tamanhoMao, 0, 0).applyQuaternion(f.quaternion).add(f.position);
            const alvoTela = new Vector3(focTela.x, focTela.y, 380);
            const meio = ponta.clone().add(alvoTela).multiplyScalar(0.5);
            const dist = ponta.distanceTo(alvoTela);
            feixe.position.copy(meio);
            feixe.scale.set(1, dist, 1);
            feixe.lookAt(alvoTela);
            feixe.rotateX(Math.PI / 2);
            matFeixe.opacity = 0.25 + Math.random() * 0.25;
            ondas.forEach((o, i) => {
                const fase = ((t * 1.6 + i / ondas.length) % 1);
                o.scale.setScalar(1 + fase * 9);
                o.material.opacity = (1 - fase) * 0.6;
            });
        } else {
            matFeixe.opacity = 0;
            ondas.forEach((o) => { o.material.opacity = 0; });
        }

        // ---------- roteiro
        if (!etapas.legenda1 && t > 1.6) { etapas.legenda1 = true; legendar('— Deixa que eu resolvo isso.'); }
        if (!zumbiu && t > 3.2) { zumbiu = true; legendar(''); zumbido(2.2); }
        if (!enviouPc && t > 3.9) { enviouPc = true; pedirAoPC({ acao: 'sonico' }); }
        if (!etapas.flash && t > 5.3) {
            etapas.flash = true;
            elementos.flash.classList.add('on');
            requestAnimationFrame(() => requestAnimationFrame(() => elementos.flash.classList.remove('on')));
            ruido(0.6, 0.8, 300);
        }
        if (!etapas.legenda2 && t > 5.9) { etapas.legenda2 = true; legendar('— ...opa.'); }
        if (!etapas.fim && t > 7.0) {
            etapas.fim = true;
            terminar();
        }
    };

    function terminar() {
        legendar('');
        document.body.classList.remove('cine-ativo');
        bloqueio.remove();
        mao.grupo.visible = false;
        raiz.remove(feixe);
        ondas.forEach((o) => raiz.remove(o));
        // o aparelho volta para a gaveta
        f.scale.setScalar(1);
        paiOriginal.add(f);
        f.position.copy(posLocalOriginal);
        f.rotation.copy(rotLocalOriginal);
        ferramenta.brilho.scale.setScalar(1);
        ferramenta.brilho.quaternion.identity();
        ferramenta.brilho.rotation.x = -Math.PI / 2;
        ferramenta.brilho.material.opacity = 0.35;
        // devolve a câmera à cena original, saindo de onde estamos agora
        cam.position.copy(inst.position);
        cam.focalPoint.copy(focTela);
        cam.currentKeyframe = undefined;
        cam.update = updateOriginal;
        cam.transition('idle', 2600);
        tons([[392, 0.1], [330, 0.1], [262, 0.3]], 'triangle', 0.06);
        setTimeout(() => falar('Multiferramenta Sônica MA-26: funcionou perfeitamente. O computador é que não aguentou. 😅', 4500), 600);
        rodando = false;
        if (aoTerminar) aoTerminar();
    }
}

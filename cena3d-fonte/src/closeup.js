// Close-up da gaveta: a câmera desce até a gaveta aberta e olha o que tem
// dentro. Tudo lá dentro continua clicável; "Voltar" (ou Esc) devolve a câmera.
import { Vector3 } from 'three';

const ESTILO = `
#gaveta-ui{position:fixed;left:50%;bottom:26px;transform:translateX(-50%) translateY(30px);z-index:9400;display:flex;gap:10px;
  align-items:center;opacity:0;pointer-events:none;transition:opacity .35s,transform .35s;font:600 14px system-ui,sans-serif}
body.gaveta-closeup #gaveta-ui{opacity:1;transform:translateX(-50%);pointer-events:auto}
#gaveta-ui .g-dica{background:rgba(10,10,14,.78);color:#f3ead2;padding:9px 14px;border-radius:10px;border:1px solid rgba(255,255,255,.15);
  backdrop-filter:blur(4px);max-width:62vw}
#gaveta-ui button{background:#f3ead2;color:#111;border:0;border-radius:10px;padding:10px 16px;font:700 14px system-ui,sans-serif;cursor:pointer;
  box-shadow:0 3px 0 #9c8f6c}
#gaveta-ui button:active{transform:translateY(2px);box-shadow:0 1px 0 #9c8f6c}
body.gaveta-closeup #btn-focus-monitor,body.gaveta-closeup #btn-leave-monitor{display:none!important}
#gaveta-vinheta{position:fixed;inset:0;pointer-events:none;z-index:9300;opacity:0;transition:opacity .6s;
  background:radial-gradient(ellipse at center,transparent 50%,rgba(0,0,0,.5) 100%)}
body.gaveta-closeup #gaveta-vinheta{opacity:1}
`;

const suave = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));

let ui = null;
function prepararUi(aoVoltar) {
    if (ui) return ui;
    const st = document.createElement('style');
    st.textContent = ESTILO;
    document.head.appendChild(st);
    const box = document.createElement('div');
    box.id = 'gaveta-ui';
    box.innerHTML = '<span class="g-dica"></span><button type="button">⟵ Voltar</button>';
    const vin = document.createElement('div');
    vin.id = 'gaveta-vinheta';
    document.body.append(vin, box);
    // o clique no botão não pode chegar na cena (senão a câmera original reage)
    ['mousedown', 'touchstart', 'pointerdown'].forEach((t) => box.addEventListener(t, (e) => e.stopPropagation()));
    ui = { box, dica: box.querySelector('.g-dica'), botao: box.querySelector('button') };
    ui.botao.addEventListener('click', (e) => { e.stopPropagation(); aoVoltar(); });
    return ui;
}

/**
 * @param app   window.Application
 * @returns {{ entrar(gaveta, dica), sair(comTransicao), ativo() }}
 */
export function criarCloseup(app) {
    const cam = app.camera;
    const inst = cam.instance;
    let estado = null;   // { update original, gaveta, ... }
    const mouse = { x: 0, y: 0 };
    window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    });

    function sair(comTransicao = true) {
        if (!estado) return;
        const e = estado;
        estado = null;
        window.__salaModoGaveta = false;
        document.body.classList.remove('gaveta-closeup');
        cam.update = e.updateOriginal;
        cam.position.copy(inst.position);
        cam.focalPoint.copy(e.foc);
        cam.currentKeyframe = undefined;
        if (comTransicao) {
            cam.transition('idle', 1600);
            if (e.gaveta) e.gaveta.fechar();
        }
    }
    const u = prepararUi(() => sair(true));
    window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && estado) sair(true); });

    function entrar(gaveta, dica) {
        if (estado) { estado.gaveta = gaveta; u.dica.textContent = dica; return; }
        const def = gaveta.def;
        const cx = (def.x0 + def.x1) / 2;
        // a gaveta aberta fica entre z ≈ 1200 e 2460; olhamos de cima e da frente
        const focFinal = new Vector3(cx - 40, def.y0 + 60, 1840);
        const posFinal = new Vector3(cx + 120, def.y0 + 1500, 3150);
        const posIni = inst.position.clone();
        const focIni = cam.focalPoint ? cam.focalPoint.clone() : new Vector3(0, 0, 0);
        const foc = new Vector3();
        const pos = new Vector3();
        const t0 = performance.now();
        estado = { updateOriginal: cam.update, gaveta, foc };
        window.__salaModoGaveta = true;
        document.body.classList.add('gaveta-closeup');
        u.dica.textContent = dica;
        cam.currentKeyframe = 'gaveta';
        cam.targetKeyframe = undefined;
        cam.update = function () {
            const t = (performance.now() - t0) / 1000;
            const k = suave(t / 1.3);
            pos.lerpVectors(posIni, posFinal, k);
            foc.lerpVectors(focIni, focFinal, k);
            // espiar: o mouse inclina a cabeça um pouquinho
            const px = mouse.x * 220 * k;
            const py = -mouse.y * 140 * k;
            inst.position.set(pos.x + px + Math.sin(t * 0.9) * 6, pos.y + py + Math.sin(t * 1.4) * 5, pos.z);
            inst.lookAt(foc.x + px * 0.35, foc.y, foc.z);
            inst.updateMatrixWorld(true);
        };
    }

    return { entrar, sair, ativo: () => !!estado };
}

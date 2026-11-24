// ============================================================================
// sala-extra.js — transforma a sala 3D num set de filmagem de videomaker.
//
// Não recompila a cena: espera o bundle principal montar a sala e usa o
// window.Application (o mesmo jeito do celular3d.js) para adicionar objetos,
// deixá-los clicáveis e conversar com o computador (MiguelOS) via postMessage.
//
// Arquivos:  util.js (texturas, material, sons, balão de texto)
//            objetos.js (cartaz, câmera, softbox, claquete, VHS, fone, Rolinho)
//            set.js (chroma key, Fresnel, boom, cadeira de diretor, placa, etc.)
//            interacao.js (o que acontece ao passar o mouse / clicar)
//
// A cena original não tem luzes — tudo é iluminação "pintada" nas texturas.
// Os objetos usam MeshMatcapMaterial com uma esfera de luz suave que imita isso.
// Unidades: ~34 por centímetro. Chão em y = -2984, tampo da mesa em y = -452.
// Para editar: npm run build (dentro de cena3d-fonte/)
// ============================================================================
import { Color, Group } from 'three';
import { CHAO, MESA, DEG, falar, tons, ruido, pedirAoPC } from './util';
import { cavalete, cameraTripe, softbox, claquete, fitasVHS, fone, rolinho } from './objetos';
import {
    fundoChroma, refletorFresnel, boom, cadeiraDiretor, placaGravando, appleBoxes, marcacoesChao,
    fez, gravataBorboleta, bilheteNaoPisque,
} from './set';
import { interativo, iniciarInteracao } from './interacao';

const ESTILO = `
#sala-toast{position:fixed;left:50%;bottom:110px;transform:translateX(-50%) translateY(10px);background:#000;color:#fff;
  font:15px/1.4 monospace;padding:6px 16px;opacity:0;transition:opacity .2s,transform .2s;pointer-events:none;z-index:9999;
  max-width:min(92vw,640px);text-align:center;white-space:pre-wrap}
#sala-toast.visivel{opacity:1;transform:translateX(-50%) translateY(0)}
#sala-dica{position:fixed;background:#000;color:#fff;font:12px monospace;padding:3px 8px;pointer-events:none;z-index:9999;
  opacity:0;transition:opacity .12s;white-space:nowrap}
#sala-dica.visivel{opacity:1}
body.sala-hover #css,body.sala-hover{cursor:pointer!important}
#sala-visor{position:fixed;inset:0;pointer-events:none;z-index:9000;font:bold 15px monospace;color:#fff;
  text-shadow:0 0 3px #000;display:none}
#sala-visor.ligado{display:block}
#sala-visor .canto{position:absolute;width:46px;height:46px;border:3px solid rgba(255,255,255,.85)}
#sala-visor .c1{top:28px;left:28px;border-right:0;border-bottom:0}
#sala-visor .c2{top:28px;right:28px;border-left:0;border-bottom:0}
#sala-visor .c3{bottom:28px;left:28px;border-right:0;border-top:0}
#sala-visor .c4{bottom:28px;right:28px;border-left:0;border-top:0}
#sala-visor .rec{position:absolute;top:44px;left:90px;color:#ff3030}
#sala-visor .rec i{animation:salaPisca 1s steps(1) infinite;font-style:normal}
#sala-visor .tc{position:absolute;top:44px;right:90px}
#sala-visor .info{position:absolute;bottom:44px;left:90px}
#sala-visor .bat{position:absolute;bottom:44px;right:90px}
#sala-visor .mira{position:absolute;left:50%;top:50%;width:40px;height:40px;margin:-20px 0 0 -20px}
#sala-visor .mira:before,#sala-visor .mira:after{content:'';position:absolute;background:rgba(255,255,255,.8)}
#sala-visor .mira:before{left:19px;top:0;width:2px;height:40px}
#sala-visor .mira:after{top:19px;left:0;height:2px;width:40px}
#sala-visor .tercos{position:absolute;inset:0;background:
  linear-gradient(90deg,transparent calc(33.3% - 1px),rgba(255,255,255,.18) 33.3%,transparent calc(33.3% + 1px),transparent calc(66.6% - 1px),rgba(255,255,255,.18) 66.6%,transparent calc(66.6% + 1px)),
  linear-gradient(transparent calc(33.3% - 1px),rgba(255,255,255,.18) 33.3%,transparent calc(33.3% + 1px),transparent calc(66.6% - 1px),rgba(255,255,255,.18) 66.6%,transparent calc(66.6% + 1px))}
#sala-piscada{position:fixed;inset:0;background:#000;z-index:99999;pointer-events:none;opacity:0}
#sala-piscada.on{opacity:1}
@keyframes salaPisca{50%{opacity:0}}
`;

// ------------------------------------------------------------ visor da câmera
let visorEl = null;
let gravando = false;
let inicioRec = 0;
let take = 26;
function visor(on) {
    if (!visorEl) {
        visorEl = document.createElement('div');
        visorEl.id = 'sala-visor';
        visorEl.innerHTML = `<div class="tercos"></div><div class="canto c1"></div><div class="canto c2"></div>
            <div class="canto c3"></div><div class="canto c4"></div><div class="rec"><i>●</i> REC</div>
            <div class="tc">00:00:00:00</div><div class="info">4K · 23.976p · ISO 800 · f/2.8</div>
            <div class="bat">▮▮▮▯ 74%</div><div class="mira"></div>`;
        document.body.appendChild(visorEl);
    }
    visorEl.classList.toggle('ligado', on);
}
function atualizarTimecode() {
    if (!gravando || !visorEl) return;
    const s = (performance.now() - inicioRec) / 1000;
    const p = (n) => String(Math.floor(n)).padStart(2, '0');
    visorEl.querySelector('.tc').textContent = `${p(s / 3600)}:${p((s / 60) % 60)}:${p(s % 60)}:${p((s % 1) * 24)}`;
}

// ============================================================== montagem
function montar(app) {
    const estilo = document.createElement('style');
    estilo.textContent = ESTILO;
    document.head.appendChild(estilo);

    const raiz = new Group();
    raiz.name = 'sala-extra';
    const animacoes = [];       // funções chamadas a cada quadro: (t, dt) => void

    // ---------------- fundo infinito (chroma) atrás de tudo
    const chroma = fundoChroma();
    chroma.grupo.position.set(-600, 0, -9200);
    chroma.grupo.rotation.y = 18 * DEG;
    raiz.add(chroma.grupo);
    const placa = placaGravando();
    // presa em cima da travessa do fundo (coordenadas locais do fundo)
    placa.grupo.position.set(-4300, CHAO + 1700 + 6400 * 0.78, 140);   // pendurada na frente do fundo
    chroma.grupo.add(placa.grupo);

    // ---------------- primeira leva de objetos
    const cart = cavalete();
    cart.position.set(-2900, 0, -3300);
    cart.rotation.y = 28 * DEG;
    raiz.add(cart);

    const cam = cameraTripe();
    cam.grupo.position.set(-5600, 0, 800);
    cam.corpo.rotation.y = -Math.atan2(2400 - 800, 700 - -5600);
    raiz.add(cam.grupo);

    const luz = softbox();
    luz.grupo.position.set(4400, 0, -3300);
    luz.cabeca.rotation.y = -50 * DEG;
    raiz.add(luz.grupo);

    const claq = claquete();
    claq.grupo.position.set(-1640, -126, -150);
    claq.grupo.rotation.y = 16 * DEG;
    raiz.add(claq.grupo);

    const vhs = fitasVHS();
    vhs.grupo.position.set(-3020, MESA, 1180);
    vhs.grupo.rotation.y = 22 * DEG;
    raiz.add(vhs.grupo);

    const fones = fone();
    fones.position.set(1760, MESA, 1330);
    fones.rotation.y = -24 * DEG;
    raiz.add(fones);

    const rolo = rolinho();
    rolo.grupo.position.set(-3900, CHAO, 2000);
    rolo.grupo.rotation.y = -35 * DEG;
    raiz.add(rolo.grupo);

    // ---------------- equipamento de set
    const fresnel = refletorFresnel();
    fresnel.grupo.position.set(-7600, 0, -2600);
    fresnel.cabeca.rotation.y = 70 * DEG;
    raiz.add(fresnel.grupo);

    const mic = boom();
    mic.grupo.position.set(2400, 0, -4200);
    mic.vara.rotation.y = -112 * DEG;
    raiz.add(mic.grupo);

    const diretor = cadeiraDiretor();
    diretor.grupo.position.set(4700, 0, 2900);
    diretor.grupo.rotation.y = 53 * DEG;   // olhando para o set, de costas para o visitante
    raiz.add(diretor.grupo);

    const caixas = appleBoxes();
    caixas.grupo.position.set(-6500, 0, 2900);
    caixas.grupo.rotation.y = 30 * DEG;
    caixas.grupo.scale.setScalar(0.75);
    caixas.grupo.position.y = CHAO * 0.25;   // compensa a escala (o chão fica no lugar)
    raiz.add(caixas.grupo);

    raiz.add(marcacoesChao().grupo);

    // ---------------- referências discretas
    const chapeu = fez();
    chapeu.grupo.position.set(430, 1606, -160);
    chapeu.grupo.rotation.y = 30 * DEG;
    raiz.add(chapeu.grupo);

    const gravata = gravataBorboleta();
    gravata.grupo.position.set(-1270, MESA, 1430);
    gravata.grupo.rotation.y = -20 * DEG;
    raiz.add(gravata.grupo);

    const bilhete = bilheteNaoPisque();
    bilhete.grupo.position.set(470, -230, 752);
    raiz.add(bilhete.grupo);

    app.scene.add(raiz);

    // ======================================================= ações ao clicar
    const pulo = (obj, altura, duracao, giro) => {
        const y0 = obj.position.y;
        const r0 = obj.rotation.y;
        const t0 = performance.now();
        const passo = () => {
            const p = Math.min(1, (performance.now() - t0) / duracao);
            obj.position.y = y0 + Math.sin(p * Math.PI) * altura;
            if (giro) obj.rotation.y = r0 + giro * p;
            if (p < 1) requestAnimationFrame(passo);
            else { obj.position.y = y0; if (giro) obj.rotation.y = r0 + giro; }
        };
        requestAnimationFrame(passo);
    };

    // claquete: bate e anuncia o take
    let batendo = false;
    interativo(claq.grupo, '🎬 Claquete', () => {
        if (batendo) return;
        batendo = true;
        take++;
        const t0 = performance.now();
        const aberta = 24 * DEG;
        const passo = () => {
            const ms = performance.now() - t0;
            if (ms < 90) claq.dobra.rotation.y = aberta * (1 - ms / 90);
            else if (ms < 600) claq.dobra.rotation.y = 0;
            else if (ms < 900) claq.dobra.rotation.y = aberta * ((ms - 600) / 300);
            else { claq.dobra.rotation.y = aberta; batendo = false; return; }
            requestAnimationFrame(passo);
        };
        requestAnimationFrame(passo);
        setTimeout(() => ruido(0.14, 0.9, 2400), 85);
        falar(`CENA 26 · TAKE ${take} — AÇÃO! 🎬`);
    });

    // câmera e placa: grava com visor na tela
    const alternarGravacao = (forcarParar) => {
        gravando = forcarParar ? false : !gravando;
        visor(gravando);
        placa.ligar(gravando);
        if (gravando) {
            inicioRec = performance.now();
            tons([[880, 0.08], [0, 0.05], [880, 0.08]], 'sine', 0.06);
            falar('● Gravando! Clique de novo na câmera para cortar.');
        } else {
            tons([[660, 0.12]], 'sine', 0.06);
            falar(`Corta! Take salvo: take_${String(take).padStart(3, '0')}.mov`);
        }
    };
    interativo(cam.grupo, '🎥 Câmera — gravar', () => alternarGravacao(false));
    interativo(placa.grupo, '🔴 Placa GRAVANDO', () => alternarGravacao(false));

    // luzes: apaga e acende o set
    let luzesAcesas = true;
    const coresOriginais = new Map();
    const guardaCor = (m) => { if (m && m.color && !coresOriginais.has(m)) coresOriginais.set(m, m.color.clone()); };
    const brilhos = [luz.brilho, fresnel.brilho];
    const alternarLuzes = () => {
        luzesAcesas = !luzesAcesas;
        app.scene.traverse((o) => {
            if (!o.isMesh || o.userData.semEscurecer) return;
            const ehNosso = o.parent && (o.parent === raiz || isDescendente(o, raiz));
            if (!ehNosso && !o.name) return;   // telas e camadas do monitor ficam como estão
            const mats = Array.isArray(o.material) ? o.material : [o.material];
            mats.forEach((m) => {
                guardaCor(m);
                if (!coresOriginais.has(m)) return;
                const base = coresOriginais.get(m);
                if (luzesAcesas) m.color.copy(base);
                else m.color.copy(base).multiplyScalar(0.28);
            });
        });
        brilhos.forEach((b) => { b.visible = luzesAcesas; });
        ruido(0.05, 0.5, 900);
        falar(luzesAcesas ? '💡 Luzes do set acesas!' : '🌙 Luzes apagadas. Clima de sala de cinema. 🍿');
    };
    [luz.brilho, fresnel.brilho, luz.difusor, fresnel.lente, rolo.disco].forEach((m) => { m.userData.semEscurecer = true; });
    luz.brilho.userData.semClique = true;
    fresnel.brilho.userData.semClique = true;
    interativo(luz.grupo, '💡 Softbox — liga/desliga', alternarLuzes);
    interativo(fresnel.grupo, '💡 Refletor Fresnel — liga/desliga', alternarLuzes);

    // cartaz: abre o Showreel no computador
    interativo(cart, '🎞️ Cartaz — assistir ao Showreel', () => {
        falar('Abrindo o Showreel no computador... 🍿');
        pedirAoPC({ acao: 'videos' }, true);
    });

    // fitas VHS: cada uma abre o seu vídeo
    vhs.fitas.forEach((f) => {
        const { titulo, yt } = f.userData.fita;
        interativo(f, '📼 ' + titulo, () => {
            if (yt) {
                falar(`📼 Colocando "${titulo}" no videocassete...`);
                ruido(0.4, 0.25, 600);
                pedirAoPC({ acao: 'video', yt }, true);
            } else {
                falar('📼 Essa fita parece... maior por dentro. 🤔');
                pedirAoPC({ acao: 'maiorpordentro' }, true);
            }
        });
    });

    // fone: toca um trechinho
    interativo(fones, '🎧 Fone de edição', () => {
        tons([[523, 0.12], [659, 0.12], [784, 0.12], [1047, 0.25], [784, 0.12], [1047, 0.35]], 'triangle', 0.07);
        pulo(fones, 40, 500, 0);
        falar('🎧 Mixagem aprovada: -14 LUFS, sem estourar.');
    });

    // Rolinho: dá ficha para o fliperama lá dentro do PC
    let ultimaFicha = 0;
    interativo(rolo.grupo, '🎞️ Rolinho', () => {
        pulo(rolo.grupo, 260, 600, Math.PI * 2);
        tons([[988, 0.07], [1319, 0.22]]);
        if (performance.now() - ultimaFicha > 8000) {
            ultimaFicha = performance.now();
            pedirAoPC({ acao: 'ficha' });
            falar('+1 FICHA pro fliperama do computador! 🪙');
        } else {
            falar('Ei, calma! Uma ficha de cada vez. 😵‍💫');
        }
    });

    // boom: teste de som
    let balancoMic = 0;
    interativo(mic.grupo, '🎙️ Boom — teste de som', () => {
        balancoMic = 1;
        tons([[1000, 0.35]], 'sine', 0.04);
        falar('Testando... 1, 2, 3. Som OK! 🎙️');
    });
    animacoes.push((t, dt) => {
        if (balancoMic > 0) {
            balancoMic = Math.max(0, balancoMic - dt * 0.6);
            mic.mic.rotation.z = Math.sin(t * 9) * 0.25 * balancoMic;
        }
    });

    // cadeira do diretor e cachecol
    interativo(diretor.grupo, '🎬 Cadeira do diretor', () => {
        if (gravando) alternarGravacao(true);
        else falar('CORTA! 🎬 ...brincadeira, pode continuar explorando.');
    });
    interativo(diretor.cachecol, '🧣 Cachecol', () => falar('Um cachecol de uns 4 metros, todo listrado. Totalmente normal para um editor.', 4200));

    // caixas
    interativo(caixas.grupo, '📦 Apple box', () => falar('Apple box. Procurei bem e nenhuma maçã foi encontrada. 🍎❌'));

    // chroma: troca a cor do fundo
    const coresChroma = [['#4fa865', 'verde'], ['#3d6fd1', 'azul'], ['#8a8f96', 'cinza (sem chroma)']];
    let iChroma = 0;
    interativo(chroma.grupo, '🟩 Fundo chroma key', () => {
        iChroma = (iChroma + 1) % coresChroma.length;
        chroma.material.color.set(coresChroma[iChroma][0]);
        if (coresOriginais.has(chroma.material)) coresOriginais.set(chroma.material, chroma.material.color.clone());
        if (!luzesAcesas) chroma.material.color.multiplyScalar(0.28);
        falar(`Fundo: ${coresChroma[iChroma][1]}. (Verde ou azul? Depende da roupa do ator.)`);
    });

    // referências
    interativo(chapeu.grupo, '🎩 Fez', () => {
        pulo(chapeu.grupo, 420, 700, Math.PI * 2);
        falar('Uso um fez agora. Fez é estiloso.');
    });
    interativo(gravata.grupo, '🎀 Gravata-borboleta', () => falar('Gravatas-borboleta são legais.'));
    let piscada = null;
    interativo(bilhete.grupo, '📝 Bilhete', () => {
        if (!piscada) {
            piscada = document.createElement('div');
            piscada.id = 'sala-piscada';
            document.body.appendChild(piscada);
        }
        piscada.classList.add('on');
        setTimeout(() => {
            piscada.classList.remove('on');
            bilhete.trocar(true);
            falar('...você piscou? 👀');
            setTimeout(() => bilhete.trocar(false), 5000);
        }, 140);
    });

    iniciarInteracao(app);

    // ============================================ código secreto: modo festa
    const seq = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a'];
    let pos = 0;
    let festaAte = 0;
    window.addEventListener('keydown', (e) => {
        const k = (e.key || '').toLowerCase();
        pos = k === seq[pos] ? pos + 1 : (k === seq[0] ? 1 : 0);
        if (pos === seq.length) {
            pos = 0;
            festaAte = performance.now() + 10000;
            falar('🎉 MODO FESTA NO SET! 🎉');
            tons([[523, 0.1], [659, 0.1], [784, 0.1], [1047, 0.1], [784, 0.1], [1047, 0.3]]);
        }
    });
    const corFesta = new Color();
    const corDifusor = luz.difusor.material.color.clone();
    const corLente = fresnel.lente.material.color.clone();

    // ============================================================ animação
    const t0 = performance.now();
    let ultimo = t0;
    function animar() {
        const agora = performance.now();
        const t = (agora - t0) / 1000;
        const dt = Math.min(0.05, (agora - ultimo) / 1000);
        ultimo = agora;
        cam.luzRec.visible = gravando ? Math.floor(t * 3) % 2 === 0 : Math.floor(t * 1.2) % 2 === 0;
        rolo.disco.rotation.z = Math.sin(t * 1.6) * 0.05;
        if (luzesAcesas) {
            luz.brilho.material.opacity = 0.42 + Math.sin(t * 2.3) * 0.04;
            if (agora < festaAte) {
                corFesta.setHSL((t * 0.7) % 1, 1, 0.6);
                luz.difusor.material.color.copy(corFesta);
                fresnel.lente.material.color.setHSL((t * 0.7 + 0.5) % 1, 1, 0.6);
                chroma.material.color.setHSL((t * 0.25) % 1, 0.6, 0.45);
            } else if (festaAte) {
                festaAte = 0;
                luz.difusor.material.color.copy(corDifusor);
                fresnel.lente.material.color.copy(corLente);
                chroma.material.color.set(coresChroma[iChroma][0]);
            }
        }
        animacoes.forEach((f) => f(t, dt));
        atualizarTimecode();
        requestAnimationFrame(animar);
    }
    requestAnimationFrame(animar);
    window.salaExtra = raiz;
}

function isDescendente(o, raiz) {
    let p = o.parent;
    while (p) { if (p === raiz) return true; p = p.parent; }
    return false;
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

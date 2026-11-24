// Cliques nos objetos da sala: detecta o objeto embaixo do mouse (raycast),
// mostra uma dica e executa a ação. Cliques no vazio continuam funcionando
// como antes (a câmera aproxima/afasta da mesa).
import { Raycaster, Vector2 } from 'three';

const itens = [];          // { raiz, nome, acao }
window.__salaItens = itens; // ajuda nos testes automáticos
let oclusores = [];        // objetos da cena original que podem tapar os nossos
let iniciado = false;
const ray = new Raycaster();
const ponto = new Vector2();
let dicaEl = null;
let hoverAtual = null;

document.addEventListener('loadingScreenDone', () => { setTimeout(() => { iniciado = true; }, 600); });

export function interativo(raiz, nome, acao) {
    // não sobrescreve: um objeto preso em outro (placa no fundo) mantém a própria ação
    raiz.traverse((o) => { if (o.userData.idInterativo === undefined) o.userData.idInterativo = itens.length; });
    itens.push({ raiz, nome, acao });
}

function podeInteragir(app) {
    if (!iniciado || !app || !app.camera) return false;
    const k = app.camera.currentKeyframe;
    const alvo = app.camera.targetKeyframe;
    if (k === 'monitor' || alvo === 'monitor' || k === 'loading' || k === 'phone' || alvo === 'phone') return false;
    if (document.body.classList.contains('p3d-in-phone')) return false;
    return true;
}

function acertar(app, x, y) {
    ponto.set((x / window.innerWidth) * 2 - 1, -(y / window.innerHeight) * 2 + 1);
    ray.setFromCamera(ponto, app.camera.instance);
    const alvos = itens.map((i) => i.raiz).concat(oclusores);
    const visivelDeVerdade = (o) => { for (let p = o; p; p = p.parent) if (!p.visible) return false; return true; };
    const hits = ray.intersectObjects(alvos, true).filter((h) => visivelDeVerdade(h.object) && !h.object.userData.sombra && !h.object.userData.semClique);
    if (!hits.length) return null;
    const id = hits[0].object.userData.idInterativo;
    return id === undefined ? null : itens[id];
}

function mostrarDica(item, x, y) {
    if (!dicaEl) {
        dicaEl = document.createElement('div');
        dicaEl.id = 'sala-dica';
        document.body.appendChild(dicaEl);
    }
    if (!item) {
        dicaEl.classList.remove('visivel');
        document.body.classList.remove('sala-hover');
        return;
    }
    dicaEl.textContent = item.nome;
    dicaEl.style.left = (x + 16) + 'px';
    dicaEl.style.top = (y + 14) + 'px';
    dicaEl.classList.add('visivel');
    document.body.classList.add('sala-hover');
}

// A cena original esconde o aviso "Clique em qualquer lugar" no mousedown e
// ignora cliques vindos de um elemento com id "prevent-click". Disparamos um
// clique "de mentira" nesse elemento: o aviso some e a câmera fica parada.
let elementoNeutro = null;
function avisarCenaSemMexerNaCamera() {
    if (!elementoNeutro) {
        elementoNeutro = document.createElement('div');
        elementoNeutro.id = 'prevent-click';
        elementoNeutro.style.display = 'none';
        document.body.appendChild(elementoNeutro);
    }
    ['mousedown', 'mouseup'].forEach((t) => elementoNeutro.dispatchEvent(new MouseEvent(t, { bubbles: true })));
}

export function iniciarInteracao(app) {
    // a mesa, cadeira, planta etc. bloqueiam o clique em objetos atrás deles
    app.scene.traverse((o) => {
        if (o.isMesh && o.name && o.name !== 'Background' && !o.name.startsWith('sala')) oclusores.push(o);
    });

    // ajuda nos testes automáticos: qual objeto está neste ponto da tela?
    window.__salaAcertar = (x, y) => { const it = acertar(app, x, y); return it ? it.nome : null; };

    let pendente = null;
    window.addEventListener('mousemove', (e) => {
        if (pendente) return;
        pendente = requestAnimationFrame(() => {
            pendente = null;
            if (!podeInteragir(app) || (e.target && e.target.id === 'computer-screen')) { mostrarDica(null); hoverAtual = null; return; }
            hoverAtual = acertar(app, e.clientX, e.clientY);
            mostrarDica(hoverAtual, e.clientX, e.clientY);
        });
    }, true);

    const aoApertar = (x, y, e) => {
        if (!podeInteragir(app)) return;
        if (e.target && e.target.id === 'prevent-click') return;   // nosso próprio clique "de mentira"
        if (e.target && (e.target.id === 'computer-screen' || e.target.closest && e.target.closest('button, a, #ui-interactive'))) return;
        const item = acertar(app, x, y);
        if (!item) {
            // olhando dentro da gaveta: clique no vazio não pode mexer a câmera original
            if (window.__salaModoGaveta) { e.stopImmediatePropagation(); avisarCenaSemMexerNaCamera(); }
            return;
        }
        // o clique foi num objeto: não deixa a câmera aproximar/afastar
        e.stopImmediatePropagation();
        if (e.cancelable) e.preventDefault();
        avisarCenaSemMexerNaCamera();
        try { item.acao(); } catch (err) { console.warn('[sala] ação falhou', err); }
    };
    window.addEventListener('mousedown', (e) => { if (e.button === 0) aoApertar(e.clientX, e.clientY, e); }, true);
    window.addEventListener('touchstart', (e) => {
        const t = e.touches[0];
        if (t) aoApertar(t.clientX, t.clientY, e);
    }, { capture: true, passive: false });
}

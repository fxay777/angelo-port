// ============================================================================
// Reporta posição de mouse/toque pra janela pai (a cena 3D do faasty)
// Isso é necessário porque, uma vez que o cursor/dedo está DENTRO de um
// iframe, o navegador não deixa o documento pai ver esses eventos
// diretamente — a única forma de avisar é o conteúdo de dentro do iframe
// mandar essa informação manualmente via postMessage.
//
// Usa window.top (não window.parent) porque esse script pode rodar tanto
// no desktop.html (1 nível de iframe) quanto dentro de um iframe aninhado
// (ex: a página do Showcase dentro de uma janela) — window.top sempre
// aponta pro documento mais externo de todos, não importa a profundidade.
// ============================================================================

(function () {
    // Resolução de referência que o site principal (faasty) espera
    // receber as coordenadas — precisa bater com IFRAME_SIZE no
    // MonitorScreen.ts (SCREEN_SIZE 1280x1024 menos o padding de 32px)
    const REF_WIDTH = 1248;
    const REF_HEIGHT = 992;

    function reportPosition(type, clientX, clientY) {
        const scaledX = (clientX / window.innerWidth) * REF_WIDTH;
        const scaledY = (clientY / window.innerHeight) * REF_HEIGHT;
        try {
            window.top.postMessage(
                { type, clientX: scaledX, clientY: scaledY },
                '*'
            );
        } catch (e) {
            // Se por algum motivo não conseguir postar (ex: rodando sozinho,
            // fora de qualquer iframe), ignora silenciosamente.
        }
    }

    document.addEventListener(
        'mousemove',
        (e) => reportPosition('mousemove', e.clientX, e.clientY),
        { passive: true }
    );

    document.addEventListener(
        'touchstart',
        (e) => {
            const t = e.touches[0];
            if (t) reportPosition('mousemove', t.clientX, t.clientY);
        },
        { passive: true }
    );

    document.addEventListener(
        'touchmove',
        (e) => {
            const t = e.touches[0];
            if (t) reportPosition('mousemove', t.clientX, t.clientY);
        },
        { passive: true }
    );
})();

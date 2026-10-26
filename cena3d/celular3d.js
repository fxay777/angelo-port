/* ============================================================================
 * celular3d.js — celular em cima da mesa, do lado do computador.
 *
 * - PC: o celular aparece na mesa mas NÃO dá pra mexer (só o computador funciona).
 * - Celular (ou janela estreita): depois de carregar, a câmera vai sozinha até o
 *   celular e a tela Android (/android) fica interativa. Um botão leva pra
 *   visão 3D da sala e outro volta pro celular.
 *
 * Não precisa recompilar a cena: usa o window.Application que o bundle já expõe.
 * Forçar modo: ?celular (força celular) · ?pc (força PC)
 * ========================================================================== */
(function () {
    'use strict';

    // ---------- Medidas (unidades da cena; o monitor tem 1280x1024) ----------
    var DESK_Y = -450;                 // topo da mesa
    var P = {
        x: 1180, z: 380,               // ao lado direito do computador, entre o PC e o binder
        screenW: 280, screenH: 606,    // tela em unidades 3D
        cssW: 390, cssH: 844,          // tela em pixels CSS (viewport de celular de verdade)
        bezel: 7, depth: 16,
        tilt: 11 * Math.PI / 180,      // inclinação pra trás
        padV: 1.15, padH: 1.05, yaw: -0.32                     // virado um pouco pro centro da mesa
    };
    P.bodyW = P.screenW + P.bezel * 2;
    P.bodyH = P.screenH + P.bezel * 2;

    var app = null, built = false, phoneCss = null, computerFrame = null;
    var mode = null, autoDone = false, state = 'none'; // state: 'phone' | 'room' | 'none'
    var ui = null, btn = null, boxEl = null;

    // ---------- Detecção de celular ----------
    function isMobileMode() {
        var q = location.search;
        if (/[?&]pc\b|[?&]desktop\b/.test(q)) return false;
        if (/[?&]celular\b/.test(q)) return true;
        var ua = navigator.userAgent || '';
        var phoneUA = /Android.+Mobile|iPhone|iPod|Windows Phone|Mobile Safari/i.test(ua);
        var smallTouch = window.matchMedia && matchMedia('(pointer: coarse) and (hover: none)').matches &&
            Math.min(screen.width, screen.height) <= 820;
        return phoneUA || smallTouch || window.innerWidth <= 820;
    }

    // ---------- Estilos ----------
    var css = document.createElement('style');
    css.textContent =
        'body.mode-phone #btn-focus-monitor, body.mode-phone #btn-leave-monitor, body.mode-phone #rotate-device-modal{display:none!important}' +
        'body.mode-phone.p3d-in-phone #ui-interactive,body.mode-phone.p3d-in-phone #ui{display:none!important}' +
        '#p3d-ui{position:fixed;left:0;right:0;bottom:calc(16px + env(safe-area-inset-bottom,0px));display:none;justify-content:center;z-index:99998;pointer-events:none}' +
        'body.mode-phone.p3d-ready #p3d-ui{display:flex;animation:p3dIn .6s cubic-bezier(.2,.9,.3,1.2) both}' +
        '@keyframes p3dIn{from{opacity:0;transform:translateY(24px) scale(.9)}to{opacity:1;transform:none}}' +
        '#p3d-btn{pointer-events:auto;display:flex;align-items:center;gap:10px;padding:8px 20px 8px 8px;border-radius:999px;cursor:pointer;' +
        'border:1px solid rgba(255,255,255,.2);background:linear-gradient(180deg,rgba(34,40,64,.82),rgba(12,15,28,.86));' +
        'backdrop-filter:blur(14px) saturate(150%);-webkit-backdrop-filter:blur(14px) saturate(150%);color:#fff;' +
        'font:600 14px/1 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;letter-spacing:.2px;' +
        'box-shadow:0 10px 28px rgba(0,0,0,.4),0 2px 6px rgba(0,0,0,.3),inset 0 1px 0 rgba(255,255,255,.25);' +
        'transition:transform .15s ease,box-shadow .2s ease;-webkit-tap-highlight-color:transparent}' +
        '#p3d-btn:active{transform:scale(.95)}' +
        '#p3d-btn .ic{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;' +
        'background:linear-gradient(135deg,#7c5cff,#3b82f6);box-shadow:0 3px 10px rgba(80,100,255,.55),inset 0 1px 0 rgba(255,255,255,.4)}' +
        '#p3d-btn .ic svg{width:18px;height:18px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
        '#p3d-btn .tx{animation:p3dPop .35s ease both}' +
        '@keyframes p3dPop{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:none}}' +
        '#p3d-mark{position:fixed;z-index:99997;display:none;flex-direction:column;align-items:center;gap:6px;transform:translate(-50%,-100%);' +
        'background:none;border:0;padding:0;cursor:pointer;-webkit-tap-highlight-color:transparent;font:600 12px system-ui,sans-serif;color:#fff}' +
        '#p3d-mark .dot{position:relative;width:46px;height:46px;border-radius:50%;display:flex;align-items:center;justify-content:center;' +
        'background:linear-gradient(135deg,#7c5cff,#3b82f6);box-shadow:0 6px 18px rgba(60,80,255,.55),inset 0 1px 0 rgba(255,255,255,.45)}' +
        '#p3d-mark .dot:before,#p3d-mark .dot:after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid rgba(124,92,255,.8);animation:p3dPulse 1.8s ease-out infinite}' +
        '#p3d-mark .dot:after{animation-delay:.9s}' +
        '@keyframes p3dPulse{from{transform:scale(1);opacity:.9}to{transform:scale(2.1);opacity:0}}' +
        '#p3d-mark svg{width:22px;height:22px;stroke:#fff;fill:none;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
        '#p3d-mark .lb{background:rgba(14,17,30,.85);padding:5px 10px;border-radius:999px;border:1px solid rgba(255,255,255,.18);white-space:nowrap}' +
        'body.mode-phone.p3d-room #p3d-mark{display:flex}';
    document.head.appendChild(css);

    var ICON_CUBE = '<svg viewBox="0 0 24 24"><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/></svg>';
    var ICON_PHONE = '<svg viewBox="0 0 24 24"><rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/></svg>';

    ui = document.createElement('div'); ui.id = 'p3d-ui';
    btn = document.createElement('button'); btn.id = 'p3d-btn'; btn.type = 'button';
    ui.appendChild(btn); document.body.appendChild(ui);
    btn.addEventListener('click', function () { state === 'phone' ? goRoom() : goPhone(); });

    var mark = document.createElement('button'); mark.id = 'p3d-mark'; mark.type = 'button';
    mark.innerHTML = '<span class="dot">' + ICON_PHONE + '</span><span class="lb">Toque pra abrir o celular</span>';
    mark.addEventListener('click', function () { goPhone(); });
    document.body.appendChild(mark);

    function setLabel() {
        btn.innerHTML = state === 'phone'
            ? '<span class="ic">' + ICON_CUBE + '</span><span class="tx">Ver cenário 3D</span>'
            : '<span class="ic">' + ICON_PHONE + '</span><span class="tx">Voltar ao celular</span>';
    }

    // marcador que "gruda" no celular quando a câmera está na visão da sala
    var markerPos = null, markerRAF = 0;
    function trackMarker() {
        if (state !== 'room' || !markerPos) { markerRAF = 0; return; }
        var v = markerPos.clone().project(app.camera.instance);
        var ok = v.z < 1 && Math.abs(v.x) < 1.2 && Math.abs(v.y) < 1.2;
        mark.style.visibility = ok ? 'visible' : 'hidden';
        mark.style.left = ((v.x * 0.5 + 0.5) * window.innerWidth) + 'px';
        mark.style.top = ((-v.y * 0.5 + 0.5) * window.innerHeight - 6) + 'px';
        markerRAF = requestAnimationFrame(trackMarker);
    }

    // ---------- Câmera ----------
    function leaveFreeCam() {
        var c = app.camera;
        if (c.freeCam) {
            c.freeCam = false;
            var w = document.getElementById('webgl'); if (w) w.style.pointerEvents = 'none';
        }
    }
    function goPhone() {
        if (!built) return;
        leaveFreeCam();
        state = 'phone'; setLabel(); document.body.classList.add('p3d-in-phone'); document.body.classList.remove('p3d-room');
        app.camera.transition('phone', 2200);
    }
    function goRoom() {
        if (!built) return;
        leaveFreeCam();
        state = 'room'; setLabel(); document.body.classList.remove('p3d-in-phone'); document.body.classList.add('p3d-room'); if (!markerRAF) markerRAF = requestAnimationFrame(trackMarker);
        app.camera.transition('idle', 2600);
    }

    // ---------- Construção do celular ----------
    function roundRect(x, px, py, w, h, r) {
        x.beginPath(); x.moveTo(px + r, py);
        x.arcTo(px + w, py, px + w, py + h, r); x.arcTo(px + w, py + h, px, py + h, r);
        x.arcTo(px, py + h, px, py, r); x.arcTo(px, py, px + w, py, r); x.closePath();
    }

    // Ajusta o tamanho (em px CSS) da tela do Android pro tamanho em que ela realmente aparece.
    // Assim fica ~1 pixel por pixel e o texto não fica "mole" por ser encolhido.
    function fitScreen() {
        if (!phoneCss || !boxEl) return;
        var pxPerUnit = Math.min(window.innerHeight / (P.bodyH * P.padV), window.innerWidth / (P.bodyW * P.padH));
        var w = Math.max(320, Math.min(430, Math.round(P.screenW * pxPerUnit)));
        var h = Math.round(w * P.cssH / P.cssW);
        boxEl.style.width = w + 'px'; boxEl.style.height = h + 'px';
        boxEl.style.borderRadius = Math.round(w * 0.087) + 'px';
        var k = P.screenW / w;
        phoneCss.scale.set(k, k, k);
    }

    function build() {
        var ms = app.world && app.world.monitorScreen;
        if (!ms || !ms.screenHitMesh || !ms.dimmingPlane || !app.cssScene.children.length) return false;
        var tex = app.resources && app.resources.items && app.resources.items.texture;
        if (!tex || !tex.monitorSmudgeTexture) return false;

        // Reaproveita as classes do three.js que o bundle já carregou
        var Mesh = ms.screenHitMesh.constructor;
        var Plane = ms.screenHitMesh.geometry.constructor;
        var Lambert = ms.screenHitMesh.material.constructor;
        var Basic = ms.dimmingPlane.material.constructor;
        var Vec3 = app.camera.position.constructor;
        var Quat = ms.screenHitMesh.quaternion.constructor;
        var Texture = tex.monitorSmudgeTexture.constructor;
        var CSS3DObject = app.cssScene.children[0].constructor;
        var protoObj = Object.getPrototypeOf(app.scene.constructor);
        var Group = (protoObj && protoObj.prototype && protoObj.prototype.add) ? protoObj : Mesh;

        // Geometria de retângulo com cantos arredondados (o buraco da tela precisa ser redondo)
        var BufferGeometry = Object.getPrototypeOf(Plane);
        var Attr = (new Plane(1, 1)).attributes.position.constructor;
        function roundedGeo(w, h, r, seg) {
            var cs = [[w / 2 - r, h / 2 - r, 0], [-(w / 2 - r), h / 2 - r, 90], [-(w / 2 - r), -(h / 2 - r), 180], [w / 2 - r, -(h / 2 - r), 270]];
            var pos = [0, 0, 0], nor = [0, 0, 1], uv = [0.5, 0.5];
            cs.forEach(function (c) {
                for (var i = 0; i <= seg; i++) {
                    var a = (c[2] + 90 * i / seg) * Math.PI / 180;
                    var x = c[0] + r * Math.cos(a), y = c[1] + r * Math.sin(a);
                    pos.push(x, y, 0); nor.push(0, 0, 1); uv.push(0.5 + x / w, 0.5 + y / h);
                }
            });
            var n = (seg + 1) * 4, idx = [];
            for (var j = 1; j <= n; j++) idx.push(0, j, j % n + 1);
            var g = new BufferGeometry();
            g.setAttribute('position', new Attr(pos, 3));
            g.setAttribute('normal', new Attr(nor, 3));
            g.setAttribute('uv', new Attr(uv, 2));
            g.setIndex(idx);
            return g;
        }
        var screenR = P.screenW * 0.087;

        var TW = 600, TH = Math.round(600 * P.bodyH / P.bodyW), TR = Math.round((P.screenW * 0.087 + P.bezel) * 600 / P.bodyW);
        function canvasTex(w, h, draw, srgb) {
            var c = document.createElement('canvas'); c.width = w; c.height = h;
            draw(c.getContext('2d'), w, h);
            var t = new Texture(c); if (srgb) t.encoding = 3001; t.needsUpdate = true; return t;
        }
        function metalFill(x, w, h) {
            var g = x.createLinearGradient(0, 0, w, h);
            g.addColorStop(0, '#9aa3b8'); g.addColorStop(.45, '#5b6479'); g.addColorStop(.55, '#6d768c'); g.addColorStop(1, '#3a4152');
            return g;
        }
        var edgeTex = canvasTex(TW, TH, function (x, w, h) {
            roundRect(x, 0, 0, w, h, TR); x.fillStyle = metalFill(x, w, h); x.fill();
        }, true);
        var frontTex = canvasTex(TW, TH, function (x, w, h) {
            roundRect(x, 0, 0, w, h, TR); x.fillStyle = metalFill(x, w, h); x.fill();
            roundRect(x, 6, 6, w - 12, h - 12, TR - 5); x.fillStyle = '#05070b'; x.fill();
            var g = x.createLinearGradient(0, 0, 0, h * .3); g.addColorStop(0, 'rgba(255,255,255,.07)'); g.addColorStop(1, 'rgba(255,255,255,0)');
            roundRect(x, 6, 6, w - 12, h - 12, TR - 5); x.fillStyle = g; x.fill();
        }, true);
        var backTex = canvasTex(TW, TH, function (x, w, h) {
            roundRect(x, 0, 0, w, h, TR); x.fillStyle = metalFill(x, w, h); x.fill();
            roundRect(x, 6, 6, w - 12, h - 12, TR - 5);
            var g = x.createLinearGradient(0, 0, w, h); g.addColorStop(0, '#2b3350'); g.addColorStop(.5, '#1b2036'); g.addColorStop(1, '#0f1220');
            x.fillStyle = g; x.fill();
            // módulo da câmera
            var bx = 46, by = 46, bw = 210, bh = 210;
            roundRect(x, bx, by, bw, bh, 44); x.fillStyle = '#0b0d16'; x.fill(); x.lineWidth = 5; x.strokeStyle = '#6f7893'; x.stroke();
            [[bx + 62, by + 62], [bx + 62, by + 148], [bx + 148, by + 105]].forEach(function (c) {
                x.fillStyle = '#12141f'; x.beginPath(); x.arc(c[0], c[1], 33, 0, 6.3); x.fill();
                x.lineWidth = 5; x.strokeStyle = '#7d86a2'; x.stroke();
                x.fillStyle = '#2a3a78'; x.beginPath(); x.arc(c[0], c[1], 17, 0, 6.3); x.fill();
                x.fillStyle = 'rgba(255,255,255,.5)'; x.beginPath(); x.arc(c[0] - 6, c[1] - 6, 5, 0, 6.3); x.fill();
            });
            x.fillStyle = '#f5e7b8'; x.beginPath(); x.arc(bx + 148, by + 42, 11, 0, 6.3); x.fill();
            // reflexo
            var r = x.createLinearGradient(0, 0, w, h * .6); r.addColorStop(0, 'rgba(255,255,255,.12)'); r.addColorStop(.5, 'rgba(255,255,255,0)');
            roundRect(x, 6, 6, w - 12, h - 12, TR - 5); x.fillStyle = r; x.fill();
        }, true);
        function mat(map, color, extra) {
            var o = { side: 2 };
            if (map) { o.map = map; o.transparent = true; o.alphaTest = 0.5; }
            if (color !== undefined) o.color = color;
            if (extra) for (var k in extra) o[k] = extra[k];
            return new Basic(o);
        }

        var root = new Group();
        root.rotation.set(-P.tilt, P.yaw, 0, 'YXZ');
        root.position.set(
            P.x,
            DESK_Y + (P.bodyH / 2) * Math.cos(P.tilt) + (P.depth / 2) * Math.sin(P.tilt) + 2,
            P.z
        );

        // Moldura de metal: várias lâminas arredondadas empilhadas = borda arredondada
        var edgeMat = mat(edgeTex);
        for (var i = -3; i <= 3; i++) {
            var layer = new Mesh(new Plane(P.bodyW, P.bodyH), edgeMat);
            layer.position.z = i * (P.depth / 2 - 1.5) / 3; root.add(layer);
        }
        var front = new Mesh(new Plane(P.bodyW, P.bodyH), mat(frontTex));
        front.position.z = P.depth / 2 - 0.6; root.add(front);
        var back = new Mesh(new Plane(P.bodyW, P.bodyH), mat(backTex));
        back.rotation.y = Math.PI; back.position.z = -P.depth / 2 + 0.6; root.add(back);

        // Botões laterais (liga/desliga e volume)
        var keyMat = mat(null, 0x8790a8);
        [[P.bodyH * 0.14, 78], [P.bodyH * 0.02, 54], [-P.bodyH * 0.06, 54]].forEach(function (k, idx) {
            var m = new Mesh(new Plane(P.depth * 0.5, k[1]), keyMat);
            m.rotation.y = Math.PI / 2; m.position.set((idx === 0 ? 1 : 1) * (P.bodyW / 2 + 1.4), k[0], 0); root.add(m);
        });

        // "Buraco" que deixa a tela HTML (CSS3D) aparecer — mesmo truque do monitor
        var holeMat = new Lambert();
        holeMat.side = 2; holeMat.opacity = 0; holeMat.transparent = true; holeMat.blending = 0;
        holeMat.polygonOffset = true; holeMat.polygonOffsetFactor = -2; holeMat.polygonOffsetUnits = -4;
        var hole = new Mesh(roundedGeo(P.screenW, P.screenH, screenR, 8), holeMat);
        hole.position.z = P.depth / 2 + 4; root.add(hole);

        // Reflexo de vidro por cima da tela
        var glareTex = canvasTex(256, 512, function (x, w, h) {
            var g = x.createLinearGradient(0, 0, w, h * .75);
            g.addColorStop(0, 'rgba(255,255,255,.0)'); g.addColorStop(.18, 'rgba(255,255,255,.20)'); g.addColorStop(.30, 'rgba(255,255,255,.04)');
            g.addColorStop(.36, 'rgba(255,255,255,.10)'); g.addColorStop(.5, 'rgba(255,255,255,0)');
            x.fillStyle = g; x.fillRect(0, 0, w, h);
        }, false);
        var glare = new Mesh(roundedGeo(P.screenW, P.screenH, screenR, 8), new Basic({
            map: glareTex, transparent: true, blending: 2, depthWrite: false, side: 2, opacity: 0.55,
            polygonOffset: true, polygonOffsetFactor: -3, polygonOffsetUnits: -6
        }));
        glare.position.z = P.depth / 2 + 6; root.add(glare);


        app.scene.add(root);

        // Brilho da tela espalhando na mesa
        var gc = document.createElement('canvas'); gc.width = gc.height = 128;
        var gx = gc.getContext('2d'), gg = gx.createRadialGradient(64, 64, 2, 64, 64, 62);
        gg.addColorStop(0, 'rgba(110,130,255,.50)'); gg.addColorStop(.5, 'rgba(80,100,230,.16)'); gg.addColorStop(1, 'rgba(60,80,200,0)');
        gx.fillStyle = gg; gx.fillRect(0, 0, 128, 128);
        var gt = new Texture(gc); gt.needsUpdate = true;
        var glow = new Mesh(new Plane(760, 620), new Basic({ map: gt, transparent: true, blending: 2, depthWrite: false, side: 2,
            polygonOffset: true, polygonOffsetFactor: -1, polygonOffsetUnits: -3 }));
        glow.rotation.x = -Math.PI / 2;
        glow.position.set(P.x + Math.sin(P.yaw) * 300, DESK_Y + 3, P.z + Math.cos(P.yaw) * 300);
        app.scene.add(glow);

        // Sombra no tampo da mesa
        var sc = document.createElement('canvas'); sc.width = sc.height = 128;
        var sx = sc.getContext('2d'), g = sx.createRadialGradient(64, 64, 4, 64, 64, 62);
        g.addColorStop(0, 'rgba(0,0,0,.55)'); g.addColorStop(1, 'rgba(0,0,0,0)');
        sx.fillStyle = g; sx.fillRect(0, 0, 128, 128);
        var st = new Texture(sc); st.needsUpdate = true;
        var shadowMat = new Basic({ map: st, transparent: true, depthWrite: false });
        shadowMat.polygonOffset = true; shadowMat.polygonOffsetFactor = -1; shadowMat.polygonOffsetUnits = -2;
        var shadow = new Mesh(new Plane(P.bodyW * 1.9, P.bodyH * 0.8), shadowMat);
        shadow.rotation.x = -Math.PI / 2;
        shadow.position.set(P.x - 20, DESK_Y + 2, P.z + 20);
        app.scene.add(shadow);

        // Tela HTML
        root.updateMatrixWorld(true);
        var wp = new Vec3(), wq = new Quat();
        hole.getWorldPosition(wp); hole.getWorldQuaternion(wq);

        computerFrame = document.getElementById('computer-screen');
        var base = (computerFrame && computerFrame.src) ? computerFrame.src : 'https://angelo-port-vx46.vercel.app/';
        base = base.split('?')[0].replace(/[^/]*$/, '');

        var box = document.createElement('div');
        box.style.cssText = 'width:' + P.cssW + 'px;height:' + P.cssH + 'px;background:#000;border-radius:34px;overflow:hidden;';
        boxEl = box;
        var fr = document.createElement('iframe');
        fr.src = base + 'android?cena3d=1';
        fr.title = 'Celular';
        fr.setAttribute('allow', 'autoplay; fullscreen');
        fr.style.cssText = 'width:100%;height:100%;border:0;display:block;background:#000;';
        box.appendChild(fr);

        phoneCss = new CSS3DObject(box);
        phoneCss.position.copy(wp);
        phoneCss.quaternion.copy(wq);
        app.cssScene.add(phoneCss);
        fitScreen();

        // Keyframe de câmera "phone": de frente pra tela, encaixando o celular na tela do aparelho
        var n = { x: Math.cos(P.tilt) * Math.sin(P.yaw), y: Math.sin(P.tilt), z: Math.cos(P.tilt) * Math.cos(P.yaw) };
        var center = new Vec3(root.position.x, root.position.y, root.position.z);
        var look = new Vec3(center.x, center.y - P.bodyH * 0.035, center.z);
        var kf = {
            position: new Vec3(center.x + n.x * 1500, center.y + n.y * 1500, center.z + n.z * 1500),
            focalPoint: look,
            update: function () {
                var cam = app.camera.instance;
                var aspect = app.sizes.width / app.sizes.height;
                var tanH = Math.tan((cam.fov * Math.PI / 180) / 2);
                var dV = (P.bodyH * P.padV / 2) / tanH;
                var dH = (P.bodyW * P.padH / 2) / (tanH * aspect);
                var d = Math.max(dV, dH) + P.depth / 2;
                this.position.set(center.x + n.x * d, center.y + n.y * d, center.z + n.z * d);
            }
        };
        app.camera.keyframes.phone = kf;
        markerPos = new Vec3(center.x, center.y + P.bodyH * 0.5, center.z);

        built = true;
        return true;
    }

    // ---------- Modo celular / PC ----------
    function applyMode() {
        var mobile = isMobileMode();
        if (mode === mobile) return;
        mode = mobile;
        document.body.classList.toggle('mode-phone', mobile);
        if (phoneCss) phoneCss.element.style.pointerEvents = mobile ? 'auto' : 'none';
        if (!computerFrame) computerFrame = document.getElementById('computer-screen');
        if (computerFrame) computerFrame.style.pointerEvents = mobile ? 'none' : '';
        if (!mobile && built) {
            state = 'none'; document.body.classList.remove('p3d-in-phone', 'p3d-room');
            var c = app.camera;
            if (c.currentKeyframe === 'phone' || c.targetKeyframe === 'phone') c.transition('idle', 1500);
        }
        if (mobile && built && autoDone) { /* já carregou antes: volta pro celular */ goPhone(); }
    }

    // ---------- Inicialização ----------
    var tries = 0;
    var boot = setInterval(function () {
        app = window.Application;
        if (!app || !app.world || !app.camera) { if (++tries > 600) clearInterval(boot); return; }
        try {
            if (build()) {
                clearInterval(boot);
                mode = null; applyMode();
                document.body.classList.add('p3d-ready');
                setLabel();
                var iv = setInterval(function () {
                    if (autoDone || !mode) return;
                    // Chegou na sala depois da tela de loading → entra no celular sozinho
                    if (app.camera.currentKeyframe === 'idle') {
                        autoDone = true;
                        setTimeout(goPhone, 700);
                        clearInterval(iv);
                    }
                }, 150);
                var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { fitScreen(); applyMode(); }, 200); });
            }
        } catch (e) {
            clearInterval(boot);
            console.error('[celular3d] não foi possível montar o celular 3D:', e);
        }
    }, 200);
})();

// Flowing 3D cake for the inner pages: the same cake and flight path as the home page, drifting between the clear spots of each section.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const sections = [...document.querySelectorAll('main > .phero, main > section')];
if (!reduce && sections.length > 1 && innerWidth >= 900) {
/* ---------- three.js scene ---------- */
const canvas = document.createElement('canvas'); canvas.id = 'flowcake'; canvas.setAttribute('aria-hidden', 'true'); document.body.appendChild(canvas);
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
} catch (e) { renderer = null; }

if (renderer) {
  renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.1;

  const scene = new THREE.Scene();
  scene.environment = new THREE.PMREMGenerator(renderer).fromScene(new RoomEnvironment(), .04).texture;
  const camera = new THREE.PerspectiveCamera(30, 1, .1, 100);
  camera.position.set(0, 0, 10);
  function resize() {
    renderer.setSize(innerWidth, innerHeight, false);
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
  }
  addEventListener('resize', resize); resize();

  scene.add(new THREE.HemisphereLight(0xfff4e6, 0x8a6a50, 1.2));
  const key = new THREE.DirectionalLight(0xfff1d6, 2.4); key.position.set(3, 5, 6); scene.add(key);
  const rim = new THREE.DirectionalLight(0xdfe8d6, 1.6); rim.position.set(-5, 2, -4); scene.add(rim);

  /* hierarchy: scene > flight (position, scale, tilt) > spinner (turntable yaw) > cake */
  const flight = new THREE.Group(); scene.add(flight);
  const spinner = new THREE.Group(); flight.add(spinner);
  const cake = new THREE.Group(); spinner.add(cake);

  const M = (color, rough = .55, metal = 0) => new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
  const cream = M(0xf6ebd9, .6), terra = M(0x7a3318, .5), cocoa = M(0x3b2417, .45),
        rose = M(0xe7b8a8, .5), gold = M(0xc8a46b, .35, .4), plate = M(0xffffff, .25);

  const tiers = [{ r: 1.0, h: .55 }, { r: .72, h: .5 }, { r: .48, h: .45 }];
  let y = 0; const levels = [];
  const plateMesh = new THREE.Mesh(new THREE.CylinderGeometry(1.2, 1.25, .07, 72), plate); plateMesh.position.y = -.035; cake.add(plateMesh);
  tiers.forEach(t => {
    const m = new THREE.Mesh(new THREE.CylinderGeometry(t.r, t.r, t.h, 72), cream);
    m.position.y = y + t.h / 2; cake.add(m);
    levels.push({ r: t.r, h: t.h, base: y, top: y + t.h });
    y += t.h;
  });

  const drip = new THREE.Group(), border = new THREE.Group(), flowers = new THREE.Group(), ribbon = new THREE.Group();
  [drip, border, flowers, ribbon].forEach(g => cake.add(g));

  /* drip: glaze cap + hanging drips per tier */
  let seed = 7; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  levels.forEach(l => {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(l.r + .012, l.r + .012, .045, 72), terra);
    cap.position.y = l.top - .02; drip.add(cap);
    const n = Math.round(l.r * 26);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rnd() * .1, len = .08 + rnd() * .2;
      const d = new THREE.Mesh(new THREE.CapsuleGeometry(.04, len, 6, 12), terra);
      d.position.set(Math.cos(a) * (l.r + .01), l.top - .04 - len / 2, Math.sin(a) * (l.r + .01));
      drip.add(d);
    }
  });

  /* border: piped pearls at the base of each tier */
  levels.forEach(l => {
    const n = Math.round(l.r * 34);
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2;
      const p = new THREE.Mesh(new THREE.SphereGeometry(.06, 16, 12), i % 2 ? cream : rose);
      p.position.set(Math.cos(a) * (l.r + .02), l.base + .07, Math.sin(a) * (l.r + .02));
      border.add(p);
    }
  });

  /* flowers */
  function flower(c, s) {
    const g = new THREE.Group();
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const pe = new THREE.Mesh(new THREE.SphereGeometry(.09, 14, 10), c);
      pe.scale.set(1.2, .45, .8);
      pe.position.set(Math.cos(a) * .11, 0, Math.sin(a) * .11);
      pe.rotation.y = -a; g.add(pe);
    }
    const ce = new THREE.Mesh(new THREE.SphereGeometry(.06, 14, 10), gold); ce.position.y = .03; g.add(ce);
    g.scale.setScalar(s * 3); return g;
  }
  const topY = levels[2].top;
  [[0, 0, .2, rose], [.22, .1, .16, cream], [-.2, .08, .16, terra], [.05, -.24, .15, rose], [-.1, .22, .13, cream]].forEach(([x, z, s, c]) => {
    const f = flower(c, s * 1.7); f.position.set(x, topY + .02, z); flowers.add(f);
  });
  // cascade down one side
  [0, 1, 2].forEach(li => {
    const l = levels[li];
    [0, 1].forEach(j => {
      const a = .6 + li * .05 + j * .25;
      const f = flower(j ? cream : rose, .26 + .06 * (2 - li));
      f.position.set(Math.cos(a) * (l.r + .01), l.top - .02, Math.sin(a) * (l.r + .01));
      f.rotation.z = Math.PI / 2 - .2; f.rotation.y = -a; flowers.add(f);
    });
  });

  /* ribbon: fondant bands + top ball */
  levels.forEach(l => {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(l.r + .012, l.r + .012, .12, 72, 1, true), cocoa);
    b.position.y = l.base + .16; ribbon.add(b);
  });
  const ball = new THREE.Mesh(new THREE.SphereGeometry(.1, 20, 16), terra); ball.position.y = topY + .1; ribbon.add(ball);

  cake.position.y = -.78; // centre the stack on the flight origin
  const CAKE_W = 2.5;

  /* finish per section: 0 hero, 1 step 1, 2 step 2 (dark), 3 step 3, 4 footer */
  const FIN = [[drip], [border, ribbon], [flowers], [ribbon, drip], [drip, flowers, border]];
  const finishes = sections.map((_, i) => FIN[i % FIN.length]);
  const groups = [drip, border, flowers, ribbon];
  groups.forEach(g => g.scale.setScalar(0.0001));

  /* ---------- scroll-driven flight path ---------- */
  const PATH = [[.62, -.1, 150], [-.6, .05, 125], [.6, -.2, 40], [-.58, .1, 160], [.55, -.05, 105], [-.6, -.15, 135]];
  const mk = (small) => sections.map((_, i) => { const p = PATH[i % PATH.length]; return { x: small ? p[0] * .3 : p[0], y: small ? (i % 2 ? .3 : -.25) : p[1], s: small ? .55 : .62 + (i % 3) * .05, yaw: p[2], pitch: 6 + (i % 3) * 2, roll: i % 2 ? 6 : -6 }; });
  const DESK = mk(false), MOB = mk(true);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const ease = t => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  const lerpAngle = (a, b, t) => { const d = ((b - a + 540) % 360) - 180; return a + d * t; };

  /* finds the nearest spot for the cake that keeps clear of a list of text boxes */
  let lastPick = -1, anchored = null;
  function makeSolver(rs, W, H, PAD) {
    const hit = (x, y, h) => rs.some(r => Math.abs(x - r.cx) < r.hw + h + PAD && Math.abs(y - r.cy) < r.hh + h + PAD);
    const resolve = (x, y, h) => {
      const minX = h * .5, maxX = W - h * .5, minY = h * .5, maxY = H - h * .4;
      for (let i = 0; i < 8; i++) {
        let moved = false;
        for (const r of rs) {
          if (Math.abs(x - r.cx) < r.hw + h + PAD && Math.abs(y - r.cy) < r.hh + h + PAD) {
            let c = [[r.l - PAD - h - x, 0, 0], [r.r + PAD + h - x, 0, 1], [0, r.t - PAD - h - y, 2], [0, r.b + PAD + h - y, 3]];
            const ok = c.filter(([dx, dy]) => x + dx >= minX && x + dx <= maxX && y + dy >= minY && y + dy <= maxY);
            if (ok.length) c = ok;
            /* prefer the direction used last time so the cake does not flip sides while scrolling */
            const cost = a => Math.abs(a[0] + a[1]) - (a[2] === lastPick ? 90 : 0);
            c.sort((a, b) => cost(a) - cost(b));
            lastPick = c[0][2];
            x += c[0][0]; y += c[0][1]; moved = true;
          }
        }
        if (!moved) break;
      }
      return [x, y];
    };
    return { hit, resolve };
  }

  function targetAt(p) {
    const K = anchored || (innerWidth < 760 ? MOB : DESK);
    if (!isFinite(p)) p = 0;
    p = clamp(p, 0, K.length - 1);
    const i = Math.min(K.length - 2, Math.floor(p)), f = p - i;
    const t = ease(clamp((f - .12) / .76, 0, 1));
    const a = K[i], b = K[i + 1], m = Math.sin(t * Math.PI);
    return {
      x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) + m * -.22, s: lerp(a.s, b.s, t) * (1 + m * .12),
      yaw: lerpAngle(a.yaw, b.yaw, t), pitch: lerp(a.pitch, b.pitch, t), roll: lerp(a.roll, b.roll, t), moving: m
    };
  }

  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener('pointermove', e => { mouse.x = (e.clientX / innerWidth) * 2 - 1; mouse.y = -((e.clientY / innerHeight) * 2 - 1); });

  /* progress through the sections, measured from their real positions so tall or short windows still line up */
  function sectionP() {
    const y = scrollY; let i = 0;
    sections.forEach((s, k) => { if (s.offsetTop <= y + 1) i = k; });
    const s = sections[i];
    return i + clamp((y - s.offsetTop) / Math.max(1, s.offsetHeight), 0, 1);
  }
  const avoidEls = [...document.querySelectorAll('.nav .logo,.nav__links a,.nav__cta,main h1,main h2,main h3,main p,main li,main label,main legend,main .btn,main button,main .arch,main .panel,main .calbox,main .slipcard,main .ticket,main .paycard,main .cc,main .loyal,main .steps3,main table,main .sw,main .tiles>div,main .coll article,main .builder,main .formcard,main .opts,.site-footer p,.site-footer a,.close h2,.close p,.hubback,.badge')];
  const avoid = { ready: false }, off = { x: 0, y: 0 };
  let shrink = 1;

  /* park the cake in a text-free spot for each section, so the flight path itself runs between clear resting places */
  function computeAnchors() {
    const W = innerWidth, H = innerHeight, PAD = 44, sy = scrollY;
    const K = innerWidth < 760 ? MOB : DESK;
    const saved = [...document.querySelectorAll('[data-speed],.reveal')].map(el => [el, el.style.transform, el.style.transition]);
    saved.forEach(([el]) => { el.style.transition = 'none'; el.style.transform = 'none'; });
    const boxes = avoidEls.map(el => { const r = el.getBoundingClientRect(); return { l: r.left, r: r.right, t: r.top + sy, b: r.bottom + sy, fixed: !!el.closest('.nav,.badge') }; });
    saved.forEach(([el, tr, ts]) => { el.style.transform = tr; el.style.transition = ts; });
    const keepPick = lastPick;
    anchored = K.map((k, i) => {
      const top = sections[i].offsetTop, rs = [];
      boxes.forEach(d => {
        const t = d.fixed ? d.t - sy : d.t - top, b = d.fixed ? d.b - sy : d.b - top;
        if (d.r - d.l < 2 || b < 0 || t > H || d.r < 0 || d.l > W) return;
        rs.push({ l: d.l, r: d.r, t, b, cx: (d.l + d.r) / 2, cy: (t + b) / 2, hw: (d.r - d.l) / 2, hh: (b - t) / 2 });
      });
      const { hit, resolve } = makeSolver(rs, W, H, PAD);
      const x0 = (k.x * .5 + .5) * W, y0 = (.5 - k.y * .5) * H, h1 = .5 * .40 * k.s * H * .98;
      let f = 1, res = [x0, y0];
      for (const tf of [1, .92, .84, .76, .68, .6, .52]) { f = tf; res = resolve(x0, y0, h1 * f); if (!hit(res[0], res[1], h1 * f)) break; }
      return Object.assign({}, k, { x: res[0] / W * 2 - 1, y: 1 - res[1] / H * 2, s: k.s * f });
    });
    lastPick = keepPick;
  }
  let anchorTimer;
  setTimeout(computeAnchors, 800); addEventListener('load', () => setTimeout(computeAnchors, 600));
  addEventListener('resize', () => { anchored = null; clearTimeout(anchorTimer); anchorTimer = setTimeout(computeAnchors, 300); });
  const cur = Object.assign({}, targetAt(sectionP()));
  const clock = new THREE.Clock();
  const rad = d => d * Math.PI / 180;
  let spin = 0;
  let fade = 1;

  function frame() {
    requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), .05), t = clock.elapsedTime;
    const sp = sectionP();
    const tg = targetAt(sp);
    const k = 1 - Math.exp(-dt * 3.2);
    const px = cur.x, py = cur.y;
    cur.x = lerp(cur.x, tg.x, k); cur.y = lerp(cur.y, tg.y, k); cur.s = lerp(cur.s, tg.s, k);
    cur.pitch = lerp(cur.pitch, tg.pitch, k); cur.roll = lerp(cur.roll, tg.roll, k);
    cur.yaw = lerpAngle(cur.yaw, tg.yaw, 1 - Math.exp(-dt * 2.6));
    cur.moving = lerp(cur.moving || 0, tg.moving, 1 - Math.exp(-dt * 4));
    const vx = dt ? (cur.x - px) / dt : 0, vy = dt ? (cur.y - py) / dt : 0;

    const ms = 1 - Math.exp(-dt * 2);
    mouse.sx = lerp(mouse.sx, mouse.x, ms); mouse.sy = lerp(mouse.sy, mouse.y, ms);

    const halfH = Math.tan(rad(camera.fov / 2)) * camera.position.z, halfW = halfH * camera.aspect;
    const hover = reduce ? 0 : Math.sin(t * 2.1) * .045 + Math.sin(t * 3.7) * .015;
    flight.position.set(
      cur.x * halfW + (reduce ? 0 : Math.sin(t * 1.3) * .04) + mouse.sx * .12,
      cur.y * halfH + hover * halfH * .5 + mouse.sy * .08,
      reduce ? 0 : Math.sin(t * .9) * .15
    );
    /* keep the cake off every piece of text: resolve against live text boxes, shrink if there is no free spot */
    {
      const W = innerWidth, H = innerHeight, PAD = 14;
      const rs = [];
      avoidEls.forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.width < 2 || r.height < 2 || r.bottom < 0 || r.top > H || r.right < 0 || r.left > W) return;
        rs.push({ l: r.left, r: r.right, t: r.top, b: r.bottom, cx: (r.left + r.right) / 2, cy: (r.top + r.bottom) / 2, hw: r.width / 2, hh: r.height / 2 });
      });
      const { hit, resolve } = makeSolver(rs, W, H, PAD);
      const dx0 = (flight.position.x / halfW * .5 + .5) * W, dy0 = (.5 - flight.position.y / halfH * .5) * H;
      const h1 = .5 * .40 * cur.s * H * .98;
      let f = 1, res = [dx0, dy0];
      for (const tryF of [1, .92, .84, .76, .68, .6, .52]) {
        f = tryF; res = resolve(dx0, dy0, h1 * f);
        if (!hit(res[0], res[1], h1 * f)) break;
      }
      const ft = document.querySelector('.site-footer'), footerIn = ft && ft.getBoundingClientRect().top < H * 0.9;
      const blocked = footerIn || hit(res[0], res[1], h1 * f) || f < 0.6;
      fade = lerp(fade, blocked ? 0 : 1, 1 - Math.exp(-dt * 4));
      canvas.style.opacity = canvas.classList.contains('ready') ? fade.toFixed(3) : '';
      const tx = res[0] - dx0, ty = res[1] - dy0;
      if (!avoid.ready) { off.x = tx; off.y = ty; shrink = f; avoid.ready = true; }
      const ka = 1 - Math.exp(-dt * 7);
      /* ease toward the clear spot with a speed cap, so a text box sliding past never makes the cake snap */
      const lim = 520 * dt;
      off.x += clamp((tx - off.x) * ka, -lim, lim); off.y += clamp((ty - off.y) * ka, -lim, lim);
      shrink = lerp(shrink, f, 1 - Math.exp(-dt * 5));
      flight.position.x = ((dx0 + off.x) / W * 2 - 1) * halfW;
      flight.position.y = (1 - (dy0 + off.y) / H * 2) * halfH;
      window.__cakeBox = { x: dx0 + off.x, y: dy0 + off.y, h: h1 * shrink, f, tx, ty, dx0, dy0, n: rs.length, h1, rs: rs.map(r => [r.l, r.t, r.r, r.b].map(Math.round)) };
    }
    flight.scale.setScalar(halfH * 2 * .40 * cur.s * shrink / CAKE_W);

    /* turntable: keyframe yaw sets the resting angle, a slow spin keeps it alive, faster while flying */
    spin += dt * (reduce ? 0 : .35 + cur.moving * 1.6);
    spinner.rotation.y = rad(cur.yaw * .5) + spin + mouse.sx * .25;

    /* tilt: top of the cake faces the viewer, leans into the flight */
    const pitch = cur.pitch - clamp(vy * 22, -28, 28) + mouse.sy * 6;
    const roll = cur.roll + clamp(vx * 18, -30, 30) + (reduce ? 0 : Math.sin(t * 1.7) * 3);
    flight.rotation.set(rad(26 + pitch * .6), 0, rad(roll * .5), 'XYZ');

    /* finishes pop in and out per section */
    const idx = clamp(Math.round(sp) || 0, 0, finishes.length - 1);
    const on = finishes[idx];
    const kk = 1 - Math.exp(-dt * 7);
    groups.forEach(g => {
      const to = on.includes(g) ? 1 : 0.0001;
      g.scale.setScalar(lerp(g.scale.x, to, kk));
      g.visible = g.scale.x > .02;
    });

    renderer.render(scene, camera);
  }
  frame();
  canvas.classList.add('ready');
}
}

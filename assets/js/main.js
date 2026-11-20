document.documentElement.classList.add('js');

// ---------- scroll-reveal ----------
var targets = document.querySelectorAll('.reveal, .benefit, .underline-word');
if ('IntersectionObserver' in window) {
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.2, rootMargin:'0px 0px -8% 0px'});
  targets.forEach(function(el){ io.observe(el); });
} else {
  targets.forEach(function(el){ el.classList.add('in'); });
}

// ---------- smooth-scroll for in-page anchors ----------
// Delegated on document (not bound per-link) so it still works on links that
// live inside the nav/footer partials, which aren't in the DOM until include.js
// injects them.
document.addEventListener('click', function(e){
  var link = e.target.closest('a[href^="#"]');
  if (!link) return;
  var id = link.getAttribute('href').slice(1);
  if (!id) return;
  var el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    el.scrollIntoView({behavior:'smooth', block:'start'});
  }
});

// ---------- nav active-state ----------
// Runs once the nav/footer partials are actually in the DOM.
document.addEventListener('partials:loaded', function(){
  var page = document.body.getAttribute('data-page');
  if (!page) return;
  document.querySelectorAll('[data-page]').forEach(function(a){
    if (a.tagName === 'A' && a.getAttribute('data-page') === page) {
      a.classList.add('active');
    }
  });
});

// ---------- mobile hamburger menu ----------
document.addEventListener('partials:loaded', function(){
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function closeMenu(){
    toggle.setAttribute('aria-expanded', 'false');
    menu.classList.remove('is-open');
  }
  function openMenu(){
    toggle.setAttribute('aria-expanded', 'true');
    menu.classList.add('is-open');
  }

  toggle.addEventListener('click', function(){
    var isOpen = toggle.getAttribute('aria-expanded') === 'true';
    if (isOpen) closeMenu(); else openMenu();
  });
  menu.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', closeMenu);
  });
  window.addEventListener('resize', function(){
    if (window.innerWidth >= 1000) closeMenu();
  });
});

// ---------- hero device mockup auto-scroll ----------
// Measures the real screenshot's scaled height so the auto-scroll animation
// travels exactly to its bottom, not an arbitrary guess.
(function(){
  var img = document.getElementById('hero-device-img');
  if (!img) return;
  function setScrollDistance(){
    var screen = img.closest('.device-screen');
    var scaledHeight = img.naturalWidth ? (screen.clientWidth / img.naturalWidth) * img.naturalHeight : 0;
    var distance = Math.max(0, scaledHeight - screen.clientHeight);
    img.style.setProperty('--scroll-distance', distance + 'px');
  }
  if (img.complete) setScrollDistance();
  img.addEventListener('load', setScrollDistance);
  window.addEventListener('resize', setScrollDistance);
})();

// ---------- scroll progress bar + background-photo parallax + nav scroll-shadow ----------
// One shared rAF-throttled scroll handler drives all three so a fast scroll
// only ever triggers a single reflow-free pass, not three separate listeners.
(function(){
  var progressEl = document.getElementById('scroll-progress');
  var parallaxImgs = Array.prototype.slice.call(document.querySelectorAll('.bg-photo img'));
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var navEl = null;
  document.addEventListener('partials:loaded', function(){ navEl = document.querySelector('.nav'); update(); });

  var ticking = false;
  function update(){
    ticking = false;
    var scrollY = window.scrollY;

    if (progressEl) {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? Math.min(1, Math.max(0, scrollY / docHeight)) : 0;
      progressEl.style.transform = 'scaleX(' + pct + ')';
    }

    if (navEl) {
      navEl.classList.toggle('is-scrolled', scrollY > 24);
    }

    if (!reduceMotion && parallaxImgs.length) {
      var vh = window.innerHeight;
      parallaxImgs.forEach(function(img){
        var section = img.closest('section');
        if (!section) return;
        var rect = section.getBoundingClientRect();
        var center = rect.top + rect.height / 2;
        var offset = Math.max(-40, Math.min(40, (vh / 2 - center) * 0.12));
        img.style.setProperty('--parallax-y', offset + 'px');
      });
    }
  }
  function onScroll(){
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }
  window.addEventListener('scroll', onScroll, {passive:true});
  window.addEventListener('resize', onScroll);
  update();
})();

// ---------- portfolio: stacked deck (click/drag to cycle), scroll-linked ----------
(function(){
  var carousel = document.querySelector('.portfolio-carousel');
  if (!carousel) return;
  var deck = document.getElementById('portfolio-deck');
  var cards = Array.prototype.slice.call(deck.querySelectorAll('.portfolio-card'));
  var total = cards.length;
  var dotsWrap = document.getElementById('portfolio-dots');
  var prevBtn = carousel.querySelector('.portfolio-nav.prev');
  var nextBtn = carousel.querySelector('.portfolio-nav.next');
  var current = 0;
  var maxVisibleDepth = total - 1;

  cards.forEach(function(_, i){
    var dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', function(){ goTo(i); });
    dotsWrap.appendChild(dot);
  });
  var dots = dotsWrap.querySelectorAll('button');

  var navListWrap = document.getElementById('portfolio-nav-list');
  cards.forEach(function(card, i){
    var item = document.createElement('button');
    item.type = 'button';
    item.className = 'portfolio-nav-item';
    var num = document.createElement('span');
    num.className = 'pni-num';
    num.textContent = String(i + 1).padStart(2, '0');
    var name = document.createElement('span');
    name.className = 'pni-name';
    name.textContent = card.querySelector('h3').textContent;
    item.appendChild(num);
    item.appendChild(name);
    item.addEventListener('click', function(){ goTo(i); });
    navListWrap.appendChild(item);
  });
  var navItems = navListWrap.querySelectorAll('.portfolio-nav-item');

  function depthOf(i){ return (i - current + total) % total; }

  function layout(dragX){
    cards.forEach(function(card, i){
      var depth = depthOf(i);
      var tx = -depth * 16;
      var ty = depth * 9;
      var rot = -depth * 2.2;
      var scale = 1 - depth * 0.045;
      if (depth === 0 && dragX) tx += dragX;
      card.style.transform = 'translate(' + tx + 'px,' + ty + 'px) rotate(' + rot + 'deg) scale(' + scale + ')';
      card.style.zIndex = String(100 - depth);
      card.style.opacity = depth <= maxVisibleDepth ? String(1 - depth * 0.08) : '0';
      card.style.pointerEvents = depth === 0 ? 'auto' : 'none';
    });
    dots.forEach(function(d, di){ d.classList.toggle('active', di === current); });
    navItems.forEach(function(item, di){ item.classList.toggle('active', di === current); });
  }

  function goTo(i){
    current = (i + total) % total;
    layout();
  }

  prevBtn.addEventListener('click', function(){ goTo(current - 1); });
  nextBtn.addEventListener('click', function(){ goTo(current + 1); });
  window.addEventListener('resize', function(){ layout(); });

  // drag the front card to cycle the deck (mouse + touch, unified via Pointer Events)
  var dragging = false, startX = 0, dx = 0, movedFar = false, captured = false;
  function capture(e){
    var card = cards[current];
    captured = true;
    if (card.setPointerCapture) { try { card.setPointerCapture(e.pointerId); } catch(err) {} }
    card.style.transition = 'none';
  }
  deck.addEventListener('pointerdown', function(e){
    var onLink = !!e.target.closest('a');
    // A mouse press on a link is left alone so a click navigates normally. A finger on a link is different: the
    // screenshot is one big link, so on a phone the deck could only be swiped from the caption. For touch and pen the
    // drag starts on the link too, and pointer capture waits until the finger has really moved (below), so a plain tap
    // still lands on the link.
    if (onLink && e.pointerType === 'mouse') return;
    dragging = true; startX = e.clientX; dx = 0; movedFar = false; captured = false;
    if (!onLink) capture(e);
  });
  deck.addEventListener('pointermove', function(e){
    if (!dragging) return;
    dx = e.clientX - startX;
    if (Math.abs(dx) > 6) {
      movedFar = true;
      if (!captured) capture(e);
    }
    if (captured) layout(dx);
  });
  function endDrag(){
    if (!dragging) return;
    dragging = false;
    captured = false;
    var card = cards[current];
    card.style.transition = '';
    if (Math.abs(dx) > 60) {
      goTo(current + (dx < 0 ? 1 : -1));
    } else {
      layout();
    }
    dx = 0;
  }
  deck.addEventListener('pointerup', endDrag);
  deck.addEventListener('pointerleave', endDrag);
  // a vertical scroll that starts on a card makes the browser cancel the pointer; without this the deck stayed "dragging"
  deck.addEventListener('pointercancel', endDrag);
  // a drag shouldn't also fire the "View Site" link click underneath it
  deck.addEventListener('click', function(e){ if (movedFar) { e.preventDefault(); e.stopPropagation(); } }, true);

  layout();

  // Scroll-linked reveal (every width): pin the deck+list in place while the
  // taller .portfolio-scroller wrapper scrolls past, and map scroll progress
  // through that wrapper directly to the front card index.
  var scroller = document.getElementById('portfolio-scroller');
  if (scroller) {
    scroller.style.setProperty('--pf-steps', String(total - 1));
    var sticky = scroller.querySelector('.portfolio-sticky');
    var wide = window.matchMedia('(min-width:960px)');
    // Below 960px the pinned block is only as tall as the deck, so the scroller is sized from it (see style.css).
    var measure = function(){
      if (sticky && !wide.matches) scroller.style.setProperty('--pf-sticky-h', sticky.offsetHeight + 'px');
    };
    measure();
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    var onScrollReveal = function(){
      if (dragging) return;
      var rect = scroller.getBoundingClientRect();
      var scrollable = rect.height - (wide.matches || !sticky ? window.innerHeight : sticky.offsetHeight);
      if (scrollable <= 0) return;
      var progress = Math.max(0, Math.min(1, -rect.top / scrollable));
      var idx = Math.round(progress * (total - 1));
      if (idx !== current) goTo(idx);
    };
    window.addEventListener('scroll', onScrollReveal, {passive:true});
    window.addEventListener('resize', onScrollReveal);
    onScrollReveal();
  }
})();

// ---------- blog: "Filter by topic" disclosure (phones) ----------
// The topic links are plain <a> tags in the HTML (crawlable, work without JS). On a phone this collapses them behind a
// button so posts start higher on the screen; style.css only shows the button below 760px. Selecting a topic is a normal
// link click, so the new page loads with the menu collapsed again.
(function(){
  var wrap = document.querySelector('.blog-chips-wrap');
  var toggle = wrap && wrap.querySelector('.blog-topics-toggle');
  if (!toggle) return;
  wrap.classList.add('is-collapsible');
  function setOpen(open, returnFocus){
    wrap.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open && returnFocus) toggle.focus();
  }
  toggle.addEventListener('click', function(){ setOpen(toggle.getAttribute('aria-expanded') !== 'true'); });
  wrap.addEventListener('keydown', function(e){
    if (e.key === 'Escape' && wrap.classList.contains('is-open')) { setOpen(false, true); }
  });
  wrap.addEventListener('focusout', function(e){
    // keyboard focus moved to something outside the menu: collapse it
    if (wrap.classList.contains('is-open') && e.relatedTarget && !wrap.contains(e.relatedTarget)) setOpen(false);
  });
  document.addEventListener('click', function(e){
    if (wrap.classList.contains('is-open') && !wrap.contains(e.target)) setOpen(false);
  });
})();

// ---------- partials are stamped into the HTML at build time (marie-glow-studio-blog/scripts/build-pages.mjs) ----------
// include.js used to fire this after fetching them; now the nav and footer are already in the page, so fire it here
// once every listener above is registered. Kept as an event so the handlers above did not need to change.
// Safety net: a page that has not been through the build yet still gets its nav and footer, fetched at runtime.
(function () {
  var slots = document.querySelectorAll('[data-include]');
  if (!slots.length) { document.dispatchEvent(new CustomEvent('partials:loaded')); return; }
  Promise.all(Array.prototype.map.call(slots, function (el) {
    return fetch(el.getAttribute('data-include').replace(/^\/?/, '/'))
      .then(function (r) { return r.ok ? r.text() : ''; })
      .then(function (html) { if (html) el.outerHTML = html; })
      .catch(function () {});
  })).then(function () { document.dispatchEvent(new CustomEvent('partials:loaded')); });
})();

// ===== STUDIO EFFECTS (site-wide): glass shatter reveal, pop-in, depth drift, orbiting phones =====
(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var narrow = window.matchMedia('(max-width:760px)').matches;
  function rnd(a,b){ return a + Math.random()*(b-a); }

  // ---------- pop-in order: stagger siblings so groups pop one after another ----------
  var popSel = '.price-list li,.faq-item,.ed-rows li,.journey-card,.mg-review,.ed-feature,.blog-card,.ed-facts div,.hero-cta-row .btn';
  document.querySelectorAll(popSel).forEach(function(el){
    var i = 0, p = el.previousElementSibling;
    while (p) { i++; p = p.previousElementSibling; }
    el.style.setProperty('--i', Math.min(i, 7));
    el.classList.add('popx');
  });

  // ---------- orbiting phones: turn a scene with 2+ phones into a ring of phones around a laptop ----------
  var FILL = ['phone-pin-a','phone-pin-f','phone-pin-g','phone-pin-h','phone-florals','phone-pin-c'];
  var CENTER = ['laptop-gems','laptop-ykm','laptop-bakery','laptop-rskin','laptop-harvey'];
  var orbits = [];
  function isPhone(sp){ var im = sp.querySelector('img'); return !!(im && /\/phone-/.test(im.getAttribute('src') || '')); }
  function buildOrbit(sc){
    if (sc.querySelector('.orbit') || sc.classList.contains('sc-desk')) return;
    var sps = [].slice.call(sc.querySelectorAll('.sp'));
    var phones = sps.filter(isPhone);
    if (phones.length < 2) return;
    var srcs = phones.map(function(sp){ return sp.querySelector('img').getAttribute('src'); });
    var centerSp = sps.filter(function(sp){ var im = sp.querySelector('img'); return im && /\/laptop-/.test(im.getAttribute('src') || ''); })[0];
    var centerSrc = centerSp ? centerSp.querySelector('img').getAttribute('src') : '/assets/hero-props/' + CENTER[Math.floor(Math.random()*CENTER.length)] + '.webp';
    phones.forEach(function(sp){ sp.parentNode.removeChild(sp); });
    if (centerSp) centerSp.parentNode.removeChild(centerSp);
    FILL.forEach(function(n){ var s = '/assets/hero-props/' + n + '.webp'; if (srcs.length < 6 && srcs.indexOf(s) < 0) srcs.push(s); });
    var o = document.createElement('div');
    o.className = 'orbit' + (sc.classList.contains('sc-fill') ? ' orbit-hero' : '');
    o.setAttribute('aria-hidden', 'true');
    var html = '<div class="orbit-ring"><span class="oc"><img src="' + centerSrc + '" alt="" decoding="async"></span>';
    srcs.forEach(function(s, i){ html += '<span class="ob" style="--a:' + (i*360/srcs.length).toFixed(1) + 'deg"><img src="' + s + '" alt="" loading="lazy" decoding="async"></span>'; });
    html += '</div>';
    o.innerHTML = html;
    sc.appendChild(o);
    o.style.setProperty('--th', '20deg');
    orbits.push(o);
  }
  document.querySelectorAll('.sc').forEach(buildOrbit);


  // ---------- every hero scene moves: the biggest prop sits in the middle, the others orbit it ----------
  function buildGeneric(sc){
    if (sc.querySelector('.orbit') || sc.classList.contains('sc-desk') || !sc.closest('.hero-video-wrap, .bg-photo')) return;
    var sps = [].slice.call(sc.querySelectorAll(':scope > .sp'));
    if (sps.length < 3) return;
    var wOf = function(sp){ return parseFloat(sp.style.getPropertyValue('--w')) || 10; };
    sps.sort(function(a, b){ return wOf(b) - wOf(a); });
    var center = sps[0], rest = sps.slice(1, 6);
    var o = document.createElement('div');
    o.className = 'orbit orbit-hero orbit-gen';
    o.setAttribute('aria-hidden', 'true');
    var ring = document.createElement('div'); ring.className = 'orbit-ring';
    var oc = document.createElement('span'); oc.className = 'oc';
    oc.style.setProperty('--cw', wOf(center) + 'cqw');
    while (center.firstChild) oc.appendChild(center.firstChild);
    center.parentNode.removeChild(center);
    ring.appendChild(oc);
    var maxw = 0;
    rest.forEach(function(sp, i){
      var ob = document.createElement('span'); ob.className = 'ob';
      var w = wOf(sp); if (w > maxw) maxw = w;
      ob.style.setProperty('--a', (i*360/rest.length).toFixed(1) + 'deg');
      ob.style.setProperty('--pw', w + 'cqw');
      while (sp.firstChild) ob.appendChild(sp.firstChild);
      sp.parentNode.removeChild(sp);
      ring.appendChild(ob);
    });
    o.style.setProperty('--R', (21 + maxw*0.3).toFixed(1) + 'cqw');
    o.appendChild(ring); sc.appendChild(o);
    o.style.setProperty('--th', '20deg');
    orbits.push(o);
  }
  document.querySelectorAll('.sc').forEach(buildGeneric);

  var visible = [];
  var oio = ('IntersectionObserver' in window) ? new IntersectionObserver(function(es){
    es.forEach(function(e){
      var i = visible.indexOf(e.target);
      if (e.isIntersecting && i < 0) visible.push(e.target);
      if (!e.isIntersecting && i >= 0) visible.splice(i, 1);
    });
  }, {rootMargin:'120px'}) : null;
  if (oio) orbits.forEach(function(o){ oio.observe(o); });
  if (!reduce && oio) {
    (function tick(t){
      var sy = window.scrollY;
      for (var i = 0; i < visible.length; i++) {
        visible[i].style.setProperty('--th', ((t*0.014 + sy*0.2) % 360).toFixed(2) + 'deg');
      }
      requestAnimationFrame(tick);
    })(0);
  }

  // ---------- depth drift: props in a scene slide at different speeds while you scroll ----------
  var scenes = [].slice.call(document.querySelectorAll('.sc'));
  scenes.forEach(function(sc){
    [].forEach.call(sc.querySelectorAll('.sp'), function(sp){
      var z = parseInt(sp.style.zIndex || '2', 10) || 2;
      sp.style.setProperty('--dp', (4 + z*5));
    });
  });
  if (!reduce && scenes.length) {
    var driftTick = false;
    var drift = function(){
      driftTick = false;
      var vh = window.innerHeight;
      scenes.forEach(function(sc){
        var r = sc.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var p = (r.top + r.height/2 - vh/2) / vh;
        sc.style.setProperty('--sy', Math.max(-1, Math.min(1, p)).toFixed(3));
      });
    };
    window.addEventListener('scroll', function(){ if (!driftTick) { driftTick = true; requestAnimationFrame(drift); } }, {passive:true});
    drift();
  }

  // ---------- glass shatter reveal ----------
  if (reduce || !('IntersectionObserver' in window)) return;
  var glassSel = '.ed-feature-media,.ed-hero-frame,.sc:not(.sc-fill),.journey-card,.mg-review,.blog-feature';
  var vh0 = window.innerHeight;
  var gio = new IntersectionObserver(function(es){
    es.forEach(function(e){
      if (e.isIntersecting) { gio.unobserve(e.target); shatter(e.target); }
    });
  }, {threshold:0.4});
  function glassify(el){
    var cs = window.getComputedStyle(el);
    if (cs.position === 'static') el.style.position = 'relative';
    var cols = narrow ? 4 : 6, rows = narrow ? 3 : 4, pts = [], r, c;
    for (r = 0; r <= rows; r++) { pts.push([]); for (c = 0; c <= cols; c++) {
      var x = c/cols*100, y = r/rows*100;
      if (c > 0 && c < cols) x += rnd(-7, 7);
      if (r > 0 && r < rows) y += rnd(-9, 9);
      pts[r].push([x, y]);
    } }
    var g = document.createElement('div');
    g.className = 'glass'; g.setAttribute('aria-hidden', 'true');
    var svg = '<svg class="glass-cracks" viewBox="0 0 100 100" preserveAspectRatio="none">';
    for (r = 0; r < rows; r++) for (c = 0; c < cols; c++) {
      var a = pts[r][c], b = pts[r][c+1], d = pts[r+1][c], e2 = pts[r+1][c+1];
      var cx = (a[0]+b[0]+d[0]+e2[0])/4, cy = (a[1]+b[1]+d[1]+e2[1])/4;
      var poly = 'polygon(' + [a,b,e2,d].map(function(p){ return p[0].toFixed(1) + '% ' + p[1].toFixed(1) + '%'; }).join(',') + ')';
      var dist = Math.sqrt((cx-50)*(cx-50) + (cy-50)*(cy-50));
      var s = document.createElement('i');
      s.className = 'shard';
      s.style.clipPath = poly; s.style.webkitClipPath = poly;
      s.style.setProperty('--dx', ((cx-50)*0.9 + rnd(-14,14)).toFixed(0) + 'px');
      s.style.setProperty('--dy', (rnd(70, 190) + (cy-50)*0.8).toFixed(0) + 'px');
      s.style.setProperty('--rot', rnd(-55, 55).toFixed(0) + 'deg');
      s.style.setProperty('--d', (dist*9).toFixed(0) + 'ms');
      g.appendChild(s);
      svg += '<path d="M' + a[0].toFixed(1) + ' ' + a[1].toFixed(1) + 'L' + b[0].toFixed(1) + ' ' + b[1].toFixed(1) + 'L' + e2[0].toFixed(1) + ' ' + e2[1].toFixed(1) + '" />';
    }
    svg += '</svg>';
    g.insertAdjacentHTML('beforeend', svg);
    el.appendChild(g);
    el.classList.add('glassed');
  }
  function shatter(el){
    var g = el.querySelector(':scope > .glass');
    if (!g) return;
    g.classList.add('go');
    setTimeout(function(){ if (g.parentNode) g.parentNode.removeChild(g); el.classList.remove('glassed'); }, 1900);
  }
  function arm(){
    document.querySelectorAll(glassSel).forEach(function(el){
      if (el.__glass) return;
      var rect = el.getBoundingClientRect();
      if (rect.top < vh0 * 0.85) return;      // already on screen at load: no glass
      el.__glass = true;
      glassify(el);
      gio.observe(el);
    });
  }
  if (document.readyState === 'complete') arm(); else window.addEventListener('load', arm);
  // safety: never leave glass up if something goes wrong
  setTimeout(function(){ document.querySelectorAll('.glass:not(.go)').forEach(function(g){ var p = g.parentNode; if (p && p.getBoundingClientRect().top < window.innerHeight*0.5 && p.getBoundingClientRect().bottom > 0) g.classList.add('go'); }); }, 8000);
})();

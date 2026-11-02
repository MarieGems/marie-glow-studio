// Gallery and case study motion: scroll fade-ins, a scroll-driven marquee, character reveal, sticky stacking cards and magnetic buttons.
// Everything is optional. With scripts off or reduced motion on, all content shows as plain, readable page content.
(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var clamp = function (v, a, b) { return Math.min(b, Math.max(a, v)); };
  // a level card's link points at its example: mark that example so the eye lands on it
  [].slice.call(document.querySelectorAll('.wi-tier-link')).forEach(function (a) {
    a.addEventListener('click', function () {
      var card = document.getElementById(a.getAttribute('href').slice(1));
      if (!card) return;
      card.classList.add('wi-picked');
      setTimeout(function () { card.classList.remove('wi-picked'); }, 2600);
    });
  });
  if (reduce) { return; }
  root.classList.add('wi-js');

  // fade in once, when it first nears the viewport
  var fades = [].slice.call(document.querySelectorAll('.wi-fade'));
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('wi-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -5% 0px' });
    fades.forEach(function (el) { io.observe(el); });
  } else { fades.forEach(function (el) { el.classList.add('wi-in'); }); }

  // character reveal: the full sentence stays in the page for screen readers, the letters are decoration
  var texts = [].slice.call(document.querySelectorAll('.wi-reveal-text')).map(function (p) {
    var full = p.textContent.trim().replace(/\s+/g, ' ');
    p.textContent = '';
    var sr = document.createElement('span');
    sr.className = 'wi-sr'; sr.textContent = full;
    p.appendChild(sr);
    var chars = [];
    full.split(' ').forEach(function (w, wi) {
      var word = document.createElement('span');
      word.className = 'wi-word'; word.setAttribute('aria-hidden', 'true');
      w.split('').forEach(function (c) {
        var s = document.createElement('span');
        s.className = 'wi-ch'; s.textContent = c; s.style.opacity = '.2';
        word.appendChild(s); chars.push(s);
      });
      p.appendChild(word);
      p.appendChild(document.createTextNode(' '));
    });
    return { el: p, chars: chars };
  });

  var rows = [].slice.call(document.querySelectorAll('.wi-marquee-row'));
  var marquee = document.querySelector('.wi-marquee');
  var ticking = false;

  function update() {
    ticking = false;
    var vh = window.innerHeight, sy = window.scrollY;

    if (marquee && rows.length) {
      var top = marquee.getBoundingClientRect().top + sy;
      var offset = (sy - top + vh) * 0.3;
      rows.forEach(function (row, i) {
        var setW = row.scrollWidth / 3;
        if (!setW) return;
        var m = ((offset % setW) + setW) % setW;
        var x = i % 2 === 0 ? (m - setW) : -m;
        row.style.transform = 'translate3d(' + x + 'px,0,0)';
      });
    }

    texts.forEach(function (t) {
      var r = t.el.getBoundingClientRect();
      var start = vh * 0.8, end = vh * 0.2;
      var p = clamp((start - r.top) / ((start - end) + r.height), 0, 1);
      var n = t.chars.length;
      t.chars.forEach(function (c, i) {
        var a = i / n, b = (i + 1) / n;
        c.style.opacity = (0.2 + 0.8 * clamp((p - a) / (b - a), 0, 1)).toFixed(2);
      });
    });

  }
  function onScroll() { if (!ticking) { ticking = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();

  // magnetic buttons, mouse only
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    [].slice.call(document.querySelectorAll('.wi-magnet')).forEach(function (el) {
      var active = false;
      var pad = 100, strength = 3;
      function move(e) {
        var r = el.getBoundingClientRect();
        var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        var near = Math.abs(cx - e.clientX) < r.width / 2 + pad && Math.abs(cy - e.clientY) < r.height / 2 + pad;
        if (near) {
          if (!active) { active = true; el.style.transition = 'transform .3s ease-out'; }
          el.style.transform = 'translate3d(' + ((e.clientX - cx) / strength) + 'px,' + ((e.clientY - cy) / strength) + 'px,0)';
        } else if (active) {
          active = false; el.style.transition = 'transform .6s ease-in-out'; el.style.transform = '';
        }
      }
      window.addEventListener('mousemove', move, { passive: true });
    });
  }
})();

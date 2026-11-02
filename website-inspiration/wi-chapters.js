// Case study chapters: one connected card, a quote slip that doubles as navigation.
// Without scripts every chapter shows in order and the slip stays hidden.
(function () {
  var wrap = document.querySelector('.wi-casewrap');
  if (!wrap) return;
  var tabs = [].slice.call(wrap.querySelectorAll('[role="tab"]'));
  var panels = tabs.map(function (t) { return document.getElementById(t.getAttribute('aria-controls')); });
  var counter = document.getElementById('wi-read-n');
  var seen = {};
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  wrap.classList.add('wi-chap-js');

  var box = wrap.querySelector('.wi-panels');
  var cur = -1;
  var finishTurn = null;

  // a page turn: forward lifts the current page away from its left edge, back lays the old page down again
  function turn(from, to) {
    var forward = to > from;
    var A = panels[from], B = panels[to];
    var cs = getComputedStyle(box);
    var leaf = forward ? A : B;
    var under = forward ? B : A;
    box.style.minHeight = box.offsetHeight + 'px';
    box.classList.add('is-turning');
    under.hidden = false;
    leaf.hidden = false;
    leaf.classList.add('wi-leaf', forward ? 'wi-leaf-out' : 'wi-leaf-in');
    leaf.style.padding = cs.padding;
    leaf.style.minHeight = Math.max(box.offsetHeight, 0) + 'px';
    var done = false;
    function end() {
      if (done) return; done = true;
      leaf.removeEventListener('animationend', end);
      leaf.classList.remove('wi-leaf', 'wi-leaf-out', 'wi-leaf-in');
      leaf.style.padding = ''; leaf.style.minHeight = '';
      (forward ? A : A).hidden = forward ? true : true;
      if (!forward) { A.hidden = true; B.hidden = false; }
      else { B.hidden = false; }
      box.classList.remove('is-turning'); box.style.minHeight = '';
      finishTurn = null;
    }
    leaf.addEventListener('animationend', end);
    setTimeout(end, 1000);
    finishTurn = end;
  }

  function show(i, opts) {
    opts = opts || {};
    if (i < 0 || i >= panels.length) return;
    if (finishTurn) finishTurn();
    var prev = cur;
    cur = i;
    if (prev !== -1 && prev !== i && !reduce) {
      turn(prev, i);
    } else {
      panels.forEach(function (p, k) { p.hidden = k !== i; });
    }
    seen[i] = true;
    tabs.forEach(function (t, k) {
      var on = k === i;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
      t.classList.toggle('is-current', on);
      t.classList.toggle('is-done', !!seen[k] && !on);
    });
    if (counter) counter.textContent = Object.keys(seen).length;
    if (opts.focusTab) tabs[i].focus();
    if (opts.scroll) {
      var top = wrap.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
    }
    var id = panels[i].id.replace('chap-', '');
    if (opts.hash !== false && history.replaceState) history.replaceState(null, '', '#' + id);
  }

  function indexForHash() {
    var h = decodeURIComponent((location.hash || '').slice(1));
    if (!h) return 0;
    var target = document.getElementById(h);
    for (var i = 0; i < panels.length; i++) {
      if (panels[i].id === 'chap-' + h || panels[i].id === h) return i;
      if (target && panels[i].contains(target)) return i;
    }
    return 0;
  }

  tabs.forEach(function (t, i) {
    t.addEventListener('click', function () { show(i, { scroll: true }); });
    t.addEventListener('keydown', function (e) {
      var n = tabs.length, k = i;
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') k = (i + 1) % n;
      else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') k = (i - 1 + n) % n;
      else if (e.key === 'Home') k = 0;
      else if (e.key === 'End') k = n - 1;
      else return;
      e.preventDefault();
      show(k, { focusTab: true, hash: false });
    });
  });

  [].slice.call(wrap.querySelectorAll('[data-go]')).forEach(function (b) {
    b.addEventListener('click', function () {
      var id = b.getAttribute('data-go');
      for (var i = 0; i < panels.length; i++) {
        if (panels[i].id === 'chap-' + id) { show(i, { scroll: true }); panels[i].focus({ preventScroll: true }); return; }
      }
    });
  });

  window.addEventListener('hashchange', function () { show(indexForHash(), { scroll: true, hash: false }); });
  show(indexForHash(), { hash: false });
})();

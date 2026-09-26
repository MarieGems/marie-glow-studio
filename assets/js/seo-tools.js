/* Marie Glow Studio free tools. Plain JS, no libraries, nothing is sent anywhere: every calculation runs in the visitor's browser. */
(function () {
  'use strict';

  var $ = function (root, sel) { return root.querySelector(sel); };
  var $$ = function (root, sel) { return Array.prototype.slice.call(root.querySelectorAll(sel)); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  /* ---------- Tool 1: pin title and description checker ---------- */
  // Pinterest limits (Pinterest Help Center, "Review Pin specs"): title up to 100 characters, roughly the first 40 most likely to show;
  // description up to 500 characters. Everything else below is a Marie Glow Studio guideline and is labelled that way.
  function titleChecker(root) {
    var kw = $(root, '[name=keyword]'), title = $(root, '[name=title]'), desc = $(root, '[name=description]');
    var tCount = $(root, '[data-count=title]'), dCount = $(root, '[data-count=desc]');
    var preview = $(root, '[data-preview]'), list = $(root, '[data-results]');

    function run() {
      var k = kw.value.trim().toLowerCase(), t = title.value, d = desc.value;
      var tl = t.length, dl = d.length;
      tCount.textContent = tl + ' / 100';
      dCount.textContent = dl + ' / 500';
      tCount.classList.toggle('is-over', tl > 100);
      dCount.classList.toggle('is-over', dl > 500);

      if (tl > 40) preview.innerHTML = '<span class="tool-shown">' + esc(t.slice(0, 40)) + '</span><span class="tool-cut">' + esc(t.slice(40)) + '</span>';
      else preview.innerHTML = tl ? '<span class="tool-shown">' + esc(t) + '</span>' : '<span class="tool-placeholder">Your title preview shows here.</span>';

      var out = [];
      var add = function (state, label, note) { out.push({ s: state, l: label, n: note }); };

      if (!tl) add('warn', 'Add a title', 'Write the title first, then the checks appear.');
      else if (tl > 100) add('fail', 'Title is over the 100 character limit', 'Pinterest allows up to 100 characters. Trim it.');
      else add('pass', 'Title is within the 100 character limit', tl + ' characters.');

      if (tl && tl > 40) add('warn', 'Only the first 40 characters are likely to show', 'Put the most important words before the shaded part in the preview.');
      else if (tl) add('pass', 'Whole title fits in the part most likely to show', 'Pinterest says roughly the first 40 characters are most likely to show.');

      if (!dl) add('warn', 'Add a description', 'Descriptions help Pinterest understand what the pin is about.');
      else if (dl > 500) add('fail', 'Description is over the 500 character limit', 'Pinterest allows up to 500 characters. Trim it.');
      else add('pass', 'Description is within the 500 character limit', dl + ' characters.');

      if (k) {
        if (tl) {
          var pos = t.toLowerCase().indexOf(k);
          if (pos === -1) add('warn', 'Your keyword is not in the title', 'Marie Glow Studio guideline: use the exact phrase people search, in the title.');
          else if (pos > 40) add('warn', 'Your keyword is in the title, but late', 'Guideline: move it into the first 40 characters.');
          else add('pass', 'Your keyword is in the first 40 characters of the title', 'Guideline met.');
        }
        if (dl) {
          var dpos = d.toLowerCase().indexOf(k);
          if (dpos === -1) add('warn', 'Your keyword is not in the description', 'Guideline: use it once, naturally, near the start.');
          else if (dpos > 150) add('warn', 'Your keyword shows up late in the description', 'Guideline: mention it in the first sentence or two.');
          else add('pass', 'Your keyword appears early in the description', 'Guideline met.');
        }
      } else if (tl || dl) {
        add('warn', 'Add your main keyword to check placement', 'Type the phrase you want this pin found for in the first box.');
      }

      if (dl && dl < 100) add('warn', 'Description is short', 'Guideline: a couple of natural sentences give Pinterest more to work with.');
      var tags = (t + ' ' + d).match(/#\w+/g) || [];
      if (tags.length > 4) add('warn', 'Lots of hashtags', 'Guideline: write in natural sentences instead of a hashtag list.');
      if (tl > 6 && t === t.toUpperCase() && /[A-Z]/.test(t)) add('warn', 'Title is all capital letters', 'Guideline: normal capitalization reads better and matches how people search.');
      if (tl && dl && d.trim().toLowerCase() === t.trim().toLowerCase()) add('warn', 'Description repeats the title exactly', 'Guideline: use the description to add detail, not repeat.');

      list.innerHTML = out.map(function (o) {
        var icon = o.s === 'pass' ? '&#10003;' : o.s === 'fail' ? '&#10005;' : '!';
        return '<li class="tool-check is-' + o.s + '"><span class="tool-check-icon" aria-hidden="true">' + icon + '</span><span><strong>' + esc(o.l) + '</strong><br>' + esc(o.n) + '</span></li>';
      }).join('');
    }
    [kw, title, desc].forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ---------- Tool 2: pins per month calculator ---------- */
  // Tier volumes come from marie-glow-studio/pricing.md: Starter 100, Growth 200, Pro 300 pins per month.
  function pinsCalculator(root) {
    var products = $(root, '[name=products]'), per = $(root, '[name=per]'), mins = $(root, '[name=mins]');
    var outPins = $(root, '[data-out=pins]'), outHours = $(root, '[data-out=hours]'), outTier = $(root, '[data-out=tier]'), outNote = $(root, '[data-out=note]');
    var num = function (el) { var v = parseFloat(el.value); return isFinite(v) && v > 0 ? v : 0; };

    function run() {
      var pins = Math.round(num(products) * num(per));
      var hours = pins * num(mins) / 60;
      outPins.textContent = pins ? String(pins) : '0';
      outHours.textContent = pins && num(mins) ? (Math.round(hours * 10) / 10) + ' hours' : 'Add minutes per pin';
      var tier, note;
      if (!pins) { tier = 'Fill in the boxes above.'; note = ''; }
      else if (pins <= 100) { tier = 'Pinterest Starter covers this volume (100 pins a month).'; note = 'Monthly Pinterest Management, Starter tier.'; }
      else if (pins <= 200) { tier = 'Pinterest Growth covers this volume (200 pins a month).'; note = 'Monthly Pinterest Management, Growth tier.'; }
      else if (pins <= 300) { tier = 'Pinterest Pro covers this volume (300 pins a month).'; note = 'Monthly Pinterest Management, Pro tier.'; }
      else { tier = 'That is above the 300 pins a month in the largest tier.'; note = 'Trim the plan to 300 or fewer, or reach out to talk about it.'; }
      outTier.textContent = tier;
      outNote.textContent = note;
    }
    [products, per, mins].forEach(function (el) { el.addEventListener('input', run); });
    run();
  }

  /* ---------- Tool 3: profile and board SEO scorecard ---------- */
  function scorecard(root) {
    var boxes = $$(root, 'input[type=checkbox]');
    var score = $(root, '[data-score]'), total = $(root, '[data-total]'), verdict = $(root, '[data-verdict]'), cta = $(root, '[data-cta]');
    function run() {
      var n = boxes.filter(function (b) { return b.checked; }).length, max = boxes.length;
      score.textContent = String(n);
      total.textContent = String(max);
      var text, href, label;
      if (n <= 4) { text = 'The foundation needs work. Getting the account, profile and boards set up correctly comes first.'; href = '/pinterest-account-setup.html'; label = 'See Pinterest Account Setup'; }
      else if (n <= 8) { text = 'You have some of it in place. A full review would show which gaps matter most and in what order to fix them.'; href = '/pinterest-audit.html'; label = 'See the Pinterest SEO Audit'; }
      else { text = 'Your basics look solid. Consistency is the next thing, and that is the part most owners struggle to keep up.'; href = '/pinterest-management.html'; label = 'See Monthly Pinterest Management'; }
      verdict.textContent = text;
      cta.setAttribute('href', href);
      cta.firstChild.nodeValue = label;
    }
    boxes.forEach(function (b) { b.addEventListener('change', run); });
    run();
  }

  var tools = { 'title-checker': titleChecker, 'pins-calculator': pinsCalculator, 'scorecard': scorecard };
  $$(document, '[data-tool]').forEach(function (root) {
    var fn = tools[root.getAttribute('data-tool')];
    if (fn) fn(root);
  });
})();

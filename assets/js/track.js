/* Funnel tracking for marieglowstudio.com: service or landing page view -> CTA click -> lead -> qualified lead.
   Sends events through the GA4 tag already on every page (window.gtag). It never blocks the page: every read and
   write is wrapped, and nothing here is needed for a link or form to work.

   Events (all carry page, offer and source):
     cta_click       cta_type = buy | ask | contact, cta_location = hero | closing | sticky | top-bar | tier | ...
     form_start      first time a visitor touches a lead form
     generate_lead   a lead form was accepted by the server
     qualified_lead  same submit, and the visitor gave a business name and is not "just researching"
     scroll_75       reached 75% of the page
   Attribution: utm_* and the referrer are kept for the tab session and written into hidden form fields
   ([data-attr]). Stripe links get client_reference_id=<page>_<source> so a purchase can be tied back in Stripe.
   Full dictionary and GA4 setup: marie-glow-studio-blog/landing/TRACKING.md. */
(function () {
  var KEY = 'mg_attr';
  var UTM = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];
  var body = document.body;
  if (!body) return;

  function sget(k) { try { return window.sessionStorage.getItem(k); } catch (e) { return null; } }
  function sset(k, v) { try { window.sessionStorage.setItem(k, v); } catch (e) { /* private mode */ } }

  // ---------- attribution ----------
  var attr = {};
  try { attr = JSON.parse(sget(KEY) || '{}') || {}; } catch (e) { attr = {}; }
  var q = new URLSearchParams(window.location.search);
  var hasUtm = UTM.some(function (k) { return q.get(k); });
  if (hasUtm) {
    attr = {};
    UTM.forEach(function (k) { if (q.get(k)) attr[k] = q.get(k).slice(0, 100); });
  }
  if (!attr.landing_url) attr.landing_url = (window.location.pathname + window.location.search).slice(0, 300);
  if (!attr.referrer && document.referrer) {
    try { if (new URL(document.referrer).hostname.replace(/^www\./, '') !== 'marieglowstudio.com') attr.referrer = document.referrer.slice(0, 300); } catch (e) { /* ignore */ }
  }
  sset(KEY, JSON.stringify(attr));

  var page = body.getAttribute('data-page') || window.location.pathname.replace(/^\/|\/$/g, '') || 'home';
  var offer = body.getAttribute('data-offer') || '';
  var isLanding = body.classList.contains('lp');
  var source = attr.utm_source || (attr.referrer ? hostOf(attr.referrer) : '') || 'direct';
  function hostOf(u) { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } }

  function send(name, params) {
    try {
      if (typeof window.gtag !== 'function') return;
      var p = { page: page, offer: offer, source: source, page_type: isLanding ? 'landing' : 'site' };
      for (var k in params) p[k] = params[k];
      window.gtag('event', name, p);
    } catch (e) { /* tracking must never break the page */ }
  }

  // ---------- hidden fields and Stripe attribution ----------
  document.querySelectorAll('[data-attr]').forEach(function (el) {
    var n = el.getAttribute('data-attr');
    if (attr[n]) el.value = attr[n];
  });
  var ref = (page + '_' + source).replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 190);
  document.querySelectorAll('a[href*="buy.stripe.com"]').forEach(function (a) {
    try {
      var u = new URL(a.href);
      if (!u.searchParams.has('client_reference_id')) u.searchParams.set('client_reference_id', ref);
      a.href = u.toString();
    } catch (e) { /* leave the link alone */ }
  });

  // ---------- clicks ----------
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a) return;
    var type = a.getAttribute('data-cta');
    var href = a.getAttribute('href') || '';
    if (!type) {
      if (href.indexOf('buy.stripe.com') > -1) type = 'buy';
      else if (/^\/contact\/?(\?|#|$)/.test(href)) type = 'contact';
    }
    if (!type) return;
    send('cta_click', {
      cta_type: type,
      cta_location: a.getAttribute('data-loc') || 'page',
      destination: type === 'buy' ? 'stripe' : (type === 'ask' ? 'form' : 'contact'),
      transport_type: 'beacon'
    });
  });

  // ---------- forms ----------
  document.querySelectorAll('form[data-lead]').forEach(function (form) {
    var started = false;
    function start() { if (started) return; started = true; send('form_start', { form_id: form.getAttribute('data-lead') }); }
    form.addEventListener('focusin', start);
    form.addEventListener('input', start);
    form.addEventListener('mg:form-success', function () {
      var f = form.elements;
      var timeline = f.timeline ? f.timeline.value : '';
      var business = f.business ? f.business.value.trim() : '';
      var lead = { form_id: form.getAttribute('data-lead'), lead_source: source };
      send('generate_lead', lead);
      if (f.timeline && business && timeline && timeline !== 'just-researching') send('qualified_lead', lead);
    });
  });

  // ---------- sticky buy bar (phones): only once the hero button has scrolled out of view ----------
  var sticky = document.querySelector('.lp-sticky');
  var heroCta = document.querySelector('.ed-hero .btn-primary');
  if (sticky && heroCta && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      sticky.classList.toggle('is-on', !entries[0].isIntersecting);
    }).observe(heroCta);
  } else if (sticky) {
    sticky.classList.add('is-on');
  }

  // ---------- scroll depth ----------
  var deep = false;
  window.addEventListener('scroll', function () {
    if (deep) return;
    var h = document.documentElement;
    if ((window.scrollY + window.innerHeight) / Math.max(h.scrollHeight, 1) >= 0.75) { deep = true; send('scroll_75', {}); }
  }, { passive: true });
})();

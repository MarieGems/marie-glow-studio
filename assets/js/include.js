(function () {
  // Partials are resolved against the SITE ROOT so the same include works from any folder depth
  // (/index.html and /blog/some-post.html alike). A data-include starting with "/" is used as written;
  // a relative one ("partials/nav.html") is resolved against the folder that holds assets/js/include.js's
  // parent, i.e. the site root, taken from this script's own URL.
  var script = document.currentScript;
  var root = '/';
  if (script && script.src) {
    var m = script.src.match(/^(.*\/)assets\/js\/include\.js(?:[?#].*)?$/);
    if (m) root = m[1];
  }
  function resolve(path) {
    return path.charAt(0) === '/' ? path : root + path;
  }
  var slots = document.querySelectorAll('[data-include]');
  var loads = Array.prototype.map.call(slots, function (el) {
    return fetch(resolve(el.getAttribute('data-include')))
      .then(function (r) { return r.text(); })
      .then(function (html) { el.outerHTML = html; })
      .catch(function () { /* leave the slot empty rather than break the page */ });
  });
  Promise.all(loads).then(function () {
    document.dispatchEvent(new CustomEvent('partials:loaded'));
  });
})();

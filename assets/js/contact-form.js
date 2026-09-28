/* Contact/intake form submit handling, shared by contact.html and intake.html.
   Every <form class="js-server-form"> posts to its own data-endpoint in the
   background (via fetch, as multipart so file fields work) and shows the
   result in its own .form-status line, so the visitor never leaves the page.
   Same pattern as florals-garden-crafts-concept/contact-form.js. */
(function () {
  document.querySelectorAll('form.js-server-form').forEach(function (form) {
    var btn = form.querySelector('button[type="submit"]');
    var status = form.querySelector('.form-status');
    var endpoint = form.getAttribute('data-endpoint');
    if (!btn || !status || !endpoint) return;
    var label = btn.textContent;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      btn.disabled = true;
      btn.textContent = 'Sending...';
      status.textContent = '';
      status.classList.remove('form-status-error');

      fetch(endpoint, { method: 'POST', body: new FormData(form) })
        .then(function (r) { return r.json(); })
        .then(function (data) {
          if (data.ok) {
            // Announce success before the reset so listeners (assets/js/track.js) can still read the field values.
            form.dispatchEvent(new CustomEvent('mg:form-success'));
            status.textContent = "Thanks, it's on its way! I'll get back to you soon.";
            form.reset();
          } else {
            status.textContent = data.error || 'Something went wrong, please try again.';
            status.classList.add('form-status-error');
          }
        })
        .catch(function () {
          status.textContent = 'Something went wrong, please try again in a little while.';
          status.classList.add('form-status-error');
        })
        .then(function () {
          btn.textContent = label;
          btn.disabled = false;
        });
    });
  });
})();

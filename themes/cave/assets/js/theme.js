(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.theme-toggle');
  var label = btn && btn.querySelector('.theme-label');
  var media = window.matchMedia('(prefers-color-scheme: dark)');

  function current() { return root.getAttribute('data-theme') || (media.matches ? 'dark' : 'light'); }

  function apply(mode) {
    root.setAttribute('data-theme', mode);
    if (!btn) return;
    var next = mode === 'dark' ? 'claro' : 'oscuro';
    label.textContent = 'Modo ' + next;
    btn.setAttribute('aria-label', 'Cambiar a modo ' + next);
  }

  apply(current());

  if (btn) {
    btn.addEventListener('click', function () {
      var mode = current() === 'dark' ? 'light' : 'dark';
      apply(mode);
      try { localStorage.setItem('theme', mode); } catch (e) {}
    });
  }

  // Si el visitante nunca eligió, seguimos al sistema cuando cambie
  media.addEventListener('change', function (e) {
    var saved = null;
    try { saved = localStorage.getItem('theme'); } catch (err) {}
    if (!saved) apply(e.matches ? 'dark' : 'light');
  });

  // Búsqueda: Hugo es estático, así que buscamos dentro del sitio con DuckDuckGo
  var form = document.querySelector('.search');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = form.querySelector('input').value.trim();
      if (!q) return;
      var host = new URL(form.dataset.site, location.href).hostname;
      location.href = 'https://duckduckgo.com/?q=' + encodeURIComponent(q + ' site:' + host);
    });
  }
})();

// LiberStack — product hub — vanilla JS, sem dependências

(function () {
  'use strict';

  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // marca o link de nav ativo conforme a seção visível
  var sections = document.querySelectorAll('#markdown, #boilerplate, #sobre');
  var navAnchors = document.querySelectorAll('[data-nav]');

  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navAnchors.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  // divisória "$ cd ../boilerplate" copia o comando ao clicar
  var cmdBtn = document.getElementById('cmdCopy');
  if (cmdBtn) {
    cmdBtn.addEventListener('click', function () {
      var text = cmdBtn.textContent.trim();
      var original = cmdBtn.innerHTML;

      var done = function () {
        cmdBtn.innerHTML = '<code>copiado ✓</code>';
        setTimeout(function () { cmdBtn.innerHTML = original; }, 1200);
      };

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(function () {});
      }
    });
  }
})();

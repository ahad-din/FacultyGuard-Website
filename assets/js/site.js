// Mobile navigation toggle
(function () {
  var btn = document.querySelector('.menu');
  var links = document.querySelector('.links');
  if (!btn || !links) return;

  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  // Close the menu after choosing a destination
  links.addEventListener('click', function (e) {
    if (e.target.closest('a')) {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
})();

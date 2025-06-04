(() => {
  "use strict";

  const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const button = entry.target.querySelector('.carousel-control')
    if (button) {
    if (entry.isIntersecting) {
      button.classList.add('animate')
    return
    }
    if (button.classList.contains('animate')) {
      button.classList.remove('animate')
    }
    }
  });
});

observer.observe(document.getElementById('home-slider'));

})();
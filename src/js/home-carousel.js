(() => {
  "use strict";

  const observer = new IntersectionObserver(entries => {
  // Loop over the entries
  entries.forEach(entry => {
    // If the element is visible
    if (entry.isIntersecting) {
      // Add the animation class
    //   entry.target.classList.add('square-animation');
      entry.target.querySelector('.carousel-control').classList.add('animate')
    // console.log('isIntersecting', entry)
    return
    }
      entry.target.querySelector('.carousel-control.animate').classList.remove('animate')
    // console.log(entry)
  });
});

observer.observe(document.getElementById('home-slider'));

})();
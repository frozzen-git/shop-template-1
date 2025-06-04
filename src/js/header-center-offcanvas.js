(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
  
    document.getElementById('header-offcanvas').addEventListener('swipe', function(e) {
  if (e.detail.dir == 'down') {
    bootstrap.Offcanvas.getInstance(this).hide()
  }
})

    })
})();
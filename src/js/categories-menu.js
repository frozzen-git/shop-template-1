(() => {
  "use strict";

  window
    .matchMedia(`(width < ${bsExtraLarge}px)`)
    .addEventListener("change", onMobileSizeEvent);

  function onMobileSizeEvent(mql) {
    const modal = document.getElementById("modalCategoryMenu");
    if (mql.matches) {
      if (modal) {
        modal.style.display = null;
        modal.classList.remove("modal", "fade", "show");
        document.querySelectorAll('.modal-backdrop').forEach(element => element.remove())

      }
    } else {
      document.querySelectorAll('.offcanvas-backdrop').forEach(element => element.remove())
      if (modal && !modal.classList.contains("modal")) {
        modal.classList.add("modal", "fade");
      }
    }
  }
  window.addEventListener("DOMContentLoaded", () => {
    onMobileSizeEvent({
      media: `(width < ${bsExtraLarge}px)`,
      matches: window.innerWidth < bsExtraLarge,
    });
  });
})();

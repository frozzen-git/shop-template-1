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
        swiperInit()
      }
    } else {
      document.querySelectorAll('.offcanvas-backdrop').forEach(element => element.remove())
      if (modal && !modal.classList.contains("modal")) {
        modal.classList.add("modal", "fade");
        swiperDestroy();
      }
    }
  }

  let swiper = null

  function swiperInit() {
      swiper = new Swiper('#cat-menu-swiper', {
        loop: false,
spaceBetween: 16,
mousewheel: true,

        pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },

      breakpoints: {
        576: {
                    slidesPerView: 2,
        },
        768: {
                    slidesPerView: 3,
        },
        992: {

                    slidesPerView: 4,

        },

      }

      });

  }

  function swiperDestroy() {
    swiper.pagination.el.innerHTML = null
    swiper.destroy()
  }

  window.addEventListener("DOMContentLoaded", () => {
    onMobileSizeEvent({
      media: `(width < ${bsExtraLarge}px)`,
      matches: window.innerWidth < bsExtraLarge,
    });
  });
})();

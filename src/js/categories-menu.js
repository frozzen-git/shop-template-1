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
    const menu_nav = document.getElementById('cat-menu-swiper')
    menu_nav.classList.add('swiper')

    const ul = menu_nav.querySelector('ul')
    ul.classList.add('swiper-wrapper')
    ul.querySelectorAll('li').forEach(el => el.classList.add('swiper-slide'))

      swiper = new Swiper(menu_nav, {
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
    swiper = null

    const menu_nav = document.getElementById('cat-menu-swiper')
    menu_nav.classList.remove('swiper')

    const ul = menu_nav.querySelector('ul')
    ul.classList.remove('swiper-wrapper')
    ul.querySelectorAll('li').forEach(el => el.classList.remove('swiper-slide'))

  }

  window.addEventListener("DOMContentLoaded", () => {
    onMobileSizeEvent({
      media: `(width < ${bsExtraLarge}px)`,
      matches: window.innerWidth < bsExtraLarge,
    });


        document.querySelectorAll('#cat-menu-swiper .cat-card .btn-show-sub').forEach((element) => {
            element.addEventListener('click', (e) => {
                e.preventDefault()
                e.stopPropagation()
                let li = element.closest('.cat-card')
                let uls = li.getElementsByTagName('ul')
                if (!uls.length) {
                    return
                }
                if (uls[0].classList.contains('show')) {
                    for (let ul of uls) {
                        ul.classList.remove('show')
                    }
                }
                else {
                    let swiper = element.closest('nav').swiper
                    if ((typeof swiper !== 'undefined') && (swiper !== null)) {
                        let elSwiperIndex = li.getAttribute('data-swiper-slide-index')

                        if (elSwiperIndex !== swiper.realIndex) {
                                if ((swiper.realIndex + swiper.params.slidesPerView - 1) == elSwiperIndex + swiper.slides.length) {
                                    // console.log('slideNext')
                                    swiper.slideNext()
                                }
                            }
        
                    }

                    uls[0].classList.add('show')
                }


            })
        })


  });
})();

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/back-to-top.js":
/*!*******************************!*\
  !*** ./src/js/back-to-top.js ***!
  \*******************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    //set the default state\n    let scrolling = false;\n    const btt = document.getElementById(\"btt-button\");\n    //the scroll listener\n    window.addEventListener(\"scroll\", () => {\n      scrolling = true;\n    });\n    //run event handler every 300 ms\n    setInterval(() => {\n      if (scrolling) {\n        //reset the state var\n        scrolling = false;\n\n        //we already talked about all this\n        var top = window.pageYOffset;\n        var is_active = btt.classList.contains(\"active\");\n        if (top > 200 && !is_active) {\n          btt.classList.add(\"active\");\n        } else if (top < 200 && is_active) {\n          btt.classList.remove(\"active\");\n        }\n      }\n    }, 300);\n\n    btt.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      window.scroll({\n        top: 0,\n        behavior: \"smooth\",\n      });\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/back-to-top.js?");

/***/ }),

/***/ "./src/js/categories-menu.js":
/*!***********************************!*\
  !*** ./src/js/categories-menu.js ***!
  \***********************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  window\n    .matchMedia(`(width < ${bsExtraLarge}px)`)\n    .addEventListener(\"change\", onMobileSizeEvent);\n\n  function onMobileSizeEvent(mql) {\n    const modal = document.getElementById(\"modalCategoryMenu\");\n    if (mql.matches) {\n      if (modal) {\n        modal.style.display = null;\n        modal.classList.remove(\"modal\", \"fade\", \"show\");\n        document.querySelectorAll('.modal-backdrop').forEach(element => element.remove())\n        swiperInit()\n\n      }\n    } else {\n      document.querySelectorAll('.offcanvas-backdrop').forEach(element => element.remove())\n      if (modal && !modal.classList.contains(\"modal\")) {\n        modal.classList.add(\"modal\", \"fade\");\n        swiperDestroy();\n      }\n    }\n  }\n\n  let swiper = null\n\n  function swiperInit() {\n    const menu_nav = document.getElementById('cat-menu-swiper')\n    menu_nav.classList.add('swiper')\n\n    const ul = menu_nav.querySelector('ul')\n    ul.classList.add('swiper-wrapper')\n    ul.querySelectorAll('li').forEach(el => el.classList.add('swiper-slide'))\n\n      swiper = new Swiper(menu_nav, {\n        loop: false,\nspaceBetween: 16,\nmousewheel: true,\n\n        pagination: {\n          el: '.swiper-pagination',\n          clickable: true,\n      },\n\n      breakpoints: {\n        576: {\n                    slidesPerView: 2,\n        },\n        768: {\n                    slidesPerView: 3,\n        },\n        992: {\n\n                    slidesPerView: 4,\n\n        },\n\n      }\n\n      });\n\n  }\n\n  function swiperDestroy() {\n    swiper.pagination.el.innerHTML = null\n    swiper.destroy()\n    swiper = null\n\n    const menu_nav = document.getElementById('cat-menu-swiper')\n    menu_nav.classList.remove('swiper')\n\n    const ul = menu_nav.querySelector('ul')\n    ul.classList.remove('swiper-wrapper')\n    ul.querySelectorAll('li').forEach(el => el.classList.remove('swiper-slide'))\n\n  }\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    onMobileSizeEvent({\n      media: `(width < ${bsExtraLarge}px)`,\n      matches: window.innerWidth < bsExtraLarge,\n    });\n\n\n        document.querySelectorAll('#cat-menu-swiper .cat-card .btn-show-sub').forEach((element) => {\n            element.addEventListener('click', (e) => {\n                e.preventDefault()\n                e.stopPropagation()\n                let li = element.closest('.cat-card')\n                let uls = li.getElementsByTagName('ul')\n                if (!uls.length) {\n                    return\n                }\n                if (uls[0].classList.contains('show')) {\n                    for (let ul of uls) {\n                        ul.classList.remove('show')\n                    }\n                }\n                else {\n                    let swiper = element.closest('nav').swiper\n                    if ((typeof swiper !== 'undefined') && (swiper !== null)) {\n                        let elSwiperIndex = li.getAttribute('data-swiper-slide-index')\n\n                        if (elSwiperIndex !== swiper.realIndex) {\n                                if ((swiper.realIndex + swiper.params.slidesPerView - 1) == elSwiperIndex + swiper.slides.length) {\n                                    // console.log('slideNext')\n                                    swiper.slideNext()\n                                }\n                            }\n        \n                    }\n\n                    uls[0].classList.add('show')\n                }\n\n\n            })\n        })\n\n\n  });\n})();\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/categories-menu.js?");

/***/ }),

/***/ "./src/js/color-modes.js":
/*!*******************************!*\
  !*** ./src/js/color-modes.js ***!
  \*******************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  const getStoredTheme = () => localStorage.getItem(\"theme\");\n  const setStoredTheme = (theme) => localStorage.setItem(\"theme\", theme);\n\n  const getPreferredTheme = () => {\n    const storedTheme = getStoredTheme();\n    if (storedTheme) {\n      return storedTheme;\n    }\n\n    return window.matchMedia(\"(prefers-color-scheme: dark)\").matches\n      ? \"dark\"\n      : \"light\";\n  };\n\n  const setTheme = (theme) => {\n    if (theme === \"auto\") {\n      document.documentElement.setAttribute(\n        \"data-bs-theme\",\n        window.matchMedia(\"(prefers-color-scheme: dark)\").matches\n          ? \"dark\"\n          : \"light\"\n      );\n    } else {\n      document.documentElement.setAttribute(\"data-bs-theme\", theme);\n    }\n  };\n\n  setTheme(getPreferredTheme());\n\n  const showActiveTheme = (theme) => {\n    const themeSwitcher = document.querySelector(\"#color-theme\");\n\n    if (!themeSwitcher) {\n      return;\n    }\n\n    const themeText = theme == \"light\" ? themeDarkText : themeLightText;\n    const themeIcon =\n      theme == \"light\" ? \"bi-moon-stars-fill\" : \"bi-brightness-high-fill\";\n\n    themeSwitcher.setAttribute(\n      \"data-bs-theme-value\",\n      theme == \"light\" ? \"dark\" : \"light\"\n    );\n    themeSwitcher.setAttribute(\"title\", themeText);\n    themeSwitcher\n      .querySelector(\"i\")\n      // themeSwitcher.children[0]\n      .classList.remove(themeSwitcher.children[0].classList[0]);\n    themeSwitcher\n      .querySelector(\"i\")\n      // themeSwitcher.children[0]\n      .classList.add(themeIcon);\n    themeSwitcher.querySelector(\"span\").textContent = themeText;\n\n    // if (!themeSwitcher.classList.contains('is-active')) {\n    //   themeSwitcher.classList.add('is-active')\n    // }\n  };\n\n  window\n    .matchMedia(\"(prefers-color-scheme: dark)\")\n    .addEventListener(\"change\", () => {\n      const storedTheme = getStoredTheme();\n      if (storedTheme !== \"light\" && storedTheme !== \"dark\") {\n        console.log(\"matchMedia\", getPreferredTheme());\n        const theme = getPreferredTheme();\n        setTheme(theme);\n        showActiveTheme(theme);\n      }\n    });\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    showActiveTheme(getPreferredTheme());\n\n    const toggle = document.querySelector(\"#color-theme\");\n    if (!toggle.classList.contains(\"is-active\")) {\n      toggle.classList.add(\"is-active\");\n    }\n    toggle.addEventListener(\"click\", () => {\n      const theme = toggle.getAttribute(\"data-bs-theme-value\");\n      setStoredTheme(theme);\n      setTheme(theme);\n      showActiveTheme(theme);\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/color-modes.js?");

/***/ }),

/***/ "./src/js/hand-modes.js":
/*!******************************!*\
  !*** ./src/js/hand-modes.js ***!
  \******************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  // const getStoredTheme = () => localStorage.getItem('theme')\n  // const setStoredTheme = theme => localStorage.setItem('theme', theme)\n\n  // const getPreferredTheme = () => {\n  //   const storedTheme = getStoredTheme()\n  //   if (storedTheme) {\n  //     return storedTheme\n  //   }\n\n  //   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'\n  // }\n\n  // const setTheme = theme => {\n  //   if (theme === 'auto') {\n  //     document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))\n  //   } else {\n  //     document.documentElement.setAttribute('data-bs-theme', theme)\n  //   }\n  // }\n\n  // setTheme(getPreferredTheme())\n\n  const setActiveTheme = (theme = \"left\") => {\n    const themeSwitcher = document.querySelector(\"#hand-theme\");\n\n    if (!themeSwitcher) {\n      return;\n    }\n\n    // const mainContainer = document.querySelector('#page-wrapper')\n    const mainContainer = document.body;\n    if (mainContainer.classList.contains(\"right-hand\")) {\n      mainContainer.classList.remove(\"right-hand\");\n      themeSwitcher.querySelector(\"span\").textContent = themeRightHandText;\n    } else {\n      mainContainer.classList.add(\"right-hand\");\n      themeSwitcher.querySelector(\"span\").textContent = themeLeftHandText;\n    }\n    //   const themeText = (theme == 'light' ? 'Dark Theme' : 'Light Theme')\n    //   const themeIcon = (theme == 'light' ? 'bi-moon-stars-fill' : 'bi-brightness-high-fill')\n\n    //   themeSwitcher.setAttribute('data-bs-theme-value', (theme == 'left' ? 'right' : 'light'))\n    //   themeSwitcher.setAttribute('title', themeText)\n    //   themeSwitcher.children[0].classList.remove(themeSwitcher.children[0].classList[0])\n    //   themeSwitcher.children[0].classList.add(themeIcon)\n  };\n\n  // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {\n  //   const storedTheme = getStoredTheme()\n  //   if (storedTheme !== 'light' && storedTheme !== 'dark') {\n  //     console.log('matchMedia', getPreferredTheme())\n  //     const theme = getPreferredTheme()\n  //     setTheme(theme)\n  //     showActiveTheme(theme)\n  //   }\n  // })\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    //   showActiveTheme(getPreferredTheme())\n    //setActiveTheme()\n\n    const toggle = document.querySelector(\"#hand-theme\");\n    if (!toggle.classList.contains(\"is-active\")) {\n      toggle.classList.add(\"is-active\");\n    }\n    toggle.addEventListener(\"click\", () => {\n      //         const theme = toggle.getAttribute('data-bs-theme-value')\n      //         setStoredTheme(theme)\n      //         setTheme(theme)\n      //         showActiveTheme(theme)\n      setActiveTheme();\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/hand-modes.js?");

/***/ }),

/***/ "./src/js/header-buttons.js":
/*!**********************************!*\
  !*** ./src/js/header-buttons.js ***!
  \**********************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    [...document.querySelectorAll(\"#header-buttons .dropdown-toggle\")].map(\n      (element) =>\n        new bootstrap.Dropdown(element, {\n          popperConfig(defaultBsPopperConfig) {\n            const newPopperConfig = Object.assign({}, defaultBsPopperConfig);\n            if (window.innerWidth < bsExtraLarge) {\n              if (window.innerHeight >= bsExtraSmall) {\n                newPopperConfig.placement = \"right\";\n              } else {\n                newPopperConfig.placement = \"top\";\n              }\n\n              let offset = newPopperConfig.modifiers.find(\n                (modifier) => modifier.name == \"offset\"\n              );\n              if (typeof offset !== \"undefined\") {\n                offset.options.offset = [0, 10];\n              }\n            }\n            return newPopperConfig;\n          },\n        })\n    );\n\n    //         document.querySelectorAll('#header-buttons .dropdown-btn').forEach((element) => {\n    //         })\n  });\n})();\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/header-buttons.js?");

/***/ }),

/***/ "./src/js/header-center-offcanvas.js":
/*!*******************************************!*\
  !*** ./src/js/header-center-offcanvas.js ***!
  \*******************************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n  \n    document.getElementById('header-offcanvas').addEventListener('swipe', function(e) {\n  if (e.detail.dir == 'down') {\n    bootstrap.Offcanvas.getInstance(this).hide()\n  }\n})\n\n    })\n})();\n\n//# sourceURL=webpack://shop-template-1/./src/js/header-center-offcanvas.js?");

/***/ }),

/***/ "./src/js/home-carousel.js":
/*!*********************************!*\
  !*** ./src/js/home-carousel.js ***!
  \*********************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  const observer = new IntersectionObserver(entries => {\n  entries.forEach(entry => {\n    const button = entry.target.querySelector('.carousel-control')\n    if (button) {\n    if (entry.isIntersecting) {\n      button.classList.add('animate')\n    return\n    }\n    if (button.classList.contains('animate')) {\n      button.classList.remove('animate')\n    }\n    }\n  });\n});\n\nobserver.observe(document.getElementById('home-slider'));\n\n})();\n\n//# sourceURL=webpack://shop-template-1/./src/js/home-carousel.js?");

/***/ }),

/***/ "./src/js/swiped-events.js":
/*!*********************************!*\
  !*** ./src/js/swiped-events.js ***!
  \*********************************/
/***/ (() => {

eval("(function (document) {\n  // https://web3r.ru/swipe-event\n  // https://www.cssscript.com/detect-finger-swipe-events-javascript-pure-swipe/\n\n  \"use strict\";\n\n  // // patch CustomEvent to allow constructor creation (IE/Chrome)\n  // if (typeof window.CustomEvent !== 'function') {\n\n  //     window.CustomEvent = function (event, params) {\n\n  //         params = params || { bubbles: false, cancelable: false, detail: undefined };\n\n  //         var evt = document.createEvent('CustomEvent');\n  //         evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);\n  //         return evt;\n  //     };\n\n  //     window.CustomEvent.prototype = window.Event.prototype;\n  // }\n\n  document.addEventListener(\"touchstart\", handleTouchStart, false);\n  document.addEventListener(\"touchmove\", handleTouchMove, false);\n  document.addEventListener(\"touchend\", handleTouchEnd, false);\n\n  var xDown = null;\n  var yDown = null;\n  var xDiff = null;\n  var yDiff = null;\n  var timeDown = null;\n  var startEl = null;\n  var touchCount = 0;\n\n  /**\n   * Fires swipe event if swipe detected on touchend\n   * @param {object} e - browser event object\n   * @returns {void}\n   */\n  function handleTouchEnd(e) {\n    // if the user released on a different target, cancel!\n    if (startEl !== e.target) return;\n\n    var swipeThreshold = parseInt(\n      getNearestAttribute(startEl, \"data-swipe-threshold\", \"20\"),\n      10\n    ); // default 20 units\n    var swipeUnit = getNearestAttribute(startEl, \"data-swipe-unit\", \"px\"); // default px\n    var swipeTimeout = parseInt(\n      getNearestAttribute(startEl, \"data-swipe-timeout\", \"500\"),\n      10\n    ); // default 500ms\n    var timeDiff = Date.now() - timeDown;\n    var eventType = \"\";\n    var changedTouches = e.changedTouches || e.touches || [];\n\n    if (swipeUnit === \"vh\") {\n      swipeThreshold = Math.round(\n        (swipeThreshold / 100) * document.documentElement.clientHeight\n      ); // get percentage of viewport height in pixels\n    }\n    if (swipeUnit === \"vw\") {\n      swipeThreshold = Math.round(\n        (swipeThreshold / 100) * document.documentElement.clientWidth\n      ); // get percentage of viewport height in pixels\n    }\n\n    if (Math.abs(xDiff) > Math.abs(yDiff)) {\n      // most significant\n      if (Math.abs(xDiff) > swipeThreshold && timeDiff < swipeTimeout) {\n        if (xDiff > 0) {\n          eventType = \"swipe-left\";\n        } else {\n          eventType = \"swipe-right\";\n        }\n      }\n    } else if (Math.abs(yDiff) > swipeThreshold && timeDiff < swipeTimeout) {\n      if (yDiff > 0) {\n        eventType = \"swipe-up\";\n      } else {\n        eventType = \"swipe-down\";\n      }\n    }\n\n    if (eventType !== \"\") {\n      var eventData = {\n        dir: eventType.replace(/swipe-/, \"\"),\n        touchType: (changedTouches[0] || {}).touchType || \"direct\",\n        fingers: touchCount, // Number of fingers used\n        xStart: parseInt(xDown, 10),\n        xEnd: parseInt((changedTouches[0] || {}).clientX || -1, 10),\n        yStart: parseInt(yDown, 10),\n        yEnd: parseInt((changedTouches[0] || {}).clientY || -1, 10),\n      };\n\n      // fire `swipe` event event on the element that started the swipe\n      startEl.dispatchEvent(\n        new CustomEvent(\"swipe\", {\n          bubbles: true,\n          cancelable: true,\n          detail: eventData,\n        })\n      );\n\n      // // fire `swiped-dir` event on the element that started the swipe\n      // startEl.dispatchEvent(new CustomEvent(eventType, { bubbles: true, cancelable: true, detail: eventData }));\n    }\n\n    // reset values\n    xDown = null;\n    yDown = null;\n    timeDown = null;\n  }\n  /**\n   * Records current location on touchstart event\n   * @param {object} e - browser event object\n   * @returns {void}\n   */\n  function handleTouchStart(e) {\n    // if the element has data-swipe-ignore=\"true\" we stop listening for swipe events\n    if (e.target.getAttribute(\"data-swipe-ignore\") === \"true\") return;\n\n    startEl = e.target;\n\n    timeDown = Date.now();\n    xDown = e.touches[0].clientX;\n    yDown = e.touches[0].clientY;\n    xDiff = 0;\n    yDiff = 0;\n    touchCount = e.touches.length;\n  }\n\n  /**\n   * Records location diff in px on touchmove event\n   * @param {object} e - browser event object\n   * @returns {void}\n   */\n  function handleTouchMove(e) {\n    if (!xDown || !yDown) return;\n\n    var xUp = e.touches[0].clientX;\n    var yUp = e.touches[0].clientY;\n\n    xDiff = xDown - xUp;\n    yDiff = yDown - yUp;\n  }\n\n  /**\n   * Gets attribute off HTML element or nearest parent\n   * @param {object} el - HTML element to retrieve attribute from\n   * @param {string} attributeName - name of the attribute\n   * @param {any} defaultValue - default value to return if no match found\n   * @returns {any} attribute value or defaultValue\n   */\n  function getNearestAttribute(el, attributeName, defaultValue) {\n    // walk up the dom tree looking for attributeName\n    while (el && el !== document.documentElement) {\n      var attributeValue = el.getAttribute(attributeName);\n\n      if (attributeValue) {\n        return attributeValue;\n      }\n\n      el = el.parentNode;\n    }\n\n    return defaultValue;\n  }\n})(document);\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/swiped-events.js?");

/***/ }),

/***/ "./src/scss/theme.scss":
/*!*****************************!*\
  !*** ./src/scss/theme.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://shop-template-1/./src/scss/theme.scss?");

/***/ }),

/***/ "./src/theme.js":
/*!**********************!*\
  !*** ./src/theme.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/theme.scss */ \"./src/scss/theme.scss\");\n/* harmony import */ var _js_swiped_events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/swiped-events */ \"./src/js/swiped-events.js\");\n/* harmony import */ var _js_swiped_events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_swiped_events__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_color_modes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/color-modes */ \"./src/js/color-modes.js\");\n/* harmony import */ var _js_color_modes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_color_modes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_hand_modes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/hand-modes */ \"./src/js/hand-modes.js\");\n/* harmony import */ var _js_hand_modes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_hand_modes__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_back_to_top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/back-to-top */ \"./src/js/back-to-top.js\");\n/* harmony import */ var _js_back_to_top__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_back_to_top__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_header_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/header-buttons */ \"./src/js/header-buttons.js\");\n/* harmony import */ var _js_header_buttons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_header_buttons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _js_categories_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/categories-menu */ \"./src/js/categories-menu.js\");\n/* harmony import */ var _js_categories_menu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_js_categories_menu__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _js_header_center_offcanvas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/header-center-offcanvas */ \"./src/js/header-center-offcanvas.js\");\n/* harmony import */ var _js_header_center_offcanvas__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_js_header_center_offcanvas__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _js_home_carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/home-carousel */ \"./src/js/home-carousel.js\");\n/* harmony import */ var _js_home_carousel__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_js_home_carousel__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://shop-template-1/./src/theme.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/theme.js");
/******/ 	
/******/ })()
;
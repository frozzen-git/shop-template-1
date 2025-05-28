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

eval("(() => {\n  \"use strict\";\n\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    //set the default state\n    let scrolling = false;\n    const btt = document.getElementById(\"btt-button\");\n    //the scroll listener\n    window.addEventListener(\"scroll\", () => {\n      scrolling = true;\n    });\n    //run event handler every 300 ms\n    setInterval(() => {\n      if (scrolling) {\n        //reset the state var\n        scrolling = false;\n\n        //we already talked about all this\n        var top = window.pageYOffset;\n        var is_active = btt.classList.contains(\"show\");\n        if (top > 200 && !is_active) {\n          btt.classList.add(\"show\");\n        } else if (top < 200 && is_active) {\n          btt.classList.remove(\"show\");\n        }\n      }\n    }, 300);\n\n    btt.addEventListener(\"click\", (e) => {\n      e.preventDefault();\n      window.scroll({\n        top: 0,\n        behavior: \"smooth\",\n      });\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/back-to-top.js?");

/***/ }),

/***/ "./src/js/categories-menu.js":
/*!***********************************!*\
  !*** ./src/js/categories-menu.js ***!
  \***********************************/
/***/ (() => {

eval("(() => {\n  \"use strict\";\n\n  window\n    .matchMedia(`(width < ${bsExtraLarge}px)`)\n    .addEventListener(\"change\", onMobileSizeEvent);\n\n  function onMobileSizeEvent(mql) {\n    const modal = document.getElementById(\"modalCategoryMenu\");\n    if (mql.matches) {\n      if (modal) {\n        modal.style.display = null;\n        modal.classList.remove(\"modal\", \"fade\", \"show\");\n        document.querySelectorAll('.modal-backdrop').forEach(element => element.remove())\n\n      }\n    } else {\n      document.querySelectorAll('.offcanvas-backdrop').forEach(element => element.remove())\n      if (modal && !modal.classList.contains(\"modal\")) {\n        modal.classList.add(\"modal\", \"fade\");\n      }\n    }\n  }\n  window.addEventListener(\"DOMContentLoaded\", () => {\n    onMobileSizeEvent({\n      media: `(width < ${bsExtraLarge}px)`,\n      matches: window.innerWidth < bsExtraLarge,\n    });\n  });\n})();\n\n\n//# sourceURL=webpack://shop-template-1/./src/js/categories-menu.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/theme.scss */ \"./src/scss/theme.scss\");\n/* harmony import */ var _js_color_modes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/color-modes */ \"./src/js/color-modes.js\");\n/* harmony import */ var _js_color_modes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_color_modes__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_hand_modes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/hand-modes */ \"./src/js/hand-modes.js\");\n/* harmony import */ var _js_hand_modes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_hand_modes__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_back_to_top__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/back-to-top */ \"./src/js/back-to-top.js\");\n/* harmony import */ var _js_back_to_top__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_back_to_top__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _js_header_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/header-buttons */ \"./src/js/header-buttons.js\");\n/* harmony import */ var _js_header_buttons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_header_buttons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _js_categories_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/categories-menu */ \"./src/js/categories-menu.js\");\n/* harmony import */ var _js_categories_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_categories_menu__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://shop-template-1/./src/theme.js?");

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
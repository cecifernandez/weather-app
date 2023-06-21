/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cityAPI.js":
/*!************************!*\
  !*** ./src/cityAPI.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cityAPI = (() => {\r\n  const img = document.querySelector(\"img\");\r\n\r\n  async function getImage(query) {\r\n    return await fetch(\r\n      \"https://api.unsplash.com/search/photos?query=\" +\r\n        query +\r\n        \"&client_id=-IshjZJzwRwoK5HToCA8cp_K9COyXK25Fhqa-Fh82tg\",\r\n      { mode: \"cors\" }\r\n    )\r\n      .then((response) => {\r\n        return response.json();\r\n      })\r\n      .then((data) => {\r\n        for (let i = 0; i < data.results.length; i++) {\r\n          img.src = data.results[i].urls.full;\r\n        }\r\n      });\r\n  }\r\n\r\n  return { getImage };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cityAPI);\r\n\n\n//# sourceURL=webpack://weather-app/./src/cityAPI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n/* harmony import */ var _cityAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityAPI */ \"./src/cityAPI.js\");\n\r\n\r\n\r\nconst buscarBtn = document.getElementById(\"buscar\");\r\n\r\nbuscarBtn.addEventListener(\"click\", async () => {\r\n  const userCity = document.getElementById(\"city\").value;\r\n  console.log(await _weatherAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLocation(userCity));\r\n  _cityAPI__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getImage(userCity);\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherAPI = (() => {\r\n  async function getLocation(city) {\r\n    try {\r\n      const response = await fetch(\r\n        \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n          city +\r\n          \"&appid=3c76638c4deaee40b1a940d5c11f3d55\"\r\n      );\r\n      const data = await response.json();\r\n      return data.coord;\r\n    } catch (err) {\r\n      console.error(\"error occured: \", err.message);\r\n    }\r\n  }\r\n\r\n  return { getLocation };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);\r\n\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
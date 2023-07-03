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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cityAPI = (() => {\r\n  const img = document.getElementById(\"image\");\r\n\r\n  async function getImage(query) {\r\n    try {\r\n      const response = await fetch(\r\n        \"https://api.unsplash.com/search/photos?query=\" +\r\n          query +\r\n          \"city&client_id=-IshjZJzwRwoK5HToCA8cp_K9COyXK25Fhqa-Fh82tg\",\r\n        { mode: \"cors\" }\r\n      );\r\n\r\n      if (!response.ok) {\r\n        throw new Error(\"Unable to fetch image data.\");\r\n      }\r\n\r\n      const data = await response.json();\r\n\r\n      if (\r\n        data.results &&\r\n        data.results.length > 0 &&\r\n        data.results[0].urls &&\r\n        data.results[0].urls.regular\r\n      ) {\r\n        const randomIndex = Math.floor(Math.random() * data.results.length);\r\n        img.style.background =\r\n          \"url(\" + data.results[randomIndex].urls.regular + \")\";\r\n      } else {\r\n        throw new Error(\"Invalid image data received.\");\r\n      }\r\n    } catch (error) {\r\n      console.error(\"Error occurred while fetching image:\", error);\r\n    }\r\n  }\r\n\r\n  return { getImage };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cityAPI);\r\n\n\n//# sourceURL=webpack://weather-app/./src/cityAPI.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/utils.js\");\n\r\n\r\nconst domView = (() => {\r\n  function showResult(weatherData) {\r\n    if (!weatherData) return;\r\n    const cityName = document.querySelector(\".city\");\r\n    const icon = document.getElementById(\"icon\");\r\n    const feelsLike = document.getElementById(\"feelsLike\");\r\n    const humidity = document.getElementById(\"humidity\");\r\n    const forecast = document.getElementById(\"forecast\");\r\n    const temp = document.getElementById(\"temp\");\r\n    const iconImg = _utils__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeIcon(weatherData.icon);\r\n    cityName.textContent = `${weatherData.cityName}`;\r\n    icon.src = \"./assets/img/\" + iconImg;\r\n    feelsLike.textContent = `${weatherData.feelsLike}`;\r\n    humidity.textContent = `${weatherData.humidity}`;\r\n    forecast.textContent = `${weatherData.forecast}`;\r\n    temp.textContent = `${weatherData.temp}º K`;\r\n  }\r\n\r\n  return { showResult };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domView);\r\n\n\n//# sourceURL=webpack://weather-app/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _weatherAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherAPI */ \"./src/weatherAPI.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _cityAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityAPI */ \"./src/cityAPI.js\");\n\r\n\r\n\r\n\r\nconst searchBtn = document.getElementById(\"search\");\r\nasync function defaultDom() {\r\n  const defaultData = await _weatherAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLocation(\"Buenos Aires\");\r\n  _cityAPI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getImage(defaultData);\r\n\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showResult(defaultData);\r\n}\r\n\r\ndefaultDom();\r\n\r\nsearchBtn.addEventListener(\"click\", async () => {\r\n  const userCity = document.getElementById(\"city\").value;\r\n  const weatherData = await _weatherAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getLocation(userCity);\r\n  _cityAPI__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getImage(userCity);\r\n  _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showResult(weatherData);\r\n});\r\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst changeData = (() => {\r\n  function changeIcon(icon) {\r\n    if (icon === \"01d\") {\r\n      return \"clearsky-day.svg\";\r\n    } else if (icon === \"01n\") {\r\n      return \"clearsky-night.svg\";\r\n    } else if (icon === \"02d\") {\r\n      return \"fewclouds-day.svg\";\r\n    } else if (icon === \"02n\") {\r\n      return \"fewclouds-night.svg\";\r\n    } else if (icon === \"03n\" || icon === \"03d\") {\r\n      return \"scatteredclouds.svg\";\r\n    } else if (icon === \"04n\" || icon === \"04d\") {\r\n      return \"scatteredclouds.svg\";\r\n    } else if (icon === \"09d\") {\r\n      return \"showerain-day.svg\";\r\n    } else if (icon === \"09n\") {\r\n      return \"showerain-night.svg\";\r\n    } else if (icon === \"10d\") {\r\n      return \"rain-day.svg\";\r\n    } else if (icon === \"10n\") {\r\n      return \"rain-night.svg\";\r\n    } else if (icon === \"11d\") {\r\n      return \"thunderstorm-day.svg\";\r\n    } else if (icon === \"11n\") {\r\n      return \"thunderstorm-night.svg\";\r\n    } else if (icon === \"13d\") {\r\n      return \"snow-day.svg\";\r\n    } else if (icon === \"13n\") {\r\n      return \"snow-night.svg\";\r\n    } else if (icon === \"50d\") {\r\n      return \"mist-day.svg\";\r\n    } else if (icon === \"50n\") {\r\n      return \"mist-night.svg\";\r\n    }\r\n  }\r\n\r\n  return { changeIcon };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (changeData);\r\n\n\n//# sourceURL=webpack://weather-app/./src/utils.js?");

/***/ }),

/***/ "./src/weatherAPI.js":
/*!***************************!*\
  !*** ./src/weatherAPI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst weatherAPI = (() => {\r\n  function convertData(data) {\r\n    const {\r\n      name: cityName,\r\n      main: { temp, feels_like: feelsLike, humidity },\r\n      weather: [{ icon, main: forecast }],\r\n    } = data;\r\n\r\n    return { cityName, temp, feelsLike, humidity, icon, forecast };\r\n  }\r\n\r\n  async function getLocation(city) {\r\n    try {\r\n      const response = await fetch(\r\n        \"https://api.openweathermap.org/data/2.5/weather?q=\" +\r\n          city +\r\n          \"&appid=3c76638c4deaee40b1a940d5c11f3d55\"\r\n      );\r\n      const data = convertData(await response.json());\r\n      return data;\r\n    } catch (err) {\r\n      console.error(\"error occurred: \", err.message);\r\n    }\r\n  }\r\n\r\n  return { getLocation };\r\n})();\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weatherAPI);\r\n\n\n//# sourceURL=webpack://weather-app/./src/weatherAPI.js?");

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
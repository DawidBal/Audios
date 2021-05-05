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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/auth */ \"./src/modules/auth.js\");\n\r\n\r\nconst loginBtn = document.querySelector('.js-login');\r\nloginBtn.addEventListener('click', _modules_auth__WEBPACK_IMPORTED_MODULE_0__.default.loginUser);\r\n\n\n//# sourceURL=webpack://api-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/auth.js":
/*!*****************************!*\
  !*** ./src/modules/auth.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userData */ \"./src/modules/userData.js\");\n\r\n\r\nconst CLIENT_ID = 'ed39e72a37664a05a5784f53ba95d6a9';\r\nconst REDIRECT_URI = 'http://127.0.0.1:5500/dist/';\r\nconst ENDPOINT = 'https://accounts.spotify.com/authorize';\r\n\r\nconst stateKey = 'spotify_auth_state';\r\n\r\n/**\r\n * Obtains parameters from the hash of the URL\r\n * @return Object\r\n */\r\nfunction getHashParams() {\r\n  const hashParams = {};\r\n  let e;\r\n  const r = /([^&;=]+)=?([^&;]*)/g;\r\n  const q = window.location.hash.substring(1);\r\n  while ((e = r.exec(q))) {\r\n    hashParams[e[1]] = decodeURIComponent(e[2]);\r\n  }\r\n  return hashParams;\r\n}\r\n\r\n/**\r\n * Generates a random string containing numbers and letters\r\n * @param  {number} length The length of the string\r\n * @return {string} The generated string\r\n */\r\nfunction generateRandomString(length) {\r\n  let text = '';\r\n  const possible =\r\n    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\r\n\r\n  for (let i = 0; i < length; i++) {\r\n    text += possible.charAt(Math.floor(Math.random() * possible.length));\r\n  }\r\n  return text;\r\n}\r\n\r\nconst params = getHashParams();\r\n\r\nconst { access_token } = params;\r\nconst { state } = params;\r\nconst storedState = localStorage.getItem(stateKey);\r\nif (access_token && (state == null || state !== storedState)) {\r\n  alert('There was an error during the authentication');\r\n} else {\r\n  localStorage.removeItem(stateKey);\r\n  if (access_token) {\r\n    _userData__WEBPACK_IMPORTED_MODULE_0__.default.showUserData(access_token);\r\n  }\r\n}\r\nconst loginUser = () => {\r\n  const state = generateRandomString(16);\r\n  localStorage.setItem(stateKey, state);\r\n  const scope = 'user-read-private user-read-email';\r\n\r\n  let url = ENDPOINT;\r\n  url += '?response_type=token';\r\n  url += `&client_id=${encodeURIComponent(CLIENT_ID)}`;\r\n  url += `&scope=${encodeURIComponent(scope)}`;\r\n  url += `&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;\r\n  url += `&state=${encodeURIComponent(state)}`;\r\n\r\n  window.location = url;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ loginUser });\r\n\n\n//# sourceURL=webpack://api-project/./src/modules/auth.js?");

/***/ }),

/***/ "./src/modules/userData.js":
/*!*********************************!*\
  !*** ./src/modules/userData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getUserData = async (authToken) => {\r\n  const response = await fetch('https://api.spotify.com/v1/me', {\r\n    headers: {\r\n      Authorization: `Bearer ${authToken}`,\r\n    },\r\n  });\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\nconst toggleLogin = () => {\r\n  const login = document.querySelector('.login');\r\n  const content = document.querySelector('.content');\r\n  login.classList.toggle('hidden');\r\n  content.classList.toggle('hidden');\r\n};\r\n\r\nconst showUserData = async (authToken) => {\r\n  toggleLogin();\r\n  const data = await getUserData(authToken);\r\n  const userLink = document.querySelector('.user-link');\r\n  const userAvatar = document.querySelector('.user-avatar');\r\n  userLink.href = data.external_urls.spotify;\r\n  userAvatar.src = data.images[0].url;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ showUserData });\r\n\n\n//# sourceURL=webpack://api-project/./src/modules/userData.js?");

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
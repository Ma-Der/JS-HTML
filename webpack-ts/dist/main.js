/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dog.ts":
/*!********************!*\
  !*** ./src/dog.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addH1 = exports.dog = void 0;
function dog(woof) {
    console.log(woof);
}
exports.dog = dog;
function addH1() {
    var h1Element = document.createElement('div');
    h1Element.innerHTML = "Hello my dear friend. :)";
    var welcome = document.getElementById('welcome');
    welcome.appendChild(h1Element);
    welcome.classList.add('welcome');
}
exports.addH1 = addH1;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var dog_1 = __webpack_require__(/*! ./dog */ "./src/dog.ts");
var age = 99;
console.log(age);
var obj = {
    one: {
        two: 'awooo',
    },
};
function woof(noise) {
    console.log(noise.one.two);
}
woof(obj);
dog_1.dog(obj.one.two);
dog_1.addH1();


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
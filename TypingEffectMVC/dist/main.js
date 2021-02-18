/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Controller.ts":
/*!***************************!*\
  !*** ./src/Controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Controller = void 0;
var Controller = /** @class */ (function () {
    function Controller(model, view) {
        this.model = model;
        this.view = view;
        this.setupModel();
    }
    Controller.prototype.typeForward = function () {
        var _this = this;
        if (this.model.index < this.model.elementText.length) {
            this.model.typeWrite();
            setTimeout(function () { return _this.typeForward(); }, this.model.delayTime);
        }
        else {
            this.typeBackward();
        }
        this.view.displayText(this.model.text);
    };
    Controller.prototype.typeBackward = function () {
        var _this = this;
        if (this.model.index > 0) {
            this.model.deleteTyping();
            setTimeout(function () { return _this.typeBackward(); }, this.model.delayTime);
        }
        else {
            this.typeForward();
        }
        this.view.displayText(this.model.text);
    };
    Controller.prototype.typeWordsForward = function () {
        var _this = this;
        if (this.model.index < this.model.wordsArray.length) {
            this.model.typeWords();
            setTimeout(function () { return _this.typeWordsForward(); }, this.model.delayTime);
        }
        else {
            this.typeWordsBackwards();
        }
        this.view.displayText(this.model.words.join(" "));
    };
    Controller.prototype.typeWordsBackwards = function () {
        var _this = this;
        if (this.model.index > 0) {
            this.model.deleteWords();
            setTimeout(function () { return _this.typeWordsBackwards(); }, this.model.delayTime);
        }
        else {
            this.typeWordsForward();
        }
        this.view.displayText(this.model.words.join(" "));
    };
    Controller.prototype.setupModel = function () {
        this.model.setText(this.view.text);
        this.model.setWordsArray(this.view.text);
        this.model.setDelay(this.view.getDelay());
    };
    return Controller;
}());
exports.Controller = Controller;


/***/ }),

/***/ "./src/Model.ts":
/*!**********************!*\
  !*** ./src/Model.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Model = void 0;
var Model = /** @class */ (function () {
    function Model() {
        this.delayTime = this.setDelay();
        this.elementText = "";
        this.text = "";
        this.wordsArray = [];
        this.words = [];
        this.index = 0;
    }
    Model.prototype.setText = function (text) {
        this.elementText = text;
    };
    Model.prototype.setWordsArray = function (text) {
        this.wordsArray = text.split(" ");
    };
    Model.prototype.setDelay = function (delay) {
        if (delay === void 0) { delay = 500; }
        this.delayTime = 60000 / delay;
        return 60000 / delay;
    };
    Model.prototype.typeWrite = function () {
        this.text = this.elementText.slice(0, ++this.index);
    };
    Model.prototype.deleteTyping = function () {
        this.text = this.elementText.slice(0, --this.index);
    };
    Model.prototype.typeWords = function () {
        this.words = this.wordsArray.slice(0, ++this.index);
    };
    Model.prototype.deleteWords = function () {
        this.words = this.wordsArray.slice(0, --this.index);
    };
    return Model;
}());
exports.Model = Model;


/***/ }),

/***/ "./src/TypingEffect.ts":
/*!*****************************!*\
  !*** ./src/TypingEffect.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypingEffect = void 0;
var Controller_1 = __webpack_require__(/*! ./Controller */ "./src/Controller.ts");
var Model_1 = __webpack_require__(/*! ./Model */ "./src/Model.ts");
var View_1 = __webpack_require__(/*! ./View */ "./src/View.ts");
var TypingEffect = /** @class */ (function () {
    function TypingEffect(elementHTML, isWords) {
        if (isWords === void 0) { isWords = false; }
        this.isWords = isWords;
        this.view = new View_1.View();
        this.model = new Model_1.Model();
        this.view.getText(elementHTML);
        this.controller = new Controller_1.Controller(this.model, this.view);
    }
    TypingEffect.prototype.startType = function () {
        if (this.isWords === false) {
            this.controller.typeForward();
        }
        else {
            this.controller.typeWordsForward();
        }
    };
    return TypingEffect;
}());
exports.TypingEffect = TypingEffect;


/***/ }),

/***/ "./src/View.ts":
/*!*********************!*\
  !*** ./src/View.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
var View = /** @class */ (function () {
    function View() {
        this.elementHTML = null;
        this.text = "";
    }
    View.prototype._clearHtmlElement = function (elementHTML) {
        elementHTML.textContent = null;
    };
    View.prototype._setElementText = function (elementHTML) {
        this.elementHTML = elementHTML;
    };
    View.prototype.getText = function (elementHTML) {
        this._setElementText(elementHTML);
        var text = elementHTML.innerHTML;
        this.text = text;
        this._clearHtmlElement(elementHTML);
        return text;
    };
    View.prototype.getDelay = function (delay) {
        if (delay === void 0) { delay = 500; }
        return delay;
    };
    View.prototype.displayText = function (text) {
        if (this.elementHTML)
            this.elementHTML.classList.add("type");
        if (this.elementHTML)
            this.elementHTML.innerHTML = "<span class='text'>" + text + "</span>";
    };
    return View;
}());
exports.View = View;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var TypingEffect_1 = __webpack_require__(/*! ./TypingEffect */ "./src/TypingEffect.ts");
var typeWriter = document.getElementById("typeWriter");
var typingEffect = new TypingEffect_1.TypingEffect(typeWriter, false);
typingEffect.startType();


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
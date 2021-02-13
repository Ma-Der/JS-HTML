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
        this.isWords = false;
    }
    Controller.prototype.type = function () {
        var _this = this;
        this.model.setText(this.view.text);
        this.model.setWordsArray(this.view.text);
        this.model.setDelay(this.view.getDelay());
        if (this.isWords === false) {
            setInterval(function () { return _this.view.displayText(_this.model.typeWrite()); }, this.model.delayTime);
        }
        else {
            setInterval(function () { return _this.view.displayText(_this.model.typeWords()); }, this.model.delayTime);
        }
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
        this.elementText = '';
        this.text = '';
        this.wordsArray = [];
        this.words = [];
        this.index = 0;
    }
    Model.prototype.setText = function (text) {
        this.elementText = text;
        return text;
    };
    Model.prototype.setWordsArray = function (text) {
        this.wordsArray = text.split(' ');
    };
    Model.prototype.setDelay = function (delay) {
        if (delay === void 0) { delay = 500; }
        this.delayTime = 60000 / delay;
        return 60000 / delay;
    };
    Model.prototype.typeWrite = function () {
        var _this = this;
        if (this.index < this.elementText.length) {
            this.text = this.elementText.slice(0, ++this.index);
            setTimeout(function () { return _this.typeWrite(); }, this.delayTime);
        }
        else {
            this.deleteTyping();
        }
        return this.text;
    };
    Model.prototype.deleteTyping = function () {
        var _this = this;
        if (this.index > 0) {
            this.text = this.elementText.slice(0, --this.index);
            setTimeout(function () { return _this.deleteTyping(); }, this.delayTime);
        }
        else {
            this.typeWrite();
        }
        return this.text;
    };
    Model.prototype.typeWords = function () {
        var _this = this;
        if (this.index < this.wordsArray.length) {
            this.words = this.wordsArray.slice(0, ++this.index);
            setTimeout(function () { return _this.typeWords(); }, this.delayTime);
        }
        else {
            this.deleteWords();
        }
        return this.words.join(' ');
    };
    Model.prototype.deleteWords = function () {
        var _this = this;
        if (this.index > 0) {
            this.words = this.wordsArray.slice(0, --this.index);
            setTimeout(function () { return _this.deleteWords(); }, this.delayTime);
        }
        else {
            this.typeWords();
        }
        return this.words.join(' ');
    };
    return Model;
}());
exports.Model = Model;


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
        this.text = '';
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
            this.elementHTML.classList.add('type');
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
var Controller_1 = __webpack_require__(/*! ./Controller */ "./src/Controller.ts");
var Model_1 = __webpack_require__(/*! ./Model */ "./src/Model.ts");
var View_1 = __webpack_require__(/*! ./View */ "./src/View.ts");
var typeWriter = document.getElementById('typeWriter');
var view = new View_1.View();
view.getText(typeWriter);
var app = new Controller_1.Controller(new Model_1.Model(), view);
app.type();


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
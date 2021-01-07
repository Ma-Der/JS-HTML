"use strict";
exports.__esModule = true;
exports.TypingEffect = void 0;
var UI_1 = require("./UI");
var TypingEffect = /** @class */ (function () {
    function TypingEffect(elementHtml, delayTime) {
        this.elementHtml = elementHtml;
        this.delayTime = delayTime;
        this.elementText = this.elementHtml.innerHTML;
        this.text = '';
        this.words = [];
        this.index = 0;
        this.clearHtmlElement();
    }
    TypingEffect.prototype.clearHtmlElement = function () {
        this.elementHtml.textContent = null;
    };
    TypingEffect.prototype.typeWrite = function () {
        var _this = this;
        if (this.index < this.elementText.length) {
            this.text = this.elementText.slice(0, ++this.index);
            setTimeout(function () { return _this.typeWrite(); }, this.delayTime);
        }
        else {
            this.deleteTyping();
        }
        this.show(this.text);
    };
    TypingEffect.prototype.deleteTyping = function () {
        var _this = this;
        if (this.index > 0) {
            this.text = this.elementText.slice(0, --this.index);
            setTimeout(function () { return _this.deleteTyping(); }, this.delayTime);
        }
        else {
            this.typeWrite();
        }
        this.show(this.text);
    };
    TypingEffect.prototype.typeWords = function () {
        var _this = this;
        var wordsArray = this.elementText.split(' ');
        if (this.index < wordsArray.length) {
            this.words = wordsArray.slice(0, ++this.index);
            setTimeout(function () { return _this.typeWords(); }, this.delayTime);
        }
        else {
            this.deleteWords();
        }
        this.show(this.words.join(' '));
    };
    TypingEffect.prototype.deleteWords = function () {
        var _this = this;
        var words = this.elementText.split(' ');
        if (this.index > 0) {
            var test = words.slice(0, --this.index);
            this.words = test;
            setTimeout(function () { return _this.deleteWords(); }, this.delayTime);
        }
        else {
            this.typeWords();
        }
        this.show(this.words.join(' '));
    };
    TypingEffect.prototype.show = function (text) {
        var userInterface = new UI_1.UI(this.elementHtml);
        userInterface.display(text);
    };
    return TypingEffect;
}());
exports.TypingEffect = TypingEffect;

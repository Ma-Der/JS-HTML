var TypingEffect = /** @class */ (function () {
    function TypingEffect(elementHtml, delayTime) {
        this.elementHtml = elementHtml;
        this.delayTime = delayTime;
        this.elementText = this.elementHtml.innerHTML;
        this.text = '';
        this.wordsArray = this.elementText.split(' ');
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
        if (this.index < this.wordsArray.length) {
            this.words = this.wordsArray.slice(0, ++this.index);
            setTimeout(function () { return _this.typeWords(); }, this.delayTime);
        }
        else {
            this.deleteWords();
        }
        this.show(this.words.join(' '));
    };
    TypingEffect.prototype.deleteWords = function () {
        var _this = this;
        if (this.index > 0) {
            this.words = this.wordsArray.slice(0, --this.index);
            setTimeout(function () { return _this.deleteWords(); }, this.delayTime);
        }
        else {
            this.typeWords();
        }
        this.show(this.words.join(' '));
    };
    TypingEffect.prototype.show = function (text) {
        var userInterface = new UI(this.elementHtml);
        userInterface.display(text);
    };
    return TypingEffect;
}());
var Typed = /** @class */ (function () {
    function Typed(elementHtml, letterPerMinute, isWords) {
        if (letterPerMinute === void 0) { letterPerMinute = 500; }
        if (isWords === void 0) { isWords = false; }
        this.elementHtml = elementHtml;
        this.delayTime = 60000 / letterPerMinute;
        this.isWords = isWords;
        this.type();
    }
    Typed.prototype.type = function () {
        var typinEffect = new TypingEffect(this.elementHtml, this.delayTime);
        if (this.isWords === false) {
            typinEffect.typeWrite();
        }
        else {
            typinEffect.typeWords();
        }
    };
    return Typed;
}());
var UI = /** @class */ (function () {
    function UI(elementHtml) {
        this.elementHtml = elementHtml;
    }
    UI.prototype.display = function (text) {
        this.elementHtml.classList.add('type');
        this.elementHtml.innerHTML = "<span class='text'>" + text + "</span>";
    };
    return UI;
}());
var typeWriter = document.querySelector('#typeWriter');
var krol = document.querySelector('#krol');
new Typed(typeWriter, 100, true);
new Typed(krol, 200);

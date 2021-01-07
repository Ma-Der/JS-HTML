"use strict";
exports.__esModule = true;
exports.Typed = void 0;
var TypingEffect_1 = require("./TypingEffect");
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
        var typinEffect = new TypingEffect_1.TypingEffect(this.elementHtml, this.delayTime);
        if (this.isWords === false) {
            typinEffect.typeWrite();
        }
        else {
            typinEffect.typeWords();
        }
    };
    return Typed;
}());
exports.Typed = Typed;

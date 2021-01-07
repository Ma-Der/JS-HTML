"use strict";
exports.__esModule = true;
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI(elementHtml) {
        this.elementHtml = elementHtml;
    }
    UI.prototype.display = function (text) {
        this.elementHtml.textContent = text;
    };
    return UI;
}());
exports.UI = UI;

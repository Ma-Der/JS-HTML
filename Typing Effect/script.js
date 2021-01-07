"use strict";
exports.__esModule = true;
var Typed_1 = require("./Typed");
var typeWriter = document.querySelector('#typeWriter');
var krol = document.querySelector('#krol');
if (typeWriter) {
    new Typed_1.Typed(typeWriter, 100, true);
}
if (krol) {
    new Typed_1.Typed(krol, 200);
}

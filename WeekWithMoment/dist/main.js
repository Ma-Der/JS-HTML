/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var timer_1 = __webpack_require__(/*! ./timer */ "./src/timer.ts");
var calendar = document.getElementById("app");
var actualDate = new Date();
var renderCalendar = function () {
    var firstDayOfTheWeek = function (now) {
        var day = now.getDay();
        var firstDay = now.getDate() - day + (day === 0 ? -6 : 1);
        return new Date(now.setDate(firstDay));
    };
    var lastDayOfTheWeek = function (now) {
        var day = now.getDay();
        var lastDay = now.getDate() - day + (day === 0 ? -6 : 1) + 6;
        return new Date(now.setDate(lastDay));
    };
    var daysInMonth = function (month, year) {
        return new Date(year, month, 0).getDate();
    };
    var week = function (date, firstDay, lastDay) {
        var weekArray = [];
        var dayOfTheWeek;
        if (lastDay < firstDay) {
            var numberOfDaysMonth = daysInMonth(firstDayOfTheWeek(date).getMonth() + 1, firstDayOfTheWeek(date).getFullYear());
            for (var k = firstDay; k <= numberOfDaysMonth; k++) {
                dayOfTheWeek = new Date(date.getFullYear(), date.getMonth(), k);
                weekArray.push(dayOfTheWeek);
            }
            for (var j = 1; j <= lastDay; j++) {
                dayOfTheWeek = new Date(date.getFullYear(), date.getMonth() + 1, j);
                weekArray.push(dayOfTheWeek);
            }
            return weekArray;
        }
        for (var i = firstDay; i <= lastDay; i++) {
            dayOfTheWeek = new Date(date.getFullYear(), date.getMonth(), i);
            weekArray.push(dayOfTheWeek);
        }
        return weekArray;
    };
    var actualWeek = week(actualDate, firstDayOfTheWeek(actualDate).getDate(), lastDayOfTheWeek(actualDate).getDate());
    var days = "";
    actualWeek.forEach(function (day) {
        if (day.getDate() === new Date().getDate() && actualDate.getMonth() === new Date().getMonth()) {
            days += "<div class=\"today\">" + day.getDate() + "</div>";
        }
        if (day.getDate() > new Date().getDate()) {
            days += "<div class=\"future-days\">" + day.getDate() + "</div>";
        }
        else if (day.getDate() < new Date().getDate()) {
            days += "<div class=\"past-days\">" + day.getDate() + "</div>";
        }
    });
    calendar.innerHTML = days;
};
var weekdayNamesArray = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"];
var weekDays = document.getElementById("weekDays");
for (var i = 0; i <= 6; i++) {
    weekDays.innerHTML += "<div>" + weekdayNamesArray[i] + "</div>";
}
var topDate = document.getElementById('actual-date');
topDate.innerHTML = new Date().toLocaleString('PL', { year: 'numeric', month: 'long', day: 'numeric' });
var timex = document.getElementById('timer');
timer_1.timer(timex);
renderCalendar();
var prev = document.getElementById("prev");
var next = document.getElementById("next");
prev.addEventListener("click", function () {
    actualDate.setDate(actualDate.getDate() - 7);
    renderCalendar();
});
next.addEventListener("click", function () {
    actualDate.setDate(actualDate.getDate() + 7);
    renderCalendar();
});


/***/ }),

/***/ "./src/timer.ts":
/*!**********************!*\
  !*** ./src/timer.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.timer = void 0;
var timer = function (element) {
    var time = function () {
        var hours = new Date().getHours();
        var minutes = new Date().getMinutes();
        var seconds = new Date().getSeconds();
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        element.innerHTML = hours + ":" + minutes + ":" + seconds;
        setTimeout(time, 1000);
    };
    time();
};
exports.timer = timer;


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
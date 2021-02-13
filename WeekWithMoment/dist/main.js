/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var paginateArray_1 = __webpack_require__(/*! ./paginateArray */ "./src/paginateArray.ts");
var timer_1 = __webpack_require__(/*! ./timer */ "./src/timer.ts");
var actualDate = new Date();
var settings = { entriesOnPage: 7, paginateArrayIdx: 1 };
var calendar = function () {
    var actualDayInMonthRender = function (i) {
        var day = [];
        if (i === new Date().getDate() && actualDate.getMonth() === new Date().getMonth() && new Date().getFullYear() === actualDate.getFullYear()) {
            return day[i] = "<div class=\"today\">" + i + "</div>";
        }
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && i > new Date().getDate())
            return day[i] = "<div class=\"next-date\">" + i + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && i < new Date().getDate())
            return day[i] = "<div class=\"prev-date\">" + i + "</div>";
        if (new Date().getMonth() > actualDate.getMonth())
            return day[i] = "<div class=\"prev-date\">" + i + "</div>";
        if (new Date().getFullYear() > actualDate.getFullYear())
            return day[i] = "<div class=\"prev-date\">" + i + "</div>";
        return day[i] = "<div class=\"next-date\">" + i + "</div>";
    };
    var previousFutureDaysRender = function (index, days, day) {
        if (new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index > new Date().getDate())
            days[index] = "<div class=\"prev-date\">" + day + "</div>";
        if (new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index < new Date().getDate())
            days[index] = "<div class=\"prev-date\">" + day + "</div>";
        if (new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index > new Date().getDate())
            days[index] = "<div class=\"prev-date\">" + day + "</div>";
        if (new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index < new Date().getDate())
            days[index] = "<div class=\"prev-date\">" + day + "</div>";
        if (new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index > new Date().getDate())
            days[index] = "<div class=\"prev-date\">" + day + "</div>";
        if (new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index < new Date().getDate())
            days[index] = "<div class=\"prev-date\">" + day + "</div>";
        if (new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index < new Date().getDate())
            days[index] = "<div class=\"next-date\">" + day + "</div>";
        if (new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index > new Date().getDate())
            days[index] = "<div class=\"next-date\">" + day + "</div>";
        if (new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index < new Date().getDate())
            days[index] = "<div class=\"next-date\">" + day + "</div>";
        if (new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index > new Date().getDate())
            days[index] = "<div class=\"next-date\">" + day + "</div>";
        if (new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index < new Date().getDate())
            days[index] = "<div class=\"next-date\">" + day + "</div>";
        if (new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index > new Date().getDate())
            days[index] = "<div class=\"next-date\">" + day + "</div>";
    };
    actualDate.setDate(new Date().getDate());
    var monthDays = document.querySelector(".days");
    var lastDay = new Date(actualDate.getFullYear(), actualDate.getMonth() + 1, 0).getDate();
    var prevLastDay = new Date(actualDate.getFullYear(), actualDate.getMonth(), 0).getDate();
    var firstDayIndex = actualDate.getDay();
    var lastDayIndex = new Date(actualDate.getFullYear(), actualDate.getMonth() + 1, 0).getDay();
    var nextDays = 7 - lastDayIndex - 1;
    var months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    var month = document.querySelector(".date h1");
    var date = document.querySelector(".date p");
    month.innerHTML = months[actualDate.getMonth()];
    date.innerHTML = new Date().toLocaleDateString('pl-PL', { year: 'numeric', weekday: 'long', month: 'long', day: 'numeric' });
    var pastDays = [];
    var actualDays = [];
    var futureDays = [];
    for (var j = firstDayIndex; j > 0; j--) {
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && j > new Date().getDate())
            pastDays[j] = "<div class=\"prev-date\">" + (prevLastDay - j + 1) + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && j < new Date().getDate())
            pastDays[j] = "<div class=\"prev-date\">" + (prevLastDay - j + 1) + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && j > new Date().getDate())
            pastDays[j] = "<div class=\"prev-date\">" + (prevLastDay - j + 1) + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && j < new Date().getDate())
            pastDays[j] = "<div class=\"prev-date\">" + (prevLastDay - j + 1) + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && j < new Date().getDate())
            pastDays[j] = "<div class=\"next-date\">" + (prevLastDay - j + 1) + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && j < new Date().getDate())
            pastDays[j] = "<div class=\"next-date\">" + (prevLastDay - j + 1) + "</div>";
        previousFutureDaysRender(j, pastDays, prevLastDay - j + 1);
    }
    pastDays = pastDays.reverse();
    for (var i = 1; i <= lastDay; i++) {
        actualDays[i] = actualDayInMonthRender(i);
    }
    for (var k = 1; k <= nextDays; k++) {
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && k > new Date().getDate())
            futureDays[k] = "<div class=\"prev-date\">" + k + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && k < new Date().getDate())
            futureDays[k] = "<div class=\"next-date\">" + k + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && k > new Date().getDate())
            futureDays[k] = "<div class=\"next-date\">" + k + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && k < new Date().getDate())
            futureDays[k] = "<div class=\"next-date\">" + k + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && k < new Date().getDate())
            futureDays[k] = "<div class=\"next-date\">" + k + "</div>";
        if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && k < new Date().getDate())
            futureDays[k] = "<div class=\"next-date\">" + k + "</div>";
        previousFutureDaysRender(k, futureDays, k);
    }
    var wholeMonthArr = __spreadArrays(pastDays, actualDays, futureDays);
    var monthArray = wholeMonthArr.filter(function (day) { return day !== undefined || null; });
    /*
    const actualDayIndex = monthArray.map(day => {
      const dayOfTheWeek = new Date().getDate();
      var r = /\d+/;
      const matcher = day.match(r) as RegExpMatchArray;
      if(parseInt(matcher[0]) === dayOfTheWeek) return parseInt(matcher[0]);
    }).findIndex(day => day !== undefined);
    if(actualDayIndex >= 0 && actualDayIndex <= 6) settings.paginateArrayIdx = 1;
    if(actualDayIndex >= 7 && actualDayIndex <= 13) settings.paginateArrayIdx = 2;
    if(actualDayIndex >= 14 && actualDayIndex <= 20) settings.paginateArrayIdx = 3;
    if(actualDayIndex >= 21 && actualDayIndex <= 27) settings.paginateArrayIdx = 4;
    if(actualDayIndex >= 28 && actualDayIndex <= 35) settings.paginateArrayIdx = 5;
    */
    monthDays.innerHTML = paginateArray_1.paginateArray(monthArray, settings).join("");
};
var time = document.getElementById('timer');
var prevWeek = document.querySelector(".prev-week");
var nextWeek = document.querySelector(".next-week");
var prevMonth = document.querySelector(".prev-month");
var nextMonth = document.querySelector(".next-month");
timer_1.timer(time);
prevWeek.addEventListener("click", function () {
    if (settings.paginateArrayIdx === 1) {
        actualDate.setMonth(actualDate.getMonth() - 1);
        settings.paginateArrayIdx = 5;
    }
    else {
        settings.paginateArrayIdx--;
    }
    calendar();
});
nextWeek.addEventListener("click", function () {
    if (settings.paginateArrayIdx === 5) {
        actualDate.setMonth(actualDate.getMonth() + 1);
        settings.paginateArrayIdx = 1;
    }
    else {
        settings.paginateArrayIdx++;
    }
    calendar();
});
prevMonth.addEventListener("click", function () {
    actualDate.setMonth(actualDate.getMonth() - 1);
    settings.paginateArrayIdx = 1;
    calendar();
});
nextMonth.addEventListener("click", function () {
    actualDate.setMonth(actualDate.getMonth() + 1);
    settings.paginateArrayIdx = 1;
    calendar();
});
calendar();


/***/ }),

/***/ "./src/paginateArray.ts":
/*!******************************!*\
  !*** ./src/paginateArray.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paginateArray = void 0;
function paginateArray(dataEntries, settings) {
    if (dataEntries.length === 0)
        throw new Error("Array is empty, nothing to paginate.");
    var paginateArrayIdx = settings.paginateArrayIdx, entriesOnPage = settings.entriesOnPage;
    if (isNaN(paginateArrayIdx) || isNaN(entriesOnPage)) {
        throw new Error("Both settings must be numbers.");
    }
    if (!(paginateArrayIdx > 0 && entriesOnPage > 0))
        throw new Error("Both settings variables must be > 0");
    var areAvailableEntriesOnPage = Math.ceil(dataEntries.length / entriesOnPage) >= paginateArrayIdx;
    if (!areAvailableEntriesOnPage)
        throw new Error("You only can paginate into maximum of " +
            Math.ceil(dataEntries.length / entriesOnPage) +
            " pages.");
    var indexOfLastPosition = paginateArrayIdx * entriesOnPage;
    var indexOfFirstPosition = indexOfLastPosition - entriesOnPage;
    var entriesOnSelectedPage = dataEntries.slice(indexOfFirstPosition, indexOfLastPosition);
    return entriesOnSelectedPage;
}
exports.paginateArray = paginateArray;


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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./src/index.ts");
/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

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

/******/ })()
;
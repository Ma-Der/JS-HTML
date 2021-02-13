import { paginateArray } from './paginateArray'; 
import { timer } from './timer';

const actualDate = new Date();
const settings = { entriesOnPage: 7, paginateArrayIdx: 1 };

const calendar = () => {

  const actualDayInMonthRender = (i: number) => {
    let day: string[] = [];
    if (i === new Date().getDate() && actualDate.getMonth() === new Date().getMonth() && new Date().getFullYear() === actualDate.getFullYear()) {
      return day[i] = `<div class="today">${i}</div>`;
    }
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && i > new Date().getDate()) return day[i] = `<div class="next-date">${i}</div>`;
    if (new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && i < new Date().getDate()) return day[i] = `<div class="prev-date">${i}</div>`;
    if(new Date().getMonth() > actualDate.getMonth()) return day[i] = `<div class="prev-date">${i}</div>`;
    if(new Date().getFullYear() > actualDate.getFullYear()) return day[i] = `<div class="prev-date">${i}</div>`;
    
    return day[i] = `<div class="next-date">${i}</div>`;
  };

  const previousFutureDaysRender = (index: number, days: string[], day: number): void => {
    
    if(new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index > new Date().getDate()) days[index] = `<div class="prev-date">${day}</div>`;
    if(new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index < new Date().getDate()) days[index] = `<div class="prev-date">${day}</div>`;
    if(new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index > new Date().getDate()) days[index] = `<div class="prev-date">${day}</div>`;
    if(new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index < new Date().getDate()) days[index] = `<div class="prev-date">${day}</div>`;
    if(new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index > new Date().getDate()) days[index] = `<div class="prev-date">${day}</div>`;
    if(new Date().getFullYear() > actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index < new Date().getDate()) days[index] = `<div class="prev-date">${day}</div>`;
    
    if(new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index < new Date().getDate()) days[index] = `<div class="next-date">${day}</div>`;
    if(new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && index > new Date().getDate()) days[index] = `<div class="next-date">${day}</div>`;
    if(new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index < new Date().getDate()) days[index] = `<div class="next-date">${day}</div>`;
    if(new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && index > new Date().getDate()) days[index] = `<div class="next-date">${day}</div>`;
    if(new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index < new Date().getDate()) days[index] = `<div class="next-date">${day}</div>`;
    if(new Date().getFullYear() < actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && index > new Date().getDate()) days[index] = `<div class="next-date">${day}</div>`;

  }

  actualDate.setDate(new Date().getDate());

  const monthDays = document.querySelector(".days") as Element;
  const lastDay = new Date(actualDate.getFullYear(), actualDate.getMonth() + 1, 0).getDate();

  const prevLastDay = new Date(actualDate.getFullYear(), actualDate.getMonth(), 0).getDate();

  const firstDayIndex = actualDate.getDay();
  const lastDayIndex = new Date(actualDate.getFullYear(), actualDate.getMonth() + 1, 0).getDay(); 

  const nextDays = 7 - lastDayIndex - 1;

  const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];

  const month = document.querySelector(".date h1") as HTMLElement;
  const date = document.querySelector(".date p") as HTMLElement;

  month.innerHTML = months[actualDate.getMonth()];
  date.innerHTML = new Date().toLocaleDateString('pl-PL', {year: 'numeric', weekday: 'long', month: 'long', day: 'numeric'});

  let pastDays: string[] = [];
  let actualDays: string[] = [];
  let futureDays: string[] = [];

  
  for (let j = firstDayIndex; j > 0; j--) {
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && j > new Date().getDate()) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && j < new Date().getDate()) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && j > new Date().getDate()) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && j < new Date().getDate()) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && j < new Date().getDate()) pastDays[j] = `<div class="next-date">${prevLastDay - j + 1}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && j < new Date().getDate()) pastDays[j] = `<div class="next-date">${prevLastDay - j + 1}</div>`;

    previousFutureDaysRender(j, pastDays, prevLastDay - j + 1);
  }
  pastDays = pastDays.reverse();

  for (let i = 1; i <= lastDay; i++) {
    actualDays[i] = actualDayInMonthRender(i);
  }

  for (let k = 1; k <= nextDays; k++) {
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && k > new Date().getDate()) futureDays[k] = `<div class="prev-date">${k}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() === actualDate.getMonth() && k < new Date().getDate()) futureDays[k] = `<div class="next-date">${k}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && k > new Date().getDate()) futureDays[k] = `<div class="next-date">${k}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() > actualDate.getMonth() && k < new Date().getDate()) futureDays[k] = `<div class="next-date">${k}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && k < new Date().getDate()) futureDays[k] = `<div class="next-date">${k}</div>`;
    if(new Date().getFullYear() === actualDate.getFullYear() && new Date().getMonth() < actualDate.getMonth() && k < new Date().getDate()) futureDays[k] = `<div class="next-date">${k}</div>`;

    previousFutureDaysRender(k, futureDays, k);
  }

  const wholeMonthArr = [...pastDays, ...actualDays, ...futureDays];
  const monthArray = wholeMonthArr.filter((day) => day !== undefined || null);

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
  

  monthDays.innerHTML = paginateArray(monthArray, settings).join("");
};

const time = document.getElementById('timer') as HTMLElement;
const prevWeek = document.querySelector(".prev-week") as HTMLElement;
const nextWeek = document.querySelector(".next-week") as HTMLElement;
const prevMonth = document.querySelector(".prev-month") as HTMLElement;
const nextMonth = document.querySelector(".next-month") as HTMLElement;

timer(time);

prevWeek.addEventListener("click", () => {
  if (settings.paginateArrayIdx === 1) {
    actualDate.setMonth(actualDate.getMonth() - 1);
    settings.paginateArrayIdx = 5;
  } else {
    settings.paginateArrayIdx--;
  }
  calendar();
});
nextWeek.addEventListener("click", () => {
  if (settings.paginateArrayIdx === 5) {
    actualDate.setMonth(actualDate.getMonth() + 1);
    settings.paginateArrayIdx = 1;
  } else {
    settings.paginateArrayIdx++;
  }
  calendar();
});

prevMonth.addEventListener("click", () => {
  actualDate.setMonth(actualDate.getMonth() - 1);
  settings.paginateArrayIdx = 1;
  calendar();
});

nextMonth.addEventListener("click", () => {
  actualDate.setMonth(actualDate.getMonth() + 1);
  settings.paginateArrayIdx = 1;
  calendar();
});

calendar();
import moment from 'moment';
import { paginateArray } from './paginateArray';
import { timer } from './timer';

const actualDate = moment();
const settings = { entriesOnPage: 7, paginateArrayIdx: 1 };

export const calendar = () => {

  const actualDayRender = (i: number) => {
    let day: string[] = [];
    if (i === moment().get('date') && actualDate.get('month') === moment().get('month') && moment().get('year') === actualDate.get('year')) {
      return day[i] = `<div class="today">${i}</div>`;
    }
    if(moment().get('year') === actualDate.get('year') && moment().get('month') === actualDate.get('month') && i > moment().get('date')) return day[i] = `<div class="next-date">${i}</div>`;
    if (moment().get('year') === actualDate.get('year') && moment().get('month') === actualDate.get('month') && i < moment().get('date')) return day[i] = `<div class="prev-date">${i}</div>`;
    if(moment().get('month') > actualDate.get('month')) return day[i] = `<div class="prev-date">${i}</div>`;
    if(moment().get('year') > actualDate.get('year')) return day[i] = `<div class="prev-date">${i}</div>`;
    
    return day[i] = `<div class="next-date">${i}</div>`;
  };

const previousFutureDaysRender = (index: number, days: string[], day: number) => {

  if(moment().get('year') > actualDate.get('year') && moment().get('month') === actualDate.get('month') && index > moment().get('date')) days[index] = `<div class="prev-date">${day}</div>`;
  if(moment().get('year') > actualDate.get('year') && moment().get('month') === actualDate.get('month') && index < moment().get('date')) days[index] = `<div class="prev-date">${day}</div>`;
  if(moment().get('year') > actualDate.get('year') && moment().get('month') > actualDate.get('month') && index > moment().get('date')) days[index] = `<div class="prev-date">${day}</div>`;
  if(moment().get('year') > actualDate.get('year') && moment().get('month') > actualDate.get('month') && index < moment().get('date')) days[index] = `<div class="prev-date">${day}</div>`;
  if(moment().get('year') > actualDate.get('year') && moment().get('month') < actualDate.get('month') && index > moment().get('date')) days[index] = `<div class="prev-date">${day}</div>`;
  if(moment().get('year') > actualDate.get('year') && moment().get('month') < actualDate.get('month') && index < moment().get('date')) days[index] = `<div class="prev-date">${day}</div>`;
  
  if(moment().get('year') < actualDate.get('year') && moment().get('month') === actualDate.get('month') && index < moment().get('date')) days[index] = `<div class="next-date">${day}</div>`;
  if(moment().get('year') < actualDate.get('year') && moment().get('month') === actualDate.get('month') && index > moment().get('date')) days[index] = `<div class="next-date">${day}</div>`;
  if(moment().get('year') < actualDate.get('year') && moment().get('month') < actualDate.get('month') && index < moment().get('date')) days[index] = `<div class="next-date">${day}</div>`;
  if(moment().get('year') < actualDate.get('year') && moment().get('month') < actualDate.get('month') && index > moment().get('date')) days[index] = `<div class="next-date">${day}</div>`;
  if(moment().get('year') < actualDate.get('year') && moment().get('month') > actualDate.get('month') && index < moment().get('date')) days[index] = `<div class="next-date">${day}</div>`;
  if(moment().get('year') < actualDate.get('year') && moment().get('month') > actualDate.get('month') && index > moment().get('date')) days[index] = `<div class="next-date">${day}</div>`;
}

    moment().set('date', 1);
    const actualDay = moment().get('date');
    const acutalMonth = moment().get('month');
    
  
    const monthDays = document.querySelector(".days") as Element;
    const lastDay = moment().year(moment().year()).month(moment().month()+1).date(0).get('date');
    
  
    const prevLastDay = moment().year(moment().year()).month(moment().month()).date(0).get('date');
  
    const firstDayIndex = actualDate.get('day');
    const lastDayIndex = moment().year(moment().year()).month(moment().month()+1).date(0).get('day');
  
    const nextDays = 7 - lastDayIndex - 1;
  
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
  
    const month = document.querySelector(".date h1") as HTMLElement;
    const date = document.querySelector(".date p") as HTMLElement;
  
    month.innerHTML = months[actualDate.get('month')];
    date.innerHTML = moment().format("DD-MM-YYYY");
  
    let pastDays: string[] = [];
    let actualDays: string[] = [];
    let futureDays: string[] = [];
  
    for (let j = firstDayIndex; j > 0; j--) {
      if(moment().get('year') === actualDate.get('year') && moment().get('month') === actualDate.get('month') && j > moment().get('date')) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') === actualDate.get('month') && j < moment().get('date')) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') > actualDate.get('month') && j > moment().get('date')) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') > actualDate.get('month') && j < moment().get('date')) pastDays[j] = `<div class="prev-date">${prevLastDay - j + 1}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') < actualDate.get('month') && j < moment().get('date')) pastDays[j] = `<div class="next-date">${prevLastDay - j + 1}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') < actualDate.get('month') && j < moment().get('date')) pastDays[j] = `<div class="next-date">${prevLastDay - j + 1}</div>`;
      
      previousFutureDaysRender(j, pastDays, prevLastDay - j + 1);
    }
    pastDays = pastDays.reverse();
  
    for (let i = 1; i <= lastDay; i++) {
      actualDays[i] = actualDayRender(i);
    }
  
    for (let k = 1; k <= nextDays; k++) {
      if(moment().get('year') === actualDate.get('year') && moment().get('month') === actualDate.get('month') && k > moment().get('date')) futureDays[k] = `<div class="prev-date">${k}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') === actualDate.get('month') && k < moment().get('date')) futureDays[k] = `<div class="next-date">${k}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') > actualDate.get('month') && k > moment().get('date')) futureDays[k] = `<div class="next-date">${k}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') > actualDate.get('month') && k < moment().get('date')) futureDays[k] = `<div class="next-date">${k}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') < actualDate.get('month') && k < moment().get('date')) futureDays[k] = `<div class="next-date">${k}</div>`;
      if(moment().get('year') === actualDate.get('year') && moment().get('month') < actualDate.get('month') && k < moment().get('date')) futureDays[k] = `<div class="next-date">${k}</div>`;

      previousFutureDaysRender(k, futureDays, k);
    }
  
    const monthArr = [...pastDays, ...actualDays, ...futureDays];
    const monthArray = monthArr.filter((day) => day !== undefined || null);
  
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
    actualDate.set('month', (actualDate.get('month') - 1));
    settings.paginateArrayIdx = 5;
  } else {
    settings.paginateArrayIdx--;
  }
  calendar();
});
nextWeek.addEventListener("click", () => {
  if (settings.paginateArrayIdx === 5) {
    actualDate.set('month', (actualDate.get('month') + 1));
    settings.paginateArrayIdx = 1;
  } else {
    settings.paginateArrayIdx++;
  }
  calendar();
});

prevMonth.addEventListener("click", () => {
  actualDate.set('month', (actualDate.get('month') - 1));
  settings.paginateArrayIdx = 1;
  calendar();
});

nextMonth.addEventListener("click", () => {
  actualDate.set('month', (actualDate.get('month') + 1));
  settings.paginateArrayIdx = 1;
  calendar();
});

calendar();
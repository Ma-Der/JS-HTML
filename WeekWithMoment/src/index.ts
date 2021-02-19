const calendar = document.getElementById("app") as HTMLDivElement;

const actualDate = new Date();
const renderCalendar = () => {
  const firstDayOfTheWeek = (now: Date) => {
    const day = now.getDay();
    const firstDay = now.getDate() - day + (day === 0 ? -6 : 1);
    return new Date(now.setDate(firstDay));
  };

  const lastDayOfTheWeek = (now: Date) => {
    const day = now.getDay();
    const lastDay = now.getDate() - day + (day === 0 ? -6 : 1) + 6;
    return new Date(now.setDate(lastDay));
  };

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const week = (date: Date, firstDay: number, lastDay: number) => {
    const weekArray: Date[] = [];
    let dayOfTheWeek: Date;

    if(lastDay < firstDay) {
      const numberOfDaysMonth = daysInMonth(firstDayOfTheWeek(date).getMonth()+1, firstDayOfTheWeek(date).getFullYear());
      
      for(let k = firstDay; k <= numberOfDaysMonth; k++) {
        dayOfTheWeek = new Date(date.getFullYear(), date.getMonth(), k);  
        weekArray.push(dayOfTheWeek);
      }
      
      for(let j = 1; j <= lastDay;j++) {
        dayOfTheWeek = new Date(date.getFullYear(), date.getMonth()+1, j);  
        weekArray.push(dayOfTheWeek);
      }
      return weekArray;
    }
    
    for (let i = firstDay; i <= lastDay; i++) {
      dayOfTheWeek = new Date(date.getFullYear(), date.getMonth(), i);
      weekArray.push(dayOfTheWeek);
    }
    return weekArray;
  };

  const actualWeek = week(actualDate, firstDayOfTheWeek(actualDate).getDate(), lastDayOfTheWeek(actualDate).getDate());

  let days = "";

  actualWeek.forEach((day) => {
    if (day.getDate() === new Date().getDate() && actualDate.getMonth() === new Date().getMonth()) {
      days += `<div class="today">${day.getDate()}</div>`;
    } 
    if(day.getDate() > new Date().getDate()) {
      days += `<div class="future-days">${day.getDate()}</div>`;
    }
    else if(day.getDate() < new Date().getDate()){
      days += `<div class="past-days">${day.getDate()}</div>`;
    }
  });

  calendar.innerHTML = days;
};

const weekdayNamesArray = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Niedz"];
const weekDays = document.getElementById("weekDays") as HTMLDivElement;

for (let i = 0; i <= 6; i++) {
  weekDays.innerHTML += `<div>${weekdayNamesArray[i]}</div>`;
}

renderCalendar();

const prev = document.getElementById("prev") as HTMLElement;
const next = document.getElementById("next") as HTMLElement;

prev.addEventListener("click", () => {
  actualDate.setDate(actualDate.getDate() - 7);
  renderCalendar();
});
next.addEventListener("click", () => {
  actualDate.setDate(actualDate.getDate() + 7);
  renderCalendar();
});

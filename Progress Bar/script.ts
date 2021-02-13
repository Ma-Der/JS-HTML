/*
const barElement = document.querySelectorAll(".with-progress-reading-bar");
  // intersection observer
  // zrobić to class
  // ProgressReadingBarObserver(elementyhtml, observer)
  if(barElement.length > 0) {
    barElement.forEach((el) => {
      const elRect = el.getBoundingClientRect();
  
      function scroll() {
        const winScroll = document.documentElement.scrollTop - el.offsetTop + document.documentElement.clientHeight;
        const height = elRect.height;
        const scrolled = (winScroll / height) * 100;
        progressBarInside.style.width = scrolled + "%";
      } 
      window.addEventListener('scroll', scroll);
      
      const progressBarWrapper = document.createElement("div");
      const progressBarInside = document.createElement("div");
      el.insertAdjacentElement("afterbegin", progressBarWrapper);
      progressBarWrapper.classList.add("progress-bar-wrapper");
      progressBarWrapper.appendChild(progressBarInside);
      progressBarInside.classList.add("progress-bar-inside");
    });
  }
*/
  export class ProgressReadingBarObserver {
    htmlElements: HTMLElement[]; 

    constructor(...htmlElements: HTMLElement[]) {
      this.htmlElements = htmlElements;
    }

    initProgressBar() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.add("with-progress-reading-bar");
          const progressBarWrapper = document.createElement("div");
          const progressBarInside = document.createElement("div");
      
          function scroll() {
            const winScroll = document.documentElement.scrollTop - entry.target.offsetTop + document.documentElement.clientHeight;
            const height = entry.boundingClientRect.height;
            const scrolled = (winScroll / height) * 100;
            progressBarInside.style.width = scrolled + "%";
          }
    
          window.addEventListener("scroll", scroll);
      
          entry.target.insertAdjacentElement("afterbegin", progressBarWrapper);
          progressBarWrapper.classList.toggle("progress-bar-wrapper");
          progressBarWrapper.appendChild(progressBarInside);
          progressBarInside.classList.toggle("progress-bar-inside");

          observer.unobserve(entry.target);
        });
      });
   
    this.htmlElements.forEach((element) => observer.observe(element));
    }
  }
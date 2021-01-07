const barElement = document.querySelectorAll(
  ".with-progress-reading-bar"
);

if(barElement.length > 0) {
  barElement.forEach((el) => {
    const elRect = el.getBoundingClientRect();
    console.log(elRect)

    function scroll() {
      const winScroll = document.documentElement.scrollTop - el.offsetTop + document.documentElement.clientHeight;
      const height = elRect.height;
      const scrolled = (winScroll / height) * 100;
      progressBarInside.style.width = scrolled + "%";
      
      console.log("----------------------------------")
      console.log('winscroll: ' + winScroll);
      console.log('heigth: ' + height);
      console.log("----------------------------------")
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


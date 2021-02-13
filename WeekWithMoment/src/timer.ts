
export const timer = (element: HTMLElement) => {
    const time = () => {
        let hours: number | string = new Date().getHours();
        let minutes: number | string = new Date().getMinutes();
        let seconds: number | string = new Date().getSeconds();
      
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
      
        element.innerHTML = `${hours}:${minutes}:${seconds}`;
      
        setTimeout(time, 1000);
    };
    time();
}



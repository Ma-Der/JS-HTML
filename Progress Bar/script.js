var barElement = document.querySelectorAll(".with-progress-reading-bar");
if (barElement.length > 0) {
    barElement.forEach(function (el) {
        var elRect = el.getBoundingClientRect();
        function scroll() {
            var winScroll = document.documentElement.scrollTop - el.offsetTop + document.documentElement.clientHeight;
            var height = elRect.height;
            var scrolled = (winScroll / height) * 100;
            progressBarInside.style.width = scrolled + "%";
        }
        window.addEventListener('scroll', scroll);
        var progressBarWrapper = document.createElement("div");
        var progressBarInside = document.createElement("div");
        el.insertAdjacentElement("afterbegin", progressBarWrapper);
        progressBarWrapper.classList.add("progress-bar-wrapper");
        progressBarWrapper.appendChild(progressBarInside);
        progressBarInside.classList.add("progress-bar-inside");
    });
}

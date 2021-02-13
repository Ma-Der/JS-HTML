let scrolling: number;

window.addEventListener("scroll", () => {
  document.body.classList.add("scrolled");
  document.body.classList.remove("not-scrolled");

  clearTimeout(scrolling);

  scrolling = setTimeout(function () {
    document.body.classList.add("not-scrolled");
    document.body.classList.remove("scrolled");
  }, 500);
});

(() => {
  "use strict";

  window.addEventListener("DOMContentLoaded", () => {
    //set the default state
    let scrolling = false;
    const btt = document.getElementById("btt-button");
    //the scroll listener
    window.addEventListener("scroll", () => {
      scrolling = true;
    });
    //run event handler every 300 ms
    setInterval(() => {
      if (scrolling) {
        //reset the state var
        scrolling = false;

        //we already talked about all this
        var top = window.pageYOffset;
        var is_active = btt.classList.contains("show");
        if (top > 200 && !is_active) {
          btt.classList.add("show");
        } else if (top < 200 && is_active) {
          btt.classList.remove("show");
        }
      }
    }, 300);

    btt.addEventListener("click", (e) => {
      e.preventDefault();
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    });
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const footer = document.querySelector("footer");

  window.addEventListener(
    "scroll",
    function () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down - show footer
        footer.style.bottom = "0";
      } else {
        // Scrolling up - hide footer
        footer.style.bottom = "-60px"; // adjust based on footer height
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    },
    false
  );
});

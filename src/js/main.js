document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");
  const pollyfill = document.querySelector(".pollyfill");
  const homeLink = document.querySelector(".navigation__link--home");
  const menuToggle = document.getElementById("navi-toggle");

  if (window.location.pathname === "/" || window.location.pathname === "") {
    homeLink.classList.add("active");
  } // paint actual location home in different color

  function handleResize() {
    if (window.innerWidth >= 838) {
      menuToggle.checked = false;
      header.classList.remove("header--fixed");
      pollyfill.classList.remove("stuffed");
    }
  }

  function toggleHeaderClass() {
    if (menuToggle.checked && window.innerWidth < 838) {
      header.classList.add("header--fixed");
      pollyfill.classList.add("stuffed");
    } else {
      header.classList.remove("header--fixed");
      pollyfill.classList.remove("stuffed");
    }
  }

  menuToggle.addEventListener("change", toggleHeaderClass);
  window.addEventListener("resize", handleResize);

  handleResize(); // Ensure the header is properly set on load
  toggleHeaderClass(); // Ensure the header is properly set on load
});

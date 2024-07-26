document.addEventListener("DOMContentLoaded", function () {
  const homeLink = document.querySelector(".navigation__link--home");
  const menuToggle = document.getElementById("navi-toggle");

  if (window.location.pathname === "/" || window.location.pathname === "") {
    homeLink.classList.add("active");
  }

  function handleResize() {
    if (window.innerWidth >= 838) {
      menuToggle.checked = false;
    }
  }

  window.addEventListener("resize", handleResize);

  handleResize();
});

const navbar = document.querySelector(".navbar");

window.onscroll = function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};
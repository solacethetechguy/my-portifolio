  //FOR NAVBAR SCROLL EFFECT
  const navbar = document.querySelector(".navbar");

  window.onscroll = function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  };

  //FOR NAVBAR LINK SCROLL EFFECT
window.addEventListener("scroll", function () {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach((link) => {
        if (window.scrollY > 50) {
            link.classList.add("scrolled");
        } else {
            link.classList.remove("scrolled");
        }
    });
});
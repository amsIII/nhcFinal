const navbar = document.querySelector("#navbar");

const fixedNav = (_) => {
  const fixedNavOnScroll = (_) => {
    if (window.scrollY > 50) {
      navbar.classList.add("fixed-top");
      // add padding top to show content behind navbar
      // navbar_height = document.querySelector(".navbar").offsetHeight;
      // document.body.style.paddingTop = navbar_height + "px";
    } else {
      navbar.classList.remove("fixed-top");
      // remove padding top from body
      // document.body.style.paddingTop = "0";
    }
  };
  window.addEventListener("scroll", fixedNavOnScroll);
};

document.addEventListener("DOMContentLoaded", fixedNav);

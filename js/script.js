document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      document.querySelector("nav").classList.add("scrolled");
    } else {
      document.querySelector("nav").classList.remove("scrolled");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});

const sections = document.getElementsByClassName("sect");

window.onscroll = () => {
  let scrollY = window.pageYOffset;

  // directly forEach usage gives error as sections is a HTMLCollection
  Array.from(sections).forEach((i) => {
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (scrollY >= offset && scrollY < offset + height) {
      document
        .querySelector(".nav-item a[href*=" + id + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-item a[href*=" + id + "]")
        .classList.remove("active");
    }
  });
};

const navLinks = document.querySelectorAll("li .nav-link");
const ul = document.querySelector("nav ul");

document.body.addEventListener("click", function (e) {
  if (e.target.className == "nav-link") {
    e.preventDefault();
    navLinks.forEach(function (navLink) {
      navLink.className = "nav-link";
    });
    e.target.classList.add("active");
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target == document.querySelector(".toggle-nav input")) {
    ul.classList.toggle("show");
  }
});

// loader
const loader = document.getElementById("loader-wrapper");
window.addEventListener("load", function (e) {
  loader.classList.add("loaded");
});

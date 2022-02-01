const navLinks = document.querySelectorAll(".nav-link");
const ul = document.querySelector("nav ul");
const bar = document.querySelector(".menu-toggle input");

document.body.addEventListener("click", function (e) {
  if (e.target.className == "nav-link") {
    e.preventDefault();
    navLinks.forEach(function (navLink) {
      navLink.className = "nav-link";
    });
    e.target.classList.add("active");
  }
});
bar.addEventListener("click", function (e) {
  console.log(e);
  ul.classList.toggle("slide");
});

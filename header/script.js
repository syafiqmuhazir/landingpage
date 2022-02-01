const navLinks = document.querySelectorAll(".nav-link");
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
  if ((e.target = ul)) {
    ul.classList.toggle("slide");
  }
});

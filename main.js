let button = document.getElementById("btn");
let menu = document.getElementById("menu");

button.addEventListener("click", () => {
  if (menu.style.display == "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
});

let header = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    header.classList.add("bg_header");
  } else {
    header.classList.remove("bg_header");
  }
});
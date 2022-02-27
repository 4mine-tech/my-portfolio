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

gsap.fromTo(".infos h2", {y: -100, delay: 0.6, opacity: 0}, {y: 0, opacity: 1, duration: 1.5});
gsap.fromTo(".infos p", {y: -100, delay: 0.6,  opacity: 0}, {y: 0, opacity: 1, duration: 1.5});
gsap.fromTo(".contact_me", {y: -100, delay: 0.6, opacity: 0}, {y: 0, opacity: 1, duration: 1.5});

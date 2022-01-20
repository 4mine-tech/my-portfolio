let button = document.getElementById("btn");
let menu = document.getElementById("menu")

button.addEventListener("click", (event) => {
    if (menu.style.display == "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
})
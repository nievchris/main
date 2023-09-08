// script.js
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo img");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
        logo.classList.add("shrink-logo");
    } else {
        header.classList.remove("shrink");
        logo.classList.remove("shrink-logo");
    }
});

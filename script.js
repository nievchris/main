// script.js
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo img");
    const sticky = document.querySelector("sticky-header");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
        logo.classList.add("shrink-logo");
        sticky.classList.add("sticky-header");
    } else {
        header.classList.remove("shrink");
        logo.classList.remove("shrink-logo");
        sticky.classList.remove("sticky-header");
    }
});

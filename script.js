// script.js
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const logo = document.querySelector(".logo img");
    const stickyHeader = document.querySelector(".sticky-header");

    if (window.scrollY > 60) {
        header.classList.add("shrink");
        logo.classList.add("shrink-logo");
        stickyHeader.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
        logo.classList.remove("shrink-logo");
        stickyHeader.classList.remove("shrink");
    }
});

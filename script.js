let isHeaderShrunk = false; // Flag to track header state
let isLogoShrunk = false; // Flag to track logo state

// Function to add or remove the "shrink" class for header and logo based on scroll position
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const logo = document.getElementById("logo");
    const menuToggle = document.getElementById("menuToggle");
    const navList = document.querySelector(".nav-list");

    if (header && logo && menuToggle && navList) {
        if (window.scrollY > 50) {
            if (!isHeaderShrunk) {
                header.classList.add("shrink");
                isHeaderShrunk = true; // Set the flag to true
            }
            if (!isLogoShrunk) {
                logo.classList.add("shrink-logo");
                isLogoShrunk = true; // Set the flag to true
            }
        } else {
            if (isHeaderShrunk) {
                header.classList.remove("shrink");
                isHeaderShrunk = false; // Set the flag to false
            }
            if (isLogoShrunk) {
                logo.classList.remove("shrink-logo");
                isLogoShrunk = false; // Set the flag to false
            }
        }

        // Toggle mobile menu visibility
        if (window.innerWidth <= 768) {
            if (window.scrollY > 50) {
                menuToggle.style.color = "#000"; // Change hamburger icon color on scroll
            } else {
                menuToggle.style.color = "#fff"; // Reset hamburger icon color
            }

            if (window.scrollY > 100) {
                navList.classList.remove("active");
            }
        }
    }
});

// Function to toggle mobile menu
function toggleMenu() {
    const navList = document.querySelector(".nav-list");
    navList.classList.toggle("active");
}

const menuToggle = document.getElementById("menuToggle");
menuToggle.addEventListener("click", toggleMenu);

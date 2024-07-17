const menuBtn = document.querySelector(".nav-menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtnIcon.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fa-xmark" : "fa-bars")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    menuBtnIcon.setAttribute("class", "fa-bars");
});



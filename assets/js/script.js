"use strict";

const header = document.querySelector(".header");
const menuIcon = document.querySelector(".header #menu-icon");
const navBar = document.querySelector(".header .navbar");

window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 80);
    navBar.classList.remove("open");
    menuIcon.classList.remove("bx-x");
});

menuIcon.addEventListener("click", function() {
    navBar.classList.toggle("open");
    menuIcon.classList.toggle("bx-x");
});
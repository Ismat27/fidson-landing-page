const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const supNav = document.querySelector('.sup-nav');
const arrow = document.querySelector('.arrow');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('cross-hamburger')
    navMenu.classList.toggle('show-nav-menu')
})

arrow.addEventListener('click', () => {
    supNav.classList.toggle('show-sub-nav')
})
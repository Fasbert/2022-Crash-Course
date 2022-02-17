const navMenu = document.querySelector('.menu');
const navMenuClose = document.querySelector('.close');
const navBar = document.querySelector('nav');

navMenu.addEventListener('click', () => {
    navBar.classList.add('open-nav');
})

navMenuClose.addEventListener('click', () => {
    navBar.classList.remove('open-nav');
})
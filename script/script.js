let menuBurger = document.querySelector('.menu-burger');
let headerMenu = document.querySelector('.header-menu');

menuBurger.addEventListener('click', ()=> {
    menuBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
});

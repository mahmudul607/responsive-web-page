const menuIcon = document.querySelector('.menu_icon');
const navItems = document.querySelector('.nav_items');

menuIcon.addEventListener('click', () =>{
    navItems.classList.toggle('active');
});
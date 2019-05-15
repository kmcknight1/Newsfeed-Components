// Toggle the "menu--open" class on your menu refence. 

const toggleMenu = () => {
  menu.classList.toggle('menu--open');
}




// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');







// create a reference to the ".menu-button" class
// Using your menuButton reference, add a click handler that calls toggleMenu

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);
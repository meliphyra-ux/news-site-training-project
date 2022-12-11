const blackCover = document.querySelector('.black-cover');
const navLinks = document.querySelector('.navlinks');
const openNavbarButton = document.querySelector('.open-button-active');
const closeNavbarButton = document.querySelector('.close-button-active');

openNavbarButton.addEventListener('click', () => {
    navLinks.style.display = 'flex';
    blackCover.style.display = 'block';
})
closeNavbarButton.addEventListener('click', () => {
    navLinks.style.display = 'none';
    blackCover.style.display = 'none';
})
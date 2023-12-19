// Jika submission Anda terdapat penerapan JS, tuliskan feature yang dibuat dan jelaskan cara mengakses pada Student's Notes.

const menuToggle = document.querySelector('header .menu-toggle input');
const nav = document.querySelector('header ul');
const navDisplay = document.querySelector('header nav');

menuToggle.addEventListener('click', toggleMenu);

function toggleMenu() {
    nav.classList.toggle('slide');
    navDisplay.classList.toggle('display');
}
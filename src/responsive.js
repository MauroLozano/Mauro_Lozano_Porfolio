export default "responsive.js";
// Title
let viewportWidth = window.innerWidth;
const h1Title = document.querySelector('.header__title');
const projectAlabardaTitle= document.querySelector('#project-alabarda__title')
if(viewportWidth <= 700){
    h1Title.innerHTML = 'MAURO<br>LOZANO';
}
//NavBar

// PROJECT INFO/PREVIEW
if(viewportWidth <= 360){
    projectAlabardaTitle.innerHTML = 'Landing Page:<br>Alabarda';
}
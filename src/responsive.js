export default "responsive.js";
// Title
let viewportWidth = window.innerWidth;
const h1Title = document.querySelector('.header__title');
if(viewportWidth <= 700){
    h1Title.innerHTML = 'MAURO<br>LOZANO';
}
//NavBar
const header = document.getElementById('header');
const navBar = document.getElementById('navBar');

if(viewportWidth<640){
    navBar.classList.add('nav-bar--disabled');
    navBar.classList.remove('nav-bar--active');
}else{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                navBar.classList.remove('nav-bar--disabled');
                navBar.classList.add('nav-bar--active');
            }
            if(entry.isIntersecting){
                navBar.classList.add('nav-bar--disabled');
                navBar.classList.remove('nav-bar--active');
            }
        });
    })
    observer.observe(header);
}

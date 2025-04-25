export default "responsive.js";
// Title
let viewportWidth = window.innerWidth;
const h1Title = document.querySelector('.header_title');
if(viewportWidth <= 600){
    h1Title.innerHTML = 'MAURO<br>LOZANO';
}
//NavBar
const header = document.querySelector('#header');
const navBar = document.querySelector('#navBar');
const navBarClasses = navBar.classList;

if(viewportWidth<640){
    navBar.classList.add('navBar_disabled');
    navBar.classList.remove('navBar_active');
    const navBarClasses = navBar.classList;
}else{
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(!entry.isIntersecting){
                navBar.classList.remove('navBar_disabled');
                navBar.classList.add('navBar_active');
                const navBarClasses = navBar.classList;
            }
            if(entry.isIntersecting){
                navBar.classList.add('navBar_disabled');
                navBar.classList.remove('navBar_active');
                const navBarClasses = navBar.classList;
            }
        });
    })
    observer.observe(header);
}

export default function navBar(){
    const viewportWidth = window.innerWidth;
    const navBar = document.querySelector('#navBar');
    const header = document.getElementById('header');
    const studiesSect = document.getElementById('studies');
    const projectsSect = document.getElementById('projects');
    const contactSect = document.getElementById('contact');
    const homeBtn = document.getElementById("homeBtn");
    const projectsBtn = document.getElementById("projectsBtn");
    const studiesBtn = document.getElementById("studiesBtn");
    const contactBtn = document.getElementById("contactBtn");
    function isMobile(){
        return /Android|iPhone/i.test(navigator.userAgent); //Looks in the userAgent for the words Android and iPhone.
    }
    if(viewportWidth<960 || isMobile()){
        navBar.classList.add('nav-bar--disabled');
        navBar.classList.remove('nav-bar--enabled');
    }else{
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting){
                    navBar.classList.remove('nav-bar--disabled');
                    navBar.classList.add('nav-bar--enabled');
                }
                if(entry.isIntersecting){
                    navBar.classList.add('nav-bar--disabled');
                    navBar.classList.remove('nav-bar--enabled');
                }
            });
        })
        observer.observe(header);
    }
    homeBtn.addEventListener("click", ()=>{
        header.scrollIntoView({behavior: "smooth", block:"start"})
    })
    studiesBtn.addEventListener("click", ()=>{
        studiesSect.scrollIntoView({behavior: "smooth", block:"start"})
    })
    projectsBtn.addEventListener("click", ()=>{
        projectsSect.scrollIntoView({behavior: "smooth", block:"start"})
    })
    contactBtn.addEventListener("click", ()=>{
        contactSect.scrollIntoView({behavior: "smooth", block:"start"})
    })
};

const alabardaInfoOpenBtn = document.querySelector('#project-alabarda__button--open');
const alabardaInfoCloseBtn = document.querySelector('#project-alabarda__button--close');
const projectInfoBlur = document.querySelector('#project-info__blur');
const alabardaInfo = document.querySelector('#project-alabarda');
alabardaInfoOpenBtn.addEventListener('click', ()=>{
    if(alabardaInfo.classList.contains('project-info--disabled')){
        projectInfoBlur.classList.add('project-info__blur--enabled');
        projectInfoBlur.classList.remove('project-info__blur--disabled');
        alabardaInfo.classList.add('project-info--enabled');
        alabardaInfo.classList.remove('project-info--disabled');
        document.body.classList.add('no-scroll');
    }
})
alabardaInfoCloseBtn.addEventListener('click', ()=>{
    if(alabardaInfo.classList.contains('project-info--enabled')){
        projectInfoBlur.classList.remove('project-info__blur--enabled');
        projectInfoBlur.classList.add('project-info__blur--disabled');
        alabardaInfo.classList.remove('project-info--enabled');
        alabardaInfo.classList.add('project-info--disabled');
        document.body.classList.remove('no-scroll');
    }
})
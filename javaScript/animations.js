let hide = false;



function resetRespMenu() {
    if (window.innerWidth > 780) {
        if (hide===true) {
         toogleRespMenu();

        }
       
        
    }

}


function burgerAnimation() {
    const burgerRef = document.getElementById('burger');
    burgerRef.classList.toggle('open');


}

function toogleRespMenu() {
    hide = !hide;
    burgerAnimation();
    const respMenuRef = document.getElementById('respMenu');
    const contentRef = document.getElementById('content');
    const headerRef = document.getElementById('headerContainer');

    console.log(hide);
    if (respMenuRef) {
        if (hide) {
            respMenuRef.classList.add('slideIn');
            contentRef.classList.add('hideContent');
            headerRef.classList.add('blackBG');
            setTimeout(() => {
                respMenuRef.classList.add('lightBorder');
            }, 500);

        } else {
            respMenuRef.classList.remove('slideIn');
            respMenuRef.classList.remove('lightBorder');
            contentRef.classList.remove('hideContent');
            setTimeout(() => {
                headerRef.classList.remove('blackBG');
            }, 500);
            
            
        }
    }
}



function scrollHeader() {
    const headerRef = document.getElementById('headerContainer');
    const navRef = document.getElementById('nav');
    const scrollHeight = window.scrollY;

    if (scrollHeight > 1) {
        console.log('start');
        headerRef.classList.add('noShadow');
        navRef.classList.add('navBG');

    } else {
        headerRef.classList.remove('noShadow');
        navRef.classList.remove('navBG');

    }

}
window.addEventListener('resize', resetRespMenu);
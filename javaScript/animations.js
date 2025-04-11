let hide = false;
function burgerAnimation() {
    const burgerRef = document.getElementById('burger');
    
    console.log('burger');

    burgerRef.classList.toggle('open');
   

}

function toogleRespMenu() {
    hide = !hide;
    burgerAnimation();
    const respMenuRef = document.getElementById('respMenu');
    const contentRef = document.getElementById('content');
    console.log(hide);
    if (respMenuRef) {
        if (hide) {
            respMenuRef.classList.add('slideIn');
            contentRef.classList.add('hideContent');
            setTimeout(() => {
                respMenuRef.classList.add('lightBorder');
            }, 500);

        } else {
            respMenuRef.classList.remove('slideIn');
            respMenuRef.classList.remove('lightBorder');
            contentRef.classList.remove('hideContent');
        }
    }
}
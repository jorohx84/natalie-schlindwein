let hide = false;



function resetRespMenu() {
    if (window.innerWidth > 780) {
        if (hide === true) {
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
    const headerRef = document.getElementById('header');
    const navRef = document.getElementById('nav');
    const scrollHeight = window.scrollY;

    if (scrollHeight > 1) {

        headerRef.classList.add('noShadow');
        navRef.classList.add('navBG');

    } else {
        headerRef.classList.remove('noShadow');
        navRef.classList.remove('navBG');

    }

}

function dividerAnimation() {
    const dividers = document.getElementsByClassName('divider');
    for (let index = 0; index < dividers.length; index++) {
        const divider = dividers[index];
        const dividerRect = divider.getBoundingClientRect().top;
        console.log(dividerRect);
        const trigger = window.innerHeight * 0.5;

        if (dividerRect < trigger) {
            divider.classList.add('width');
        } else {
            divider.classList.remove('width');
        }
    }
}


function sliderAnimations() {
    letteringAnimation('aboutme', 'aboutmeLettering', 'aboutmeContent');
    letteringAnimation('skills', 'skillsLettering', 'skillContent');
    letteringAnimation('contact', 'contactLettering', 'contactContent');
    letteringAnimation('experiences', 'experiencesLettering', 'experiencesContent');
}

function letteringAnimation(divID, sliderID, contentID) {
    const section = document.getElementById(divID);
    const sectionRect = section.getBoundingClientRect();
    const lettering = document.getElementById(sliderID);
    const trigger = window.innerHeight * 0.5;
    if (sectionRect.top < trigger) {
        lettering.classList.add('letteringSlide');
        setTimeout(() => {
            lettering.classList.add('sliderOpacity');
        }, 1000);
    } else {
        lettering.classList.remove('letteringSlide');
        lettering.classList.remove('sliderOpacity')

    }
    opacityAnimation(sectionRect, trigger, contentID);
}






function opacityAnimation(sectionRect, trigger, contentID) {

    const text = document.getElementById(contentID);


    if (sectionRect.top < trigger) {
        text.classList.add('textOpacity');
    } else {
        text.classList.remove('textOpacity');
    }

}

function skillCardHighlight() {

    const cardContainer = document.getElementById('skillContent');
    const skillCards = document.getElementsByClassName('skillCard');
    const trigger = window.innerHeight * 0.5
    for (let index = 0; index < skillCards.length; index++) {
        const card = skillCards[index];
        const cardRect=card.getBoundingClientRect();
        // if (cardRect.top < trigger) {
        //     card.classList.add('skillHighlight');
        // } else {
        //     card.classList.remove('skillHighlight');
        // }
    }
}



function btnHighlight() {
    const btn = document.getElementById('aboutmeBtn');
    const btnRect = btn.getBoundingClientRect();
    const trigger = window.innerHeight * 0.6;
    if (btnRect.top < trigger) {
        btn.style.width = '200px';


    } else {
        btn.style.width = '100px';

    }

}



window.addEventListener('resize', resetRespMenu);
window.addEventListener('scroll', () => {
    // opacityAnimation();

    // dividerAnimation();
    btnHighlight();
    skillCardHighlight();
    sliderAnimations();
});
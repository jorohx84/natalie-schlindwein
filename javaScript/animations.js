let hide = false;
let toggleKey = false;

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
    const headerRef = document.getElementById('header');

    if (respMenuRef) {
        if (hide) {
            respMenuRef.classList.add('slideIn');
            contentRef.classList.add('hideContent');
            headerRef.classList.remove('headerscrollBG');

        } else {
            respMenuRef.classList.remove('slideIn');
            respMenuRef.classList.remove('lightBorder');
            contentRef.classList.remove('hideContent');
            headerRef.classList.add('headerscrollBG');

        }
    }
}



function scrollHeader() {
    const headerRef = document.getElementById('header');
    const lang = document.getElementById('languages');
    const navRef = document.getElementById('nav');
    const logo = document.getElementById('logoContainer');
    const scrollHeight = window.scrollY;
    if (!hide) {
        headerRef.classList.add('headerscrollBG');
    }
    if (scrollHeight > 1 && !hide) {
        navRef.classList.add('navBG');
        logo.classList.add('dnone');
        // lang.style.opacity = "0";
    } else {
        headerRef.classList.remove('headerscrollBG');
        logo.classList.remove('dnone');
        navRef.classList.remove('navBG');
        // lang.style.opacity = "1";

    }

}

function dividerAnimation() {
    const dividers = document.getElementsByClassName('divider');
    for (let index = 0; index < dividers.length; index++) {
        const divider = dividers[index];
        const dividerRect = divider.getBoundingClientRect().top;
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
    letteringAnimation('advantages', 'advantagesLettering', 'advantagesContent');
    letteringAnimation('experiences', 'experiencesLettering', 'experiencesContent');
}

function letteringAnimation(divID, sliderID, contentID) {
    const section = document.getElementById(divID);
    const sectionRect = section.getBoundingClientRect();
    const lettering = document.getElementById(sliderID);
    const trigger = window.innerHeight * 0.5;
    if (sectionRect.top < trigger) {
        lettering.classList.add('letteringSlide');
        // setTimeout(() => {
        //     lettering.classList.add('sliderOpacity');
        // }, 1000);
    } else {
        lettering.classList.remove('letteringSlide');
        // lettering.classList.remove('sliderOpacity')

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
        const cardRect = card.getBoundingClientRect();
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


function freelanceCardHighlight() {
    const trigger = window.innerHeight * 0.5;
    const cards = document.getElementsByClassName('freelancerCard');
    for (let index = 0; index < cards.length; index++) {
        const card = cards[index];
        const cardRect = card.getBoundingClientRect().top;
        if (cardRect < trigger) {
            card.classList.add('freelancerCardBorder');
        } else {
            card.classList.remove('freelancerCardBorder');
        }
    }

}

function showHeadlinePins() {
    const sections = document.getElementsByClassName('sectionContainer');
     const headlinePinContainer = document.getElementById('headlineRespPins');
      headlinePinContainer.innerHTML = '';
    const pins = document.getElementsByClassName('pins');
    clearPins(pins);
    for (let index = 0; index < sections.length; index++) {
        const section = sections[index];
        const sectionRect = section.getBoundingClientRect();
        if (sectionRect.top < 0 && sectionRect.bottom > 0) {
            givePinsHighlight(pins, index, headlinePinContainer);
        }
    }
}


function givePinsHighlight(pins, index, headlinePinContainer) {
    const currentPin = pins[index];
    if (window.innerWidth > 1050) {
        console.log('Fullscreen');
        console.log(currentPin.innerHTML);
        currentPin.classList.add('pincolor');
    } else {
       
       
        headlinePinContainer.innerHTML = `<h2>${currentPin.innerHTML}</h2>`;
    }

}



function clearPins(pins) {
    for (let index = 0; index < pins.length; index++) {
        const pin = pins[index];
        pin.classList.remove('pincolor');
    }
}


window.addEventListener('resize', resetRespMenu);
window.addEventListener('scroll', () => {
    // opacityAnimation();
    moveSidebar();
    // dividerAnimation();
    // btnHighlight();
    // skillCardHighlight();
    // sliderAnimations();
    closeSidebar();
    freelanceCardHighlight();
    showHeadlinePins();
});
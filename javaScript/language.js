const translations = {
    de: {
      
        title: "Professionelle Einkäuferin",
        advantagesTitle: 'Leistungen',
        advantagesSubtitle: 'Von der Planung bis zur Umsetzung des Events, sorge ich für einen reibungslosen Ablauf und behalte den Überblick.',
        experienceTitle: 'Erfahrungen',
    },
    en: {
       
        title: "Professional Buyer",
        advantagesTitle: 'Advantages',
        advantagesSubtitle: 'From planning to implementation of the event, I ensure that everything runs smoothly and keep an overview.',
        experienceTitle: 'Experiences',
    },
    es: {
      
        title: "comprador profesional",
        advantagesTitle: 'Servicios',
        advantagesSubtitle: 'Desde la planificación hasta la implementación del evento, me aseguro de que todo transcurra sin problemas y mantengo una visión general.',
        experienceTitle: 'Experiencias',
    }
}

function setLanguage(lang, event) {
    localStorage.setItem("lang", lang);
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        el.textContent = translations[lang][key];
    });
    event.stopPropagation();
    renderAdvantages(lang);
    if (currentSubIndex != undefined) {
        console.log(currentSubIndex);

        renderSubadvantages(currentSubIndex, lang);
    } else {
        renderSubadvantages(0, lang)
    }

    renderExperiences(lang);
}

function toggleLanguage() {


}

function loadLanguage() {
    const defaultLang = localStorage.getItem("lang") || "de";
    setLanguage(defaultLang, event);
}


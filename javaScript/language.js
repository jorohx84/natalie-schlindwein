const translations={
    de:{
        lang:"Sprachen",
        title:"Professionelle Einkäuferin"
    },
     en:{
           lang:"Languages",
        title:"Professional Buyer"
    },
     es:{
           lang:"ES",
        title:"comprador profesional"
    }
}

function setLanguage(lang, event){
    localStorage.setItem("lang", lang);
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[lang][key];
  });
    event.stopPropagation();
}

function toggleLanguage(){


}

function loadLanguage(){
const defaultLang = localStorage.getItem("lang") || "de";
console.log(defaultLang);

setLanguage(defaultLang, event);
}


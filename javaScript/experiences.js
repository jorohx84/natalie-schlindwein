const stations = [
    {
        path: 'assets/icons/education_grey.svg',
        de: {
            title: 'Kaufmännische Ausbildung – Der Grundstein',
            description: 'Meine berufliche Laufbahn begann bereits im Alter von 16 Jahren mit einer Ausbildung zur Groß- und Außenhandelskauffrau, die mir ein solides Fundament im kaufmännischen Bereich vermittelte.',
        },
        en: {
            title: 'Commercial Training – The Foundation',
            description: 'My professional career began at the age of 16 with an apprenticeship as a wholesale and foreign trade clerk, which provided me with a solid foundation in business administration.',
        },
        es: {
            title: 'Formación comercial – La base',
            description: 'Mi carrera profesional comenzó a los 16 años con una formación como técnica en comercio mayorista e internacional, lo que me dio una base sólida en administración empresarial.',
        }
    },
    {
        path: 'assets/icons/shopping_grey.svg',

        de: {
            title: 'Berufserfahrung im Einkauf & Service Management',
            description: 'Im Anschluss war ich über sechs Jahre im operativen Einkauf sowie im Service Management tätig – Bereiche, in denen ich nicht nur mein Organisationstalent, sondern auch mein wirtschaftliches Denken gezielt einsetzen und weiterentwickeln konnte.',
        },
        en: {
            title: 'Professional Experience in Procurement & Service Management',
            description: 'I worked for over six years in operational procurement and service management—areas in which I was able to apply and develop both my organizational skills and business acumen.',
        },
        es: {
            title: 'Experiencia profesional en compras y gestión de servicios',
            description: 'Trabajé durante más de seis años en compras operativas y gestión de servicios, donde pude aplicar y desarrollar mis habilidades organizativas y mi pensamiento estratégico.',
        }
    },
    {
        path: '',

        de: {
            title: 'Weiterbildung zur Betriebswirtin mit Spanien-Fokus',
            description: 'Im Jahr 2017 entschied ich mich für eine berufliche Weiterbildung zur Staatlich geprüften Betriebswirtin (Bachelor Professional in Wirtschaft) mit dem Schwerpunkt „Europa-Betriebswirtschaft“. Hier vertiefte ich meine Kenntnisse im internationalen Kontext und legte meinen Fokus auf die Fremdsprache Spanisch.',
        },
        en: {
            title: 'Advanced Business Training with a Focus on Spain',
            description: 'In 2017, I completed advanced business training as a certified business economist (Bachelor Professional in Business) with a focus on European business and the Spanish language.',
        },
        es: {
            title: 'Formación empresarial avanzada con enfoque en España',
            description: 'En 2017, completé una formación empresarial avanzada como técnica superior en economía empresarial con especialización en negocios europeos y lengua española.',
        }
    },
    {
        path: '',

        de: {
            title: 'Auslandspraktikum in Valencia – Marketing & Sprache',
            description: 'Im Rahmen des Erasmus+-Programms hatte ich die Möglichkeit, ein Auslandspraktikum in Spanien zu absolvieren. Über sieben Monate hinweg arbeitete ich in der Marketingabteilung der renommierten Sprachschule „Españolé International House Valencia“, um meine Sprachkenntnisse weiter auszubauen.',
        },
        en: {
            title: 'Internship Abroad in Valencia – Marketing & Language',
            description: 'As part of the Erasmus+ program, I had the opportunity to complete an internship in Spain. For over seven months, I worked in the marketing department of the renowned language school "Españolé International House Valencia" to further develop my Spanish skills.',
        },
        es: {
            title: 'Prácticas en el extranjero en Valencia – Marketing e idioma',
            description: 'Como parte del programa Erasmus+, tuve la oportunidad de realizar unas prácticas en España. Durante más de siete meses trabajé en el departamento de marketing de la prestigiosa escuela de idiomas "Españolé International House Valencia", para mejorar mis conocimientos de español.',
        }
    },
    {
        path: 'assets/icons/speak.svg',

        de: {
            title: 'Sprachassistenz & Bildungsurlaub in Cádiz',
            description: 'Anschließend war ich für sechs Monate als Sprachassistentin an einem College in Cádiz tätig. Dort unterstützte ich die Lehrkräfte bei der Vorbereitung der Schüler auf die international anerkannte Sprachprüfung IELTS und agierte zugleich als Dolmetscherin und Bindeglied zwischen deutschen Landesbehörden und spanischen Bildungseinrichtungen – insbesondere im Hinblick auf die Organisation von Bildungsurlauben für deutsche Arbeitnehmer.',
        },
        en: {
            title: 'Language Assistance & Educational Leave in Cádiz',
            description: 'I then spent six months as a language assistant at a college in Cádiz. I supported teachers in preparing students for the internationally recognized IELTS exam and acted as an interpreter and liaison between German authorities and Spanish educational institutions—especially for organizing educational leave for German employees.',
        },
        es: {
            title: 'Asistencia lingüística y gestión de permisos educativos en Cádiz',
            description: 'Posteriormente trabajé durante seis meses como asistente de idiomas en un colegio de Cádiz. Apoyé a los profesores en la preparación de los alumnos para el examen IELTS y actué como intérprete y enlace entre autoridades alemanas e instituciones educativas españolas, especialmente en la gestión de permisos de formación para trabajadores alemanes.',
        }
    },
    {
        path: '',

        de: {
            title: 'Start in die Selbstständigkeit als Freelancerin',
            description: 'Die Erfahrungen in Spanien waren wegweisend für meinen weiteren Weg: Ich entschied mich, den Schritt in die Selbstständigkeit zu wagen. Seit Oktober 2022 bin ich als Freelancerin tätig und berate Unternehmen in unterschiedlichen Bereichen – mit internationalem Blick, interkultureller Kompetenz und einem klaren Gespür für Organisation, Sprache und Struktur.',
        },
        en: {
            title: 'Starting My Freelance Journey',
            description: 'My experiences in Spain inspired a new direction: I decided to start my own business. Since October 2022, I have been working as a freelancer, supporting companies in various areas—with an international perspective, intercultural competence, and a strong sense for organization, language, and structure.',
        },
        es: {
            title: 'Inicio de mi carrera como freelance',
            description: 'Las experiencias en España marcaron un nuevo rumbo para mí: decidí emprender por mi cuenta. Desde octubre de 2022 trabajo como freelance, asesorando a empresas en distintos ámbitos, con una perspectiva internacional, competencia intercultural y una clara visión para la organización, el idioma y la estructura.',
        }
    }
];

function renderExperiences(lang) {
    const experiencesRef = document.getElementById('curriculum');
    experiencesRef.innerHTML = '';
    for (let index = 0; index < stations.length; index++) {
        const image = stations[index];
        const station = stations[index][lang];
        experiencesRef.innerHTML += ` <div class="station">
                              <div class="timeStamp">
                                     <p>2000</p>
                                      <div class="stationLine"></div>
                             </div>
                            <div class="stationDot">
                          <img src="${image.path}">
                            </div>
                             
                            <div class="descriptionContainer">
                            <div class="stationLine">
                            <div class="descriptionLine"></div>
                            </div>
                            <div class="stationImage">
                            <img src="${image.path}">
                            </div>
                            <div class="stationDescription">
                            <p>2000</p>
                            <h4>${station.title}</h4>
                            <div class="experiencesDivider"></div>
                            <span>${station.description}</span>
                               
                            </div>
                            </div>
                        </div>`
    }
    setStationPosition()
}

function setStationPosition() {
    const stationElements = document.getElementsByClassName('station');
    const timeStamps = document.getElementsByClassName('timeStamp');
    const descriptions = document.getElementsByClassName('descriptionContainer');
    for (let index = 0; index < stationElements.length; index++) {
        const element = stationElements[index];
        const stamp = timeStamps[index];
        const description = descriptions[index];
        if (index % 2 === 0) {
            changeStationPosition(element, stamp, description);
        }
    }
}

function changeStationPosition(element, stamp, description) {
    if (window.innerWidth > 1000) {
        element.classList.add('stationReverse');
        stamp.classList.add('stampReverse');
        description.classList.add('stampReverse');
    } else {
        element.classList.remove('stationReverse');
        stamp.classList.remove('stampReverse');
        description.classList.remove('stampReverse');

    }
}

function getScrollbarPosition() {
    const dots = document.getElementsByClassName('stationDot');
    const scrollbar = document.getElementById('scrollbar');
    const scrollbarRect = scrollbar.getBoundingClientRect();
    const divRef = document.getElementById('experiencesContent');
    const divRect = divRef.getBoundingClientRect();
    const lastIndex = dots.length - 1;
    const startDot = dots[0];
    const finalDot = dots[lastIndex];
    const startDotRect = startDot.getBoundingClientRect();
    const finalDotRect = finalDot.getBoundingClientRect();
    const currentHeight = finalDotRect.bottom - startDotRect.top;
    scrollbar.style.top = `${startDotRect.top - divRect.top}px`;
    const scrollbarPosition = startDotRect.left + (startDotRect.width / 2) - divRect.left - (scrollbarRect.width / 2);
    scrollbar.style.left = `${scrollbarPosition}px`
    scrollbar.style.height = `${currentHeight}px`;
}



function scrollVerticalBar() {
    const startpoint = window.innerHeight * 0.5;
    const barInner = document.getElementById('scrollbarInner');
    const bar = document.getElementById('scrollbar');
    const barInnerRect = barInner.getBoundingClientRect();
    const barRect = bar.getBoundingClientRect();
    let currentHeight = getCurrentHeight(startpoint, barRect, barInnerRect);
    barInner.style.height = `${currentHeight}%`;
    giveDotsHighlight(barInnerRect)
}

function getCurrentHeight(startpoint, barRect, barInnerRect) {
    let currentHeight;
    const barHeight = barRect.bottom - barRect.top;
    const innerHeight = startpoint - barInnerRect.top
    if (startpoint < barRect.top) {
        currentHeight = 0;
    } else if (startpoint > barRect.top && startpoint < barRect.bottom) {
        currentHeight = (innerHeight / barHeight) * 100;
    } else if (startpoint > barRect.bottom) {
        currentHeight = 100;
    }
    return currentHeight
}

function giveDotsHighlight(barInnerRect) {
    const dots = document.getElementsByClassName('stationDot');
    for (let index = 0; index < dots.length; index++) {
        const dot = dots[index];
        const dotRect = dot.getBoundingClientRect().top;
        if (dotRect < barInnerRect.bottom) {
            dot.classList.add('changeColor');
            dot.classList.add('animateImage');
            changeLine(index, 'add');
        } else {
            dot.classList.remove('changeColor');
            dot.classList.remove('animateImage');
            changeLine(index, 'remove');
        }

    }
}

function changeLine(index, changeKey) {
    const lines = document.getElementsByClassName('descriptionLine');
    const line = lines[index];
    if (changeKey === 'add') {
        line.classList.add('changeLine');

            changeImageColor(index, 'add');
        
    } else {
           changeImageColor(index, 'remove');
           
            line.classList.remove('changeLine');
          
        
    }
    if (index % 2 !== 0) {
        line.classList.add('transOriginLeft');
    }

}

function changeImageColor(index, changeKey) {
    const images = document.getElementsByClassName('stationImage');
    const image = images[index];
    if (changeKey === 'add') {
        image.classList.add('imageBGColor');
    } else {
        image.classList.remove('imageBGColor');
    }


}

window.addEventListener('resize', () => {
    getScrollbarPosition();
    setStationPosition();
});
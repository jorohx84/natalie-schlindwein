let currentSubIndex;

const advantages = [
    {
        path: 'assets/icons/volunteer_pink.svg',
        changePath: 'assets/icons/volunteer_grey.svg',
        de: {
            title: 'Volunteer Management',

            subadvantages: [
                'Daten-Administration (Zuteilung und Erstellung von Schichtplanung)',
                'Laufende Kommunikation mit den Volunteers',
                'Akkreditierungsmanagement (Verwalten von Daten und die Ausgabe von Akkreditierung)',
                'Koordination der Volunteer-Akkreditierung während der Veranstaltung',
                'Onboarding und Betreuung vor Ort'
            ],

        },
        en: {
            title: 'Volunteer management',

            subadvantages: [
                'Data administration (allocation and creation of shift plans)',
                'Ongoing communication with volunteers',
                'Accreditation management (handling data and issuing credentials)',
                'Coordination of volunteer accreditation during the event',
                'Onboarding and on-site support'
            ],
        },
        es: {
            title: 'Gestión de voluntariado',

            subadvantages: [
                'Administración de datos (asignación y creación de turnos)',
                'Comunicación continua con los voluntarios',
                'Gestión de acreditaciones (manejo de datos y entrega de credenciales)',
                'Coordinación de la acreditación de voluntarios durante el evento',
                'Onboarding y asistencia in situ'
            ],
        }

    },

    {
        path: 'assets/icons/coins_pink.svg',
        changePath: 'assets/icons/coins_grey.svg',
        de: {
            title: 'Finanz Management',

            subadvantages: [
                'Erstellung eines Haushaltsplans',
                'Rechnungsstellung',
                'Finanzierungsplan/Budgetplan des Projektes',
                'Controlling Aufgaben des Budgets',
                'Zahlungseingänge prüfen'
            ],
        },
        en: {
            title: 'Financial management',

            subadvantages: [
                'Creating a budget plan',
                'Invoicing',
                'Financial/budget planning of the project',
                'Budget controlling tasks',
                'Checking incoming payments'
            ],
        },
        es: {
            title: 'Gestión financiera',

            subadvantages: [
                'Elaboración de un plan presupuestario',
                'Facturación',
                'Planificación financiera/presupuestaria del proyecto',
                'Tareas de control del presupuesto',
                'Verificación de los pagos recibidos'
            ],
        },
    },
    {
             path: 'assets/icons/time_pink.svg',
        changePath: 'assets/icons/time_grey.svg',
        de: {
            title: 'Buchungs- und Programmassistentin',

            subadvantages: [
                'Planung und Erstellung von Zeitplänen und Einsatzplänen (Organisation)',
                'Pflege der Zeitpläne und diese in allen Bereichen im Blick behalten',
                'Troubleshooting bei Zeitverzögerungen oder technischen Sonderfällen',
                'Koordination von Reiselogistik (Anreise, Unterkunft, Catering-Wünsche)',
                'Angebotserstellung',
                'Nationale und Internationale Teambegleitung in Englisch und Spanisch möglich',
                'Ansprechpartnerin und Begleitperson vor Ort'
            ],
        },
        en: {
            title: 'Booking and Program Assistant',
            subadvantages: [
                'Planning and creating schedules and deployment plans (organization)',
                'Maintaining schedules and keeping an overview across all areas',
                'Troubleshooting delays or technical special cases',
                'Coordinating travel logistics (arrival, accommodation, catering requests)',
                'Preparing offers',
                'National and international team support in English and Spanish',
                'Contact person and on-site companion'
            ],
        },
        es: {
            title: 'Asistente de reservas y programación',
            subadvantages: [
                'Planificación y creación de horarios y planes de despliegue (organización)',
                'Mantenimiento de horarios y supervisión en todas las áreas',
                'Resolución de problemas en retrasos o casos técnicos especiales',
                'Coordinación de la logística de viajes (llegada, alojamiento, solicitudes de catering)',
                'Elaboración de ofertas',
                'Acompañamiento de equipos nacionales e internacionales en inglés y español',
                'Persona de contacto y acompañante in situ'
            ],
        },
    },
    {
        path: 'assets/icons/shopping_pink.svg',
        changePath: 'assets/icons/shopping_grey.svg',
        de: {
            title: 'Einkäuferin',
            subadvantages: [
                'Operativer und Strategischer Einkauf',
                'Materialbeschaffung',
                'Vertragsverhandlung',
                'Vertragsprüfung'
            ],
        },
        en: {
            title: 'Buyer',
            subadvantages: [
                'Operational and strategic purchasing',
                'Material procurement',
                'Contract negotiation',
                'Contract review'
            ],
        },
        es: {
            title: 'Compradora',
            subadvantages: [
                'Compras operativas y estratégicas',
                'Adquisición de materiales',
                'Negociación de contratos',
                'Revisión de contratos'
            ],
        },
    },
]



function renderAdvantages(lang) {
    const ref = document.getElementById('advantagesContent');
    ref.innerHTML = '';
    for (let index = 0; index < advantages.length; index++) {
        const advantage = advantages[index];

        ref.innerHTML += `
                                    <div class="advantageCard" id="advantageCard${index}" onclick="renderSubadvantages(${index}, '${lang}')">
                                    <img id="titleImage${index}" src="${advantage.path}">
                                        <div class="advantageTitle" id="advantageTitle${index}">
                                            <h4>${advantage[lang].title}</h4> 
                                        </div>
                                       
                                    </div>  
        `;
        // renderSubadvantages(index, lang);
    }

}


function renderSubadvantages(index, lang) {
    const subadvantagesRef = document.getElementById(`subadvantages`);
    subadvantagesRef.innerHTML = '';
    currentSubIndex = index;
    removeOpacity();
    subadvantagesRef.classList.add('subOpacity')
    const currentSubarray = advantages[index][lang].subadvantages;
    // clearSubadvantages();
    for (let index = 0; index < currentSubarray.length; index++) {
        const subadvantage = currentSubarray[index];
        subadvantagesRef.innerHTML += ` <div class="subadvantageRow">
                                        <img class="subImage" src="assets/icons/circle.png" alt="">
                                        <span class="subText">${subadvantage}</span>
                                        </div>`;

    }
    giveCardHighlight(index);
    renderAdvantagesRespHeadline(index, lang);
}


function removeOpacity() {
    for (let index = 0; index < advantages.length; index++) {
        const subadvantagesRef = document.getElementById(`subadvantages`);
        subadvantagesRef.classList.remove('subOpacity')
    }
}

function clearSubadvantages() {
    for (let index = 0; index < advantages.length; index++) {
        const subelement = advantages[index];
        const ref = document.getElementById(`subadvantages${index}`);
        ref.innerHTML = '';
    }
}

function giveCardHighlight(currentIndex) {
    console.log(currentIndex);


    for (let index = 0; index < advantages.length; index++) {
        const cardRef = document.getElementById(`advantageCard${index}`);
        if (currentIndex === index) {
            cardRef.classList.add('cardHighlight');
        } else {
            cardRef.classList.remove('cardHighlight');
        }
    }
    changeAdvantageImageColor(currentIndex)
}

function changeAdvantageImageColor(currentIndex) {
    for (let index = 0; index < advantages.length; index++) {
        const card = advantages[index];
        const image = document.getElementById(`titleImage${index}`);


        if (currentIndex === index) {
            image.src = `${card.changePath}`
        } else {
            image.src = `${card.path}`
        }
    }



}

function renderAdvantagesRespHeadline(index, lang) {

    console.log(index);
    console.log(lang);
    const headlineRef = document.getElementById('advantagesRespHeadline');
    headlineRef.innerHTML = '';
    if (window.innerWidth > 950) { return }
    const headline = advantages[index][lang].title;
    console.log(headline);
    headlineRef.innerHTML += `<h3>${headline}</h3>`;


}


//  window.addEventListener('load',()=>{

// renderAdvantages();
// renderSubadvantages(0, 'de')
//  } )
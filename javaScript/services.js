let currentSubIndex;

const services = [
   

   
    
    {
        path: 'assets/icons/shopping_pink.svg',
        changePath: 'assets/icons/shopping_grey.svg',
        de: {
            title: 'Einkäuferin',
            subservices: [
                'Operativer und Strategischer Einkauf',
                'Materialbeschaffung',
                'Vertragsverhandlung',
                'Vertragsprüfung'
            ],
        },
        en: {
            title: 'Buyer',
            subservices: [
                'Operational and strategic purchasing',
                'Material procurement',
                'Contract negotiation',
                'Contract review'
            ],
        },
        es: {
            title: 'Compradora',
            subservices: [
                'Compras operativas y estratégicas',
                'Adquisición de materiales',
                'Negociación de contratos',
                'Revisión de contratos'
            ],
        },
    },
    {
             path: 'assets/icons/time_pink.svg',
        changePath: 'assets/icons/time_grey.svg',
        de: {
            title: 'Buchungs- und Programmassistentin',

            subservices: [
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
            subservices: [
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
            subservices: [
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
        path: 'assets/icons/coins_pink.svg',
        changePath: 'assets/icons/coins_grey.svg',
        de: {
            title: 'Finanz Management',

            subservices: [
                'Erstellung eines Haushaltsplans',
                'Rechnungsstellung',
                'Finanzierungsplan/Budgetplan des Projektes',
                'Controlling Aufgaben des Budgets',
                'Zahlungseingänge prüfen'
            ],
        },
        en: {
            title: 'Financial management',

            subservices: [
                'Creating a budget plan',
                'Invoicing',
                'Financial/budget planning of the project',
                'Budget controlling tasks',
                'Checking incoming payments'
            ],
        },
        es: {
            title: 'Gestión financiera',

            subservices: [
                'Elaboración de un plan presupuestario',
                'Facturación',
                'Planificación financiera/presupuestaria del proyecto',
                'Tareas de control del presupuesto',
                'Verificación de los pagos recibidos'
            ],
        },
    },
     {
        path: 'assets/icons/volunteer_pink.svg',
        changePath: 'assets/icons/volunteer_grey.svg',
        de: {
            title: 'Volunteer Management',

            subservices: [
                'Daten-Administration (Zuteilung und Erstellung von Schichtplanung)',
                'Laufende Kommunikation mit den Volunteers',
                'Akkreditierungsmanagement (Verwalten von Daten und die Ausgabe von Akkreditierung)',
                'Koordination der Volunteer-Akkreditierung während der Veranstaltung',
                'Onboarding und Betreuung vor Ort'
            ],

        },
        en: {
            title: 'Volunteer management',

            subservices: [
                'Data administration (allocation and creation of shift plans)',
                'Ongoing communication with volunteers',
                'Accreditation management (handling data and issuing credentials)',
                'Coordination of volunteer accreditation during the event',
                'Onboarding and on-site support'
            ],
        },
        es: {
            title: 'Gestión de voluntariado',

            subservices: [
                'Administración de datos (asignación y creación de turnos)',
                'Comunicación continua con los voluntarios',
                'Gestión de acreditaciones (manejo de datos y entrega de credenciales)',
                'Coordinación de la acreditación de voluntarios durante el evento',
                'Onboarding y asistencia in situ'
            ],
        }

    },
]



function renderServices(lang) {
    const ref = document.getElementById('servicesContent');
    ref.innerHTML = '';
    for (let index = 0; index < services.length; index++) {
        const service = services[index];

        ref.innerHTML += `
                                    <div class="serviceCard" id="serviceCard${index}" onclick="renderSubservices(${index}, '${lang}')">
                                    <img id="titleImage${index}" src="${service.path}">
                                        <div class="serviceTitle" id="serviceTitle${index}">
                                            <h4>${service[lang].title}</h4> 
                                        </div>
                                       
                                    </div>  
        `;
      
    }

}


function renderSubservices(index, lang) {
    const subservicesRef = document.getElementById(`subservices`);
    subservicesRef.innerHTML = '';
    currentSubIndex = index;
    removeOpacity();
    subservicesRef.classList.add('subOpacity')
    const currentSubarray = services[index][lang].subservices;
    for (let index = 0; index < currentSubarray.length; index++) {
        const subservice = currentSubarray[index];
        subservicesRef.innerHTML += ` <div class="subservicesRow">
                                        <img class="subImage" src="assets/icons/circle.png" alt="">
                                        <span class="subText">${subservice}</span>
                                        </div>`;

    }
    giveCardHighlight(index);
    renderServiceRespHeadline(index, lang);
}


function removeOpacity() {
    for (let index = 0; index < services.length; index++) {
        const subservicesRef = document.getElementById(`subservices`);
        subservicesRef.classList.remove('subOpacity')
    }
}

function clearSubservices() {
    for (let index = 0; index < services.length; index++) {
        const subelement = services[index];
        const ref = document.getElementById(`subservices${index}`);
        ref.innerHTML = '';
    }
}

function giveCardHighlight(currentIndex) {
    for (let index = 0; index < services.length; index++) {
        const cardRef = document.getElementById(`serviceCard${index}`);
        if (currentIndex === index) {
            cardRef.classList.add('cardHighlight');
        } else {
            cardRef.classList.remove('cardHighlight');
        }
    }
    changeServiceImageColor(currentIndex)
}

function changeServiceImageColor(currentIndex) {
    for (let index = 0; index < services.length; index++) {
        const card = services[index];
        const image = document.getElementById(`titleImage${index}`);


        if (currentIndex === index) {
            image.src = `${card.changePath}`
        } else {
            image.src = `${card.path}`
        }
    }



}

function renderServiceRespHeadline(index, lang) {
    const headlineRef = document.getElementById('servicesRespHeadline');
    headlineRef.innerHTML = '';
    if (window.innerWidth > 950) { return }
    const headline = services[index][lang].title;
    headlineRef.innerHTML += `<h3>${headline}</h3>`;
}

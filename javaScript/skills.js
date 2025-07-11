const skills = [
  {
    path: 'assets/icons/calendar.svg',
    name: 'Organisation & Planung',
    description:
      'Ich behalte den Überblick – vom ersten Gespräch bis zur letzten Minute des Events. Strukturierte Abläufe, verlässliche Zeitpläne und reibungslose Kommunikation sorgen dafür, dass nichts dem Zufall überlassen wird.',
  },
  {
    path: 'assets/icons/communication.svg',
    name: 'Interkulturelle Kommunikation',
    description:
      'Mit fließendem Deutsch, Englisch und Spanisch kommuniziere ich sicher mit internationalen Kund:innen und Dienstleister:innen. Mein kulturelles Feingefühl hilft dabei, Veranstaltungen für vielfältige Zielgruppen stimmig zu gestalten.',
  },
  {
    path: 'assets/icons/lightbulb.svg',
    name: 'Kreatives Eventkonzept',
    description:
      'Jedes Event erzählt eine Geschichte. Ich entwickle individuelle Konzepte, die Atmosphäre schaffen, Details inszenieren und Gäste begeistern – von der Idee bis zur Umsetzung mit viel Gespür für Stil und Stimmung.',
  },
];

function renderSkills(){
    const skillRef=document.getElementById('skillCards');
    skillRef.innerHTML='';
    for (let index = 0; index < skills.length; index++) {
        const skill = skills[index];
        skillRef.innerHTML+=`<div class="skillCard">
        <img src="${skill.path}" alt="">
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
        </div>`
    }
}

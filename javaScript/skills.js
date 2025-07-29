const skills = [
  {
    path: 'assets/icons/calendar.svg',
    de: {
      name: 'Organisation & Planung',
      description: 'Ich behalte den Überblick – vom ersten Gespräch bis zur letzten Minute des Events. Strukturierte Abläufe, verlässliche Zeitpläne und reibungslose Kommunikation sorgen dafür, dass nichts dem Zufall überlassen wird.',
    },
    en: {
      name: 'Organization & Planning',
      description: 'I keep everything on track – from the first meeting to the final minute of the event. Structured processes, reliable schedules, and smooth communication ensure that nothing is left to chance.',
    },
    es: {
      name: 'Organización y planificación',
      description: 'Mantengo todo bajo control: desde la primera conversación hasta el último minuto del evento. Procesos estructurados, cronogramas fiables y una comunicación fluida garantizan que nada se deje al azar.',
    },
  },
  {
    path: 'assets/icons/communication.svg',
    de: {
      name: 'Interkulturelle Kommunikation',
      description: 'Mit fließendem Deutsch, Englisch und Spanisch kommuniziere ich sicher mit internationalen Kund:innen und Dienstleister:innen. Mein kulturelles Feingefühl hilft dabei, Veranstaltungen für vielfältige Zielgruppen stimmig zu gestalten.',
    },
    en: {
      name: 'Intercultural Communication',
      description: 'Fluent in German, English, and Spanish, I communicate confidently with international clients and partners. My cultural sensitivity helps design events that resonate with diverse audiences.',
    },
    es: {
      name: 'Comunicación intercultural',
      description: 'Con fluidez en alemán, inglés y español, me comunico con seguridad con clientes y proveedores internacionales. Mi sensibilidad cultural me permite crear eventos adecuados para distintos públicos.',
    },
  },
  {
    path: 'assets/icons/team.svg',
    de: {
      name: 'Teamfähigkeit',
      description: 'Auch als Freelancerin arbeite ich gerne in einem motivierten Team. Ich schätze den Austausch, unterstütze Kolleg:innen aktiv und trage zur positiven Zusammenarbeit bei.',
    },
    en: {
      name: 'Team Spirit',
      description: 'Even as a freelancer, I love working with motivated teams. I value collaboration, support others actively, and contribute to a positive working atmosphere.',
    },
    es: {
      name: 'Trabajo en equipo',
      description: 'Aunque soy freelancer, disfruto trabajar en un equipo motivado. Valoro la colaboración, apoyo activamente a mis colegas y contribuyo a un ambiente de trabajo positivo.',
    },
  },
  {
    path: 'assets/icons/resilience.svg',
    de: {
      name: 'Belastbarkeit',
      description: 'Wenn es hektisch wird, laufe ich zur Höchstform auf. Unter Druck ruhig zu bleiben und lösungsorientiert zu handeln, gehört zu meinen größten Stärken.',
    },
    en: {
      name: 'Resilience',
      description: 'When things get hectic, I thrive. Staying calm under pressure and acting with a solution-focused mindset are among my greatest strengths.',
    },
    es: {
      name: 'Resiliencia',
      description: 'Cuando las cosas se ponen intensas, doy lo mejor de mí. Mantener la calma bajo presión y actuar de manera resolutiva son algunas de mis mayores fortalezas.',
    },
  },

  {
    path: 'assets/icons/chart.svg',
    de: {
      name: 'Analytisches Denken & Prozessoptimierung',
      description: 'Ob im Einkauf oder Eventmanagement – ich analysiere Prozesse, identifiziere Schwachstellen und finde praktikable Lösungen. Effizienz entsteht bei mir durch Struktur und Weitblick.',
    },
    en: {
      name: 'Analytical Thinking & Process Optimization',
      description: 'Whether in procurement or event coordination – I analyze workflows, identify weaknesses, and implement practical solutions. Efficiency comes from structure and foresight.',
    },
    es: {
      name: 'Pensamiento analítico y optimización de procesos',
      description: 'Ya sea en compras o en coordinación de eventos, analizo procesos, detecto fallos e implemento soluciones eficaces. La eficiencia surge de la estructura y la visión.',
    },
  },
  {
    path: 'assets/icons/briefcase.svg',
    de: {
      name: 'Selbstständiges Arbeiten & unternehmerisches Denken',
      description: 'Als Freelancerin organisiere ich Projekte eigenverantwortlich, finde pragmatische Lösungen und denke stets mit – strukturiert, zuverlässig und mit Blick für das Wesentliche.',
    },
    en: {
      name: 'Self-Driven & Entrepreneurial Mindset',
      description: 'As a freelancer, I manage projects independently, find practical solutions, and always think ahead – with structure, reliability, and a strong sense of purpose.',
    },
    es: {
      name: 'Autonomía y mentalidad emprendedora',
      description: 'Como freelance, organizo proyectos de forma independiente, encuentro soluciones prácticas y pienso de manera proactiva, estructurada y enfocada en los resultados.',
    },
  }

];

function renderSkills(lang) {
  const skillRef1 = document.getElementById('skillCards1');
  const skillRef2 = document.getElementById('skillCards2');
  skillRef1.innerHTML = '';
  skillRef2.innerHTML = '';
  for (let index = 0; index < skills.length; index++) {
    const img = skills[index];
    const skill = skills[index][lang];
    const ref = index < (skills.length / 2) ? skillRef1 : skillRef2;
    ref.innerHTML += `<div class="skillCard">
        <img src="${img.path}" alt="">
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
        </div>`
  }
}

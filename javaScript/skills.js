const skills=[
    {
        name:'Skill1',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        name:'Skill2',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        name:'Skill3',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        name:'Skill4',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        name:'Skill5',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        name:'Skill6',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
];

function renderSkills(){
    const skillRef=document.getElementById('skillCards');
    skillRef.innerHTML='';
    for (let index = 0; index < skills.length; index++) {
        const skill = skills[index];
        skillRef.innerHTML+=`<div class="skillCard">
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
        </div>`
    }
}

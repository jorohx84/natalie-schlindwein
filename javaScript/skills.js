const skills=[
    {
        name:'Fähigkeit 1',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        name:'Fähigkeit 2',
        description:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores consectetur, eveniet reprehenderit illo aut accusantium dolorum nobis. Hic cupiditate adipisci, assumenda doloribus, aliquam quibusdam architecto autem deserunt commodi, distinctio maiores?',
    },
    {
        name:'Fähigkeit 3',
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

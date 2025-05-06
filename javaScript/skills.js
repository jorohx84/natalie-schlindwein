const skills=[
    {
        name:'Skill1',
        description:'',
    },
    {
        name:'Skill2',
        description:'',
    },
    {
        name:'Skill3',
        description:'',
    },
    {
        name:'Skill4',
        description:'',
    },
    {
        name:'Skill5',
        description:'',
    },
];

function renderSkills(){
    const skillRef=document.getElementById('skillCards');
    skillRef.innerHTML='';
    for (let index = 0; index < skills.length; index++) {
        const skill = skills[index];
        skillRef.innerHTML+=`<div class="skillCard">
        <h3>${skill.name}</h3>
        </div>`
    }
}
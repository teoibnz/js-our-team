// Viene fornito un array di oggetti in allegato in cui è definito un array di oggetti che rappresentano i membri del team.
// Ogni membro ha le informazioni necessarie per stampare le relative informazioni: Nome, Ruolo e Foto.
// MILESTONE 1:
// stampare su console le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// stampare le stesse informazioni su DOM sottoforma di stringhe
// BONUS 1:
// trasformare la stringa foto in una immagine effettiva
// BONUS 2:
// organizzare i singoli membri in card/schede
// Consigli del giorno:
// Ragioniamo come sempre a step.




const team = [
{
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
},
{
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
},
];

let teamCardWrapper = document.getElementById('card-wrapper')

// stampo su console tutti i nomi, ruoli e img profilo
for ( key in team){
    let newName = document.createElement('div');
    newName.classList.add('name');
    let newRole = document.createElement('div');
    newRole.classList.add('role');
    let imgWrapper = document.createElement('div');
    imgWrapper.classList.add('img-container');
    teamCardWrapper.appendChild(newName).innerHTML = team[key].name;
    teamCardWrapper.appendChild(newRole).innerHTML = team[key].role;
    teamCardWrapper.appendChild(imgWrapper).innerHTML = team[key].image;

    console.log(team[key].name)
    console.log(team[key].role)
    console.log(team[key].image)
}
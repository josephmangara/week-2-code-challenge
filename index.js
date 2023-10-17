
//fetch requests data from the json live server.
//.then assists in getting a response from json.
let characters = []
document.addEventListener("DOMContentLoaded", function(){
    getCharacters()
});

function getCharacters(){
fetch("https://my-json-server.typicode.com/josephmangara/week-2-code-challenge/characters")
.then(res => res.json())
.then(data => {
 displayContent(data)
})};

function displayContent(data) {
    for (let character of data){
    let list = document.getElementById("data");
    let li = document.createElement('li');
    li.textContent = character.name;
    li.addEventListener('click', () => displayAnimalDetails(character));
    list.appendChild(li);
}}
function displayAnimalDetails(character){
    const animalDetails = document.getElementById('animalDetails');
    animalDetails.innerHTML = `
    <h2 id="data">${character.name}</h2>
    <img src="${character.image}" alt="${character.name} Image">
    <p>Votes: ${character.votes}</p>
    `;
}

function displayVotes() {
    const numberInput = document.getElementById('container').value;
    const displayResult = document.getElementById('displayResult');

    if (!isNaN(numberInput) && numberInput !== '') {
        displayResult.textContent = `Votes: ${numberInput}`;
    } else {
        displayResult.textContent = 'Please enter a valid number.';
    }
}

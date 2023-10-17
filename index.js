
//fetch requests data from the json live server.
//.then assists in getting a response from json.
let characters = []
document.addEventListener("DOMContentLoaded", function(){
    getCharacters()
})

function getCharacters(){
fetch("http://localhost:3000/characters")
.then(res => res.json())
.then(data => {
 displayContent(data)
})}

function displayContent(data) {
    for (let character of data){
    console.log(character)
    let list = document.getElementById("data");
    let li = document.createElement('li');
    li.textContent = character.name;
    li.addEventListener('click', () => displayAnimalDetails(character));
    list.appendChild(li);
}}
function displayAnimalDetails(character){
    animalDetails.innerHTML = `
    <h2 id="data">${character.name}</h2>
    <img src="${character.image}">
    <p>Votes: ${character.votes}</p>
    <button onclick="vote(${character.id})">vote<button>
    <button onclick="resetvote(${character.id})">reset votes</button>
    `;
}


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
    for (let i of data){
    console.log(i)
    let list = document.getElementById("data");
    let li = document.createElement('li');
    li.textContent = i.name;
    list.appendChild(li);
}}
// function displayCharacterDetails(characters){
//     document.getElementsId('data')
//     console.log(data)
//     document.addEventListener('click', )
//      alert('it\'s working')
// }

const button = document.getElementsById('button').addEventListener
    ('submit',(event) => alert("vote counted"));
    console.log(button)
// function addingEventListener() {
//     const button = document.getElementById('button');
//     button.addEventListener('click', function() {
//       alert('I was clicked!');
//     });
//     }


const voteCounter = document.querySelector('data')
li.addEventListener('click', ()=> {
    document.querySelector('#image')
    image.src = object.image})
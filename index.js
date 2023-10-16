
const baseURL = 'http://localhost:3000/characters'

fetch(baseURL)
.then(res => res.json())
.then(data => {
 displayContent(data)
})

function displayContent(data) {
    for (let i of data){
    console.log(i)
    let list = document.getElementById("data");
    let li = document.createElement('li');
    li.textContent = i.name;
    list.appendChild(li);
const voteCounter = document.getElementsByTagName('li')
let voteCount = 0;
li.addEventListener('click', ()=> {
    voteCount = voteCount + 1;
})

    }
   }



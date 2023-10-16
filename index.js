
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
    
    }
    console.log(data)}

    // let li = document.createElement('li');
    // li.textContent = [i];
    // list.appendChild(li);
    // li.addEventListener('click', (e)=>{
    //     li.classList.toggle('active')})
    
//document.getElementById("data").innerText += data[i].id + data[i].name 
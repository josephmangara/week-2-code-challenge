
const baseURL = 'http://localhost:3000/characters'

fetch(baseURL)
.then(res => res.json())
.then(data => {
 displayContent(data)
})

function displayContent(data){
    for(var i =0; i<data.length; i++)
    (document.getElementById("data").innerHTML += data[i].id + data[i].name
    )
     console.log(data)}
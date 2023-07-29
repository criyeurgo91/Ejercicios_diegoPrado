var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var anuncioParam = urlParams.get('detalle');

console.log("xxxxxxxxxxxxxxxxx/n"+anuncioParam)

let pokemon = ""
fetch('https://pokeapi.co/api/v2/pokemon/'+anuncioParam)
.then(response=>{
    return response.json();
})

.then(data=>{
    console.log(data)
    pokemon += `<center><li>${data.name}</li><img src = ${data.sprites.other.home.front_default}>
    <li>Experiencia Base: ${data.base_experience}</li>
    <li>Tamaño: ${data.height} pies</li>`


    document.getElementById('detail_characters').innerHTML=pokemon;

})
let elementos=''

fetch('https://rickandmortyapi.com/api/character')
.then(response=>{
    //console.log(response.json());
    return response.json();
})
.then(data =>{
    console.log(data);
    for (let i =0; i < data.results.length; i++){
        elementos += `<li>${data.results[i].name}</li> <img src="${data.results[i].image}"</img>`;
        console.log(data[i]);
    }

    

    document.getElementById('name_character').innerHTML=elementos;
})
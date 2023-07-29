let elementos=''

fetch('https://pokeapi.co/api/v2/pokemon')
.then(response=>{
    //console.log(response.json());
    return response.json();
})
.then(data =>{
    console.log(data);
    for (let i =0; i < data.results.length; i++){
        elementos += `<li>${data.results[i].name}
        <a href="detail.html?detalle=${i+1}">/Details</a>
        </li>`;
        console.log(data[i]);
    }

    

    

    document.getElementById('list_characters').innerHTML=elementos;

    
})


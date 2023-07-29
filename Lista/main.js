//parse convierte un string en JSON en un objeto JavaScript
//JSON.parse(JSON.stringify(usuario));

let elementos=''

fetch('https://jsonplaceholder.typicode.com/posts/')
.then(response=>{
    //console.log(response.json());
    return response.json();
})
.then(data =>{
    //console.log(data);
    for (let i =0; i < data.length; i++){
        elementos += `<li>${data[i].title}</li>`;
        console.log(data[i]);
    }
    document.getElementById('posts').innerHTML=elementos;
})
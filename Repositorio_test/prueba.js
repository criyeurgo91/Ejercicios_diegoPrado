const amigos=[
    {nombre:'Jhon', edad:20},
    {nombre:'Ana', edad:19},
    {nombre:'Lina', edad:23},
    {nombre:'Sofia', edad:18}
];

let salida='';

for(let i = 0;i<amigos.length;i++){
    salida = salida +`<li>${amigos[i].nombre} - ${amigos[i].edad} años </li>`;
    console.log(amigos[i].nombre);

}
    console.log(salida);
    document.getElementById('lista').innerHTML = salida
    console.log(usuario);
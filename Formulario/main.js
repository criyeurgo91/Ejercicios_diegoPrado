var queryString = window.location.search;
var urlParams = new URLSearchParams(queryString);
var nombre = urlParams.get('name');
var apellido = urlParams.get('last_name');
var correo = urlParams.get('email');
var mensaje = urlParams.get('msj');



console.log();

let datos=""

datos += `Nombre:${nombre} <br>
         Apellido: ${apellido} <br>
         Correo: ${correo} <br>
         Mensaje: ${mensaje}`



document.getElementById('datos').innerHTML=datos;

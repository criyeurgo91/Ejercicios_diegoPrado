x=0

for(var i=0; i<10;i++){
    tabla= 5*i;
    console.log("5*"+i+"="+tabla)
}

op=true
while(true){
    console.log("Hola!")
    if (op){
        op=false
        //continue
    }else{
        break
    }
}

x=10
do{
    x=x-1
    console.log(x)
}while(x==0)

function saludar (){
    saludo="Hola desde la linea 26"
    console.log(saludo)
    numeros=[1,2,"tres",4,6,8]
    return numeros
}

console.log(saludar())

nombre = prompt("ingresa tu nombre")
console.log(saludar(numeros))


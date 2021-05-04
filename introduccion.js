//Introduccion a js
//alert('hola mundo'); -> mostrar una alerta
//console.log("hola mundo"); -> mostrar en consola
//prompt() = genera una alerta con un campo de texto para ser llenado

let edad=prompt("Ingrese su edad","");

//confirm() -> una alerta que contiene 2 botones
confirm("Acepta los cookies de la pagina?");

//-----------------------//
console.log(typeof edad);

//imprime variable como java
console.log("Edad: "+edad);

//convertir un string a entero
let y=Number(edad)+5;
console.log(y);
console.log(typeof y);

//-----------------------------//
//typeof: dice el dipo de dato que estoy usando




//crear un programa que mande a llamar su nombre, apellido y edad e imprima todo eso en una misma linea
let nombre=prompt("Ingrese su Nombre","");
let apellido=prompt("Ingrese su Apellido","");
let edad1=prompt("Ingrese su edad","");
let espacios=" ";
console.log("Su nombre completo es:"+nombre+espacios+apellido+espacios+"y su edad es:"+edad1);
alert("Su nombre completo es:"+nombre+espacios+apellido+espacios+"y su edad es:"+edad1);

//Logica booleana
/*
(x==y)->verifica el valor
(x===y)->verifica valor y tipo de dato
y=null; variable explicitamente vacia
(y== undefined)
(y=== undefined)
(null==null)
(null===null)
(true===1)
(null ===undefined)
(null ==undefined)
NaN=not a number (no es un numero)

//negacion de una cadena
!"cadena"

si !"" eso es true sirve para validar un campo vacio
!null=true
!0 =true
!1 =true

transformar de cadena a booleano
let a="hola"
let b=!!a  doble !! para transformar
*/

//pedir al usuario que ingrese su edad
edad=prompt("Ingrese su edad","");
if(edad>18)
{
    alert("Usted ya puede caer preso");
}
else
{
    alert("Usted no puede entrar a este centro de perdicion");
}

//toUpperCase() = convierte el texto a mayusculas
//semaforo(preguntar al usuario de que color esta el semaforo)
//rojo=detengase
//verde=avance
//amarillo=cuidado

let color=prompt("De que color esta el semaforo, puede ser verde, rojo y amarillo","").toUpperCase();

if(color=="")
{
    alert("llene el campo no lo deje vacio");
}
else if(color==="R" || color==="ROJO")
{
    alert("Detengase");
    console.log("Detengase");
}
else if(color ==="V" || color==="VERDE")
{
    alert("Avance");
}
else if(color ==="A" || color==="AMARILLO")
{
    alert("Avance con Cuidado");
}

//Programa que pregunta que bebida tomar


let bebida=prompt("Cual de estas es su bebida favorita, puede ser Cafe, te o chocolate","").toUpperCase();

if(bebida=="")
{
    alert("llene el campo no lo deje vacio");
}
else if(bebida==="CAFE" || bebida==="CAFÉ")
{
    alert("Bebere Capuchino")

}
else if(bebida ==="TE" || bebida==="TÉ")
{
    alert("Bebere Té Helado");
}
else if(bebida ==="CHOCOLATE")
{
    alert("Bebere Chocolate");
}

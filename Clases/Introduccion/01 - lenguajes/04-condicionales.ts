// Condicionales
const casado = false;
if (casado == true){ //Expresion => boolean
    console.log("Si estoy casado");
}
   else{
    console.log("No estoy casado")
}
const tengoMosa = false;
const casadoYMosero = casado == true && Tengomosa == true // 
if(casadoYMosero){
    console.log("Casado y mosero");
} else {
    console.log("O casado o mosero o nada");
}
// AND -> && 
// OR -> || PIPES
// apago la primera alarma me hago
// bolita y lloro hasta la segunda 
// alarma y me levanto
// celulardanado == true
// celularDescargado == true
// amaneceMuerto == true
// estaDesactivadaLaAlarma == true 
// estaEnModoSilencio  == true 
// const seAtrasoAClase = celulardanado == true || celularDescargado == true || amaneceMuerto == true || estaDesactivadaLaAlarma == true || estaEnModoSilencio  == true 
// TRUTY :
const nombreVacio = "";
if(nombreVacio){
console.log("Truty");
}
else {
console.log("Falsy");
}
if("abc"){
    console.log("Truty");
}
else {
    console.log("Falsy");
}
if(-1){
    console.log("Truty");
}
else {
    console.log("Falsy");
}
if(0.2){
    console.log("Truty");
}
else {
    console.log("Falsy");
}
if(0){
    console.log("Truty");

}else {
    console.log("Falsy");
}
const calculo = "multiplicar";
switch(calculo){
    case "sumar":
        //codigo
        break;
    case "restar":
        //codigo
        break;
    case "multiplicar":
        //codigo
        break;
    case "dividir":
    default: 
}

// 6 Guagua
// 18 Guambra
// 65 Longo
// >65 Ruku

/*switch(edad){
    case "6":
        console.log("Guagua")
        break;
    case "18":
        console.log("Guambra")
        break;
    case "65":
        console.log("Longo")
        break;
    case "6":
        console.log("Ruku")
        break;
        default:
            "Ninguno"
}       */
let edad = Number(prompt("Inserte edad"));
if (edad > 0 && edad <= 6){
    console.log("Eres guagua")
}
if (edad > 6 && edad <= 18){
    console.log("Eres guambra")
}
if (edad > 18 && edad <= 65){
    console.log("Eres longo")
}
if (edad > 65){
    console.log("Eres ruku")
}
if (edad <=0){
    console.log("No existes :v")
}
if (edad = NaN){
    console.log("Ingresa un valor válido")
}

// FALSY :
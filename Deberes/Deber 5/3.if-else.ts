// Determina si dos vectores son paralelos
const x1 = Number(prompt("Inserte la primer componente del primer vector"));
const x2 = Number(prompt("Inserte la segunda componente del primer vector"));
const y1 = Number(prompt("Inserte la primera componente del segundo vector"));
const y2 = Number(prompt("Inserte la segunda componente del segundo vector"));
if (x1/y1 == x2/y2){ // Condicion de paralelismo
    console.log("Los vectores son paralelos")
} else{
    console.log("Los vectores no son paralelos")
}
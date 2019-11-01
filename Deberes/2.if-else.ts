// Ortogonalidad de vectores
const x1 = Number(prompt("Inserte la primer componente del primer vector"));
const x2 = Number(prompt("Inserte la segunda componente del primer vector"));
const y1 = Number(prompt("Inserte la primera componente del segundo vector"));
const y2 = Number(prompt("Inserte la segunda componente del segundo vector"));
let Producto = x1*y1+x2*y2
if (Producto == 0){
    console.log("Los vectores son ortogonales")
} 
else {
    console.log("Los vectores no son ortogonales")
}
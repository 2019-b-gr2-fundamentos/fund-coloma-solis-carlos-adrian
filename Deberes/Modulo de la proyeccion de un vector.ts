// Modulo de la proyeccion de un vector en R2
const x1 = Number(prompt("Inserte la componente 1 del primer vector")) ;
const x2 = Number(prompt("Inserte la componente 2 del primer vector"));
const y1 = Number(prompt("Inserte la componente 1 del segundo vector"));
const y2 = Number(prompt("Inserte la componente 2 del segundo vector"));
let resultado = (x1*y1+x2*y2)/Math.sqrt(y1*y1+y2*y2);
console.log(resultado)
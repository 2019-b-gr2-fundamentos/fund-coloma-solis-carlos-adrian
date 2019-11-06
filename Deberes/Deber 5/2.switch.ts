// Modulo angulo  de un vector
// Componentes del vector
const x = Number(prompt("Inserte la componente en x del vector")) ;
const y = Number(prompt("Inserte la componente en y del vector"));
// Eleccion
const decision = prompt("¿Desea calcular el modulo o el angulo de un vector?")
switch (decision){
    case ("modulo"):
        console.log(Math.sqrt(Math.pow(x,2)+Math.pow(y,2))) // Formula del modulo de un vector
        break;
    case ("angulo"):
        console.log(Math.atan(y/x)*180/Math.PI) // Formula del angulo de un vector
        break;
    default:
        console.log("Tiene que insertar 'modulo' o 'angulo'")
}

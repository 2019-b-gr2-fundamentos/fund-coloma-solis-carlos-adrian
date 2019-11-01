// Traductor de dias de la semana
const numero = prompt("Inserte un dia de la semana en ingles (minusculas)");
switch (numero){
    case "monday":
        console.log("lunes")
        break;
    case "thursday":
        console.log("martes")
        break;
    case "wednesday":
        console.log("miercoles")
        break;
    case "tuesday":
        console.log("jueves")
        break;
    case "friday":
        console.log("viernes")
        break;
    case "saturday":
        console.log("sabado")
        break;
    case "sunday":
        console.log("domingo")
        break; 
    default:
        console.log("El dia insertado esta mal escrito")                   
}

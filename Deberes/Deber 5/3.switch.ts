 // Movimiento parabolico
const Vo = Number(prompt("Inserte la velocidad inicial en m/s"));
const angulo = Number(prompt("Inserte el angulo de lanzamiento en grados"));
const eleccion = prompt("¿Desea obtener la distancia o altura maxima?");
switch (eleccion){
    case ("distancia"):
        console.log(Math.pow(Vo,2)*Math.sin(2*angulo*Math.PI/180)/9.81)
        break;
    case ("altura"):
        console.log(Math.pow(Vo*Math.sin(angulo*Math.PI/180),2)/19.62)    
        break;
    default:
        console.log("Debe escribir 'altura' o 'distancia'")    
}

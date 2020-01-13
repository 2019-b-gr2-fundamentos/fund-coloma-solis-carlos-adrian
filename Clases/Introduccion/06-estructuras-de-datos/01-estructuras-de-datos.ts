// boolean
// string
// null -> object
// number
// PERSONA 
// ANIMAL -> nombre científico, color principal
// fecha nacimiento, peso, gémero

// CASI EN TODOS LOS LENGUAJES
// Struct -> Estructura de datos
// Clase -> Estructura de datos -> Métodos
import {AnimalPerrito} from './interfaces/animal-perrito.interface' 
import {Duenio} from './interfaces/duenio.interface'
// ./ -> Relativo a donde esta el archivo
const edad = 20;
const ejemploEstructura = {
    nombreCientífico: 'canis lupus familiaris',
    "llave":"valor",
    noEsNecesario: true, // ultima coma ok
    enojo: undefined,
    edadActual: edad, // variables
}
// Estructura de datos en lenguaje NO TIPADO
const poliPerro = {
    nombreCientífico: 'canis lupus familiaris',
    nombre: 'Grandote',
    clan: 'Poliperro',
    edad: 10,
    hijos: null,
    perritas: ['Manuela','Zoraida'],
    vacunado: true,
}
console.log(poliPerro.nombre); 
// Estructura de datos en lenguaje TIPADO
const poliPerroAmarillo: AnimalPerrito = {
    nombreCientífico: 'canis lupus familiaris',
    nombre: 'Grandote',
    clan: null, // a cualquier propiedad se le puede poner null
    edad: 4,
    // hijos: null,
    //perritas: [],
    //vacunado: false,
}
const duenioPoliPerroAmarillo: Duenio ={
    nombres: 'Adrian',
    apellidos: '',
    fechaNacimiento: 2,
    mascotasPerros: [poliPerroAmarillo]
}
poliPerroAmarillo.duenio = duenioPoliPerroAmarillo;
poliPerroAmarillo.vacunado = true
console.log(poliPerroAmarillo.duenio.nombres)
console.log(poliPerroAmarillo.duenio.apellidos);
console.log(duenioPoliPerroAmarillo.nombre)
console.log(poliPerroAmarillo.edad)
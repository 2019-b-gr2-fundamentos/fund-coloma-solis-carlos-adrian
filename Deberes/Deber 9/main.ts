import { forEach } from "./ForEach"
import { reduce } from "./reduce"
import {map} from "./map"
import {every} from "./every"
import {some} from "./some"
const arregloEstudiantes: any = [  
    {id:1, nombre: 'Ariel', nota: 7},
    {id:2, nombre: 'Melanie', nota: 5},
    {id:3, nombre: 'Sara', nota: 3},
    {id:4, nombre: 'Andres', nota: 5},
    {id:5, nombre: 'Maria', nota: 5.9}
]
console.log('ForEach')
forEach(arregloEstudiantes, 
    function(valorActual){
        console.log(valorActual)
    })
const resultadoReduce = reduce(arregloEstudiantes,
    function(acumulador, valorActual){
        const calculo = acumulador + valorActual.nota;
        return calculo;
    }
    ,0
    )
const arregloMapeado = map(arregloEstudiantes,
    function(valorActual, i, arreglo){
        const nuevoObjeto = {
     
            id: valorActual.id,
            nombre: valorActual.nombre,
           // nota: valorActual.nota,
            nota20: valorActual.nota*2
        };

        return nuevoObjeto
    }
)
const respuestaEvery = every(arregloEstudiantes,
    function(valorActual){
        return valorActual.nota >= 4
    }
  );
  const respuestaSome = some(arregloEstudiantes,
    function(valorActual){
        return valorActual.nota < 4
    })
console.log('Reduce: ',resultadoReduce)
console.log('Map: ',arregloMapeado)    
console.log('Every: ', respuestaEvery)
console.log('Some: ', respuestaSome)    
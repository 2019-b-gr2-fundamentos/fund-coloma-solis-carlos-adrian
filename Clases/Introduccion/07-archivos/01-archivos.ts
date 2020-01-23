import { leerArchivo } from "./02-leer-archivo"
import { escribirArchivo } from "./03-Escribir-Archivo";
import { Estudiante } from "./interfaces/estudiante.interface";
import * as prompts from 'prompts';
// como vamos a trabajar con el pompt que convierte en promesas rabajamos con una funcion asincrona
async function main(){
    const contenidoArchivo = leerArchivo('./ejemplo.txt')
    console.log('contenidoArchivo', contenidoArchivo)
    const arregloCargadoDeArchivo = JSON.parse(contenidoArchivo)
    const arregloEstudiantes: Estudiante[] = [arregloCargadoDeArchivo];
    const arregloPreguntas =[
        {
            type: 'text',
            name: 'nombre',
            message: 'Ingresa Nombre'
        }
    ];

    const respuestaEstudiante = await prompts(arregloPreguntas);
    console.log(respuestaEstudiante);
    let contador = 1;
    const nuevoRegistroUno = {
        id: contador,
        nombre: respuestaEstudiante.nombre
    };
    contador = contador ++
    arregloEstudiantes.push(nuevoRegistroUno);
    const respuestaEstudianteDos = await prompts(arregloPreguntas);

    const nuevoRegistroDos = {
        id: contador,
        nombre: respuestaEstudianteDos.nombre
    }
    contador = contador + 1;
    arregloEstudiantes.push(nuevoRegistroDos);
    console.log('¿Cual usuario quieres editar?')    
    console.log(arregloEstudiantes)
    // OPERADORES!!! -> REEMPLAZAR AL !FOR!
    const idABuscar = await prompts({
        type: 'number',
        name: 'id',
        message: 'Ingresa el ID del registro a Editar'
    }

    )
    const indiceEncontrado = arregloEstudiantes.findIndex( // return CONDICION
        function (valorActual, indice, arreglo){
            // console.log(valorActual);
            // console.log(indice);
            //console.log(arreglo);
            return valorActual.id == idABuscar.id;; // Nos devuelve el Indice
        }
    )
    console.log('Indice encontrado:', indiceEncontrado)
    const nombreAEditar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Ingresa el nuevo nombre'
    })
    arregloEstudiantes[indiceEncontrado].nombre = nombreAEditar.nombre;
    console.log(arregloEstudiantes);

    const buscar = await prompts({
        type: 'text',
        name: 'nombre',
        message: 'Buscar por ID o por NOMBRE'
    });

    const estudianteEncontrado = arregloEstudiantes.
             find(// return CONDICION)
                function(valorActual){
                    return valorActual.nombre == buscar.nombre;
                }
             );
    console.log(estudianteEncontrado)
}






/*  const TextoLeido = leerArchivo();
    const nuevoContenido = 'Temgo hambre :( \n';
    escribirArchivo('./ejemplo.txt','');
    
    console.log(TextoLeido + nuevoContenido);
    */
main()
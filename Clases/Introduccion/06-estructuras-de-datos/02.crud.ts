// const prompts = require('prompts');
import * as prompts from 'prompts';
import {RespuestaEdad} from './interfaces/respuesta-edad.interface'
import {RespuestaNombre} from './interfaces/respuesta-nombre.interface'
// npm uninstall -g tsc 
// npm install -g tsc  
function main(){
    //obtenerDatosAnimalPerrito(); // Asíncrona
                                // Síncrona
    obtenerDatosAnimalPerritoAsíncrono()                            
}
function obtenerDatosAnimalPerrito(){
    // Paradigma de programacion

    // SINCRONO VS ASINCRONO
    console.log('Inicio');
    const promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
     });
    console.log(promesaEdad)
    promesaEdad
     .then( // OK
        (datos) =>{
            console.log('datos',datos); // AQUI PUEDO SEGUIR
            ////
            const promesaNombre = prompts({
                type: 'text',
                name: 'nombre',
                message: 'Puedes darme tu nombre?'
             });
            console.log(promesaNombre)
            promesaNombre
             .then( // OK
                (datos) =>{
                    console.log('datos',datos); // AQUI PUEDO SEGUIR
                    ////
                    
                    ////
                }
            )
            .catch( // :(
                (error)=>{
                    console.log('Error',error);
                }
            )

            console.log('Fin')
            ////
        }
    )
    .catch( // :(
        (error)=>{
            console.log('Error',error);
        }
    )

    console.log('Fin')
}
async function obtenerDatosAnimalPerritoAsíncrono(){
    // Paradigma de programacion

    // SINCRONO VS ASINCRONO
    console.log('Inicio');
    const preguntas = [
        {
            type: 'number',
            name: 'edad',
            message: 'Puedes darme tu edad?'
        },
        {
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        },
        {
            type: 'text',
            name: 'cedula',
            message: 'Puedes darme tu cedula?'
        }
    ]
    const respuestaEdad = await prompts(preguntas);
    console.log('Respuesta', respuestaEdad);
    console.log('Fin')
}
main();

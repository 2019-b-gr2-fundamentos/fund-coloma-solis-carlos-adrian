// const prompts = require('prompts');
import * as prompts from 'prompts';
 
function main(){
    obtenerDatosAnimalPerrito();
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
main();

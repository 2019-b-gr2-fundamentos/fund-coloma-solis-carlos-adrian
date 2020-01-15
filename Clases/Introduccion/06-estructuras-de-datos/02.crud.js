// const prompts = require('prompts');
var prompts = require('prompts');
function main() {
    obtenerDatosAnimalPerrito();
}
function obtenerDatosAnimalPerrito() {
    // Paradigma de programacion
    // SINCRONO VS ASINCRONO
    console.log('Inicio');
    var promesaEdad = prompts({
        type: 'number',
        name: 'edad',
        message: 'Puedes darme tu edad?'
    });
    console.log(promesaEdad);
    promesaEdad
        .then(function (datos) {
        console.log('datos', datos); // AQUI PUEDO SEGUIR
        ////
        var promesaNombre = prompts({
            type: 'text',
            name: 'nombre',
            message: 'Puedes darme tu nombre?'
        });
        console.log(promesaNombre);
        promesaNombre
            .then(function (datos) {
            console.log('datos', datos); // AQUI PUEDO SEGUIR
            ////
            ////
        })
            .catch(function (error) {
            console.log('Error', error);
        });
        console.log('Fin');
        ////
    })
        .catch(function (error) {
        console.log('Error', error);
    });
    console.log('Fin');
}
main();

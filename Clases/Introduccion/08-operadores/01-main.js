"use strict";
exports.__esModule = true;
var _02_filter_1 = require("./02-filter");
var every_1 = require("./every");
var some_1 = require("./some");
function main() {
    var arregloEstudiantes = [
        { id: 1, nombre: 'Ariel', nota: 7 },
        { id: 2, nombre: 'Melanie', nota: 5 },
        { id: 3, nombre: 'Sara', nota: 3 },
        { id: 4, nombre: 'Andres', nota: 5 },
        { id: 5, nombre: 'Maria', nota: 5.9 }
    ]; // en este lenguaje podemos crear una estructura y usarla al mismo tiempo llenandola de datos
    // Operador -> FOREACH
    // Enviamos -> NADA
    // Recibimos -> Nada
    var respuestaForEach = arregloEstudiantes
        .forEach(function (valorActual, indice, arreglo) {
        console.log(valorActual.nota);
    });
    //console.log(respuestaForEach);// undefained
    //Map -> Transformar el arreglo
    // Enviamos -> valorActual modificado
    // RECIBIR -> Nuevo arreglo 
    var respuestaMap = arregloEstudiantes
        .map(function (valorActual, i, arreglo) {
        var nuevoObjeto = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            // nota: valorActual.nota,
            nota20: valorActual.nota * 2
        };
        return nuevoObjeto;
    });
    //console.log('RespuestaMap', respuestaMap);
    //console.log('Arreglo de Estudiantes', arregloEstudiantes);
    // Filter --> filtrar el arreglo
    // Enviamos -> Nuevo arreglo con valores filtrados 
    var respuestaFilter = arregloEstudiantes
        .filter(function (valorActual, i, arreglo) {
        var condicion7 = valorActual.nota >= 7;
        var condicion5 = valorActual.nota < 5;
        return condicion7 || condicion5;
    });
    //console.log('respuestaFilter', respuestaFilter);
    //console.log('arregloEstudiates', arregloEstudiantes);
    // And -> EVERY(tODOS CUMPLEN ) / Or -> some (uno cumpla)
    // Some -> Devuelve verdadero o falso dependiendo de la condicion
    //         Si alguno cumple devuelve true
    //         Si ninguno cumple devuelve false
    // Enviamos -> Condicion 
    // Recibir -> Booleano
    var respuestaSome = arregloEstudiantes
        .some(function (valorActual, i, arr) {
        var condicion = valorActual.nota < 4;
        //Condicion truty o true
        return condicion;
    });
    //console.log('respuestaSome', respuestaSome);
    //console.log('arreglo Estudiantes', arregloEstudiantes);
    // EVERY -> Devuelve verdadero o falso dependiendo de la condicion
    //         Si TODOS  cumpleN devuelve true
    //         Si ninguno cumple devuelve false
    // Enviamos -> Condicion 
    // Recibir -> Booleano
    var respuestaEvery = arregloEstudiantes
        .every(function (valorActual, i, arr) {
        var condicion = valorActual.nota >= 4;
        return condicion;
    });
    console.log('respuestaEvery', respuestaEvery);
    console.log('arregloEstudiantes', arregloEstudiantes);
    // Reduce --> Devuelve un valor 
    // Enviamos -> Calculo 
    // Recibir --> Valor 
    // reduce resive 2 valores
    var respuestaReduce = arregloEstudiantes
        .reduce(function (acumuldor, valorActual, i, arr) {
        var calculo = acumuldor + valorActual.nota;
        return calculo;
    }, 0 // VAlor es donde empieza
    );
    /*console.log('respuestaReduce', respuestaReduce);
    console.log('Promedio', respuestaReduce / arregloEstudiantes.length); // para dividir por la
    console.log('repuestaArreglo', arregloEstudiantes);*/
    var respuestaFilterNuestro = _02_filter_1.filter(arregloEstudiantes, function (valorActual) {
        return valorActual.nota >= 7 || valorActual.nota <= 5;
    });
    var respuestamiEvery = every_1.every(arregloEstudiantes, function (valorActual) {
        return valorActual.nota >= 4;
    });
    var respuestaMiSome = some_1.some(arregloEstudiantes, function (valorActual) {
        return valorActual.nota < 4;
    });
    console.log('respuestaFilterNuestro', respuestaFilterNuestro);
    console.log('arregloEstudiantes', arregloEstudiantes);
    console.log('Mi every', respuestamiEvery);
    console.log('Every', respuestaEvery);
    console.log('MiSome', respuestaMiSome);
    console.log('Some', respuestaSome);
}
;
main();
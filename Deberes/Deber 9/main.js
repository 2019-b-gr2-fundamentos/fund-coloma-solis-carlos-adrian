"use strict";
exports.__esModule = true;
var ForEach_1 = require("./ForEach");
var reduce_1 = require("./reduce");
var map_1 = require("./map");
var every_1 = require("./every");
var some_1 = require("./some");
var arregloEstudiantes = [
    { id: 1, nombre: 'Ariel', nota: 7 },
    { id: 2, nombre: 'Melanie', nota: 5 },
    { id: 3, nombre: 'Sara', nota: 3 },
    { id: 4, nombre: 'Andres', nota: 5 },
    { id: 5, nombre: 'Maria', nota: 5.9 }
];
console.log('ForEach');
ForEach_1.forEach(arregloEstudiantes, function (valorActual) {
    console.log(valorActual);
});
var resultadoReduce = reduce_1.reduce(arregloEstudiantes, function (acumulador, valorActual) {
    var calculo = acumulador + valorActual.nota;
    return calculo;
}, 0);
var arregloMapeado = map_1.map(arregloEstudiantes, function (valorActual, i, arreglo) {
    delete arregloEstudiantes.valorActual;
});
var respuestaEvery = every_1.every(arregloEstudiantes, function (valorActual) {
    return valorActual.nota >= 4;
});
var respuestaSome = some_1.some(arregloEstudiantes, function (valorActual) {
    return valorActual.nota < 4;
});
console.log('Reduce: ', resultadoReduce);
console.log('Map: ', arregloMapeado);
console.log('Every: ', respuestaEvery);
console.log('Some: ', respuestaSome);
console.log(arregloEstudiantes);

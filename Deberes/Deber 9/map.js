"use strict";
exports.__esModule = true;
function map(arreglo, funcion) {
    var nuevoArreglo = [];
    for (var i = 0; i < arreglo.length; i++) {
        nuevoArreglo.push(funcion(arreglo[i]));
    }
    return nuevoArreglo;
}
exports.map = map;

"use strict";
exports.__esModule = true;
function forEach(arreglo, funcion) {
    for (var i = 0; i < arreglo.length; i++) {
        funcion(arreglo[i]);
    }
}
exports.forEach = forEach;

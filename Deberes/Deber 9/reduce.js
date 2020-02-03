"use strict";
exports.__esModule = true;
function reduce(arreglo, funcion, valorinicial) {
    var acumulador = valorinicial;
    for (var i = 0; i < arreglo.length; i++) {
        acumulador = funcion(acumulador, arreglo[i]);
    }
    return acumulador;
}
exports.reduce = reduce;

"use strict";
exports.__esModule = true;
function every(arreglo, funcion) {
    var bandera = true;
    for (var i = 0; i < arreglo.length; i++) {
        if (!funcion(arreglo[i])) {
            bandera = false;
            break;
        }
    }
    return bandera;
}
exports.every = every;

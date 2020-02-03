"use strict";
exports.__esModule = true;
function some(arreglo, funcion) {
    var bandera = false;
    for (var i = 0; i < arreglo.length; i++) {
        if (funcion(arreglo[i])) {
            bandera = true;
            break;
        }
    }
    return bandera;
}
exports.some = some;

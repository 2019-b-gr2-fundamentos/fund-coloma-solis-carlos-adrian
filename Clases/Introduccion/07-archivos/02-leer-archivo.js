"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
function leerArchivo(path) {
    console.log('Leer archivo');
    var resultado = fs.readFileSync(path, //PATH
    'utf-8' // CODIFICACIÓN
    );
    console.log(resultado);
    return resultado;
}
exports.leerArchivo = leerArchivo;

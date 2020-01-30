"use strict";
exports.__esModule = true;
var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, //PATH
    'utf-8' // CODIFICACIÓN
    );
    return resultado;
}
exports.leerArchivo = leerArchivo;

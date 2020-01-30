import * as fs from 'fs';
export function leerArchivo(path:string){
    const resultado = fs.readFileSync(
        path, //PATH
        'utf-8' // CODIFICACIÓN
    );
    return resultado
}

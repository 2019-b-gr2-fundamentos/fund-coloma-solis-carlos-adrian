import * as fs from 'fs';
export function leerArchivo(path:string){
    console.log('Leer archivo');
    const resultado = fs.readFileSync(
        path, //PATH
        'utf-8' // CODIFICACIÓN
    );
    console.log(resultado)
    return resultado
}

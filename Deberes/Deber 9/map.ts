export function map(arreglo,funcion){
    let nuevoArreglo = []
    for(let i = 0; i < arreglo.length; i++){
        nuevoArreglo.push(funcion(arreglo[i]))
    }
    return nuevoArreglo
}
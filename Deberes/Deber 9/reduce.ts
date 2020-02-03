export function reduce(arreglo,funcion,valorinicial){
    let acumulador = valorinicial
    for(let i = 0; i < arreglo.length; i++){
        acumulador = funcion(acumulador, arreglo[i])
    }
    return acumulador
}
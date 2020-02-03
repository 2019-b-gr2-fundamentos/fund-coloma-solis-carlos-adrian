export function forEach(arreglo,funcion){
    for(let i = 0; i< arreglo.length; i++){
        funcion(arreglo[i])
    }
}
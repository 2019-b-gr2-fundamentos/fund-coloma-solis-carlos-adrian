export function some(arreglo,funcion){
    let bandera = false
    for(let i = 0; i < arreglo.length; i++){
        if(funcion(arreglo[i])){
            bandera = true;
            break;
        }
    }
    return bandera 
}
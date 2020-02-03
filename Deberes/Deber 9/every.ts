export function every(arreglo,funcion){
    let bandera = true
    for(let i = 0; i < arreglo.length;i++){
        if(!funcion(arreglo[i])){
            bandera = false
            break;
        }
    }
    return bandera 
}
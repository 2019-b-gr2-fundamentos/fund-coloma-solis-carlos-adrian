const ArregloMatriz= [
    [1,2],
    [3,4,5],
    [6,7,8],
    [9]
]
function compararMatriz(
    matrizUno: number[][],
    matrizDos: number[][]
): boolean {
    return true;
}


function obtenerPrimeraDimension(matrizUno: number[][]): number | false { // puede devolver un numero o un booleano
    // VALIDACIONES
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    if(esValido){
        const primeraDimensionArreglo = matrizUno.length;
        return primeraDimensionArreglo
    }   else{
        return false;
    }
}
    
function obtenerSegundaDimension(matrizUno: number[][]): number | false{
    const esValido = verificarTodosLosElementosDeUnArregloSonArreglo(matrizUno);
    let longitudActualMaxima = 0; // Auxiliar
    let longutdActualMinima = 0; // Auxiliar
    for(let i = 0; i < matrizUno.length; i++){
        const elementoActual = matrizUno[i]; // arreglo
        let longitudActual = elementoActual.length 
        elementoActual.length // segunda dimension
        if (longitudActualMaxima < longitudActual){
            longitudActualMaxima = longitudActual
        }

    }
}
function verificarTodosLosElementosDeUnArregloSonArreglo(
    arreglo: any[]
): boolean{
    for(let i = 0; i < arreglo.length; i++){
        const elementoActual = arreglo[i];
        const esUnArreglo = typeof elementoActual == 'object' &&
        elementoActual.indexOf; // Truty
        if(!esUnArreglo){
            console.log("No es un arreglo")
            return -1    
}
function main(){
    // compararMatriz()
} 

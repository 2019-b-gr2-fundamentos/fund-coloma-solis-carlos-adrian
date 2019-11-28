function imprimirMensajeNVeces(
    mensaje: string,
    numeroVeces: number
): void{
    if(numeroVeces == 0){
        console.log('Se termino');
    }else{
        const Nuevonumero = numeroVeces - 1
        console.log(mensaje);
        imprimirMensajeNVeces(mensaje, Nuevonumero );
    }
}    
function main(mensaje,numeroVeces){
    imprimirMensajeNVeces(mensaje,numeroVeces)
}
main('Que tal', 10)
function imprimirarreglo(
    arreglo: number[]
): void{
    if (arreglo.length == 0){
        console.log('termino')
    }else{
        console.log(arreglo[arreglo.length - 1]);
    arreglo.pop();
    imprimirarreglo(arreglo);
}}
imprimirarreglo([1,2,3,4])
let acumulador = 0
function productoCruz(vectores: number[][]): void{
    if (vectores[1].length == 0){
        console.log(acumulador)
    }
    else{
    const producto = vectores[0][0]*vectores[1][vectores[1].length - 1]
    vectores[0].splice(0,1)
    vectores[1].pop()
    acumulador = producto + acumulador
    productoCruz(vectores)
    }
    }
productoCruz([[1,2,3,4],[1,2,3,4]])
// multiplicar el 0 * n elemento +
// multiplicar el 0 + 1*n-1 elemento +
// multiplicar el 0 + 2 * n -2 elemento
// 1) definir el tamaño
// 2) Repetir calculo N veces (N = tamaño)
// 3.1) 1er elemento 1er arreglo
// 3.2) sumar los elemtnts
// 3.2) ultimo elemento del 2do arreglo 

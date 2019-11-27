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
    arreglo.pop;
    imprimirarreglo(arreglo);
}
imprimirarreglo([1,2,3,4])

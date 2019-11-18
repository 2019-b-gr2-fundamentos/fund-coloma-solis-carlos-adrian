// for 
// 1) Declarar una variable 
// 2) Condicion (Expresion)
// 3) Incrementar, Disminuir 
/*for (let numeroExDeMiCrush = 7;
    numeroExDeMiCrush != 0;
    numeroExDeMiCrush--){
        console.log('ES CAN DA LO!', numeroExDeMiCrush);
    }*/
for (var numerodeEx = 0; numerodeEx <= 7; numerodeEx++) {
    console.log('ES CAN DA LO!', numerodeEx);
}
for (var numerodeEx = 0; numerodeEx < 8; numerodeEx++) {
    console.log('ES CAN DA LO!', numerodeEx);
}
// ARREGLOS
// 1 Elemento ( Variable const numero = 1)
// Conjunto del mismo elemento ( [1, 2, 3, 4, 5  ])
// Conjunto de diferentes elementos ([1, "abc", true])
var arregloNumeros = [1, 2, 3, 4, 5];
// MUTAR ES REASIGNAR
arregloNumeros.push(6);
console.log('arregloNumeros', arregloNumeros);
arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros);
// Arreglo
// 1) Elementos
// 2) Indices (0 index based ) -> POSICION
// 3) LONGITUD ->
console.log(arregloNumeros.length);

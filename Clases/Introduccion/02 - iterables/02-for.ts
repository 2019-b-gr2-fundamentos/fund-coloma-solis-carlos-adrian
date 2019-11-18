// for 
// 1) Declarar una variable 
// 2) Condicion (Expresion)
// 3) Incrementar, Disminuir 
/*for (let numeroExDeMiCrush = 7; 
    numeroExDeMiCrush != 0; 
    numeroExDeMiCrush--){
        console.log('ES CAN DA LO!', numeroExDeMiCrush);
    }*/
for (let numerodeEx = 0;
    numerodeEx <= 7;
    numerodeEx++){
        console.log('ES CAN DA LO!', numerodeEx)
    }    
    for (let numerodeEx = 0;
        numerodeEx < 8;
        numerodeEx++){
            console.log('ES CAN DA LO!', numerodeEx)
        } 
// ARREGLOS
// 1 Elemento ( Variable const numero = 1)
// Conjunto del mismo elemento ( [1, 2, 3, 4, 5  ])
// Conjunto de diferentes elementos ([1, "abc", true])
const arregloNumeros = [1, 2, 3, 4, 5];
// MUTAR ES REASIGNAR
arregloNumeros.push(6);
console.log('arregloNumeros', arregloNumeros)
arregloNumeros.pop();
console.log('arregloNumeros', arregloNumeros)
// Arreglo
// 1) Elementos
// 2) Indices (0 index based ) -> POSICION
// 3) LONGITUD ->
console.log(arregloNumeros.length);

// FOR
// 1) let tamanio = arreglo.Numeros.length // 5 
// 2) tamanio > 0
// 3) --
for (let contador = 0; 
    contador < arregloNumeros.length;
    contador++
    ){
        console.log(arregloNumeros[contador])
    }
/* 1) Crear arreglo 5 elementos
2) Cada elemento 1 o un 0
Ej: [0,0,1,1,0]
3) Exista al menos un elemento "1"
Ej: [0,0,0,0,0] NO ES VALIDO
[0,0,0,0,1] ES VALIDO
*/
console.log(Math.floor(Math.random()*2))
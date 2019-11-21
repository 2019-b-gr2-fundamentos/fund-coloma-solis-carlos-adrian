const arregloNumeros = [1,2,3,4,5,6,7,8,9,10]
// Acceder
// Necesito: Indice
console.log(arregloNumeros[6]); // 7
// Añadir al final
// Necesito: Elemento a añadirse
arregloNumeros.push(11);
// Borrar al final
arregloNumeros.pop()
// Añadir en un indice
// Necesito: Indice
//           Elemento
arregloNumeros.splice(6,1,1.2)
console.log(arregloNumeros)
// Buscar indice de un elemento
arregloNumeros.indexOf(5); //5
arregloNumeros.indexOf(7);
arregloNumeros.splice(0,2,999);
console.log(arregloNumeros)
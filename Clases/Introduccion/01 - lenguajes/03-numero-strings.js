var resultado;
resultado = 2 % 3;
console.log("pera" + 2);
//STRINGS
var mensaje = "\"Hola mundo\"";
var saludo = '\'Adio\s mundo\'';
console.log(mensaje + "\n" + saludo);
var edad = 30;
// template strings
var saludoEdad = "Mi edad es: " + edad;
console.log(saludoEdad);
console.log(mensaje + "\n" + saludo);
// Contamos los elemntos
var nombreLongitud = "Carlos\nAdrian";
console.log(nombreLongitud.length);
//Eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
// Cambiar a mayusculas 
console.log(nombreLongitud.toLowerCase());
console.log(nombreLongitud.replace("e", "o"));
console.log(nombreLongitud.replace("\n", ""));
console.log(nombreLongitud.search("C"));
console.log(nombreLongitud.slice(0, 6));
console.log(nombreLongitud.includes("f"));
console.log(nombreLongitud.startsWith("C"));
console.log(nombreLongitud.substring(0, 6));

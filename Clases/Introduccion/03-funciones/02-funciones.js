function sumar(numUno, numDos) {
    return numUno + numDos;
}
function restar(numUno, numDos) {
    return numUno - numDos;
}
function multiplicar(numUno, numDos) {
    return numUno * numDos;
}
function dividir(numUno, numDos) {
    return numUno / numDos;
}
function main() {
    calculadora();
}
function calculadora() {
    var operacion = prompt('Selecciona una operación: "suma-1", "resta-2", "multiplicación-3","división-4","terminamos-5"');
    var esSuma = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    var esResta = operacion == 'resta' || operacion == '2' || operacion == 'resta-1';
    var esMultiplicacion = operacion == 'multiplicación' || operacion == 'multiplicación-3';
    var esDivision = operacion == 'divisón' || operacion == 'división-3';
    var terminamos = operacion == 'terminamos' || operacion == '5' || operacion == 'terminamos-5';
    var estaValida = esSuma || esResta || esMultiplicacion || esDivision;
    if (estaValida) {
        var numUno = +prompt('Numero 1');
        var numDos = +prompt('Numero 2');
        var resultado = 0;
        if (esSuma) {
            resultado = sumar(numUno, numDos);
            console.log(resultado);
            calculadora();
        }
        if (esResta) {
            resultado = restar(numUno, numDos);
            console.log(resultado);
            calculadora();
        }
        if (esMultiplicacion) {
            multiplicar(numUno, numDos);
            console.log(resultado);
            calculadora();
        }
        if (esDivision) {
            dividir(numUno, numDos);
            console.log(resultado);
            calculadora();
        }
        if (terminamos) {
            console.log("Terminamos");
        }
        main();
    }
}
/*
1) Seleccionar operacion
2.1) La seleccion no es VALIDA
    2.1.1) Vuelve a seleccionar la operacion
2.2) La seleccion es VALIDA
    2.2.1) Ingresar primer numero
    2.2.2) Ingresar segundo numero
    2.2.3) Ejecutar la operación
    */

function factorial(numero) {
    let multiplicacion = 1
    for(let i = 1; i<= numero; i++){
        multiplicacion = multiplicacion * i
    }
    return multiplicacion
}
module.exports = function euler(x){
    suma = 0
    for (let i = 0 ; i<=100 ; i++){
        suma = suma + Math.pow(x,i)/factorial(i)
    }
    return suma
}
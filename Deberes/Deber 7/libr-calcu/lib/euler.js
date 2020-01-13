module.exports = function euler(x){
    suma = 0
    for (let i = 0 ; i<=100 ; i++){
        suma = suma + Math.pow(x,i)/factorial(i)
    }
    return suma
}
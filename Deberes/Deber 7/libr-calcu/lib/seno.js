module.exports = function seno(x){
    for (let i = 0 ; i<=100 ; i++){
        suma = suma + Math.pow(-1,i)*Math.pow(x,2*i+1)/factorial(2*i+1)
    }
    return suma
}
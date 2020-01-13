module.exports = function cuadrados_perfectos(i1,i2){
    let cuadradosperfectos = 0
    do{
        if(Math.sqrt(i1) == Math.floor(Math.sqrt(i1))){
            cuadradosperfectos = cuadradosperfectos + 1
        }
        i1++
    } while(i1 <= i2)    
    return cuadradosperfectos
}
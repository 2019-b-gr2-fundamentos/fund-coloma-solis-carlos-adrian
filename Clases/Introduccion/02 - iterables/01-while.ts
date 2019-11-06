// DO WHILE
//let vecesQueHeComido = 0;
//console.log('Vamos a comer :D')
/*do {
    vecesQueHeComido = vecesQueHeComido + 1
    switch (vecesQueHeComido){         
        case 1 :
            console.log('Desayuno')
            break;
        case 2 :
            console.log('Almuerzo')
            break;
        case 3 :
            console.log('Merienda')
            break;
        case 4 :
            console.log('Gordito')
            break;         
    }
} while (vecesQueHeComido < 4)
while (vecesQueHeComido <4){
    vecesQueHeComido = vecesQueHeComido + 1;
    switch (vecesQueHeComido){         
        case 1 :
            console.log('Desayuno')
            break;
        case 2 :
            console.log('Almuerzo')
            break;
        case 3 :
            console.log('Merienda')
            break;
        case 4 :
            console.log('Gordito')
            break;      
}
}*/
let entrada = 0
let Anali_socio = 0
let Algebra = 0
let Compiladores = 0
do {
    entrada = entrada + 1
    if (entrada%3 ==0){
        Compiladores = Compiladores + 1
    } else{
    if (entrada%2 == 0){
        Algebra = Algebra + 1
    } else{
        Anali_socio = Anali_socio + 1
    }
}
} while(entrada < 50);
console.log(`Analisis: ${Anali_socio}`);
console.log("Algebra: "+ Algebra);
console.log("Compiladores: "+ Compiladores);
console.log(Anali_socio + Algebra + Compiladores)
/*
1 Analisis socioeconomico
2 Algebra
3 Compiladores
4 Fundamentos de programacion 
7 Calculo
11 Fisica
13 Ingles
Seudocodigo: 
Si es impar -> aumentamos a Analisis socioeconomico
Si es par -> aumentamos a algebra 
Si es multiplo de 3 -> aumentamos a compiladores */

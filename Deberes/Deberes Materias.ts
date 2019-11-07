let entrada = 0
let Anali_socio = 0
let Algebra = 0
let Compiladores = 0
let Ingles = 0
let Fisica = 0
let Calculo = 0
let Fund = 0
do {
    entrada = entrada + 1
    if (entrada%13 == 0){
        Ingles = Ingles + 1
    } else {
        if (entrada%11 == 0){
            Fisica = Fisica + 1
        } else {
            if (entrada%7 == 0){
                Calculo = Calculo + 1
            } else{
                if (entrada%5 == 0){
                    Fund = Fund + 1
                } else{
                    if (entrada%3 == 0){
                        Compiladores = Compiladores + 1
                    } else{
                      if (entrada%2 == 0){
                        Algebra = Algebra + 1
                    } else{
                        Anali_socio = Anali_socio + 1
                    }
                }
            }
        }
    }
    
    
}
} while(entrada < 1000);
console.log(`Analisis: ${Anali_socio}`);
console.log(`Algebra: ${Algebra}`);
console.log(`Compiladores: ${Compiladores}`);
console.log(`Fundamentos de programacion: ${Fund}`)
console.log(`Calculo: ${Calculo}`)
console.log(`Fisica: ${Fisica}`)
console.log(`Ingles: ${Ingles}`)
console.log(Anali_socio + Algebra + Compiladores + Fund + Calculo + Fisica + Ingles)
/*
1 Analisis socioeconomico
2 Algebra
3 Compiladores
5 Fundamentos de programacion 
7 Calculo
11 Fisica
13 Ingles
Seudocodigo: 
Si es impar -> aumentamos a Analisis socioeconomico
Si es par -> aumentamos a algebra 
Si es multiplo de 3 -> aumentamos a compiladores */

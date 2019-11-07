entrada = 0
Anali_socio = 0
Algebra = 0
Compiladores = 0
Ingles = 0
Fisica = 0
Calculo = 0
Fund = 0
while entrada < 1000 :
    entrada = entrada + 1
    if entrada%13 == 0:
        Ingles = Ingles + 1
    else:
        if entrada%11 == 0:
            Fisica = Fisica + 1
         else 
            if entrada%7 == 0:
                Calculo = Calculo + 1
             else:
                if entrada%5 == 0:
                    Fund = Fund + 1
                 else:
                    if (entrada%3 == 0):
                        Compiladores = Compiladores + 1
                     else:
                      if (entrada%2 == 0):
                        Algebra = Algebra + 1
                     else:
                        Anali_socio = Anali_socio + 1
                    
print("Analisis: ${Anali_socio}")
print("Algebra: ${Algebra}")
print("Compiladores: ${Compiladores}")
print("Fundamentos de programacion: ${Fund}")
print("Calculo: ${Calculo}")
print("Fisica: ${Fisica}")
print("Ingles: ${Ingles}")
print(Anali_socio + Algebra + Compiladores + Fund + Calculo + Fisica + Ingles)
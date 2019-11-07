i = 0
pares = 0
impares = 0
while i < 1000:
    i = i + 1
    if i%2 ==0:
        pares = pares + 1
    else:
        impares = impares +1    
print("Pares: " + str(pares))
print("Impares: " + str(impares))            

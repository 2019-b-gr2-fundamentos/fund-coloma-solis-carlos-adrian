matriz1 = [
    [1, 2, 4],
    [4, 5, 6],
    [7, 9, 6]
]
matriz2 = [
    [1, 2, 4],
    [4, 5, 6],
    [7, 8, 6]
]
iguales = True
m1 = len(matriz1)
m2 = len(matriz2)
n1 = len(matriz1[0])
n2 = len(matriz2[0])
i = 0
if m1 == m2 and n1 == n2:
    while i < m1 and iguales == True:
        for j in range(n1) :
            if matriz1[i][j] == matriz2[i][j]:
                iguales = True
            else:
                iguales = False   
                break                    
        i = i + 1
    if iguales :
        print("Las matrices son iguales")
    else : 
        print("Las matrices no son iguales")          
else:
    print("Las matrices no son iguales porque tienen tamaños diferentes")    

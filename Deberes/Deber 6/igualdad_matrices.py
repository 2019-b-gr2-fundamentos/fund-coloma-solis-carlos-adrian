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
m1 = len(matriz1) # Numero de filas de la primera matriz
m2 = len(matriz2) # Numero de filas de la segunda matriz
n1 = len(matriz1[0]) # Numero de columnas de la primera matriz
n2 = len(matriz2[0]) # Numero de columnas de la segunda matriz
i = 0 # Define donde comienza el contador i
if m1 == m2 and n1 == n2: # Verifica que las matrices sean del mismo tamaño
    while i < m1 and iguales == True: # El contador itera cada fila hasta que se encuentren elementos que no son iguales
        for j in range(n1) : 
            if matriz1[i][j] == matriz2[i][j]: # Verifica si cada elemento es igual
                iguales = True
            else:
                iguales = False   
                break # Detiene el bucle for si encuentra elementos que no son iguales
        i = i + 1
    if iguales :
        print("Las matrices son iguales")
    else : 
        print("Las matrices no son iguales")          
else:
    print("Las matrices no son iguales porque tienen tamaños diferentes")    

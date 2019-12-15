sumafilas = 0
sumacolumnas = 0
matriz = [
[1, 2, 3],
[5, 8, 9],
[11,12,13],
[4, 6, 11],
[2, 2, 2]
]
m = len(matriz) # Numero de filas
n = len(matriz[0]) # Numero de columnas
j = 0 # El contador j empieza en 0
print("El suma de cada columna es: ")
while j < n: 
    for i in range(m):
        sumacolumnas = sumacolumnas + matriz[i][j] # Suma cada columna
    j = j + 1
    print(sumacolumnas)
    sumacolumnas = 0
j = 0
print("El suma de cada fila es: ")
while j < m :
    for i in range(n):
        sumafilas = sumafilas + matriz[j][i] # Suma cada fila
    j = j + 1
    print(sumafilas)
    sumafilas = 0
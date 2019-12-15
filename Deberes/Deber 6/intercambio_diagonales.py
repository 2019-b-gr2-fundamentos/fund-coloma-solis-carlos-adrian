matriz = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
]
m = len(matriz) # Numero de filas
n = len(matriz[0]) # Numero de columnas
# Se define una función que intercambie los elementos de una lista 
def intercambiar(lista,a):
    lista[a],lista[len(lista)-1-a] = lista[len(lista)-1-a],lista[a]
if m == n: # Verifica que la matriz es cuadrada
    # Iterador que va intercambiando los elementos de cada fila
    for i in range(m):
        intercambiar(matriz[i],i)
        print(matriz[i]) 
else:
    print("La matriz debe ser cuadrada")
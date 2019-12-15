let sumafilas = 0
let sumacolumnas = 0
const matriz = [
    [1, 2, 3],
    [5, 8, 9],
    [11,12,13],
    [4, 6, 11]
]
let m = matriz.length
let n = matriz[0].length
let j = 0
console.log("El suma de cada columna es: ")
while(j < n){
    for (let i = 0; i <= m - 1; i++){
    sumacolumnas = sumacolumnas + matriz[i][j]

}
j++
console.log(sumacolumnas)
sumacolumnas = 0
}
j = 0
console.log("El suma de cada fila es: ")
while(j < m){
    for (let i = 0; i <= n - 1; i++){
    sumafilas = sumafilas + matriz[j][i]

}
j++
console.log(sumafilas)
sumafilas = 0
}
let sumafilas = 0
let sumacolumnas = 0
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
let m = matriz.length
let n = matriz[0].length
let j = 0
while(j < n){
    for (let i = 0; i <= m - 1; i++){
    sumafilas = sumafilas + matriz[i][j]

}
j++
console.log(sumafilas)
sumafilas = 0
}

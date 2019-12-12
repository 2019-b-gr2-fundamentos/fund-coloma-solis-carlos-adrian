const matriz1 = [
    [1, 2, 3],
    [4, 5, 6],
]
const matriz2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8 ,9]
]
let iguales = false
let m1 = matriz1.length
let m2 = matriz2.length
let n1 = matriz1[0].length
let n2 = matriz2[0].length
let j = 0
if (m1 == m2 && n1 == n2){
    do{
        for(let i = 0; i <= n1-1; i++){
            if(matriz1[j][i] == matriz2[j][i]){
                iguales = true
            } else{
                iguales = false
            }
         } 
         j++
    }while(j <= m1 -1)
    
    console.log(iguales)
}else{
    console.log(iguales)
}

 

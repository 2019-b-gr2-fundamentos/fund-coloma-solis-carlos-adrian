/* 1) Crear arreglo 5 elementos
2) Cada elemento 1 o un 0
Ej: [0,0,1,1,0]
3) Exista al menos un elemento "1"
Ej: [0,0,0,0,0] NO ES VALIDO
[0,0,0,0,1] ES VALIDO
*/
const arreglo = []
const tamanio = 8
const zeros = []
// 0 significa que no tiene floron y uno signifia que si tiene el floron
/*for (let contador = 0;
    contador < tamanio;
    contador++){
        zeros.push(0)
    }
do {
    for (let contador = 0;
        contador < tamanio;
        contador++){
            arreglo.push(Math.floor(Math.random()*2))
        }    
        } while(arreglo == zeros);
const posicion = 2
if (arreglo[posicion] == 1){
    console.log("Acertaste! :D")
} else{
    console.log("No acertaste :(")
}        
console.log(arreglo)  */
const Apos = Math.floor(Math.random()*(tamanio + 1));



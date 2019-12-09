if(true){ // Bloque 1
    let edad = 30;
    console.log("Legal"); // 30
    if(edad){ // Bloque 2
        console.log(edad);
        if(edad){ // Bloque 3
            console.log(edad);
        }else{ // Bloque 4
            console.log(edad);
        }
    } else{ // Bloque 5
        console.log(edad);
    }
}else{ // Bloque 6
    console.log("7 años de carcel")
    console.log("7 años de cárcel")
}
let arregloFloron = [0,0,0,0,1];// Bloque 1

for (let i=0; i<5; i++){ // Bloque 2
    let existeFloron = false;
    if(arregloFloron[i] == 1){
        existeFloron = true;
    /* }
    arregloFloron[i]*/

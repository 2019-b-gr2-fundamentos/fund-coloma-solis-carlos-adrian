console.log("\tMiCalculadora\n Bienvenido :)");
const opString = prompt("1=Suma\n2=Resta\n3=Multiplicacion\n4=Division");
const op = Number(opString);

if(op==1 ||op==2||op==3||op==4){
    const Val1String = prompt("Ingrese el primer numero: ");
    const ValString = prompt("Ingrese el segundo numero: ");
    const Val1 = Number(Val1String);
    const Val2 = Number(ValString);
    
    if(op ==1){
        console.log("Su respuesta es: \n");
        console.log(Val1+Val2);
    }

    if(op==2){
        console.log("Su respuesta es: \n");
        console.log(Val1-Val2);
    }

    if(op==3){
        console.log("Su respuesta es: \n");
        console.log(Val1*Val2);
    }
    
    if(op==4){
        console.log("Su respuesta es: \n");
        console.log(Val1/Val2);
    }
}else{
    console.log("No has elegido un numero de la lista");
}

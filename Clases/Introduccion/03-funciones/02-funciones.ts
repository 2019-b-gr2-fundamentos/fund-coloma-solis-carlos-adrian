function sumar(numUno:number, numDos:number): number{
    return numUno + numDos
}
function restar(numUno:number, numDos:number): number{
    return numUno - numDos
}
function multiplicar(numUno:number, numDos:number): number{
    return numUno * numDos 
}
function dividir(numUno:number, numDos:number): number{
     return numUno / numDos
}
function main(){
    calculadora()
}
function calculadora(){
    const operacion:string = prompt('Selecciona una operación: "suma-1", "resta-2", "multiplicación-3","división-4","terminamos-5"')
    const esSuma:boolean = operacion == 'suma' || operacion == '1' || operacion == 'suma-1';
    const esResta:boolean = operacion == 'resta' || operacion == '2' || operacion == 'resta-1';
    const esMultiplicacion:boolean = operacion == 'multiplicación' || operacion == 'multiplicación-3'
    const esDivision: boolean = operacion == 'divisón' || operacion == 'división-3'
    const terminamos: boolean = operacion == 'terminamos' || operacion == '5' || operacion == 'terminamos-5'
    const estaValida:boolean = esSuma || esResta || esMultiplicacion || esDivision ;

if(estaValida){
    const numUno = +prompt('Numero 1');
    const numDos  = +prompt('Numero 2');
    let resultado = 0;
    if(esSuma){
        resultado = sumar(numUno, numDos);
        console.log(resultado);
    }
    if(esResta){
        resultado = restar(numUno, numDos);
        console.log(resultado);
        calculadora()
    }
    if(esMultiplicacion){
        multiplicar(numUno,numDos);
        console.log(resultado);
        calculadora()
    }
    if(esDivision){
        dividir(numUno, numDos)
        console.log(resultado);
        calculadora()
    }
    if(terminamos){
        console.log("Terminamos")       
    }
    main()
} 
}
}
/*
1) Seleccionar operacion
2.1) La seleccion no es VALIDA
    2.1.1) Vuelve a seleccionar la operacion
2.2) La seleccion es VALIDA
    2.2.1) Ingresar primer numero
    2.2.2) Ingresar segundo numero
    2.2.3) Ejecutar la operación
    */    

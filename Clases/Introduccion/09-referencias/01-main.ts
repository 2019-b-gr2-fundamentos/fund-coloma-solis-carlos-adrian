// Referencias
function main(){
    let uno = 1;
    let dos = uno;
    let tres = dos;
    console.log('uno', uno);
    console.log('dos', dos)
    console.log('tres', tres)
    let arreglito = [1,2,3];
    let miOtroArreglito = []
    let a = arreglito[0];
    let b = arreglito[1];
    //miOtroArreglito = arreglito;
    
    /*miOtroArreglito = arreglito.map(
        function(valorActual){
            return valorActual
        }
    )*/
    /*miOtroArreglito = Object.assign(
        {},
        arreglito
    )*/
    miOtroArreglito = [
        ...arreglito,
        ...arreglito
    ]
    miOtroArreglito.push(2)
    arreglito[0] = 0
    arreglito[1] = 10
    console.log('arreglito', arreglito);
    console.log('miOtroArreglito', miOtroArreglito)
    console.log('a', a)
    console.log('b', b)

    
    // Los arreglos y Objetos hacen referencia a la dirección de memoria
    // Las primitivas hacen referencia al valor
    const adrian = {
        id:1,
        nombre: 'Adrian',
        suelo: 1.12
    }
    const soloElNombre = adrian;
    const copUno = adrian;
    const copDos = soloElNombre;
    const copTres = adrian
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre)
    delete adrian.nombre // ELIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 22 // == soloElNombre.edad = 22
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre)
    
}
main()
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// Referencias
function main() {
    var uno = 1;
    var dos = uno;
    var tres = dos;
    console.log('uno', uno);
    console.log('dos', dos);
    console.log('tres', tres);
    var arreglito = [1, 2, 3];
    var miOtroArreglito = [];
    var a = arreglito[0];
    var b = arreglito[1];
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
    miOtroArreglito = __spreadArrays(arreglito, arreglito);
    miOtroArreglito.push(2);
    arreglito[0] = 0;
    arreglito[1] = 10;
    console.log('arreglito', arreglito);
    console.log('miOtroArreglito', miOtroArreglito);
    console.log('a', a);
    console.log('b', b);
    // Los arreglos y Objetos hacen referencia a la dirección de memoria
    // Las primitivas hacen referencia al valor
    var adrian = {
        id: 1,
        nombre: 'Adrian',
        suelo: 1.12
    };
    var soloElNombre = adrian;
    var copUno = adrian;
    var copDos = soloElNombre;
    var copTres = adrian;
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
    delete adrian.nombre; // ELIMINAR EL NOMBRE DEL OBJETO
    soloElNombre['edad'] = 22; // == soloElNombre.edad = 22
    console.log('adrian', adrian);
    console.log('soloElNombre', soloElNombre);
}
main();

import * as prompts from './node_modules/prompts'
import {Equipo} from './interfaces/interfaz_equipo'
async function main(){
    const arregloEquipos: Equipo[]= []
    const preguntas = [
        {
            type: 'text',
            name: 'Nombre',
            message: 'Inserte el nombre de su equipo'
        },
        {
            type: 'text',
            name: 'Pais',
            message: 'Inserte el pais de origen de su equipo'
        },
        {
            type: 'text',
            name: 'Liga',
            message: 'Inserte la liga en la que se encuentra su equipo'
        },
        {
            type: 'number',
            name: 'Presupuesto',
            message: 'Ingrese el presupuesto actual de su equipo en dólares'
        }

    ] 
    async function agregarEquipos(){
        let informacion: Equipo = await prompts(preguntas)
        arregloEquipos.push(informacion)
        decidir()
    }
    async function editarEquipos(){
        let indice = await prompts({
            type: 'number',
            name: 'indice',
            message: 'Inserte el indice del equipo que desea editar'
        })
        if (indice.indice < arregloEquipos.length){
            let caracteristica_a_editar = await prompts({
                type: 'text',
                name: 'caracteristica',
                message:'¿Qué es lo que desea editar?'
            })
            if (caracteristica_a_editar.caracteristica == 'Nombre'
            || caracteristica_a_editar.caracteristica == 'Pais'
            || caracteristica_a_editar.caracteristica == 'Liga'
            || caracteristica_a_editar.caracteristica == 'Presupuesto'){
                let nuevovalor = await prompts({
                    type: 'text',
                    name: 'valor',
                    message: '¿Que desea insertar?'                                        
                })
                let Equipoelegido = arregloEquipos[indice.indice]
                switch (caracteristica_a_editar.caracteristica){
                    case 'Nombre':
                        Equipoelegido.Nombre = nuevovalor.valor
                        break;
                    case 'Pais':
                        Equipoelegido.Pais = nuevovalor.valor
                        break;
                    case 'Liga':
                        Equipoelegido.Liga = nuevovalor.valor
                        break;
                    case 'Presupuesto':
                        Equipoelegido.Presupuesto = nuevovalor.valor
                        break;         
        }
        decidir()
            }
            else{
                console.log('¡La característica insertada no existe!')
                editarEquipos()
            }
        }
        else{
            console.log('¡El indice no existe!')
            editarEquipos()
        }    
    }
    async function decidir(){
        let decision = await prompts({
            type: 'text',
            name: 'eleccion',
            message: 'Insertar nuevo equipo --> 1 \n Editar equipo --> 2 \n Salir --> 3'
        })
        switch(decision.eleccion){    
            case '1':
                agregarEquipos()
                break;
            case '2':
                editarEquipos()
                break;
            case '3':
                console.log('Asi han quedado conformados tus equipos:')
                console.log(arregloEquipos)  
                break;
            default:
                console.log('La opción elegida no es válida')
                decidir() 
                break;
        }
    }
    agregarEquipos()    
    
    }
main()
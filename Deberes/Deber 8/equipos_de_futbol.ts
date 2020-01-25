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
        decision()
    }
    async function editarEquipos(){
        let indice = await prompts({
            type: 'number',
            name: 'indice',
            message: 'Inserte el indice del equipo que desea editar'
        })
        let caracteristica_a_editar = await prompts({
            type: 'text',
            name: 'caracteristica',
            message:'¿Qué es lo que desea editar?'
        })
        let nuevovalor = await prompts({
            type: 'text',
            name: 'nuevovalor',
            message: '¿Que desea insertar?'
        })
        arregloEquipos[indice.indice].caracteristica_a_editar.caracteristica
    }
    async function decision(){
        let decision = await prompts({
            type: 'text',
            name: 'eleccion',
            message: 'Insertar nuevo equipo --> 1 \n Editar equipo --> 2 Salir --> 3'
        })
        switch(decision.eleccion){    
            case '1':
                agregarEquipos()
                break;
            case '2':
                    
            case '3':
                console.log(arregloEquipos)  
                break;  
        }
    }
    agregarEquipos()    
    
    }
main()
import {Duenio} from './duenio.interface'
export interface AnimalPerrito { // interface -> (Struct)
    nombreCientífico: string;
    nombre: string;
    clan: string;
    edad?: Number; // opcionales
    // hijos: null
    perritas?: string[]; // opcionales
    vacunado?: boolean; // ? -> opcionales
    duenio?: Duenio
}
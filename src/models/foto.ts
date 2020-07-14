import { Paciente } from "./paciente";

export class Foto {
    constructor(public id?:number, public paciente_id?: number, public paciente?: Paciente, 
            public data?:string, 
            public esquerda?: string, public direita?: string, public foto_inferior?: string) { }
}
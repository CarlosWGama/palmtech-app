import { Paciente } from "./paciente";

export class Foto {
    constructor(public id?:number, public paciente_id?: number, public paciente?: Paciente, 
            public data?:string, 
            //p1 (esquerda)   p2 (direita)    p3(inferior)  
            public esquerdo_p1?: string, public esquerdo_p2?: string, public esquerdo_p3?: string,
            public direito_p1?: string, public direito_p2?: string, public direito_p3?: string) { }
}
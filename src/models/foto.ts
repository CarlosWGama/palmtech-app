import { Paciente } from "./paciente";

export class Foto {
    constructor(public id?:number, public paciente_id?: number, public paciente?: Paciente, 
            public data?:string, 
            //p1 (superior)   p2 (lateral)    p3(interna)  p4(posterior)    p5(plantar)
            public esquerdo_p1?: string, public esquerdo_p2?: string, public esquerdo_p3?: string, public esquerdo_p4?: string, public esquerdo_p5?: string,
            public direito_p1?: string, public direito_p2?: string, public direito_p3?: string, public direito_p4?: string, public direito_p5?: string) { }
}


import { Usuario } from "./usuario";

export class Paciente extends Usuario {

    constructor(id:number = 0, nome?: string, data_nascimento?:string, email?: string, senha?: string) {
        super(id, nome, email, senha, data_nascimento, false);
    }

}
import { Usuario, UsuarioNivel } from "./usuario";

export class Paciente extends Usuario {

    constructor(public id?:number, public nome?: string, public dataNascimento?:string, public email?: string, public senha?: string) {
        super(id, nome, email, senha, dataNascimento, UsuarioNivel.PACIENTE);
    }

}
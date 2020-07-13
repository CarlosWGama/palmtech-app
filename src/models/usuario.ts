export enum UsuarioNivel {
    MEDICO = 1, PACIENTE = 2
}


export class Usuario {

    constructor(public id?: number, public nome?: string, public email?:string, public senha?: string, public nivel?:UsuarioNivel) {}

}
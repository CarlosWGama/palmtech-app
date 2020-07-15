import { Paciente } from "../models/paciente";
import { Foto } from "../models/foto";

export const PacienteService = {

    //Retorna a lista de todos os pacientes do usuário
    buscarTodos(): Promise<Paciente[]> {
        return new Promise(resolve => {
            resolve([
                new Paciente(1, 'Jose da Silva', '1974-01-12', 'jose@teste.com'),
                new Paciente(2, 'Maria Costa', '1987-05-11', 'maria@teste.com'),
                new Paciente(3, 'Josivaldo Pereira', '2001-02-15', 'josilvado@teste.com'),
                new Paciente(4, 'Dina Lima', '1945-06-13', 'dina@teste.com'),
                new Paciente(5, 'João Victor', '1959-07-23', 'joao@teste.com'),
                new Paciente(6, 'Maxwell Pereira', '1964-02-12', 'maxwell@teste.com'),
                new Paciente(7, 'Miguel Antonio', '1992-02-03', 'miguel@teste.com'),
                new Paciente(8, 'Tulio Silva', '1972-04-03', 'tulio@teste.com'),
            ])
        });
    },

    //Remove um paciente
    remover(paciente: Paciente): Promise<{sucesso:boolean}> {
        return new Promise(resolve => {
            resolve({sucesso:true})
        });
    },

    //Cadastrar um paciente
    cadastrar(paciente: Paciente): Promise<{sucesso:boolean, erro?: string}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({sucesso:true})
            }, 1000)
        });
    },

    //Editar um paciente
    editar(paciente: Paciente): Promise<{sucesso:boolean, erro?: string}> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({sucesso:true})
            }, 1000)
        });
    },
}
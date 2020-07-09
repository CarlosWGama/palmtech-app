import { Paciente } from "../models/paciente";

export const PacienteService = {

    //Retorna a lista de todos os pacientes do usuário
    buscarTodos(): Promise<Paciente[]> {
        return new Promise(resolve => {
            resolve([
                new Paciente('Jose da Silva', '1974-01-12', 1),
                new Paciente('Maria Costa', '1987-05-11', 2),
                new Paciente('Josivaldo Pereira', '2001-02-15', 3),
                new Paciente('Dina Lima', '1945-06-13', 4),
                new Paciente('João Victor', '1959-07-23', 5),
                new Paciente('Maxwell Pereira', '1964-02-12', 6),
                new Paciente('Miguel Antonio', '1992-02-03', 7),
                new Paciente('Tulio Silva', '1972-04-03', 8),
            ])
        });
    }

}
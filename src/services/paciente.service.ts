import { Paciente } from "../models/paciente";
import { Foto } from "../models/foto";
import api, { autenticado, limpaObjeto, getErroMsg } from "./api.service";

export const PacienteService = {

    //Retorna a lista de todos os pacientes do usuário
    buscarTodos: async (): Promise<Paciente[]> => {
        const api = await autenticado();
        const response = await api.get('/pacientes');
        const pacientes: Paciente[] = [];
        response.data.pacientes.forEach(p => {
            pacientes.push(Object.assign(new Paciente, p))
        });
        return pacientes;
    },

    //Remove um paciente
    remover: async (paciente: Paciente): Promise<{sucesso:boolean}> => {
        const api = await autenticado();
        try {
            const response = api.delete(`/pacientes/${paciente.id}`);
            return {sucesso: true}
        } catch (e) {
            return {sucesso: false}
        }
    },

    //Cadastrar um paciente
    cadastrar: async(paciente: Paciente): Promise<{sucesso:boolean, erro?: string}> => {
        try {
            paciente = await limpaObjeto(paciente)
            const response = await api.post('/pacientes', {paciente})
            if (response.status == 201)
                return {sucesso: true}
            return {sucesso: false, erro: response.data};    
        } catch (erro) {
            return {sucesso: false, erro:getErroMsg(erro)};
        }
    },

    //Editar um paciente
    editar: async (paciente: Paciente): Promise<{sucesso:boolean, erro?: string}> => {
        try {
            const response = await api.put(`/pacientes/${paciente.id}`, {paciente})
            if (response.status == 200) return {sucesso: true}
            return {sucesso: false, erro: response.data};    
        } catch (erro) {
            return {sucesso: false, erro:getErroMsg(erro)};
        }
    },
}
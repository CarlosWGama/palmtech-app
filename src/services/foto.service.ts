import { Foto } from "../models/foto";
import { Paciente } from "../models/paciente";
import { autenticado, limpaObjeto, getErroMsg } from "./api.service";

export const FotoService = {

    //Cadastra a foto de um pé
    cadastrar: async(foto): Promise<{sucesso:boolean, erro?: string}> => {
        const api = await autenticado();
        try {
            foto = await limpaObjeto(foto);
            const response = await  api.post('/fotos', {foto});
            if (response.status == 200) return {sucesso: true}
            return {sucesso: false};
        } catch(erro) {
            return {sucesso: false, erro:getErroMsg(erro)}
        }
    },

    //Busca as ultimas fotos de todos os pacientes
    ultimasFotos: async (inicial:number = 0, limite = 5): Promise<Foto[]> => {
        const api = await autenticado();
        const fotos: Foto[] = [];
        try {
            const response = await api.get(`/fotos/ultimas/${inicial}/${limite}`);
            response.data.fotos.forEach(f => fotos.push(f));
        } catch(erro) {}
        
        return fotos;
    },

    //Busca fotos de um paciente
    fotos: async(paciente: Paciente, inicial:number = 0, limite = 5): Promise<Foto[]> => {
        const api = await autenticado();
        const fotos: Foto[] = [];
        try {
            const response = await api.get(`/fotos/${paciente.id}/${inicial}/${limite}`);
            response.data.fotos.forEach(f => fotos.push(f));
        } catch(erro) {}
        
        return fotos;
    },

    //Busca fotos do paciente logado
    minhasFotos: async(inicial:number = 0, limite = 5): Promise<Foto[]> => {
        const api = await autenticado();
        const fotos: Foto[] = [];
        try {
            const response = await api.get(`/fotos/minhas/${inicial}/${limite}`);
            response.data.fotos.forEach(f => fotos.push(f));
        } catch(erro) {}
        
        return fotos;
    }
}

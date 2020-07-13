import { Usuario, UsuarioNivel } from "../models/usuario";

/** Service que controla o acesso aos dados do usuário */
const UsuarioService = {

    /** Realiza o login do usuário */
    login: (email: string, senha: string): Promise<{sucesso: boolean, usuario?:Usuario}> => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (email == 'medico@teste.com' && senha == '123456')
                    resolve({sucesso:true, usuario:new Usuario(1, 'Médico', 'medico@teste.com', '', UsuarioNivel.MEDICO )})
                else if (email == 'paciente@teste.com' && senha == '123456')
                    resolve({sucesso:true, usuario:new Usuario(2, 'Paciente', 'paciente@teste.com', '', UsuarioNivel.PACIENTE )})
                resolve({sucesso: false});
            }, 1000) 
            
        })
         
    },

    /** Cadastra um usuário */
    cadastrar: (dados): Promise<{sucesso: boolean, erro?:string}> => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (dados.email != 'teste@teste.com')
                    resolve({sucesso: true})
                else resolve({sucesso: false, erro: 'Usuário já cadastrado'});
            }, 1000) 
            
        })
    },

    /** Solicita a recuperação do email do usuário */
    recuperarSenha: (email: string): Promise<{sucesso: boolean}> => {
        return new Promise(resolve => {
            setTimeout(() => {
                if (email == 'teste@teste.com')
                    resolve({sucesso: true})
                else resolve({sucesso: false});
            }, 1000) 
            
        })
    },

    /** Desloga o usuário */
    logout: () => {

    }
}



export default UsuarioService;
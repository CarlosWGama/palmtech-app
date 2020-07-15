import { InitialState } from "@react-navigation/native"
import UsuarioService from "../../services/usuario.service";
import { Usuario } from "../../models/usuario";

//Dados iniciais
const initialState = new Usuario()

export const usuarioReducer = (state = initialState, action: {type:string, payload?:any}) => {
    switch (action.type) {
        case 'GRAVAR':
            state = action.payload.usuario;
            return state;
        
        case 'LIBERAR':
            UsuarioService.logout()
            state = new Usuario();
            return state
        default: return state; 
    }
}
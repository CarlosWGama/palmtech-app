import { InitialState } from "@react-navigation/native"

//Dados iniciais
const initialState = { 
    nome: 'teste', id: 0, email: 'teste@teste.com'
}

export const usuarioReducer = (state = initialState, action: {type:string, payload?:any}) => {
    switch (action.type) {
        case 'GRAVAR':
            state = action.payload.usuario;
            return state;
        
        case 'LIBERAR':
            state = {nome:'', id: 0, email: ''};
            return state
        default: return state; 
    }
}
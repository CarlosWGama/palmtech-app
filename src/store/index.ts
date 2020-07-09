import { createStore, combineReducers } from 'redux';
import { usuarioReducer } from './usuarios';

//Retorna todos os Reducers
export default createStore(combineReducers({
    usuario: usuarioReducer
}))
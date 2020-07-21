import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
    baseURL: 'http://palmtech.cwg.services/api'
    // baseURL: 'http://192.168.0.14/api'
})

export async function autenticado() {
    const token = await AsyncStorage.getItem('jwt');
    api.defaults.headers.common = {'Authorization': `${token}`}
    return api;
}

/** REMOVE UNDEFINIED E OUTROS */
export async function limpaObjeto(obj) {
    Object.keys(obj).forEach(key => {
        if (obj[key] && typeof obj[key] === 'object') limpaObjeto(obj[key]);
        else if (obj[key] === undefined) delete obj[key];
    });
    return obj;
}


export default api;


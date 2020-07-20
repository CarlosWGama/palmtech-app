import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const api = axios.create({
    // baseURL: 'http://localhost:8000/api'
    baseURL: 'http://192.168.0.14/api'
})

export async function autenticado() {
    const token = await AsyncStorage.getItem('jwt');
    api.defaults.headers.common = {'Authorization': `${token}`}
    return api;
}


export default api;


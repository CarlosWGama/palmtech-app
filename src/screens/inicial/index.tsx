import * as React from 'react';
import { LoadingScreen } from '../loading';
import { useAsyncStorage } from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { rdLogar } from '../../store/usuarios/actions';
import { UsuarioNivel } from '../../models/usuario';

export function InicialScreen () {

    //Navigation
    const nav = useNavigation();

    //Busca usuario
    const { getItem, setItem } = useAsyncStorage('usuario');
    const dispatch = useDispatch();
    React.useEffect(() => {
        const init = async() => {
            const resposta = await getItem()
            if (resposta) {
                const usuario = JSON.parse(resposta);
                dispatch(rdLogar(usuario))
                nav.navigate(usuario.medico ? 'medico' : 'paciente')
            } else {
                nav.navigate('login');
            }
        }

        init();

    })


    return <LoadingScreen/>;
}
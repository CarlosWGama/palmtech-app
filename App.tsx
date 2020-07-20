import React, { useEffect, useState } from 'react';
import Navigation from './src/navigation';
import {
    useFonts,
    Jura_400Regular,
    Jura_700Bold,
} from '@expo-google-fonts/jura';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { LoadingScreen } from './src/screens/loading';
import { Provider } from 'react-redux';
import providers from './src/store';
import * as Updates from 'expo-updates';
import { Toast } from './src/themes/global/util';

  
export default () => {


    const [estaAtualizacao, setEstaAtualizacao] = useState(true);
    useEffect(() => {
        //Busca por atualizações
        const update = async () => {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
              await Updates.fetchUpdateAsync();
              await Updates.reloadAsync();
            }
            setEstaAtualizacao(false);
        }
        update();
    })

    //Carregando Fonte
    let [fontsLoaded] = useFonts({
        Jura_400Regular, Jura_700Bold
    });
    if (!fontsLoaded || estaAtualizacao)  return (<LoadingScreen/>)
      
    //Carregado  
    return (
        <Provider store={providers}>
            <StatusBar style="light"/>
            <Navigation/>
        </Provider>
    )
};

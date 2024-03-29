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

  
export default () => {

    const [estaAtualizacao, setEstaAtualizacao] = useState(false);
    useEffect(() => {
         setEstaAtualizacao(true);
        //Busca por atualizações
        const update = async () => {
            try {
                const update = await Updates.checkForUpdateAsync();
                if (update.isAvailable) {
                  await Updates.fetchUpdateAsync();
                  await Updates.reloadAsync();
                }
            } catch(e) {
                console.log(e)
            }
            setEstaAtualizacao(false);
        }
        update();
    }, [])

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

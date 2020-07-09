import React from 'react';
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
  
export default () => {

    //Carregando Fonte
    let [fontsLoaded] = useFonts({
        Jura_400Regular, Jura_700Bold
    });
    if (!fontsLoaded)  return (<LoadingScreen/>)
      
    //Carregado  
    return (
        <Provider store={providers}>
            <StatusBar style="light"/>
            <Navigation/>
        </Provider>
    )
};

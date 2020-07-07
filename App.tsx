import React from 'react';
import Navigation from './src/navigation';
import {
    useFonts,
    Jura_400Regular,
    Jura_700Bold,
} from '@expo-google-fonts/jura';
import { View, Text } from 'react-native';
import { LoadingScreen } from './src/screens/loading';

  
export default () => {

    //Carregando Fonte
    let [fontsLoaded] = useFonts({
        Jura_400Regular, Jura_700Bold
    });
    if (!fontsLoaded)  return (<LoadingScreen/>)
      
    //Carregado  
    return (<Navigation/>)
};

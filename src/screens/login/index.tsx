import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppMain, fontPadrao } from '../../themes/theme'; 
import { Topo, Formulario } from './components';


export function LoginScreen (props) {

    return (
      <AppMain verticalAlign="space-between">
          <Topo/>
          <View></View>
          <View style={style.formulario}>
            <Formulario/>
          </View>
          <View style={style.rodape}>
            <Text style={fontPadrao.regular}>CESMAC - Centro de Inovação</Text>
            <Text style={fontPadrao.regular}>Versão 1.0.1</Text>
          </View>
      </AppMain>
    );
}

const style = StyleSheet.create({
  formulario: {
    width: '60%',
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 10,
  }
})
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AppMain, AppInput, AppButton } from '../../themes/theme'; 
import { TextInput } from 'react-native-gesture-handler';
import { Topo, Formulario } from './components';

export interface LoginProps {
}

export function LoginScreen (props: LoginProps) {
    return (
      <AppMain verticalAlign="space-between">
          <Topo/>
          <View></View>
          <View style={style.formulario}>
            <Formulario onSubmit={(dados) => console.log(dados)}/>
          </View>
          <View style={style.rodape}>
            <Text>CESMAC - Centro de Inovação</Text>
            <Text>Versão 0.0.1</Text>
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
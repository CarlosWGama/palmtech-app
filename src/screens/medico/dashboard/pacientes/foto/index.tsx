import * as React from 'react';
import { View, Text } from 'react-native';
import { AppMain, AppHeader } from '../../themes/theme'; 

export function ExemploScreen () {
    return (
      <AppMain>
        <AppHeader titulo="Cadastro de usuário" backScreen="login"/>
        <AppContainer>
            <Text>Conteúdo</Text>
        </AppContainer>
      </AppMain>
    );
}
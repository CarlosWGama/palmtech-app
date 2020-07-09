import * as React from 'react';
import { View, Text } from 'react-native';
import { AppMain, AppHeader, AppContainer } from '../../../themes/theme'; 
import { OpcoesPacientes } from '../dashboard/components';

export function ConfiguracoesScreen () {
    return (
      <AppMain>
        <AppHeader titulo="Configurações"/>
        <AppContainer>
            <Text>Configurações</Text>
        </AppContainer>
      </AppMain>
    );
}
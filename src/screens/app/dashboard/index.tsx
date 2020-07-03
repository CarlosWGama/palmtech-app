import * as React from 'react';
import { View, Text } from 'react-native';
import { AppMain, AppHeader } from '../../../themes/theme'; 

export function DashboardScreen () {
    return (
      <AppMain>
        <AppHeader titulo="Cadastro de usuário" backScreen="login"/>
        <Text>Dashboard</Text>
      </AppMain>
    );
}

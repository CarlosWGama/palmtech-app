import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { PacienteDashboardScreen } from '../screens/paciente/dashboard';
import { PacienteConfigScreen } from '../screens/paciente/configuracoes';
import { PacienteFotoVisualizarScreen } from '../screens/paciente/foto';

const Stack = createStackNavigator();

export const PacienteNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false, animationEnabled:true}}>
        <Stack.Screen component={PacienteDashboardScreen} name="dashboard" options={{cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen component={PacienteFotoVisualizarScreen} name="foto-visualizar"/>
        <Stack.Screen component={PacienteDashboardScreen} name="foto-nova"/>
        <Stack.Screen component={PacienteConfigScreen} name="configuracao"/>
    </Stack.Navigator>
)
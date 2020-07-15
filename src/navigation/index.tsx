import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators,  } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';
import { MedicoNavigator } from './medico';
import { RecuperarSenhaScreen } from '../screens/recuperar-senha';
import { PacienteNavigator } from './paciente';
import { InicialScreen } from '../screens/inicial';

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, animationEnabled:true}} >
                <Stack.Screen component={InicialScreen} name="inicial"/>
                
                <Stack.Screen component={LoginScreen} name="login"/>
                <Stack.Screen component={RecuperarSenhaScreen} name="recuperar-senha" options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
                <Stack.Screen component={CadastroScreen} name="cadastro" options={{cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}/>
                
                <Stack.Screen component={PacienteNavigator} name="paciente" options={{cardStyleInterpolator:CardStyleInterpolators.forRevealFromBottomAndroid}}/>
                <Stack.Screen component={MedicoNavigator} name="medico" options={{cardStyleInterpolator:CardStyleInterpolators.forRevealFromBottomAndroid}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
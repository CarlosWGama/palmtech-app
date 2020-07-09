import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators,  } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';
import { AppNavigator } from './app';
import { RecuperarSenhaScreen } from '../screens/recuperar-senha';

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false, animationEnabled:true}} >
                <Stack.Screen component={AppNavigator} name="app" options={{cardStyleInterpolator:CardStyleInterpolators.forRevealFromBottomAndroid}}/>
                <Stack.Screen component={LoginScreen} name="login"/>
                <Stack.Screen component={RecuperarSenhaScreen} name="recuperar-senha" options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
                <Stack.Screen component={CadastroScreen} name="cadastro" options={{cardStyleInterpolator:CardStyleInterpolators.forVerticalIOS}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
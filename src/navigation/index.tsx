import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/login';
import { CadastroScreen } from '../screens/cadastro';
import { AppNavigator } from './app';

const Stack = createStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen component={LoginScreen} name="login"/>
                <Stack.Screen component={CadastroScreen} name="cadastro"/>
                <Stack.Screen component={AppNavigator} name="app"/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
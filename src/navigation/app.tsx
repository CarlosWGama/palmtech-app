import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from './../screens/app/dashboard';
import { PacienteScreen } from './../screens/app/pacientes/visualizar';
import * as Colors from './../themes/colors';
import { ConfiguracoesScreen } from '../screens/app/configuracoes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//TAB BAR
export const MainTabNavigator = () => (
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:Colors.LIGHT, activeTintColor:  "white"}}>
        <Tab.Screen name="dashboard" component={DashboardScreen} options={{title:"Pacientes", tabBarIcon: () => <Ionicons name="ios-people" size={32} color={Colors.TERTIARY} />}}   />
        <Tab.Screen name="configuracoes" component={ConfiguracoesScreen} options={{title:"Configurações", tabBarIcon: () => <Ionicons name="ios-settings" size={32} color={Colors.TERTIARY} />}}  />
    </Tab.Navigator>
)


export const AppNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false, animationEnabled:true}}>
        {/* DENTRO DA TAB */}
        <Stack.Screen name="tab" component={MainTabNavigator}  />
        {/* FORA DA TAB */}
        <Stack.Screen name="paciente-visualizar" component={PacienteScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
    </Stack.Navigator>
)



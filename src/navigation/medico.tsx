import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from './../screens/medico/dashboard';
import { PacienteEdicaoScreen } from './../screens/medico/dashboard/pacientes/editar';
import { PacienteScreen } from './../screens/medico/dashboard/pacientes/visualizar';
import * as Colors from '../themes/colors';
import { MedicoConfigScreen } from '../screens/medico/configuracoes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//TAB BAR
export const MainTabNavigator = () => (
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:Colors.LIGHT, activeTintColor:  "white"}}>
        <Tab.Screen name="dashboard" component={DashboardScreen} options={{title:"Pacientes", tabBarIcon: () => <Ionicons name="ios-people" size={32} color={Colors.TERTIARY} />}}   />
        <Tab.Screen name="configuracoes" component={MedicoConfigScreen} options={{title:"Configurações", tabBarIcon: () => <Ionicons name="ios-settings" size={32} color={Colors.TERTIARY} />}}  />
    </Tab.Navigator>
)


export const MedicoNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false, animationEnabled:true}}>
        {/* DENTRO DA TAB */}
        <Stack.Screen name="tab" component={MainTabNavigator}  />
        {/* FORA DA TAB */}
        <Stack.Screen name="paciente-visualizar" component={PacienteScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen name="paciente-edicao" component={PacienteEdicaoScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
    </Stack.Navigator>
)



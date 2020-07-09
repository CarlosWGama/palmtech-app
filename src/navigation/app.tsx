import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from './../screens/app/dashboard';
import * as Colors from './../themes/colors';
import { ConfiguracoesScreen } from '../screens/app/configuracoes';
const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <Tab.Navigator tabBarOptions={{activeBackgroundColor:Colors.LIGHT, activeTintColor:  "white"}}>
        <Tab.Screen name="dashboard" component={DashboardScreen} options={{title:"Pacientes", tabBarIcon: () => <Ionicons name="ios-people" size={32} color={Colors.TERTIARY} />}}   />
        <Tab.Screen name="configuracoes" component={ConfiguracoesScreen} options={{title:"Configurações", tabBarIcon: () => <Ionicons name="ios-settings" size={32} color={Colors.TERTIARY} />}}  />
    </Tab.Navigator>
)

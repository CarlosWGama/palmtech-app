import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from './../screens/app/dashboard';
const Tab = createBottomTabNavigator();

export const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="dashboard" component={DashboardScreen} options={{title:"Pacientes"}}  />
        <Tab.Screen name="configuracoes" component={DashboardScreen} options={{title:"Configurações"}}  />
    </Tab.Navigator>
)

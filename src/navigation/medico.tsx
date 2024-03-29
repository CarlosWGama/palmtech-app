import React from 'react';
import { Ionicons } from '@expo/vector-icons'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { DashboardScreen } from './../screens/medico/dashboard';
import { PacienteEdicaoScreen } from './../screens/medico/dashboard/pacientes/editar';
import { PacienteScreen } from './../screens/medico/dashboard/pacientes/visualizar';
import * as Colors from '../themes/colors';
import { MedicoConfigScreen } from '../screens/medico/configuracoes';
import { UltimasFotosScreen } from '../screens/medico/dashboard/pacientes/ultimas-fotos';
import { FotosPacienteScreen } from '../screens/medico/dashboard/pacientes/fotos-paciente';
import { PacienteFotoScreen } from '../screens/medico/dashboard/pacientes/foto';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        <Stack.Screen name="ultimas-fotos" component={UltimasFotosScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen name="paciente-fotos" component={FotosPacienteScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen name="paciente-visualizar" component={PacienteScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen name="paciente-foto" component={PacienteFotoScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
        <Stack.Screen name="paciente-edicao" component={PacienteEdicaoScreen} options={{cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS}}/>
    </Stack.Navigator>
)




export function BotaoModal(props: BotaoProps) {

    //Função de Clique
    const clicou = () => {
        console.log("clicou")
    }

    //Renderizando a tela
    return (
        <View style={{flex:1, width:'100%', backgroundColor:'black'}}>
            <TouchableOpacity onPress={clicou}>
                <Text style={{fontSize: 20, color: 'white'}}>{props.tituloBotao}</Text>
            </TouchableOpacity>
        </View>
    )
}
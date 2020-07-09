import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import { AppMain, AppHeader, AppContainer, fontPadrao } from '../../../themes/theme'; 
import { Header, OpcHeader, CardPaciente } from './components';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../models/paciente';

export function DashboardScreen () {

    //Lista de Pacientes
    const [pacientes, setPacientes] = React.useState<Paciente[]>([]);
    React.useEffect(() => {
      const init = async () => {
        setPacientes(await PacienteService.buscarTodos())
      }

      init();
    }, [])

    return (
      <AppMain>
        {/* <ScrollView style={{width:'100%'}}> */}
        <Header/>
        <AppContainer verticalAlign="flex-start" horizontalAlign="stretch"> 
          <View style={style.container}>
            
            {/* OPÇÕES */}
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <OpcHeader texto="Cadastrar paciente" icon="md-person-add" onPress={() => console.log('A')} />
              <OpcHeader texto="Foto " icon="md-camera" onPress={() => console.log('A')} />
            </View>

            {/* PACIENTES */}
            <Text style={[fontPadrao.negrito, {textAlign:'center', fontSize: 20}]}>Pacientes</Text>
            <FlatList
              nestedScrollEnabled={true}
              data={pacientes}
              extraData={pacientes}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <CardPaciente paciente={item} onPress={() => console.log('Clicou')}/>
              )}              
            />
          </View>
        </AppContainer>
        {/* </ScrollView> */}
        
      </AppMain>
    );
}

const style = StyleSheet.create({
    container: {flex:1, paddingHorizontal: 20, paddingTop: 50, justifyContent:'flex-start'}
})

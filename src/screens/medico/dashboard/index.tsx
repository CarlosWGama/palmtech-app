import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { AppMain, AppContainer, fontPadrao, AppHeaderBackground } from '../../../themes/theme'; 
import { OpcHeader, CardPaciente } from './components';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../models/paciente';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector} from 'react-redux';
import { rdDeslogar } from '../../../store/usuarios/actions';

export function DashboardScreen () {

    //Navigator
    const nav = useNavigation()
    
    //Lista de Pacientes
    const [pacientes, setPacientes] = React.useState<Paciente[]>([]);
    React.useEffect(() => {
      const init = async () => {
        setPacientes(await PacienteService.buscarTodos())
      }

      init();
    }, [])


    //Deslogar usuário
    const dispatch = useDispatch();
    const usuarioLogado = useSelector(state => state.usuario);

    //Botão de deslogar
    const deslogar = () => {
        dispatch(rdDeslogar())
        nav.navigate('login')
    }

    return (
      <AppMain>
        {/* <ScrollView style={{width:'100%'}}> */}
        <AppHeaderBackground>
           {/* Esquerda */}
           <View>
                <Text style={[style.texto, fontPadrao.regular]}>BEM VINDO</Text>
                <Text style={[style.texto, fontPadrao.negrito]}>{usuarioLogado.nome}</Text>
            </View>
            {/* Direita */}
            <View>
                <TouchableOpacity onPress={deslogar}>
                    <Text style={[style.texto, fontPadrao.regular]}>SAIR</Text>
                </TouchableOpacity>
            </View>
        </AppHeaderBackground>
        <AppContainer verticalAlign="flex-start" horizontalAlign="stretch" noMarginTop> 
          <View style={style.container}>
            
            {/* OPÇÕES */}
            <View style={{flexDirection:'row', justifyContent:'center'}}>
              <OpcHeader texto="Cadastrar paciente" icon="md-person-add" onPress={() => nav.navigate('paciente-edicao')} />
              <OpcHeader texto="Últimas fotos " icon="md-camera" onPress={() => nav.navigate('ultimas-fotos')} />
            </View>

            {/* PACIENTES */}
            <Text style={[fontPadrao.negrito, {textAlign:'center', fontSize: 20}]}>Pacientes</Text>
            <FlatList
              nestedScrollEnabled={true}
              data={pacientes}
              extraData={pacientes}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <CardPaciente paciente={item} onPress={() => nav.navigate('paciente-visualizar', {paciente:item})}/>
              )}              
            />
          </View>
        </AppContainer>
        {/* </ScrollView> */}
        
      </AppMain>
    );
}

const style = StyleSheet.create({
    container: {flex:1, paddingHorizontal: 20, marginTop: -80, justifyContent:'flex-start'},
    texto: {color:'white', fontSize:20},
})

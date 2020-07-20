import * as React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import { AppMain, AppContainer, fontPadrao, AppHeaderBackground, AppButton } from '../../../themes/theme'; 
import { OpcHeader, ItemFoto } from './components';
import { PacienteService } from '../../../services/paciente.service';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector} from 'react-redux';
import { rdDeslogar } from '../../../store/usuarios/actions';
import { Foto } from '../../../models/foto';
import { FotoService } from '../../../services/foto.service';

export function PacienteDashboardScreen () {

    //Navigator
    const nav = useNavigation()
    
    //Lista de Pacientes
    const [carregando, setCarregando] = React.useState(true);
    const [fim, setFim] = React.useState(false);
    const [inicio, setInicio] = React.useState(0);
    const [fotos, setFotos] = React.useState<Foto[]>([]);
    const totalBusca = 10;

    const buscarMais = async () => {
        setCarregando(true)
        const proximas = await FotoService.minhasFotos(inicio, totalBusca);
        
        //Atualiza
        setFotos(fotos.concat(proximas))
        setInicio(inicio + totalBusca)
        setCarregando(false)
        //Acabou as fotos
        setFim(proximas.length == 0)
    }

    React.useEffect(() => {
      setFotos([]);
      nav.addListener('focus', () => {
        setInicio(0);
        setFim(false);
        setFotos([]);
        buscarMais()
      })
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
              <OpcHeader texto="Configurações" icon="md-settings" onPress={() => nav.navigate('configuracao')} />
              <OpcHeader texto="Nova foto " icon="md-camera" onPress={() => nav.navigate('foto-nova')} />
            </View>

            {/* CARREGANDO */}
            { carregando && <ActivityIndicator size={32} style={{marginBottom: 10}}/>}
            
            {/* CHEGOU AO FIM DO CARREGAMENTO */}
            { fim && <Text style={[style.limite, fontPadrao.regular]}>{fotos.length > 0 ? 'Não há mais fotos' : 'Não há fotos'}</Text>}

            {/* PACIENTES */}
            <Text style={[fontPadrao.negrito, {textAlign:'center', fontSize: 20}]}>Fotos</Text>
            <FlatList
              nestedScrollEnabled={true}
              data={fotos}
              extraData={fotos}
              keyExtractor={(item) => String(item.id)}
              renderItem={({item}) => (
                <ItemFoto foto={item} onPress={() => nav.navigate('foto-visualizar', {foto:item})}/>
              )}              
            />

            {/* BOTão PARA CARREGAR MAIS  */}
            { !carregando && !fim && <View style={{padding:5}}>
                <AppButton title="CARREGAR MAIS" onPress={buscarMais}  />
              </View>}

          </View>
        </AppContainer>
        {/* </ScrollView> */}
        
      </AppMain>
    );
}

const style = StyleSheet.create({
    container: {flex:1, paddingHorizontal: 20, marginTop: -80, justifyContent:'flex-start'},
    texto: {color:'white', fontSize:20},
    limite: {textAlign:'center', fontSize: 20, marginBottom: 10}
})

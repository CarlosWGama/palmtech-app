import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import { AppMain, AppContainer, AppHeaderBackground, AppBackButton, fontPadrao, AppButton } from '../../../../../themes/theme'; 
import { PacienteService } from '../../../../../services/paciente.service';
import { Foto } from '../../../../../models/foto';
import { ItemFoto } from './components';
import { useNavigation, useRoute } from '@react-navigation/native';

export function FotosPacienteScreen () {

    //navigation
    const nav = useNavigation()
    const route = useRoute()
    //@ts-ignore
    const { paciente } = route.params;

    //Buscando
    const [carregando, setCarregando] = React.useState(true);
    const [fim, setFim] = React.useState(false);
    const [inicio, setInicio] = React.useState(0);
    const [fotos, setFotos] = React.useState<Foto[]>([]);
    const totalBusca = 10;

    const buscarMais = async () => {
        setCarregando(true)
        const proximas = await PacienteService.fotos(paciente, inicio, totalBusca);
        console.log(proximas);
        console.log(proximas.concat(fotos));
        //Atualiza
        setFotos(fotos.concat(proximas))
        setInicio(inicio + totalBusca)
        setCarregando(false)

        //Acabou as fotos
        setFim(proximas.length == 0)
    }

    //Iniciar
    React.useEffect(() => {
        buscarMais()
    }, [])

    return (
      <AppMain>
        <AppHeaderBackground>
            <AppBackButton/>
            <Text style={[style.titulo, fontPadrao.regular]}>Fotos de{"\n"} {paciente.nome}</Text>
            <View/>
        </AppHeaderBackground>

        <AppContainer verticalAlign="flex-start" horizontalAlign="stretch" noMarginTop> 
           
             {/* CARREGANDO */}
             { carregando && <ActivityIndicator size={32} style={{marginBottom: 10}}/>}
            
            {/* CHEGOU AO FIM DO CARREGAMENTO */}
            { fim && <Text style={[style.limite, fontPadrao.regular]}>Não há mais fotos</Text>}
           
            {/* ITEMS */}
            <FlatList
                data={fotos}
                extraData={fotos}
                keyExtractor={(item) => String(item.id)}
                renderItem={ ({item}) => <ItemFoto foto={item} onPress={() => nav.navigate('paciente-foto', {foto:item})}/> }
            />

            {/* BOTão PARA CARREGAR MAIS  */}
            { !carregando && !fim && <AppButton title="CARREGAR MAIS" onPress={buscarMais}  />}
        </AppContainer>
      </AppMain>
    );
}

const style = StyleSheet.create({
    titulo: {color:'white', fontSize: 25, textAlign:'center', marginTop: 20},
    limite: {textAlign:'center', fontSize: 20, marginBottom: 10}
})
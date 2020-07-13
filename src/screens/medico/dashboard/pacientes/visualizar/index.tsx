import * as React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import { AppBackground, AppContainer, AppBackButton, fontPadrao } from '../../../../../themes/theme'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { Card, CardInfo, Opcao } from './components';
import moment from 'moment';
import { Toast } from '../../../../../themes/global/util';
import { PacienteService } from '../../../../../services/paciente.service';

export function PacienteScreen () {

    //navigation
    const nav = useNavigation()
    const route = useRoute()
    const [paciente, setPaciente] = React.useState(route.params?.paciente)
    // const [paciente, setPaciente] = React.useState(new Paciente('João', '2000-01-01', 1))

    //Remover
    const remover = async () => {
        Alert.alert('Remover Paciente', 'Deseja realmente remover esse paciente? Essa ação não poderá ser desfeita', [
            {text: "Sim", onPress: async () => {
                const resposta = await PacienteService.remover(paciente)
                if (resposta.sucesso) {
                    Toast("Removido")
                    nav.navigate('tab', {screen:'dashboard'}) 
                } else {
                    Toast("Houve ma falha ao remover o paciente") 
                }
            }},
            {text:'Cancelar'}
        ])
    }

    return (
        <AppBackground>
            <AppBackButton/>
            <AppContainer verticalAlign="flex-start" noMarginTop>
            {/* CARD PRINCIPAL  */}
            <Card>
                <Text style={[style.titulo, fontPadrao.negrito]}>Paciente</Text>

                <CardInfo texto={paciente.id?.toString()} rotulo="Código" />
                <CardInfo texto={paciente.nome} rotulo="Nome" />
                <CardInfo texto={moment(paciente.dataNascimento).format('DD/MM/YYYY')} rotulo="Data de Nascimento" />
            </Card>


            {/* CARD OPÇÕES */}
            <Card>
                <Text style={[style.titulo, fontPadrao.negrito]}>Opções</Text>
                {/* OPÇÕES */}
                <View style={style.opcoes}>
                    <Opcao texto="Editar" icon="ios-create" color="#519839" onPress={() => nav.navigate('paciente-edicao', {paciente})}/>
                    <Opcao texto="Fotos" icon="ios-camera" color="#055a8c" onPress={() => console.log('Editar')}/>
                    <Opcao texto="Remover" icon="ios-trash" color="#b04632" onPress={remover}/>
                </View>
            </Card>
        </AppContainer>
        </AppBackground>
    );
}

const style = StyleSheet.create({
    titulo: { textAlign:'center', fontSize: 20, marginVertical: 10},
    opcoes: {flexDirection: 'row', justifyContent:'space-around'}
})
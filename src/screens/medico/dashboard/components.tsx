import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { fontPadrao } from '../../../themes/theme'; 
import * as Colors from './../../../themes/colors';
import { Ionicons } from '@expo/vector-icons';
import { Paciente } from '../../../models/paciente';
import moment from 'moment';

// =============================================================================================================
export function OpcHeader(props:{icon:string, texto:string, onPress:any}) {
    return (
        <>
            {/* BTN CADASTRAR PACIENTE */}
            <View style={styleOpc.btn}>
                <TouchableOpacity onPress={() => props.onPress()}>
                    <View style={{height: 120, justifyContent:'center', alignItems: 'center'}}>
                        <Ionicons name={props.icon} color="white" size={30}/>
                        <Text style={[styleOpc.texto, fontPadrao.regular]}>{props.texto}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}
const styleOpc = StyleSheet.create({
    component: { padding: 20},
    btn: {
        paddingHorizontal:10,
        margin: 10,
        flexDirection: 'column',
        borderRadius: 10,
        width: 100,
        height:120,
        backgroundColor: Colors.SECONDARY,
        //Sombra
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
        elevation: 13
    },
    texto: { color: 'white', textAlign:'center', fontSize: 15}
})
// =============================================================================================================
export function CardPaciente(props: {paciente:Paciente, onPress:any}) {

    //Recupera a idade do paciente
    const idade = (data:any) => moment().diff(data, 'years')

    return (
        <View style={styleCard.card}>
            <TouchableOpacity onPress={() => props.onPress()}>
                <View style={styleCard.container}>
                    <Text style={[fontPadrao.negrito]}>{props.paciente.id?.toString()}</Text>
                    <Text style={[fontPadrao.negrito]}>{props.paciente.nome}</Text>
                    <Text style={[fontPadrao.negrito]}>{idade(props.paciente.dataNascimento) + ' Anos'}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styleCard = StyleSheet.create({
    card: {
        backgroundColor:'white',
        marginVertical: 5,
        padding: 10,
        borderRadius: 10,
        //Sombrea
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as Colors from './../../../../themes/colors';
import { fontPadrao } from '../../../../themes/theme';
import { Ionicons } from '@expo/vector-icons';

export interface MainCardProps {
    children:any
}

export function Card (props: MainCardProps) {
    return (
        <View style={styleMC.card}>
            <View style={styleMC.sombra}/>
            <View style={styleMC.container}>
                {props.children}
            </View>
        </View>
    );
}

const styleMC = StyleSheet.create({
    card: { width:'100%', marginVertical: 20, alignItems:'center'},
    container: {
        backgroundColor: 'white',
        padding: 10,
        width: '100%',
        borderRadius: 10,
        alignItems:'stretch'
    },
    sombra: {
        backgroundColor: 'rgba(150, 150, 150, 0.5)',
        width:'95%',
        height:20,
        borderRadius: 10,
        marginBottom: -10
    }
})
//=========================================================================
export interface CardInfoProps {rotulo:string, texto:string|undefined}
export const CardInfo = (props:CardInfoProps) => ( 
    <View style={styleCI.containter}>
        <Text style={[styleCI.rotulo,fontPadrao.negrito]}>{props.rotulo}:</Text>
        <Text style={[styleCI.info,fontPadrao.negrito]}>{props.texto}</Text>
    </View>
)

const styleCI = StyleSheet.create({
    containter: {flexDirection: 'row', width:'100%', margin: 5}, 
    rotulo: {fontSize: 15, width:200},
    info: {fontSize: 15},
})
//==========================================================================
export function Opcao(props:{icon:string, texto:string, color:string, onPress:any}) {
    return (
        <>
            {/* BTN CADASTRAR PACIENTE */}
            <View style={[styleOpc.btn, {backgroundColor:props.color}]}>
                <TouchableOpacity onPress={() => props.onPress()}>
                    <View style={{height: 80, justifyContent:'center', alignItems: 'center'}}>
                        <Ionicons name={props.icon} color="white" size={20}/>
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
        borderRadius: 10,
        width: 80,
        height:80,
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
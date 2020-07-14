import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppMain, fontPadrao } from '../../../../../themes/theme'; 
import { Foto } from '../../../../../models/foto';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface ItemFotoProps {
    foto:Foto
    onPress:any;
}

export function ItemFoto (props: ItemFotoProps) {
    const {foto} = props;
    return (
      <View style={styleIF.container}>
        <TouchableOpacity onPress={props.onPress}>
            <Text style={[fontPadrao.negrito]}>{foto.paciente?.nome}</Text>
            <Text style={[fontPadrao.regular]}>{moment(foto.data).format('DD/MM/YYYY')} - {moment().diff(moment(foto.data), 'd')}  dia(s) atrás</Text>
        </TouchableOpacity>
      </View>
    );
}

const styleIF = StyleSheet.create({
    container: { 
        width:'100%',
        borderRadius:5,
        padding: 10,
        backgroundColor: 'white',
        marginVertical: 10
    }
})

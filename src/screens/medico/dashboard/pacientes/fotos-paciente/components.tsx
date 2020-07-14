import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import { AppMain, fontPadrao } from '../../../../../themes/theme'; 
import { Foto } from '../../../../../models/foto';
import moment from 'moment';

export interface ItemFotoProps {
    foto:Foto
    onPress:any;
}

export function ItemFoto (props: ItemFotoProps) {
    const {foto} = props;
    return (
      <View style={styleIF.container}>
        <TouchableOpacity onPress={props.onPress}>
            <Text style={[fontPadrao.negrito]}>{moment(foto.data).format('DD/MM/YYYY')} - {moment().diff(moment(foto.data), 'd')}  dia(s) atrás</Text>
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

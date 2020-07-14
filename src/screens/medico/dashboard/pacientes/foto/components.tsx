import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { AppMain } from '../../../../../themes/theme'; 
import { fontPadrao } from '../../../../../themes/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface FotoInfoCompentProps {
    rotulo: string;
    informacao: string;
    noLine?: boolean
}

export function FotoInfo (props: FotoInfoCompentProps) {
    return (
      <View style={{flexDirection:'row', paddingVertical: 5, borderBottomColor: 'lightgrey', borderBottomWidth: (props.noLine ? 0 : 1)}}>
        <Text style={[fontPadrao.negrito, {width: 100}]}>{props.rotulo}:</Text>
        <Text style={[fontPadrao.regular]}>{props.informacao}</Text>
      </View>
    );
}
// ==================================================================================
export interface FotoItemProps {
    imagem: any;
    descricao: string;
    onPress:any;
}

export function FotoItem(props:FotoItemProps) {
    return (
        <View style={styleFoto.container}>
            {/* TITULO */}
            <View  style={styleFoto.descricao}>
                <Text style={[styleFoto.texto, fontPadrao.negrito]}>{props.descricao}</Text>
            </View>
            {/* FOTO */}
            <TouchableOpacity onPress={props.onPress}>
                <Image source={{uri:props.imagem}} style={styleFoto.imagem} resizeMode="stretch"/>
            </TouchableOpacity>
        </View>
    )
}

const styleFoto = StyleSheet.create({
    container: {},
    descricao: { backgroundColor: 'white', marginTop: 10, padding: 10},
    texto: { textAlign: 'center'},
    imagem: {width: 300, height: 300}
})

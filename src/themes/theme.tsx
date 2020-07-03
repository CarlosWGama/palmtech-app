import React from 'react'
import styled from 'styled-components/native'
import * as Colors from './colors';
import { Text, TouchableOpacity, View } from 'react-native';

export const AppMain: any = styled.View`
    flex: 1;
    align-items: ${(props:any) => props.horizontalAlign ?  props.horizontalAlign : 'center'};
    justify-content: ${(props:any) => props.verticalAlign ?  props.verticalAlign : 'center'};
`
export const AppInput: any = styled.TextInput`
    background-color: rgba(255, 255, 255, 0.3);
    padding: 10px;
    min-width: 200px;
`

export const AppTextError: any = styled.Text`
    color: red;
    text-align: right;
    margin-bottom: 10px
`

export const AppButton = (props: {title:string, onPress?:any, style?:any}) => (
        <View style={[{backgroundColor: Colors.PRIMARY, padding: 10, borderRadius: 5}, props.style]}>
    <TouchableOpacity onPress={() => props.onPress()}>
            <Text style={{color:'white', textAlign:'center'}}>{props.title}</Text>
    </TouchableOpacity>
        </View>
)
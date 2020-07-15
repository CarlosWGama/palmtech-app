import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppMain, AppHeader, AppContainer } from '../../../themes/theme'; 
import { useRoute } from '@react-navigation/native';
import { FotoInfo, FotoItem } from './components';
import ImageView from "react-native-image-viewing";
import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

export function PacienteFotoVisualizarScreen () {

  //navigation
  const route = useRoute()
  //@ts-ignore
  const { foto } = route.params

  //ImagemView
  const [visivel, setVisivel] = React.useState(false);
  const [imagemIndice, setImagemIndice] = React.useState(0);
  const abrirGaleria = (posicao:number) => {
    setImagemIndice(posicao)
    setVisivel(true)
  } 
  const imagens = [{uri: foto.esquerda}, {uri: foto.direita}, {uri: foto.inferior}]

    return (
      <AppMain>
        <AppHeader titulo={"Foto - #" + foto.id}  backButton/>
        <AppContainer verticalAlign="flex-start">
          {/* DADOS DA FOTO */}
          <View style={style.card}>
            <FotoInfo rotulo="Código" informacao={"#"+foto.id}/>
            <FotoInfo rotulo="Tirada em" informacao={moment(foto.data).format('DD/MM/YYYY')} noLine/>
          </View>

          {/* FOTOS */}
          <ScrollView>
            <FotoItem descricao="Visão Esquerda" imagem={foto.esquerda} onPress={() => abrirGaleria(0)} />
            <FotoItem descricao="Visão Direita" imagem={foto.direita}  onPress={() => abrirGaleria(1)} />
            <FotoItem descricao="Visão Inferior" imagem={foto.inferior}  onPress={() => abrirGaleria(2)} />
          </ScrollView>

          {/* VISUALIZADOR DE IMAGENS */}
          <ImageView images={imagens} visible={visivel} imageIndex={imagemIndice} onRequestClose={() => setVisivel(false)}/>

        </AppContainer>
      </AppMain>
    );
}

const style = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    width:'100%',
    borderRadius: 5
  }
})
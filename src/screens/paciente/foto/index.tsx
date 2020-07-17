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
  let reduz = 0;
  const imagens: {uri:string}[] = []
  //Adiciona fotos do pé esquerdo
  if (foto.esquerdo_p1) {
    imagens.push({uri: foto.esquerdo_p1})
    imagens.push({uri: foto.esquerdo_p2})
    imagens.push({uri: foto.esquerdo_p3})
  } else reduz = 3
  //Adiciona fotos do pé direito
  if (foto.direito_p1) {
    imagens.push({uri: foto.direito_p1})
    imagens.push({uri: foto.direito_p2})
    imagens.push({uri: foto.direito_p3})
  }
  
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
            {/* PÉ ESQUERDO */}
            {foto.esquerdo_p1 && <FotoItem descricao="Pé Esquerdo - Posição 1" imagem={foto.esquerdo_p1} onPress={() => abrirGaleria(0)} />}
            {foto.esquerdo_p2 && <FotoItem descricao="Pé Esquerdo - Posição 2" imagem={foto.esquerdo_p2} onPress={() => abrirGaleria(1)} />}
            {foto.esquerdo_p3 && <FotoItem descricao="Pé Esquerdo - Posição 3" imagem={foto.esquerdo_p3} onPress={() => abrirGaleria(2)} />}
            {/* PÉ DIREITO */}
            {foto.direito_p1 && <FotoItem descricao="Pé Direito - Posição 1" imagem={foto.direito_p1} onPress={() => abrirGaleria(3-reduz)} />}
            {foto.direito_p2 && <FotoItem descricao="Pé Direito - Posição 2" imagem={foto.direito_p2} onPress={() => abrirGaleria(4-reduz)} />}
            {foto.direito_p3 && <FotoItem descricao="Pé Direito - Posição 3" imagem={foto.direito_p3} onPress={() => abrirGaleria(5-reduz)} />}
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
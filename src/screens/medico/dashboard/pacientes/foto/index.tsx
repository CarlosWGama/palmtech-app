import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { AppMain, AppHeader, AppContainer, AppButton } from '../../../../../themes/theme'; 
import { useRoute } from '@react-navigation/native';
import { FotoInfo, FotoItem } from './components';
import ImageView from "react-native-image-viewing";

import moment from 'moment';
import { ScrollView } from 'react-native-gesture-handler';

export function PacienteFotoScreen () {

  //navigation
  const route = useRoute()
  //@ts-ignore
  const { foto } = route.params

  //ImagemView
  const [grid, setGrid] = React.useState(false);
  const [visivel, setVisivel] = React.useState(false);
  const [imagemIndice, setImagemIndice] = React.useState(0);
  const abrirGaleria = (posicao:number) => {
    setImagemIndice(posicao)
    setVisivel(true)
  } 
  let reduz = 0;
  const imagens: {uri:string}[] = []
  const imagensGrid: {uri:string}[] = []
  //Adiciona fotos do pé esquerdo
  if (foto.esquerdo_p1) {
    imagens.push({uri: foto.esquerdo_p1})
    imagens.push({uri: foto.esquerdo_p2})
    imagens.push({uri: foto.esquerdo_p3})
    imagens.push({uri: foto.esquerdo_p4})
    imagens.push({uri: foto.esquerdo_p5})
    
    imagensGrid.push({uri: foto.esquerdo_p1_grid})
    imagensGrid.push({uri: foto.esquerdo_p2_grid})
    imagensGrid.push({uri: foto.esquerdo_p3_grid})
    imagensGrid.push({uri: foto.esquerdo_p4_grid})
    imagensGrid.push({uri: foto.esquerdo_p5_grid})
  } else reduz = 5
  //Adiciona fotos do pé direito
  if (foto.direito_p1) {
    imagens.push({uri: foto.direito_p1})
    imagens.push({uri: foto.direito_p2})
    imagens.push({uri: foto.direito_p3})
    imagens.push({uri: foto.direito_p4})
    imagens.push({uri: foto.direito_p5})
    
    imagensGrid.push({uri: foto.direito_p1_grid})
    imagensGrid.push({uri: foto.direito_p2_grid})
    imagensGrid.push({uri: foto.direito_p3_grid})
    imagensGrid.push({uri: foto.direito_p4_grid})
    imagensGrid.push({uri: foto.direito_p5_grid})
  }

  return (
      <AppMain>
        <AppHeader titulo={"Foto - #" + foto.id}  backButton/>
        <AppContainer verticalAlign="flex-start">
          {/* DADOS DA FOTO */}
          <View style={style.card}>
            <FotoInfo rotulo="Código" informacao={"#"+foto.id}/>
            <FotoInfo rotulo="Paciente" informacao={foto.paciente.nome}/>
            <FotoInfo rotulo="Tirada em" informacao={moment(foto.data).format('DD/MM/YYYY')} noLine/>
          </View>

          {grid && <AppButton title="OCULTAR GRID" onPress={() => setGrid(false)} />}
          {!grid && <AppButton title="MOSTRAR GRID" onPress={() => setGrid(true)} />}
          {/* FOTOS */}
          <ScrollView>
            {/* PÉ ESQUERDO */}
            {foto.esquerdo_p1 && <FotoItem descricao="Pé Esquerdo - 1 - Superior" imagem={(grid ? foto.esquerdo_p1_grid : foto.esquerdo_p1)} onPress={() => abrirGaleria(0)} />}
            {foto.esquerdo_p2 && <FotoItem descricao="Pé Esquerdo - 2 - Lateral" imagem={(grid ? foto.esquerdo_p2_grid : foto.esquerdo_p2)} onPress={() => abrirGaleria(1)} />}
            {foto.esquerdo_p3 && <FotoItem descricao="Pé Esquerdo - 3 - Interna" imagem={(grid ? foto.esquerdo_p3_grid : foto.esquerdo_p3)} onPress={() => abrirGaleria(2)} />}
            {foto.esquerdo_p3 && <FotoItem descricao="Pé Esquerdo - 4 - Posterior" imagem={(grid ? foto.esquerdo_p4_grid : foto.esquerdo_p4)} onPress={() => abrirGaleria(3)} />}
            {foto.esquerdo_p3 && <FotoItem descricao="Pé Esquerdo - 5 - Plantar" imagem={(grid ? foto.esquerdo_p5_grid : foto.esquerdo_p5)} onPress={() => abrirGaleria(4)} />}
            {/* PÉ DIREITO */}
            {foto.direito_p1 && <FotoItem descricao="Pé Direito - 1 - Superior" imagem={(grid ? foto.direito_p1_grid : foto.direito_p1)} onPress={() => abrirGaleria(5-reduz)} />}
            {foto.direito_p2 && <FotoItem descricao="Pé Direito - 2 - Lateral" imagem={(grid ? foto.direito_p2_grid : foto.direito_p2)} onPress={() => abrirGaleria(6-reduz)} />}
            {foto.direito_p3 && <FotoItem descricao="Pé Direito - 3 - Interna" imagem={(grid ? foto.direito_p3_grid : foto.direito_p3)} onPress={() => abrirGaleria(7-reduz)} />}
            {foto.direito_p3 && <FotoItem descricao="Pé Direito - 4 - Posterior" imagem={(grid ? foto.direito_p4_grid : foto.direito_p4)} onPress={() => abrirGaleria(8-reduz)} />}
            {foto.direito_p3 && <FotoItem descricao="Pé Direito - 5 - Plantar" imagem={(grid ? foto.direito_p5_grid : foto.direito_p5)} onPress={() => abrirGaleria(9-reduz)} />}
            
          </ScrollView>

          {/* VISUALIZADOR DE IMAGENS */}
          <ImageView images={(grid ? imagensGrid : imagens)} visible={visivel} imageIndex={imagemIndice} onRequestClose={() => setVisivel(false)}/>

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
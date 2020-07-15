import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { AppMain, AppHeader, AppContainer, fontPadrao, AppButton } from '../../../themes/theme'; 
import { ItemInformacoes, ItemTirarFoto, ItemConfirmarFoto } from './components';
import { Foto } from '../../../models/foto';
import { Toast } from '../../../themes/global/util';
import { FotoService } from '../../../services/foto.service';
import { useNavigation } from '@react-navigation/native';

export function PacienteFotoNovaScreen () {
    //Navigation
    const nav = useNavigation();

    //Controlar a abas
    const [aba, setAba] = React.useState(0);
    //Instruções
    const fotoEsquerda = require('./../../../assets/imgs/fotos/pe-esquerda.jpg')
    const guiaEsquerda = require('./../../../assets/imgs/fotos/pe-esquerda.jpg')
    const fotoDireita = require('./../../../assets/imgs/fotos/pe-direita.jpg')
    const guiaDireita = require('./../../../assets/imgs/fotos/pe-direita.jpg')
    const fotoInferior = require('./../../../assets/imgs/fotos/pe-inferior.jpg')
    const guiaInferior = require('./../../../assets/imgs/fotos/pe-inferior.jpg')
    
    //Foto
    const [foto, setFoto] = React.useState(new Foto())

    const tirarFoto = async (imagem: string, posicao: number) => {
      if (posicao == 1) foto.esquerda = imagem
      else if (posicao == 2)foto.direita = imagem
      else if (posicao == 3)foto.inferior = imagem
      
      setFoto(foto)
      setAba(aba+1)
    }
    
    //Salvar
    const [erro, setErro] = React.useState<string|null>(null)
    const salvar = async () => {
      setAba(aba+1)
      const resposta = await FotoService.cadastrar(foto);
      if (resposta.sucesso) {
        Toast("Foto enviada")
        nav.goBack()
      } else {
        Toast("Falha no envio")
        setErro(String(resposta.erro));
      }
    }
  
    return (
      <AppMain>
        <AppHeader titulo="Enviar Foto" backButton/>
        <AppContainer>
            {aba == 0 && <View style={style.inicio}>
              <Text style={[style.texto, fontPadrao.regular]}>Clique em Confirmar para iniciar as etapas de enviar uma foto do seu pé para seu médico</Text>
              <Text style={[style.texto, fontPadrao.regular]}>Leia atentamente as informações que virão a seguir sobre a posição da foto</Text>
              <AppButton title="Iniciar" onPress={() => setAba(1)} />
            </View>}
            {/* FOTO ESQUERDA */}
            { aba == 1 && <ItemInformacoes foto={fotoEsquerda} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 2 && <ItemTirarFoto guia={guiaEsquerda} onConfirmar={(foto) => tirarFoto(foto, 1)}/>}
            { aba == 3 && <ItemConfirmarFoto 
              fotoExemplo={fotoEsquerda}
              fotoTirada={foto.esquerda}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO DIREITA */}
            { aba == 4 && <ItemInformacoes foto={fotoDireita} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 5 && <ItemTirarFoto guia={guiaDireita} onConfirmar={(foto) => tirarFoto(foto, 2)}/>}
            { aba == 6 && <ItemConfirmarFoto 
              fotoExemplo={fotoDireita}
              fotoTirada={foto.direita}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO INFERIOR */}
            { aba == 7 && <ItemInformacoes foto={fotoInferior} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 8 && <ItemTirarFoto guia={guiaInferior} onConfirmar={(foto) => tirarFoto(foto, 3)}/>}
            { aba == 9 && <ItemConfirmarFoto 
              fotoExemplo={fotoInferior}
              fotoTirada={foto.inferior}
              onConfirmar={salvar} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }

            {/* ENVIANDO */}
            {aba == 10 && erro == null &&
              <View style={style.fim}>
                <ActivityIndicator size={32} />
                <Text style={[fontPadrao.regular]}>Enviando</Text>
              </View>}

            {/* FINALIZADO */}
            {aba == 10 && erro &&
              <View style={style.fim}>
                <Text style={[fontPadrao.regular, {color:'red'}]}>{erro}</Text>
              </View>}

        </AppContainer>
      </AppMain>
    );
}

const style = StyleSheet.create({
  inicio: { backgroundColor: 'white', padding: 20},
  texto: { textAlign: 'center', marginBottom: 10, fontSize: 18},
  fim: { backgroundColor: 'white', padding: 20}
})
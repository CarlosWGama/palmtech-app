import * as React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { AppMain, AppHeader, AppContainer, fontPadrao, AppButton } from '../../../themes/theme'; 
import { ItemInformacoes, ItemTirarFoto, ItemConfirmarFoto } from './components';
import { Foto } from '../../../models/foto';
import { Toast } from '../../../themes/global/util';
import { FotoService } from '../../../services/foto.service';
import { useNavigation } from '@react-navigation/native';
import * as Colors from './../../../themes/colors'

export function PacienteFotoNovaScreen () {
    //Navigation
    const nav = useNavigation();

    //Controlar a abas
    const [aba, setAba] = React.useState(0);
    const [pularPeEsquerdo, setPularPeEsquerdo] = React.useState(false);
    const [pularPeDireito, setPularPeDireito] = React.useState(false);
    //Instruções
    const fotoEsquerdoP1 = require('./../../../assets/imgs/fotos/pe-esquerda.jpg')
    const guiaEsquerdoP1 = require('./../../../assets/imgs/fotos/pe-esquerda.jpg')
    const fotoEsquerdoP2 = require('./../../../assets/imgs/fotos/pe-direita.jpg')
    const guiaEsquerdoP2 = require('./../../../assets/imgs/fotos/pe-direita.jpg')
    const fotoEsquerdoP3 = require('./../../../assets/imgs/fotos/pe-inferior.jpg')
    const guiaEsquerdoP3 = require('./../../../assets/imgs/fotos/pe-inferior.jpg')
    const fotoDireitoP1 = require('./../../../assets/imgs/fotos/pe-esquerda.jpg')
    const guiaDireitoP1 = require('./../../../assets/imgs/fotos/pe-esquerda.jpg')
    const fotoDireitoP2 = require('./../../../assets/imgs/fotos/pe-direita.jpg')
    const guiaDireitoP2 = require('./../../../assets/imgs/fotos/pe-direita.jpg')
    const fotoDireitoP3 = require('./../../../assets/imgs/fotos/pe-inferior.jpg')
    const guiaDireitoP3 = require('./../../../assets/imgs/fotos/pe-inferior.jpg')
    
    //Pular
    const pular = async (pe: "esquerdo"|"direito") => {
      if (pe == 'esquerdo') {
        setAba(11);
        setPularPeEsquerdo(true)
      } else {
        if (pularPeEsquerdo) {
          Toast("Como você pulou o pé esquerdo, precisa tirar foto do pé direita");
        } else salvar();
      }
    } 

    //Foto
    const [foto, setFoto] = React.useState(new Foto())

    const tirarFoto = async (imagem: string, posicao: number) => {
      if (posicao == 1) foto.esquerdo_p1 = imagem
      else if (posicao == 2)foto.esquerdo_p2 = imagem
      else if (posicao == 3)foto.esquerdo_p3 = imagem
      else if (posicao == 4)foto.direito_p1 = imagem
      else if (posicao == 5)foto.direito_p2 = imagem
      else if (posicao == 6)foto.direito_p3 = imagem
      
      setFoto(foto)
      setAba(aba+1)
    }
    
    //Salvar
    const [erro, setErro] = React.useState<string|null>(null)
    const salvar = async () => {
      setAba(21)
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

            {/* PULAR PÉ ESQUERDO */}
            {aba == 1 && <View style={style.inicio}>
              <Text style={[style.texto, fontPadrao.regular]}>Caso deseje tirar foto do pé ESQUERDO, clique em TIRAR FOTO.</Text>
              <Text style={[style.texto, fontPadrao.regular]}>Caso deseje avançar para o pé direito, clique em PULAR</Text>
              <View style={{flexDirection: 'row',}}>
                <AppButton title="PULAR" style={{flex:1, borderRadius:0}}  color={Colors.TERTIARY} onPress={() => { pular("esquerdo") }} />
                <AppButton title="TIRAR FOTO" style={{flex:1, borderRadius:0}}  onPress={() => setAba(aba+1)} />
              </View>
            </View>}

            {/* ============= PÉ ESQUERDO ============= */}
            {/* FOTO PE ESQUERDO P1 (ESQUERDA) */}
            { aba == 2 && <ItemInformacoes titulo="PÉ ESQUERDO - ESQUERDA" foto={fotoEsquerdoP1} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 3 && <ItemTirarFoto guia={guiaEsquerdoP1} onConfirmar={(foto) => tirarFoto(foto, 1)}/>}
            { aba == 4 && <ItemConfirmarFoto 
              fotoExemplo={fotoEsquerdoP1}
              fotoTirada={foto.esquerdo_p1}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE ESQUERDO P2(DIREITA) */}
            { aba == 5 && <ItemInformacoes titulo="PÉ ESQUERDO - DIRETA" foto={fotoEsquerdoP2} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 6 && <ItemTirarFoto guia={guiaEsquerdoP2} onConfirmar={(foto) => tirarFoto(foto, 2)}/>}
            { aba == 7 && <ItemConfirmarFoto 
              fotoExemplo={fotoEsquerdoP2}
              fotoTirada={foto.esquerdo_p2}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE ESQUERDO P3(INFERIOR) */}
            { aba == 8 && <ItemInformacoes titulo="PÉ ESQUERDO - INFERIOR" foto={fotoEsquerdoP3} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 9 && <ItemTirarFoto guia={guiaEsquerdoP3} onConfirmar={(foto) => tirarFoto(foto, 3)}/>}
            { aba == 10 && <ItemConfirmarFoto 
              fotoExemplo={fotoEsquerdoP3}
              fotoTirada={foto.esquerdo_p3}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }

            {/* PULAR PÉ DIREITO */}
            {aba == 11 && <View style={style.inicio}>
              <Text style={[style.texto, fontPadrao.regular]}>Caso deseje tirar foto do pé DIREITO, clique em TIRAR FOTO.</Text>
              { !pularPeEsquerdo && <Text style={[style.texto, fontPadrao.regular]}>Caso deseje finalizar, clique em PULAR</Text>}
              <View style={{flexDirection: 'row'}}>
                {/* SÓ PODE PULAR DIREITO SE NÃO PULOU ESQUERDO */}
                {!pularPeEsquerdo && <AppButton title="PULAR" style={{flex:1, borderRadius:0}}  color={Colors.TERTIARY} onPress={() => { pular("direito") }} />}
                <AppButton title="TIRAR FOTO" style={{flex:1, borderRadius:0}} onPress={() => setAba(aba+1)} />
              </View>
            </View>}


            {/* ============= PÉ DIREITO ============= */}
            {/* FOTO PE DIREITO P1 (ESQUERDA) */}
            { aba == 12 && <ItemInformacoes titulo="PÉ DIREITO - ESQUERDA" foto={fotoDireitoP1} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 13 && <ItemTirarFoto guia={guiaDireitoP1} onConfirmar={(foto) => tirarFoto(foto, 4)}/>}
            { aba == 14 && <ItemConfirmarFoto 
              fotoExemplo={fotoDireitoP1}
              fotoTirada={foto.direito_p1}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE DIREITO P2(DIREITA) */}
            { aba == 15 && <ItemInformacoes titulo="PÉ DIREITO - DIREITA" foto={fotoDireitoP2} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 16 && <ItemTirarFoto guia={guiaDireitoP2} onConfirmar={(foto) => tirarFoto(foto, 5)}/>}
            { aba == 17 && <ItemConfirmarFoto 
              fotoExemplo={fotoDireitoP2}
              fotoTirada={foto.direito_p2}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE DIREITO P3(INFERIOR) */}
            { aba == 18 && <ItemInformacoes titulo="PÉ DIREITO - INFERIOR" foto={fotoDireitoP3} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 19 && <ItemTirarFoto guia={guiaDireitoP3} onConfirmar={(foto) => tirarFoto(foto, 6)}/>}
            { aba == 20 && <ItemConfirmarFoto 
              fotoExemplo={fotoDireitoP3}
              fotoTirada={foto.direito_p3}
              onConfirmar={salvar} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }

            {/* ENVIANDO */}
            {aba == 21 && erro == null &&
              <View style={style.fim}>
                <ActivityIndicator size={32} />
                <Text style={[fontPadrao.regular]}>Enviando</Text>
              </View>}

            {/* FINALIZADO */}
            {aba == 21 && erro &&
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
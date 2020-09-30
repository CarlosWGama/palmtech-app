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
    const guiaEsquerdoP1 = require('./../../../assets/imgs/fotos/pe1_esq_superior.jpg')
    const guiaEsquerdoP2 = require('./../../../assets/imgs/fotos/pe2_esq_lateral.jpg')
    const guiaEsquerdoP3 = require('./../../../assets/imgs/fotos/pe3_esq_interna.jpg')
    const guiaEsquerdoP4 = require('./../../../assets/imgs/fotos/pe4_esq_posterior.jpg')
    const guiaEsquerdoP5 = require('./../../../assets/imgs/fotos/pe5_esq_plantar.jpg')
    const guiaDireitoP1 = require('./../../../assets/imgs/fotos/pe1_dir_superior.jpg')
    const guiaDireitoP2 = require('./../../../assets/imgs/fotos/pe2_dir_lateral.jpg')
    const guiaDireitoP3 = require('./../../../assets/imgs/fotos/pe3_dir_interna.jpg')
    const guiaDireitoP4 = require('./../../../assets/imgs/fotos/pe4_dir_posterior.jpg')
    const guiaDireitoP5 = require('./../../../assets/imgs/fotos/pe5_dir_plantar.jpg')
    
    //Pular
    const pular = async (pe: "esquerdo"|"direito") => {
      if (pe == 'esquerdo') {
        setAba(17);
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
      else if (posicao == 4)foto.esquerdo_p4 = imagem
      else if (posicao == 5)foto.esquerdo_p5 = imagem
      else if (posicao == 6)foto.direito_p1 = imagem
      else if (posicao == 7)foto.direito_p2 = imagem
      else if (posicao == 8)foto.direito_p3 = imagem
      else if (posicao == 9)foto.direito_p4 = imagem
      else if (posicao == 10)foto.direito_p5 = imagem
      
      setFoto(foto)
      setAba(aba+1)
    }
    
    //Salvar
    const [erro, setErro] = React.useState<string|null>(null)
    const salvar = async () => {
      setAba(33)
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
              <Text style={[style.texto, fontPadrao.regular]}>Olá! Vou guiá-lo ao tirar suas fotos.</Text>
    <Text style={[style.texto, fontPadrao.regular]}>Você tirará 5 fotos para capturar o tamanho e a forma do seu pé. {"\n"}Você precisará de três itens antes de tirar suas fotos: {"\n"}Primeiro, pegue uma folha em branco de papel A4 (210 * 297 mm). {"\n"}Em segundo lugar, encontre um piso duro e plano. {"\n"}Por último coloque a folha de A4 no chão, tente manter seu pé deve no centro da folha.</Text>
              <Text style={[style.texto, fontPadrao.regular]}>Clique em Confirmar para iniciar as etapas de enviar uma foto do seu pé para seu médico</Text>
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
            {/* FOTO PE ESQUERDO P1 (`SUPERIOR`) */}
            { aba == 2 && <ItemInformacoes titulo="PÉ ESQUERDO - 01 - SUPERIOR" foto={guiaEsquerdoP1} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 3 && <ItemTirarFoto guia={guiaEsquerdoP1} onConfirmar={(foto) => tirarFoto(foto, 1)}/>}
            { aba == 4 && <ItemConfirmarFoto 
              fotoExemplo={guiaEsquerdoP1}
              fotoTirada={foto.esquerdo_p1}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE ESQUERDO P2(LATERAL) */}
            { aba == 5 && <ItemInformacoes titulo="PÉ ESQUERDO - 02 - LATERAL" foto={guiaEsquerdoP2} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 6 && <ItemTirarFoto guia={guiaEsquerdoP2} onConfirmar={(foto) => tirarFoto(foto, 2)}/>}
            { aba == 7 && <ItemConfirmarFoto 
              fotoExemplo={guiaEsquerdoP2}
              fotoTirada={foto.esquerdo_p2}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE ESQUERDO P3(INTERNA) */}
            { aba == 8 && <ItemInformacoes titulo="PÉ ESQUERDO - 03 - INTERNA" foto={guiaEsquerdoP3} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 9 && <ItemTirarFoto guia={guiaEsquerdoP3} onConfirmar={(foto) => tirarFoto(foto, 3)}/>}
            { aba == 10 && <ItemConfirmarFoto 
              fotoExemplo={guiaEsquerdoP3}
              fotoTirada={foto.esquerdo_p3}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
           
            {/* FOTO PE ESQUERDO P4(POSTERIOR) */}
            { aba == 11 && <ItemInformacoes titulo="PÉ ESQUERDO - 04 - POSTERIOR" foto={guiaEsquerdoP4} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 12 && <ItemTirarFoto guia={guiaEsquerdoP4} onConfirmar={(foto) => tirarFoto(foto, 4)}/>}
            { aba == 13 && <ItemConfirmarFoto 
              fotoExemplo={guiaEsquerdoP4}
              fotoTirada={foto.esquerdo_p4}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            {/* FOTO PE ESQUERDO P5(PLANTAR) */}
            { aba == 14 && <ItemInformacoes titulo="PÉ ESQUERDO - 05 - PLANTAR" foto={guiaEsquerdoP5} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 15 && <ItemTirarFoto guia={guiaEsquerdoP5} onConfirmar={(foto) => tirarFoto(foto, 5)}/>}
            { aba == 16 && <ItemConfirmarFoto 
              fotoExemplo={guiaEsquerdoP5}
              fotoTirada={foto.esquerdo_p5}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }

            {/* PULAR PÉ DIREITO */}
            {aba == 17 && <View style={style.inicio}>
              <Text style={[style.texto, fontPadrao.regular]}>Caso deseje tirar foto do pé DIREITO, clique em TIRAR FOTO.</Text>
              { !pularPeEsquerdo && <Text style={[style.texto, fontPadrao.regular]}>Caso deseje finalizar, clique em PULAR</Text>}
              <View style={{flexDirection: 'row'}}>
                {/* SÓ PODE PULAR DIREITO SE NÃO PULOU ESQUERDO */}
                {!pularPeEsquerdo && <AppButton title="PULAR" style={{flex:1, borderRadius:0}}  color={Colors.TERTIARY} onPress={() => { pular("direito") }} />}
                <AppButton title="TIRAR FOTO" style={{flex:1, borderRadius:0}} onPress={() => setAba(aba+1)} />
              </View>
            </View>}


            {/* ============= PÉ DIREITO ============= */}
            {/* FOTO PE DIREITO P1 (SUPERIOR) */}
            { aba == 18 && <ItemInformacoes titulo="PÉ DIREITO - 01 - SUPERIOR" foto={guiaDireitoP1} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 19 && <ItemTirarFoto guia={guiaDireitoP1} onConfirmar={(foto) => tirarFoto(foto, 6)}/>}
            { aba == 20 && <ItemConfirmarFoto 
              fotoExemplo={guiaDireitoP1}
              fotoTirada={foto.direito_p1}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE DIREITO P2(LATERAL) */}
            { aba == 21 && <ItemInformacoes titulo="PÉ DIREITO - 02 - LATERAL" foto={guiaDireitoP2} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 22 && <ItemTirarFoto guia={guiaDireitoP2} onConfirmar={(foto) => tirarFoto(foto, 7)}/>}
            { aba == 23 && <ItemConfirmarFoto 
              fotoExemplo={guiaDireitoP2}
              fotoTirada={foto.direito_p2}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE DIREITO P3(INTERNA) */}
            { aba == 24 && <ItemInformacoes titulo="PÉ DIREITO - 03 - INTERNA" foto={guiaDireitoP3} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 25 && <ItemTirarFoto guia={guiaDireitoP3} onConfirmar={(foto) => tirarFoto(foto, 8)}/>}
            { aba == 26 && <ItemConfirmarFoto 
              fotoExemplo={guiaDireitoP3}
              fotoTirada={foto.direito_p3}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE DIREITO P4(POSTERIOR) */}
            { aba == 27 && <ItemInformacoes titulo="PÉ DIREITO - 04 - POSTERIOR" foto={guiaDireitoP4} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 28 && <ItemTirarFoto guia={guiaDireitoP4} onConfirmar={(foto) => tirarFoto(foto, 9)}/>}
            { aba == 29 && <ItemConfirmarFoto 
              fotoExemplo={guiaDireitoP4}
              fotoTirada={foto.direito_p4}
              onConfirmar={() => setAba(aba+1)} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }
            
            {/* FOTO PE DIREITO P5(PLANTAR) */}
            { aba == 30 && <ItemInformacoes titulo="PÉ DIREITO - 05 - PLANTAR" foto={guiaDireitoP5} onConfirmar={() => setAba(aba+1)}/>}
            { aba == 31 && <ItemTirarFoto guia={guiaDireitoP5} onConfirmar={(foto) => tirarFoto(foto, 10)}/>}
            { aba == 32 && <ItemConfirmarFoto 
              fotoExemplo={guiaDireitoP5}
              fotoTirada={foto.direito_p5}
              onConfirmar={salvar} 
              onTentarNovamente={() => setAba(aba-1)}/>
            }

            {/* ENVIANDO */}
            {aba == 33 && erro == null &&
              <View style={style.fim}>
                <ActivityIndicator size={32} />
                <Text style={[fontPadrao.regular]}>Enviando</Text>
              </View>}

            {/* FINALIZADO */}
            {aba == 33 && erro &&
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
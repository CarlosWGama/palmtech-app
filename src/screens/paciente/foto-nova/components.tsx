import * as React from 'react';
import { View, Text, StyleSheet, Image, Platform, ActivityIndicator, Dimensions } from 'react-native';
import { AppMain, fontPadrao, AppButton } from '../../../themes/theme'; 
import * as Colors from './../../../themes/colors';
import { Camera } from 'expo-camera';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImageManipulator from "expo-image-manipulator";

export interface InformacoesProps {
  onConfirmar:any;
  titulo?:string
  foto: any;
}

export function ItemInformacoes (props: InformacoesProps) {
    return (
      <View style={styleInf.container}>
         {/* TITULO */}
        <Text style={[styleInf.titulo, fontPadrao.negrito]}>INSTRUÇÕES - {props.titulo}</Text>

        <ScrollView style={{padding: 10}}>
          {/* DESCRIÇÃO */}
          <Text style={[styleInf.informacao, fontPadrao.regular]}>Ao clicar em Continuar, será solicitado que tire uma foto do seu pé na mesma posição da foto abaixo. {"\n"} Use uma folha em branco e peça para alguém te auxiliar, tirando essa foto para você.</Text>
          
          {/* FOTO */}
          <View style={{alignItems:'center', margin: 10}}>
            <Image source={props.foto} style={styleInf.imagem} resizeMode="stretch"/>
          </View>
        </ScrollView>

        {/* BOTÂO DE AVANÇAR */}
        <View style={{justifyContent:'flex-end'}}>
          <AppButton title="Continuar"  onPress={props.onConfirmar}/>
        </View>
      </View>
    );
}
const styleInf = StyleSheet.create({
  container: { flex:1, justifyContent:'space-between', alignItems: 'stretch', width: '100%', backgroundColor: 'white'},
  titulo: { backgroundColor: Colors.PRIMARY, color: 'white', textAlign:'center', padding: 20, marginBottom: 10},
  informacao: {fontSize: 18, textAlign:'center', marginBottom: 10},
  imagem: { height: 300, width: 250}  
})
// ==================================================================================
export interface TirarFotoProps {
  onConfirmar(foto):any;
  guia: any;
}

export function ItemTirarFoto (props: TirarFotoProps) {

    //Habilita o Grid
    const [grid, setGrid] = React.useState(false)
    const [camera, setCamera] = React.useState<any>(null);
    const [carregando, setCarregando] = React.useState(false);

    //Verifica permissão de uso da Camera
    const [temPermissao, setTemPermissao] = React.useState(false);
    React.useEffect(() => {
      (async () => {
        if (Platform.OS != 'web') {
          const { status } = await Camera.requestPermissionsAsync();
          setTemPermissao(status === 'granted');
        } else {
          //Na versão web não precisa pedir permissão
          setTemPermissao(true);
        }

      })();
    }, []);

    //Tira Foto
    const tirarFoto = async() => {
      setCarregando(true);

      //Tira a foto  
      let foto = await camera.takePictureAsync({
        quality: 1,
        base64: true
      })
      let imagem = 'data:image/jpg;base64,' +foto.base64;

      //Redimensiona a foto
      const imageResult = await ImageManipulator.manipulateAsync(imagem, 
        [{resize:{width: 960, height: 1280}}],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
      );
      imagem = 'data:image/jpg;base64,' +imageResult.base64;
      
      setCarregando(false);
      props.onConfirmar(imagem);
    }

    return (
      <View style={styleTF.container}>
        {/* TITTULO */}
        <Text style={[styleTF.titulo, fontPadrao.regular]}>TIRAR FOTO</Text>
        
        {/* CAMERA */}
        <View style={styleTF.containerCamera}>

          {!temPermissao && <Text style={[fontPadrao.regular]}>Não é possível tirar foto, pois não permissão de acesso a câmera</Text>}
        
          {temPermissao &&
            <Camera style={{ flex: 1 }} ratio={'3:4'} autoFocus="on" useCamera2Api  type={Camera.Constants.Type.back} ref={ref => setCamera(ref)}>
              <View
                style={{
                  flex: 1,
                  backgroundColor: 'transparent',
                  flexDirection: 'row',
                }}>

                {grid && <Image 
                            resizeMode="stretch"
                            source={props.guia} 
                            style={{width:'100%', height:'100%', opacity:0.4}} />}
                  
              </View>
            </Camera>}
        </View>
         
        {/* BOTÕES */}
        {temPermissao && <View style={styleTF.botoes}>
            <AppButton title="USAR GUIA" style={{borderRadius:0, width:'50%'}} color={Colors.SECONDARY} onPress={() => setGrid(!grid)}/>
            {carregando && <View style={{width:'50%', justifyContent:'center'}}><ActivityIndicator /></View>}
            {!carregando && <AppButton title="CONFIRMAR" style={{borderRadius:0, width:'50%'}} onPress={tirarFoto}/>}
        </View> }
      </View>
    );
}
const styleTF = StyleSheet.create({
  container: {flex: 1, width: '100%', backgroundColor:'white', justifyContent:'space-between'},
  botoes: {flexDirection:"row", width:'100%'},
  titulo: { backgroundColor: Colors.PRIMARY, color: 'white', textAlign:'center', padding: 20, marginBottom: 10},
  containerCamera: { width: 300, height: 400, alignSelf: 'center'}
})
// ===================================================================================
export interface ConfirmarFotoProps {
  onConfirmar:any;
  onTentarNovamente: any;
  fotoExemplo:any;
  fotoTirada: any;
}

export function ItemConfirmarFoto (props: ConfirmarFotoProps) {
    return (
      <View style={styleCF.container}>
        
        {/* TITULO */}
        <Text style={styleCF.titulo}>Confirmar Foto</Text>
        {/* CONTEUDO */}
        <View>
          <Text style={[styleCF.informacoes, fontPadrao.regular]}>Verifique se sua foto (direita) ficou como a do exemplo (esquerda)</Text>          
          <Text style={[styleCF.informacoes, fontPadrao.regular]}>Clique em Confirmar caso a foto ficou no formato correto ou corrigir, caso precise alterar</Text>          
        
          {/* IMAGENS */}
          <View style={styleCF.imagens}>
            <Image source={props.fotoExemplo} style={styleCF.imagem} resizeMode="stretch"/>
            <Image source={{uri:props.fotoTirada}} style={styleCF.imagem} resizeMode="stretch"/>
          </View>
        
        </View>
        {/* BOTÕES */}
        <View style={styleCF.botoes}>
          <AppButton title="CORRIGIR" style={{borderRadius:0, width:'50%'}} color={Colors.SECONDARY} onPress={props.onTentarNovamente}/>
          <AppButton title="CONFIRMAR" style={{borderRadius:0, width:'50%'}} onPress={props.onConfirmar}/>
        </View>
      </View>
    );
}
const styleCF = StyleSheet.create({
  container: {flex: 1, width: '100%', backgroundColor:'white', justifyContent:'space-between'},
  botoes: {flexDirection:"row", width:'100%'},
  titulo: { backgroundColor: Colors.PRIMARY, color: 'white', textAlign:'center', padding: 20, marginBottom: 10},
  informacoes: {fontSize: 17, textAlign:'center'},
  imagens: { flexDirection: 'row', justifyContent: 'space-around'},
  imagem: {width: 150, height: 200}

})
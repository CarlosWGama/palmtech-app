import * as React from 'react';
import { View, Text, StyleSheet, TextInput, ActivityIndicator } from 'react-native';
import { AppMain, AppHeader, AppContainer, AppButton, AppInput, fontPadrao } from '../../../../../themes/theme'; 
import { useNavigation, useRoute } from '@react-navigation/native';
import { Paciente } from '../../../../../models/paciente';
import { Formik } from 'formik';
import * as Yup from 'yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import { PacienteService } from '../../../../../services/paciente.service';
import { Toast } from '../../../../../themes/global/util';

export function PacienteEdicaoScreen () {

    //navigation
    const nav = useNavigation()
    const route = useRoute();
    
    //Paciente 
    //@ts-ignore
    const [paciente, setPaciente] = React.useState<Paciente>(Object.assign(new Paciente, route.params?.paciente))
    const dataNascimento = new Date(paciente.dataNascimento != undefined ? paciente.dataNascimento : new Date())
    
    //Edicao
    const [calendario, setCalendario] = React.useState(false);
    const [erro, setErro] = React.useState<null|string>(null);

    const edicao = async (paciente: Paciente) => {
      setErro(null);
      console.log(paciente);
      if (paciente.id == undefined) { //Cadastro
        const resposta = await PacienteService.cadastrar(paciente);
        if (resposta.sucesso) {
          Toast('Cadastro realizado com sucesso')
          nav.navigate('tab', {screen:'dashboard'})
        } else setErro(String(resposta.erro))

      } else { //Edição
        const resposta = await PacienteService.editar(paciente);
        if (resposta.sucesso) Toast('Edição realizada com sucesso')
        else setErro(String(resposta.erro))
      }    
    }


    return (
      <AppMain>
        <AppHeader titulo={paciente.id == undefined ? 'Cadastro de Paciente' : 'Edição de Paciente'} backButton/>
        <AppContainer verticalAlign="flex-start">
            <Formik
                  //Dados iniciais 
                  initialValues={paciente}
                  // Validação de formulário
                  validationSchema={Yup.object().shape({
                      nome: Yup.string().required('Nome obrigatório'),
                      email: Yup.string().required('Email obrigatório').email('Email inválido').required('Email obrigatório'),
                      senha: Yup.string().min(6, 'Pelo menos 6 caractetes'),
                      dataNascimento: Yup.string().required('Data de nascimento obrigatório')
                  })}
                  //Envio
                  onSubmit={edicao}
              >
                  {({values, errors, handleBlur, setFieldValue, handleChange, handleSubmit, touched, isSubmitting}) => (
                      <View style={style.formulario}>
                          <Text style={[style.titulo, fontPadrao.negrito]}>Dados do Paciente</Text>
  
                          {/* NOME */}
                          <AppInput titulo="Nome" touched={touched.nome} error={errors.nome}>
                              <TextInput 
                                  value={values.nome}
                                  placeholder="Digite seu nome"
                                  onBlur={handleBlur('nome')} 
                                  onChangeText={handleChange('nome')} />
                          </AppInput>

                          {/* EMAIL */}
                          <AppInput titulo="Email" touched={touched.email} error={errors.email}>
                              <TextInput 
                                  keyboardType="email-address"
                                  value={values.email}
                                  placeholder="Digite seu e-mail"
                                  onBlur={handleBlur('email')} 
                                  onChangeText={handleChange('email')} />
                          </AppInput>

                          {/* SENHA */}
                          { paciente.id == undefined &&
                            <AppInput titulo="Senha" touched={touched.senha} error={errors.senha}>
                                <TextInput 
                                    value={values.senha}
                                    placeholder="Digite sua senha"
                                    secureTextEntry
                                    onBlur={handleBlur('senha')} 
                                    onChangeText={handleChange('senha')} />
                            </AppInput>  
                          }

                          {/* DATA DE NASCIMENTO */}
                          <AppInput titulo="Data de Nascimento" touched={touched.dataNascimento} error={errors.dataNascimento} noBorder>
                            <TouchableOpacity onPress={() => setCalendario(true)}>
                              <Text>{values.dataNascimento != undefined ? moment(values.dataNascimento).format('DD/MM/YYYY') : 'Clique para selecionar data'}</Text>
                            </TouchableOpacity>
                          </AppInput>
                          {calendario && 
                              <DateTimePicker 
                                value={dataNascimento}
                                mode="date"
                                onChange={(event, data) => {
                                  setCalendario(false);
                                  setFieldValue('dataNascimento', moment(data).format('YYYY-MM-DD'))
                                }}
                              />
                          }

                          {/* Botão */}
                          { erro && <Text style={[style.erro, fontPadrao.regular]}>{erro}</Text>}
                          { isSubmitting && <ActivityIndicator />}
                          { !isSubmitting && <AppButton title="Salvar" onPress={handleSubmit}/>}
  
                      </View>
                  )}
              </Formik>
        </AppContainer>
      </AppMain>
    );
}

const style = StyleSheet.create({
  titulo: {textAlign:'center', margin:10, fontSize: 20},
  formulario: { backgroundColor: 'white', padding: 20, width: '100%'},
  erro: {textAlign:'center', color:'red'}
})
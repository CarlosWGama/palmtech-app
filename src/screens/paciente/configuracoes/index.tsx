import * as React from 'react';
import { View, Text, TextInput, ActivityIndicator, StyleSheet } from 'react-native';
import { AppMain, AppHeader, AppContainer, AppInput, AppButton } from '../../../themes/theme'; 
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { Usuario } from '../../../models/usuario';
import { Toast } from '../../../themes/global/util';
import { rdAtualizarUsuario } from './../../../store/usuarios/actions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import UsuarioService from '../../../services/usuario.service';

export function PacienteConfigScreen () {

    //Usuario
    const usuarioLogado = useSelector(state => state.usuario);
    console.log(usuarioLogado);
    const dispatch = useDispatch();

    //Editar Perfil
    const [calendario, setCalendario] = React.useState(false);
    const [erro, setErro] = React.useState<undefined|string>(undefined);
    const editarPerfil = async (dados: Usuario) => {
      setErro(undefined);
      const resposta = await UsuarioService.editar(dados);
      if (resposta.sucesso) {
        Toast('Atualizado com sucesso');
        dispatch(rdAtualizarUsuario(dados))
      } else setErro(resposta.erro)
    }

    return (
      <AppMain>
        <AppHeader titulo="Configurações - Perfil" backButton/>
        <AppContainer verticalAlign="flex-start">
            {/* PERFIL */}
            <Formik
                  //Dados iniciais 
                  initialValues={usuarioLogado}
                  // Validação de formulário
                  validationSchema={Yup.object().shape({
                      nome: Yup.string().required('Nome obrigatório'),
                      email: Yup.string().required('Email obrigatório').email('Email inválido').required('Email obrigatório'),
                      senha: Yup.string().min(6, 'A nova senha deve possui pelo menos 6 caracteres'),
                      data_nascimento: Yup.string().required('Data de Nascimento é obrigatório')
                  })}
                  //Envio
                  onSubmit={editarPerfil}
              >
              {({errors, values, setFieldValue, handleBlur, handleChange, handleSubmit, touched, isSubmitting}) => (
                  <View style={style.formulario}>
                      <Text style={style.titulo}>Editar Perfil</Text>

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
                              value={values.email}
                              keyboardType="email-address"
                              placeholder="Digite seu Email"
                              onBlur={handleBlur('email')} 
                              onChangeText={handleChange('email')} />
                      </AppInput>

                        {/* DATA DE NASCIMENTO */}
                        <AppInput titulo="Data de Nascimento" 
                        touched={touched.data_nascimento} 
                        error={errors.data_nascimento} 
                      >
                        <TouchableOpacity onPress={() => setCalendario(true)}>
                          <Text>{values.data_nascimento != undefined ? moment(values.data_nascimento).format('DD/MM/YYYY') : 'Clique para selecionar data'}</Text>
                        </TouchableOpacity>
                      </AppInput>
                      {calendario && 
                          <DateTimePicker 
                            value={new Date()}
                            mode="date"
                            onChange={(event, data) => {
                              setCalendario(false);
                              setFieldValue('data_nascimento', moment(data).format('YYYY-MM-DD'))
                            }}
                          />
                      }


                       {/* SENHA */}
                       <AppInput titulo="Nova Senha" touched={touched.senha} error={errors.senha} noBorder>
                          <TextInput 
                              placeholder="Nova senha"
                              secureTextEntry
                              onBlur={handleBlur('senha')} 
                              onChangeText={handleChange('senha')} />
                          <Text style={style.dica}>Digite uma nova senha caso deseje trocar, {"\n"} senão deixe em branco</Text>
                      </AppInput>

                    
                      {/* Botão */}
                      { erro && <Text style={style.erro}>{erro}</Text>}
                      { isSubmitting && <ActivityIndicator />}
                      { !isSubmitting && <AppButton title="Atualizar Dados" onPress={handleSubmit}/>}

                  </View>
                )}
            </Formik>
        </AppContainer>
      </AppMain>
    );
}

const style = StyleSheet.create({
  formulario: { width: '100%', backgroundColor: 'white', borderRadius: 5, padding: 20},
  erro: { textAlign: 'center', color: 'red'},
  titulo: {textAlign: 'center', fontSize: 20},
  dica: { textAlign: 'right', fontSize: 10}
})
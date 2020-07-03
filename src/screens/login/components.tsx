import * as React from 'react';
import { View, Text, Image, Animated, Button, ToastAndroid, Alert } from 'react-native';
import { AppInput, AppButton, AppTextError } from '../../themes/theme';
import { Formik } from 'formik';
import * as Yup from 'yup';
import * as Colors from './../../themes/colors';

export const Topo = () => (
    <Image source={require('./../../assets/imgs/topo.png')} resizeMode="stretch" style={{
        width: 400,
        maxWidth: '80%', 
        height:500,
        position: 'absolute',
        top: 0,
        left: 0
    }}/>
)


export const Formulario = (props:{onSubmit(dados:any)}) => {

    //Animação
    const fadeAnim = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        Animated.timing(fadeAnim, {duration: 3000, toValue: 1, useNativeDriver: true}).start()
    }, [])

    //Validção do formulário
    const validation = Yup.object().shape({
        email: Yup.string().email('Email inválido').required('Email obrigatório'),
        senha: Yup.string().required('Senha obrigatória').min(4, 'Mínimo 4 caracteres')
    });
      
    return (
        <>
            {/* Formulário de Login */}
            <Formik
                validationSchema={validation}
                initialValues={{ email: '', senha: '' }}
                onSubmit={values => props.onSubmit(values)}>
                {({handleSubmit, handleChange, errors, touched, handleBlur}) => (
                    <Animated.View style={{opacity:fadeAnim, backgroundColor:'white', borderRadius: 10, padding: 5, borderColor: 'rgba(0, 0, 0, 0.3)', borderWidth: 1}}>
                        <Text style={{textAlign:'center', fontSize: 30, margin:10}}>PalmTech</Text>
                        {/* EMAIL */}
                        <AppInput placeholder="Digite seu E-mail" onChangeText={handleChange('email')} onBlur={handleBlur('email')} keyboardType="email-address" />
                        {errors.email && touched.email && <AppTextError>{errors.email}</AppTextError>}
                        {/* SENHA */}
                        <AppInput placeholder="Digite sua senha" onChangeText={handleChange('senha')} onBlur={handleBlur('senha')} secureTextEntry/>
                        {errors.senha && touched.senha && <AppTextError>{errors.senha}</AppTextError>}
                        {/* BOTÃO */}
                        <AppButton title="Logar" onPress={handleSubmit}/>
                    </Animated.View>
                )} 
            </Formik>
            {/* Botão de cadastro */}
            <View style={{marginTop: 10}}>
                <Button title="Criar conta" color={Colors.TERTIARY} onPress={() => console.log('Clicou')}/>
            </View>
        </>
    )
}



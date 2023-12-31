import { Formik } from 'formik'
import { Image, StyleSheet } from 'react-native'
import * as Yup from 'yup'
import AppButton from '../components/AppButton'
import AppTextInput from '../components/AppTextInput'
import ErrorMessage from '../components/ErrorMessage'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
  return ( 
   <Screen style={styles.container}>
    <Image 
      style={styles.logo}
      source={require('../assets/logo-red.png')} 
    />

    <Formik
      initialValues={{email: '', password: ''}}
      onSubmit={values => console.log(values)}
      validationSchema={validationSchema}
    >
      {({ handleChange, handleSubmit, errors }) => (
        <>
          <AppTextInput
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            onChangeText={handleChange('email')}
            placeholder='Email'
          />
          <ErrorMessage error={errors.email} />
          <AppTextInput 
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            onChangeText={handleChange('password')}
            placeholder='Password'
            secureTextEntry={true}
          />
          <ErrorMessage error={errors.password} />
          <AppButton text='Login' onPress={handleSubmit} />
        </>
      )}
    </Formik>
   </Screen>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: { 
    padding: 10
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
});
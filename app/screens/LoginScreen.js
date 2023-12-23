import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'
import { useState } from 'react'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return ( 
   <Screen style={styles.container}>
    <Image 
      style={styles.logo}
      source={require('../assets/logo-red.png')} 
    />
    <AppTextInput
      autoCapitalize='none'
      autoCorrect={false}
      icon='email'
      keyboardType='email-address'
      onChangeText={text => setEmail(text)}
      placeholder='Email'
    />
    <AppTextInput 
      autoCapitalize='none'
      autoCorrect={false}
      icon='lock'
      onChangeText={text => setPassword(text)}
      placeholder='Password'
      secureTextEntry={true}
    />
    <AppButton 
      text='Login'
      onPress={() => console.log(email, password)}
    />
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
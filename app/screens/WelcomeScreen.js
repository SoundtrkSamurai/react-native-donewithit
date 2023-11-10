import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import AuthButton from '../components/AuthButton';
import colors from '../utils/color';

export default function WelcomeScreen() {
  const { primary, secondary } = colors;
  return (
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.background}
        blurRadius={6}
      >
        <View style={styles.logoContainer}>
          <Image 
            source={require('../assets/logo-red.png')}
            style={styles.logo}
          />
          <Text style={styles.tagline}>Sell What You Dont Need</Text>
        </View>
        <View style={[styles.buttonSytle, styles.loginButton]}>
          <AuthButton color={primary} text='login' />
        </View>
        <View style={[styles.buttonSytle, styles.registerButton]}>
          <AuthButton color={secondary} text='register' />
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  buttonSytle: {
    width: '100%',
    position: 'absolute'
  },
  loginButton: {
    bottom: 120
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    alignItems: 'center',
    position: 'absolute',
    top: 70,
  },
  registerButton: {
    bottom: 50
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
    textTransform: 'capitalize',
    marginTop: 10
  }
})
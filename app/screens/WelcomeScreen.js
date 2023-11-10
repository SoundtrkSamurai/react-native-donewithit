import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
import PressableButton from '../components/PressableButton';
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
        <View style={styles.buttonContainer}>
          <PressableButton color={primary} text='login' />
          <PressableButton color={secondary} text='register' />
        </View>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    padding: 20,
    width: '100%',
    position: 'absolute'
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
  tagline: {
    fontWeight: 'bold',
    fontSize: 25,
    color: '#000',
    textTransform: 'capitalize',
    paddingVertical: 20
  }
})
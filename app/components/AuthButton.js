import { Platform, Pressable, StyleSheet, Text } from 'react-native'

const buttonHeight = 50.0;

const AuthButton = ({color, text}) => {
  return ( 
    <Pressable 
    style={[{
      backgroundColor: color === 'primary' ? 'salmon' : 'lightblue'
    }, styles.container]}>
      <Text style={styles.text}>{text}</Text>
    </Pressable> 
  )
}

export default AuthButton

const styles = StyleSheet.create({
  container: {
    height: buttonHeight,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Platform.OS === 'android' ? buttonHeight/2.0 : '50%'
  }, 
  text: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: 'white'
  }
})
import { StyleSheet, Text, View } from 'react-native'
import AppText from './AppText'

const ErrorMessage = ({error}) => {
  if(!error) return null;

  return (
    <AppText style={styles.error}>{error}</AppText>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
  error: {
    color: 'red'
  }
})
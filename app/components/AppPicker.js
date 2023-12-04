import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import colors from '../utils/color'
import AppText from './AppText'

const { light, medium } = colors;

const AppPicker = ({ icon, placeholder, ...otherProps }) => {
  return (
    <View style={styles.container}>
      {icon && 
        <MaterialCommunityIcons
          style={styles.icon}
          name={icon} 
          size={20}
          color={medium}
        />
      }
      <AppText style={styles.text}>{placeholder}</AppText>
      <MaterialCommunityIcons
          name='chevron-down' 
          size={20}
          color={medium}
        />
    </View>
  )
}

export default AppPicker

const styles = StyleSheet.create({
  container: {
    backgroundColor: light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },  
  icon: {
    marginRight: 10
  },
  text: {
    flex: 1
  }
})
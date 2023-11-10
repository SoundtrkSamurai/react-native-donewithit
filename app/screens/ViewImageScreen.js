import { Image, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import colors from '../utils/color';

const { white } = colors;

const ViewImageScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name='close' color={white} size={30}/>
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name='trash-can-outline' color={white} size={35} />
      </View>
      <Image
        style={styles.image}
        source={require('../assets/chair.jpg')}
        resizeMode='contain'
      />
    </View>
  );
}

export default ViewImageScreen

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    top: 40,
    left: 30,
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  deleteIcon: {
    position: 'absolute',
    top: 40,
    right: 30,
  },
  image: {
    width: '100%',
    height: '100%'
  }
})
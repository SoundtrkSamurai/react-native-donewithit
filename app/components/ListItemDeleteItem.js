import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';
import colors from '../utils/color';

const { danger, white } = colors;
const ListItemDeleteItem = () => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name='trash-can'
        size={35}
        color={white} />
    </View>
  )
}

export default ListItemDeleteItem

const styles = StyleSheet.create({
  container: {
    backgroundColor: danger,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
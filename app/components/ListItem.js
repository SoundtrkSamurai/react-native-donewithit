import { Image, Pressable, StyleSheet, View } from 'react-native';
import colors from '../utils/color';
import AppText from './AppText';

const avatarDiameter = 70;
const { medium, light, white } = colors;

const ListItem = ({title, subTitle, image, onPress}) => {
  return (
    <Pressable
      style={({pressed}) => [
        { backgroundColor: (pressed) ? light : white }
      ]}
      onPress={onPress}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={image} resizeMode={'stretch'}/>
        <View>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </Pressable>
  )
}

export default ListItem

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15
  },
  image: {
    width: avatarDiameter,
    height: avatarDiameter,
    borderRadius: avatarDiameter / 2.0,
    marginRight: 10,
  },
  subTitle: {
    color: medium
  },
  title: {
    fontWeight: 500
  },
})
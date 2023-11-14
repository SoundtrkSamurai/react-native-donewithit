import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Pressable, StyleSheet, View } from 'react-native'
import colors from '../utils/color'

import AppText from './AppText'

const { white, light, medium } = colors

const IconListItem = ({ iconName, iconColor, title }) => {
  return (
    <Pressable 
      style={({ pressed }) => [
        { backgroundColor: (pressed) ? light : white },
        styles.iconListItem
      ]}
    >
      <View 
        style={[
          { backgroundColor: iconColor ? iconColor : medium }, 
          styles.itemIcon
        ]}
      >
        <MaterialCommunityIcons
          name={iconName}
          color={white}
          size={25}
        />
      </View>
      <AppText style={styles.itemTitle}>{title}</AppText>
    </Pressable>
  )
}

export default IconListItem

const styles = StyleSheet.create({
  iconListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  itemIcon: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2.0, 
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },
  itemTitle: {
    fontWeight: '500',
    textTransform: 'capitalize'
  },
})
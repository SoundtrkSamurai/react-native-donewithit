import { Image, StyleSheet, View } from 'react-native'
import AppText from '../components/AppText'
import IconListItem from '../components/IconListItem'
import Screen from '../components/Screen'
import colors from '../utils/color'
import { FlatList } from 'react-native-gesture-handler'
import ListItemSeparator from '../components/ListItemSeparator'

const { primary, secondary, light, medium, white } = colors;

const menuItems = [
  { iconName: 'format-list-bulleted', title: 'My Listings', color: primary},
  { iconName: 'email', title: 'My Messages', color: secondary}
]
const MyAccountScreen = () => {
  return (
      <Screen>
        <View style={styles.container}>
          <View style={styles.accountHeader}>
            <Image
              style={styles.headerImage}
              source={require('../assets/avatar.png')}
            />
            <View>
              <AppText style={styles.name}>Allen Taylor</AppText>
              <AppText style={styles.username}>allen.taylor@gmail.com</AppText>
            </View>
          </View>
          <FlatList
            style={styles.listContainer}
            data={menuItems}
            renderItem={({ item }) =>
              <IconListItem
                iconName={item.iconName}
                backgroundColor={item.color}
                title={item.title}
              />
            }
            ItemSeparatorComponent={ListItemSeparator}
          />
          <View style={styles.logout}>
            <IconListItem
              iconName='logout'
              backgroundColor='#ffe66d'
              title='Logout'
            />
          </View>
        </View>
      </Screen>
  )
}

export default MyAccountScreen

const styles = StyleSheet.create({
  accountHeader: {
    flexDirection: 'row',
    backgroundColor: white,
    padding: 15,
  },
  container: {
    flex: 1,
    backgroundColor: light
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2.0,
    marginRight: 10,
    resizeMode: 'contain'
  },
  logout: {
    position: 'relative',
    bottom: 400,
    marginTop: 20,
  },
  listContainer: {
    marginTop: 40
  },
  name: {
    fontWeight: '400'
  },
  username: {
    color: medium
  }
})
import { Image, StyleSheet, View } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/lists/ListItem';
import colors from '../utils/color';

const { secondary } = colors;

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require('../assets/avatar.png')}
            title="Allen Taylor"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300
  },
  detailsContainer: {
    padding: 20
  },
  price: {
    color: secondary,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: '500'
  },
  userContainer: {
    marginVertical: 40
  }
})
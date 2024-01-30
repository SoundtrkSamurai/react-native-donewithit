import { FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import ActivityIndicator from "../components/ActivityIndicator";
import AppText from "../components/AppText";
import Button from "../components/AppButton";
import Card from "../components/Card";
import colors from "../utils/color";
import listingsApi from "../api/listings";
import routes from "../nagivation/routes";
import Screen from "../components/Screen";

const { light } = colors;

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    setLoading(true);
    const { ok, data } = await listingsApi.getListings();
    setLoading(false);

    if (!ok) {
      setError(true);
      return;
    }

    setError(false);
    setListings(data);
  };

  return (
    <Screen style={styles.screen}>
      {error && (
        <>
          <AppText>Couldn't Retrieve the Listings</AppText>
          <Button text="Retry" onPress={loadListings} />
        </>
      )}
      <ActivityIndicator visible={true} size="large" />
      {/* <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={`\$${item.price}`}
            imageURL={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
        )}
      /> */}
    </Screen>
  );
};

export default ListingsScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: light,
  },
});

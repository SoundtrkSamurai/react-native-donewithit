import { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";
import listingsApi from "../api/listings";
import Button from "../components/AppButton";
import AppText from "../components/AppText";
import Card from "../components/Card";
import Screen from "../components/Screen";
import routes from "../nagivation/routes";
import colors from "../utils/color";

const { light } = colors;

const ListingsScreen = ({ navigation }) => {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    loadListings();
  }, []);

  const loadListings = async () => {
    const { problem, data } = await listingsApi.getListings();
    if (problem) {
      setError(true);
      return;
    }
    setError(false);
    setListings(data);
  };

  return (
    <Screen style={styles.screen}>
      {error ? (
        <>
          <AppText>Couldn't Retrieve the Listings</AppText>
          <Button text="Retry" onPress={loadListings} />
        </>
      ) : (
        <FlatList
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
        />
      )}
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

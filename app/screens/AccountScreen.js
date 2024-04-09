import { Image, StyleSheet, View, FlatList } from "react-native";
import { useContext } from "react";
import AppText from "../components/AppText";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import colors from "../utils/color";
import Icon from "../components/Icon";
import ListItem from "../components/lists/ListItem";
import ListItemSeparator from "../components/lists/ListItemSeparator";
import Screen from "../components/Screen";

const { primary, secondary, light, medium, white } = colors;

const menuItems = [
  {
    icon: { name: "format-list-bulleted", color: primary },
    title: "My Listings",
  },
  {
    icon: { name: "email", color: secondary },
    title: "My Messages",
    targetScreen: "Messages",
  },
];
const AccountScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = () => {
    setUser(null);
    authStorage.removeToken();
  };

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.accountHeader}>
          <Image
            style={styles.headerImage}
            source={require("../assets/avatar.png")}
          />
          <View>
            <AppText style={styles.name}>{user.name}</AppText>
            <AppText style={styles.username}>{user.email}</AppText>
          </View>
        </View>
        <FlatList
          style={styles.listContainer}
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon name={item.icon.name} backgroundColor={item.icon.color} />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
        <View style={styles.logout}>
          <ListItem
            title="Logout"
            IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
            onPress={handleLogout}
          />
        </View>
      </View>
    </Screen>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  accountHeader: {
    flexDirection: "row",
    backgroundColor: white,
    padding: 15,
  },
  container: {
    flex: 1,
  },
  headerImage: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2.0,
    marginRight: 10,
    resizeMode: "contain",
  },
  logout: {
    position: "relative",
    bottom: 300,
    marginTop: 30,
  },
  listContainer: {
    marginTop: 40,
  },
  name: {
    fontWeight: "400",
  },
  screen: {
    backgroundColor: light,
  },
  username: {
    color: medium,
  },
});

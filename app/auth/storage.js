import * as SecureStore from "expo-secure-store";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    const token = await SecureStore.getItemAsync(key);
    console.log(`Retrieved token: ${JSON.stringify(token, null, 2)}`);
    return token;
  } catch (error) {
    console.log("Error getting the authToken", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the authToken", error);
  }
};

export default {
  getToken,
  removeToken,
  storeToken,
};

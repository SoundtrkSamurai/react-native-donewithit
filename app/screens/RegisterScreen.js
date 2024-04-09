import { Formik } from "formik";
import { StyleSheet } from "react-native";
import usersApi from "../api/users";
import { useState } from "react";
import * as Yup from "yup";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import authApi from "../api/auth";
import ErrorMessage from "../components/forms/ErrorMessage";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import useAuth from "../hooks/useAuth";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

const RegisterScreen = () => {
  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.login(authToken);
  };

  return (
    <Screen style={styles.container}>
      <AppActivityIndicator loading={registerApi.loading || loginApi.loading} />
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>
            <ErrorMessage error={error} visible={error} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              onChangeText={handleChange("name")}
              placeHolder="Name"
            />
            <ErrorMessage error={errors.name} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              onChangeText={handleChange("email")}
              placeHolder="Email"
            />
            <ErrorMessage error={errors.email} />
            <AppTextInput
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              onChangeText={handleChange("password")}
              secureTextEntry={true}
            />
            <ErrorMessage error={errors.password} />
            <AppButton text="Register" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { loginService } from "../service/UserService";
import { HomeScreenNavigation } from "../types/RootStack";
import useLoginStorage from "../service/UseLoginStorage";

const LoginScreen = () => {
  // Refs to store the username and password input values
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<HomeScreenNavigation>();
  const handleLogin = async () => {
    const navigate: boolean = await loginService(username, password);

    if (navigate) {
      navigation.navigate("Home");
    }
  };
  useEffect(() => {
    const loader = async () => {
      const { readValue, saveValue } = await useLoginStorage();
      const token = await readValue();
      if (token != null) {
        navigation.navigate("Home");
      }
      console.log("Token:", token);
    };
    const unsubscribe = navigation.addListener("focus", () => {
      loader();
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" onChangeText={setUsername} />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry />
      <TouchableOpacity style={styles.btn} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  btn: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 15,
    margin: 10,
    borderRadius: 20,
  },
});

export default LoginScreen;

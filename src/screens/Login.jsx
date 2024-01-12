import React, { useRef } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  // Refs to store the username and password input values
  const usernameRef = useRef("");
  const passwordRef = useRef("");
  const navigation = useNavigation();
  const handleLogin = () => {
    // Access the input values using ref.current.value
    const enteredUsername = usernameRef.current.value;
    const enteredPassword = passwordRef.current.value;

    // Perform authentication logic here
    console.log("Username:", enteredUsername);
    console.log("Password:", enteredPassword);
    navigation.navigate("Home");
    // Add your authentication logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <TextInput style={styles.input} placeholder="Username" ref={usernameRef} />
      <TextInput style={styles.input} placeholder="Password" ref={passwordRef} secureTextEntry />
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

export default Login;

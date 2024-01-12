import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Home = ({ route, navigation }) => {
  // Assuming you have user information and token details in the route params
  //   const { username, virtualToken } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcomeText}>Welcome, {username}!</Text> */}

      <View style={styles.tokenContainer}>
        <Text style={styles.tokenLabel}>Virtual Token:</Text>
        {/* <Text style={styles.tokenValue}>{virtualToken}</Text> */}
      </View>

      {/* Your Home Page Content */}

      <Button
        title="Logout"
        onPress={() => {
          // Assuming you have a logout function to clear authentication state
          // You should implement the logout logic based on your authentication setup
          // For example, using context or global state management
          navigation.navigate("Login"); // Navigate to the login screen after logout
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  tokenContainer: {
    marginVertical: 20,
  },
  tokenLabel: {
    fontSize: 18,
    marginBottom: 8,
  },
  tokenValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Home;

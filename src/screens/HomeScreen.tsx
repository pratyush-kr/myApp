import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { LoginScreenNavigation } from "../types/RootStack";
import useLoginStorage from "../service/UseLoginStorage";

const HomeScreen = () => {
  const navigation = useNavigation<LoginScreenNavigation>();
  return (
    <View style={styles.container}>
      <View style={styles.tokenContainer}>
        <Text style={styles.tokenLabel}>Virtual Token:</Text>
      </View>
      <Button
        title="Logout"
        onPress={async () => {
          const { deleteValue } = await useLoginStorage();
          await deleteValue();
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

export default HomeScreen;

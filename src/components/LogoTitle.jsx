import React from "react";
import { Text, StyleSheet } from "react-native";

const LogoTitle = () => {
  return <Text style={styles.headerText}>QuickBite</Text>;
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

export default LogoTitle;

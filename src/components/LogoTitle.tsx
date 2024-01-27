import React from "react";
import { Text, StyleSheet } from "react-native";

const LogoTitle: React.FC<any> = (props) => {
  return <Text style={styles.headerText}>QuickBite</Text>;
};

const styles = StyleSheet.create({
  headerText: { height: 20 },
});

export default LogoTitle;

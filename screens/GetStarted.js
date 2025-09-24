import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function GetStarted({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to LeafLens 🌱</Text>

      <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
      <View style={{ height: 12 }} />
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0fdf4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 40,
    color: "#166534",
  },
});

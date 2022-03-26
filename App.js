import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
const image = require("./assets//Model3.jpeg");

import CarItem from "./components/CartIem";
export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        name={"Model 3"}
        tagline={"Order online for"}
        tagLineCTA={"Touchless Delivery"}
        image={image}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

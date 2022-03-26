import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarsList from "./components/CarList";
import CarItem from "./components/CartIem";
export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={"Model 3"}
        tagline={"Order online"}
        tagLineCTA={"Touchless Delivery"}
        image={image}
      /> */}
<CarsList/>
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

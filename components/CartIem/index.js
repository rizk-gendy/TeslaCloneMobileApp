
import { View, Text ,ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyleButton from "../StyleButton";
const image = require("../../assets//ModelX.jpeg");


const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $ 69,420</Text>
      </View>
      <StyleButton 
      type="primary" 
      content={"Custom Order"} 
      onPress={()=>{
        console.log('Custom order button was pressed ')
      }}
      />
      <StyleButton 
      type="secondary" 
      content={"Existing Inventory "} 
      onPress={()=>{
        console.log('Existing Inventory button was pressed ')
      }}
      />
    </View>
  );
};

export default CarItem;

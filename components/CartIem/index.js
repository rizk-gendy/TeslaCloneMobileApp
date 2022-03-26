import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyleButton from "../StyleButton";
const image = require("../../assets//ModelX.jpeg");

const CarItem = ({name,tagline,image , tagLineCTA}) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground style={styles.image} source={image} />
      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitlecta}>
            {tagLineCTA}
           
            </Text>
          </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.log("Custom order button was pressed ");
          }}
        />
        <StyleButton
          type="secondary"
          content={"Existing Inventory "}
          onPress={() => {
            console.log("Existing Inventory button was pressed ");
          }}
        />
      </View>
    </View>
  );
};

export default CarItem;

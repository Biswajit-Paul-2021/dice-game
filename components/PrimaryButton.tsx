import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from "react-native";
import TPrimaryButtonProps from "../types/types";

import React, { useState } from "react";
import AppColors from "../constants/AppColors";

const PrimaryButton: React.FC<TPrimaryButtonProps> = (props) => {
  const containerStyle: ViewStyle = {
    ...styles.buttonContainer,
    ...{
      backgroundColor:
        props.buttonColor ?? styles.buttonContainer.backgroundColor,
    },
  };

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("Tapped primary button");
      }}
    >
      <View style={containerStyle}>
        <Text style={styles.buttonText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

interface ButtonStyle {
  buttonContainer: ViewStyle;
  buttonText: TextStyle;
}

const styles = StyleSheet.create<ButtonStyle>({
  buttonContainer: {
    padding: 8,
    marginTop: 16,
    borderRadius: 8,
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "darkblue",
    justifyContent: "center",
  },
  buttonText: {
    color: AppColors.white,
    fontWeight: "bold",
  },
});

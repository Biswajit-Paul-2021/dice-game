import { Keyboard, Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import AppColors from "../constants/AppColors";

const StartGameScreen = () => {
  return (
    <View style={styles.scaffoldContainer}>
      <View style={styles.inputAndButtonContainer}>
        <TextInput
          style={styles.numberInputField}
          keyboardType="number-pad"
          placeholder="Enter number for guessing..."
          autoCapitalize="none"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.confrimButton}>
            <PrimaryButton buttonColor="crimson">Reset</PrimaryButton>
          </View>
          <View style={{ padding: 8 }}></View>
          <View style={styles.confrimButton}>
            <PrimaryButton buttonColor="green">Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  scaffoldContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "flex-start",
  },
  inputAndButtonContainer: {
    marginTop: 50,
    padding: 16,
    margin: 16,
    backgroundColor: AppColors.primary,
    borderRadius: 8,
    elevation: 4,
    shadowColor: AppColors.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.25,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  numberInputField: {
    padding: 8,
    borderColor: AppColors.shadowColor,
    borderWidth: 1,
    backgroundColor: AppColors.white,
    borderRadius: 8,
  },
  confrimButton: {
    flex: 1,
  },
});

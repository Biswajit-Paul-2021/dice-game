import { Keyboard, Pressable, StyleSheet, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <StartGameScreen />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

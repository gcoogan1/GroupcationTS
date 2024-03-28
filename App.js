import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import Button from "./src/components/Button/Button";

import Icon from "./src/components/Icon/Icon";
import Pictogram from "./src/components/Pictogram/Pictogram";
import Add from "./assets/icons/Add.svg";
import { theme } from "./src/styles/theme";
import Progress from "./src/components/ProgessBar/ProgressBar";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Progress step={.20} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

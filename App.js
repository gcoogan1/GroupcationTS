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
import InlineButton from "./src/components/InlineButton/InlineButton";
import ActionButtons from "./src/components/ActionButtons/ActionButtons";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const actionButtons = {
    vertical: {
      top: {
        label: 'Top',
        onPress: () => console.log("TOP")
      },
      middle: {
        label: 'Label Middle',
        onPress: () => console.log("MIDDLE")
      },
      bottom: {
        label: 'Label Bottom',
        onPress: () => console.log("BOTTOM")
      },
    },
    horizontal: {
      left: {
        label: 'Left',
        onPress: () => console.log("LEFT")
      },
      right: {
        label: 'Right',
        onPress: () => console.log("RIGHt")
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ActionButtons
        layoutStyle="vertical"
        buttonsGroup={actionButtons}
        progressStep={.30}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    width: 112,
    height: 30
  }
});

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
import EmptyState from "./src/components/EmptyState/EmptyState";
import Avatar from "./src/components/Avatar/Avatar";
import AvatarStack from "./src/components/AvatarStack/AvatarStack";
import FavoriteToggle from "./src/components/FavoriteToggle/FavoriteToggle";
import Checkbox from "./src/components/Checkbox/Checkbox";

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
      <Checkbox label={'Checkbox-label'} subLabel={'sub-label'} hasBackground={true} />
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

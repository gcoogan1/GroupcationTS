import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import Tag from "./src/components/Tag/Tag";


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
      <Tag tagType='traveler' small />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn: {
    width: 112,
    height: 30,
  },
});

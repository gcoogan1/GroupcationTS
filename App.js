import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";


export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
});

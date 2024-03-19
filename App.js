import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";

import Icon from './src/components/Icon/Icon';
import Pictogram from './src/components/Pictogram/Pictogram'
import Destinations from './assets/pictograms/Flight.svg'


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
      <Pictogram size={"2x"}>
        <Destinations color="blue" />
      </Pictogram>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

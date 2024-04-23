import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import Button from "./src/components/Button/Button";
import { useState } from "react";

import Icon from "./src/components/Icon/Icon";
import Pictogram from "./src/components/Pictogram/Pictogram";
import Placeholder from "./assets/icons/Placeholder.svg";
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
import RowItem from "./src/components/Rows/RowItem/RowItem";
import RowItemLink from "./src/components/Rows/RowItemLink/RowItemLink";
import RowList from "./src/components/Rows/RowList/RowList";
import DatePicker from "./src/components/DatePicker/DatePicker";
import TimePicker from "./src/components/TimePicker/TimePicker";

export default function App() {
  const [openDayPicker, setOpenDayPicker] = useState(false)
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const users = [
    {
      // image: 'https://i.pinimg.com/564x/d3/05/d6/d305d6b4957713e981c43d381c12b862.jpg',
      initials: 'gc',
      userId: '123'
    },
    // {
    //   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png',
    //   initials: 'hb',
    //   userId: '456'
    // },
    // {
    //   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png',
    //   initials: 'hb',
    //   userId: '456'
    // },
    // {
    //   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png',
    //   initials: 'hb',
    //   userId: '456'
    // },
    // {
    //   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png',
    //   initials: 'hb',
    //   userId: '456'
    // },
  ]

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Button onPress={() => setOpenDayPicker(!openDayPicker)}>Press me</Button>
      {/* {!!openDayPicker && (
        <DatePicker isRange initialStartDate={'2024-04-09'} initialEndDate={'2024-04-11'} onDatePress={() => console.log("here")} />
      )} */}
      <TimePicker initialTime={'2024-04-23T08:43:00.000Z'} onTimeChange={() => console.log("hello")} />
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
    height: 30,
  },
});

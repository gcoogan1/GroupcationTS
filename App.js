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

export default function App() {
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
      <RowItemLink
        type={'message'}
        label={"total cost"}
        subLabel={"User Name on 15 June 2999"}
        // user={<Avatar avatarImage={{ uri: 'https:link/to/image.com' }} />}
        count={20}
        time="12/30/2023"
        // showChevron
        showDivider
        isDisabled
        icon={<Placeholder color="black" />}
        avatars={<AvatarStack users={users}  />}
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
    height: 30,
  },
});

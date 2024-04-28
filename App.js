import { StatusBar } from "expo-status-bar";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import Tag from "./src/components/Tag/Tag";
import DetailedRow from "./src/components/DetailedRow/DetailedRow";
import Button from "./src/components/Button/Button";
import AvatarStack from "./src/components/AvatarStack/AvatarStack";
import Placeholder from "./assets/icons/Placeholder.svg";
import GroupcationCard from "./src/components/Groupcation/GroupcationCard/GroupcationCard";
import GroupcationImage from "./src/components/Groupcation/GroupcationImage/GroupcationImage";
import { theme } from "./src/styles/theme";
import GroupcationTopTabs from "./src/components/Groupcation/GroupcationTabs/GroupcationTopTabs";
import GroupcationBottomTabs from "./src/components/Groupcation/GroupcationTabs/GroupcationBottomTabs";
import GroupcationRequest from "./src/components/Groupcation/GroupcationTabs/GroupcationRequest";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const usersInGroup = [
    {
      // image: 'https://i.pinimg.com/564x/d3/05/d6/d305d6b4957713e981c43d381c12b862.jpg',
      initials: "gc",
      userId: "123",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png",
      initials: "hb",
      userId: "456",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SafeAreaProvider>
        <NavigationContainer>
          <GroupcationRequest />
        </NavigationContainer>
      </SafeAreaProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 0,
    backgroundColor: "#fffff"
    // justifyContent: "center",
    // alignItems: "center",
    // // flexDirection: "row",
    // gap: 20,
  },
  btn: {
    width: 112,
    height: 30,
  },
  footerContainer: {
    flex: 1,
    marginHorizontal: theme.spacing.sm,
  }
});

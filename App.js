import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  useFonts,
  Rubik_400Regular,
  Rubik_600SemiBold,
} from "@expo-google-fonts/rubik";
import { NavigationContainer } from "@react-navigation/native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useForm } from "react-hook-form";

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
import Navbar from "./src/components/Navbar/Navbar";
import ActivityCard from "./src/components/Activity/ActivityCard/ActivityCard";
import ActivityCost from "./src/components/Activity/ActivityCost/ActivityCost";
import Avatar from "./src/components/Avatar/Avatar";
import ActivityHeader from "./src/components/Activity/ActivityHeader/ActivityHeader";
import ActivityInformation from "./src/components/Activity/ActivityInformation/ActivityInformation";
import InputSearch from "./src/components/Inputs/InputSearch/InputSearch";
import { useState } from "react";
import InputText from "./src/components/Inputs/InputText/InputText";
import InputPassword from "./src/components/Inputs/InputPassword/InputPassword";
import InputSelect from "./src/components/Inputs/InputSelect/InputSelect";
import InputCode from "./src/components/Inputs/InputCode/InputCode";
import InputDate from "./src/components/Inputs/InputDate/InputDate";
import InputTime from "./src/components/Inputs/InputTime/InputTime";
import InputTextArea from "./src/components/Inputs/InputTextArea/InputTextArea";
import InputCurrency from "./src/components/Inputs/InputCurrency/InputCurrency";
import InputNumber from "./src/components/Inputs/InputNumber/InputNumber";
import InputUser from "./src/components/Inputs/InputUser/InputUser";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const disabledState = false;
  const USERS = [
    {
      name: "Patrick Star",
      initials: 'PS',
      avatarImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Sandy_Cheeks.svg/440px-Sandy_Cheeks.svg.png',
      userId: '123'
    },
    {
      name: "SpongeBob Squarepants",
      initials: "SS",
      avatarImage: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/600px-SpongeBob_SquarePants_character.svg.png?20231203073904',
      userId: '455'
    },
      name: "Sam Buio",
      initials: "SB",
      avatarImage: '',
      userId: '126'
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputUser isDisabled users={USERS}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 0,

    backgroundColor: "#fffff",
    justifyContent: "center",
    alignItems: "center",
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
  },
  suggestionItemText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary,
  },
});

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
import InputSelect from "./src/components/Inputs/InputSelect/InputSelect";

export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const disabledState = false;
  const data = [
    { label: "Item 1", value: "1" },
    { label: "Item 2", value: "2" },
    { label: "Item 3", value: "3" },
    { label: "Item 4", value: "4" },
    { label: "Item 5", value: "5" },
    { label: "Item 6", value: "6" },
    { label: "Item 7", value: "7" },
    { label: "Item 8", value: "8" },
  ];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <InputSelect
          inputOptions={data}
          inputLabel={"input label"}
          placeholder={"Placeholder Text"}
          helperText={"helper text"}
          isDisabled={disabledState}
          placeholderIcon={
            <Placeholder
              color={
                !disabledState
                  ? theme.color.surface.onBasePrimary
                  : theme.color.disabled.onBase
              }
            />
          }
        />
      </View>
      {/* <SafeAreaProvider>
        <NavigationContainer>
          <GroupcationBottomTabs />
        </NavigationContainer>
      </SafeAreaProvider> */}
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
  content: {
    width: 300,
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

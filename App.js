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
import SearchItem from "./src/components/SearchList/SearchItem/SearchItem";
import UserCard from "./src/components/UserCard/UserCard";
import SegmentedRadio from "./src/components/SelectInputs/SegmentedRadio/SegmentedRadio";
import SelectBox from "./src/components/SelectInputs/SelectBox/SelectBox";
import SelectButton from "./src/components/SelectInputs/SelectButton/SelectButton";
import SelectSmallBox from "./src/components/SelectInputs/SelectHorizontal/SelectSmallBox/SelectSmallBox";
import SelectHorizontal from "./src/components/SelectInputs/SelectHorizontal/SelectHorizontal";
import SelectItem from "./src/components/SelectInputs/SelectItem/SelectItem";
import SelectList from "./src/components/SelectInputs/SelectList/SelectList";
import activtyConstants from "./src/components/Activity/constants/Activity.constants";
import ItineraryDay from "./src/components/ItineraryDay/ItineraryDay";
import SearchList from "./src/components/SearchList/SearchList";
import UserInput from "./src/components/UserInput/UserInput";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import TestScreen from "./src/screens/TestScreen";
import TestSecondScreen from "./src/screens/TestSecondScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Explore from "./assets/icons/Explore_Filled.svg";
import Groups from "./assets/icons/Groups_Filled.svg";
import Trips from "./assets/icons/Trips_Filled.svg";
import Inbox from "./assets/icons/Inbox_Filled.svg";
import Profile from "./assets/icons/Profile_Filled.svg";
import BottomTab from "./src/components/BottomTab/BottomTab";



export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const TopTabs = createMaterialTopTabNavigator();

  const TopNavigation = () => {
    return (
      <TopTabs.Navigator
        sceneContainerStyle={{ backgroundColor: "#fffff" }}
        //  tabBar={(props) => <Navbar type={'userInput'} pageTitle={'Input Title'} {...props} />}
      >
        {/* <TopTabs.Screen component={TestScreen} name="UserInputScreen" /> */}
        <TopTabs.Screen component={TestSecondScreen} name="TestScreen" />
      </TopTabs.Navigator>
    );
  };

  const BottomTabs = createBottomTabNavigator();

  const inActiveColor = theme.color.surface.onBaseSecondary;
  const activeColor = theme.color.primary.base;
  const disabledColor = theme.color.disabled.onBase;

  const BottomNavigation = () => {
    return (
      <BottomTabs.Navigator
        sceneContainerStyle={{ backgroundColor: "#fffff" }}
        tabBar={(props) => <BottomTab {...props} />}
      >
        <BottomTabs.Screen
          component={TestSecondScreen}
          name="TestSecondScreen"
          options={{
            tabBarLabel: "Explore",
            tabBarIcon: <Explore color={inActiveColor} />,
            tabBarIconSelected: <Explore color={activeColor} />,
            tabBarIconDisabled: <Explore color={disabledColor} />,
            isDisabled: false
          }}
        />
        <BottomTabs.Screen
          component={TestScreen}
          name="TestScreen"
          options={{
            tabBarLabel: "Groups",
            tabBarIcon: <Groups color={inActiveColor} />,
            tabBarIconSelected: <Groups color={activeColor} />,
            tabBarIconDisabled: <Groups color={disabledColor} />,
            isDisabled: false
          }}
        />
      </BottomTabs.Navigator>
    );
  };

  return (
    <NavigationContainer>
      {/* <TopNavigation /> */}
      <BottomNavigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    marginHorizontal: 0,

    // backgroundColor: "#fffff",
    // justifyContent: "center",
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

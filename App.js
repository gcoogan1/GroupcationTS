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

export default function App() {
  const [searchSuggestions, setSearchSuggestions] = useState([
    { id: 1, text: "Paris" },
    { id: 2, text: "London" },
    { id: 3, text: "Berlin" },
    { id: 4, text: "New York" },
    { id: 5, text: "Hong Kong" },
  ]);
  let [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  const mockSuggestions = [
    { id: 1, text: "Paris" },
    { id: 2, text: "London" },
    { id: 3, text: "Berlin" },
    { id: 4, text: "New York" },
    { id: 5, text: "Hong Kong" },
  ];

  const suggestionItem = (item) => {
    return <Text style={styles.suggestionItemText}>{item.text}</Text>
  };


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <InputSearch
        onSearch={handleSearch}
        data={mockSuggestions}
        selectionItem={(item) => suggestionItem(item)}
      />
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

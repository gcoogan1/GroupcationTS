import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { theme } from "../../../styles/theme";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import GroupcationTagsConstants from "./constants/GroupcationTabs.constants";
import Icon from "../../Icon/Icon";

/**
 * This component renders a groupcation BOTTOM tab menu.
 * @note Tabs: Itinerary, Travelers, Discover, Message, and Photos
 * @important Will only appear on OVERVIEW screen
 * @returns {ReactElement} Renders groupcation bottom tab.
 *
 * @example <GroupcationBottomTabs />
 */
const GroupcationBottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  const { OVERVIEW_COLOR,GROUPCATION_TABS } =
    GroupcationTagsConstants;

  // Removes purple background on active icon
  const materialTheme = useTheme();
  materialTheme.colors.secondaryContainer = "transparent";

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View
        style={{
          paddingTop: insets.top + 4,
          paddingBottom: insets.bottom + 4,
          paddingHorizontal: 8,
          borderBottomWidth: 1,
          borderBottomColor: theme.color.surface.line,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            ...theme.border.radius.lg,
            backgroundColor: theme.color.surface.base,
            paddingVertical: theme.spacing.md,
            paddingHorizontal: theme.spacing.sm,
            shadowColor: theme.color.shadow.dark,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          {GROUPCATION_TABS.map((tag, index) => {
            const isFocused = state.index === index;

            const onPress = () => {
              if (!isFocused) {
                navigation.navigate(tag.name);
              }
            };

            return (
              <TouchableOpacity
                onPress={onPress}
                style={{ flex: 1, gap: theme.spacing["xs"] }}
              >
                <View style={{ alignSelf: "center" }}>
                  <Icon>{tag.overviewIcon}</Icon>
                </View>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    {
                      ...theme.typeography.body.smBold,
                      color: OVERVIEW_COLOR,
                      alignSelf: "center"
                    },
                  ]}
                >
                  {capitilaizeFirstLetter(tag.name)}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />} >
      {GROUPCATION_TABS.map((tab) => {
        return (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              headerShown: false
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default GroupcationBottomTabs;

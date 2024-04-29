import { Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "react-native-paper";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { theme } from "../../../styles/theme";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import GroupcationTagsConstants from "./constants/GroupcationTabs.constants";
import Icon from "../../Icon/Icon";

/**
 * This component renders a groupcation TOP tab menu.
 * @note Tabs: Itinerary, Travelers, Discover, Message, and Photos
 * @returns {ReactElement} Renders groupcation top tab.
 *
 * @example <GroupcationTopTabs />
 */
const GroupcationTopTabs = () => {
  const Tab = createMaterialTopTabNavigator();

  const { ACTIVE_COLOR, INACTIVE_COLOR, INDICATOR_STYLE, GROUPCATION_TABS } =
    GroupcationTagsConstants;

  // Removes purple background on active icon
  const materialTheme = useTheme();
  materialTheme.colors.secondaryContainer = "transparent";

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: theme.color.surface.line,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            backgroundColor: theme.color.surface.base,
            paddingTop: theme.spacing.md,
            paddingHorizontal: theme.spacing["2xs"],
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
                  {isFocused ? (
                    <Icon>{tag.activeIcon}</Icon>
                  ) : (
                    <Icon>{tag.inactiveIcon}</Icon>
                  )}
                </View>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={[
                    {
                      ...theme.typeography.body.smBold,
                      alignSelf: "center",
                      color: isFocused ? ACTIVE_COLOR : INACTIVE_COLOR,
                    },
                  ]}
                >
                  {capitilaizeFirstLetter(tag.name)}
                </Text>
                {isFocused && (
                  <View
                    style={{
                      ...INDICATOR_STYLE,
                      width: 32,
                      alignSelf: "center"
                    }}
                  />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      {GROUPCATION_TABS.map((tab) => {
        return (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default GroupcationTopTabs;

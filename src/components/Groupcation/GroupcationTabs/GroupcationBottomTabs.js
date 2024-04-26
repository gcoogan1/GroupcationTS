import { Text } from "react-native";
import { useTheme } from "react-native-paper";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { theme } from "../../../styles/theme";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import GroupcationTagsConstants from "./constants/GroupcationTabs.constants";
import Icon from "../../Icon/Icon";

/**
 * This component renders a groupcation BOTTOM tab menu.
 * @note Tabs: Itinerary, Travelers, Discover, Message, and Photos
 * @returns {ReactElement} Renders groupcation bottom tab.
 *
 * @example <GroupcationBottomTabs />
 */
const GroupcationBottomTabs = () => {
  const Tab = createMaterialBottomTabNavigator();

  const { ACTIVE_COLOR, INACTIVE_COLOR, GROUPCATION_TAGS } =
    GroupcationTagsConstants;

  // Removes purple background on active icon
  const materialTheme = useTheme();
  materialTheme.colors.secondaryContainer = "transparent";

  return (
    <>
      <Tab.Navigator
        barStyle={{
          ...theme.border.radius.lg,
          backgroundColor: theme.color.surface.base,
          padding: theme.spacing.sm,
        }}
        activeColor={ACTIVE_COLOR}
        inactiveColor={INACTIVE_COLOR}
      >
        {GROUPCATION_TAGS.map((tab) => {
          return (
            <Tab.Screen
              key={tab.name}
              name={tab.name}
              component={tab.component}
              options={{
                tabBarLabel: (
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[
                      {
                        ...theme.typeography.body.smBold,
                        alignSelf: "center",
                      },
                    ]}
                  >
                    {capitilaizeFirstLetter(tab.name)}
                  </Text>
                ),
                tabBarIcon: ({ focused }) =>
                  focused ? (
                    <Icon>{tab.activeIcon}</Icon>
                  ) : (
                    <Icon>{tab.inactiveIcon}</Icon>
                  ),
              }}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
};

export default GroupcationBottomTabs;

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { theme } from "../../../styles/theme";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import { Text, View } from "react-native";
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
  const { ACTIVE_COLOR, INACTIVE_COLOR, GROUPCATION_TAGS } =
    GroupcationTagsConstants;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderBottomWidth: 1,
          borderBottomColor: theme.color.surface.line,
        },
        tabBarPressColor: "transparent",
        tabBarIndicatorStyle: {
          backgroundColor: theme.color.primary.base,
          height: 4,
          borderTopStartRadius: 99,
          borderTopEndRadius: 99,
        },
      }}
    >
      {GROUPCATION_TAGS.map((tab) => {
        return (
          <Tab.Screen
            key={tab.name}
            name={tab.name}
            options={{
              tabBarLabel: ({ focused }) => (
                <View
                  style={{
                    alignItems: "center",
                    padding: theme.spacing["2xs"],
                  }}
                >
                  {focused ? (
                    <Icon size="lg">{tab.activeIcon}</Icon>
                  ) : (
                    <Icon size="lg">{tab.inactiveIcon}</Icon>
                  )}
                  <Text
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    style={[
                      {
                        ...theme.typeography.body.smBold,
                        color: INACTIVE_COLOR,
                      },
                      focused && { color: ACTIVE_COLOR },
                    ]}
                  >
                    {capitilaizeFirstLetter(tab.name)}
                  </Text>
                </View>
              ),
            }}
            component={tab.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default GroupcationTopTabs;

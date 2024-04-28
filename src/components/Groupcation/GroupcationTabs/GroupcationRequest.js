import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import TestScreen from "../../../screens/TestScreen";
import { theme } from "../../../styles/theme";
import Button from "../../Button/Button";
import FavoriteToggle from "../../FavoriteToggle/FavoriteToggle";

const GroupcationRequest = () => {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  const CustomTabBar = ({ state, descriptors, navigation }) => {
    return (
      <View
        style={{
          paddingTop: insets.top + 4,
          paddingBottom: insets.bottom + 4,
          paddingHorizontal: 8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            padding: theme.spacing.sm,
            ...theme.border.radius.lg,
            gap: theme.spacing.xs,
            backgroundColor: theme.color.surface.base,
            shadowColor: theme.color.shadow.dark,
            shadowOffset: { width: 1, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 2,
            elevation: 2,
          }}
        >
          <View>
            <FavoriteToggle />
          </View>
          <Button
            buttonType="primary"
            styles={{ flex: 1 }}
            onPress={() => console.log("navigate to screen")}
          >
            Request to Join
          </Button>
        </View>
      </View>
    );
  };

  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen
        options={{
          headerShown: false,
        }}
        name="request"
        component={TestScreen}
      />
    </Tab.Navigator>
  );
};

export default GroupcationRequest;

import { View } from 'react-native';

import NavLink from './NavLink/NavLink';
import { bottomTabStyles } from './styles/BottomTab.styles';

/**
 * This component renders the bottom tab container that maps through screens to display nav links.
 * @important -> The initial props are automatically passed with BottomTabs.Navigator
 * @note -> A screen MUST contain a component, name and listed options (see below).
 * @options (listed options for screen) -> 
 *   @prop {component} tabBarIcon required -> icon to be displayed for screen tab when not enabled
 *   @prop {component} tabBarIconSelected required -> icon to be displayed for screen tab when active
 *   @prop {component} tabBarIconDisabled required -> icon to be displayed for screen tab when disabled
 *   @prop {text} tabBarLabel required -> text to be displayed for screen tab under icon
 *   @prop {boolean} isDisabled required -> if true, the for screen tab is disabled
 * 
 * SEE BELOW for an example of how this component works.
 * @example   
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
 */
const BottomTab = ({ state, descriptors, navigation }) => {

  return (
    <View style={bottomTabStyles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const label = options?.tabBarLabel ;
        const icon = options.tabBarIcon;
        const focusedIcon = options.tabBarIconSelected;
        const disabledIcon = options.tabBarIconDisabled;
        const isDisabled = options.isDisabled

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <NavLink
            key={index}
            icon={icon}
            selectedIcon={focusedIcon}
            label={label}
            onPress={onPress}
            isFocused={isFocused}
            isDisabled={isDisabled}
            disabledIcon={disabledIcon}
          />
        );
      })}
    </View>
  );
};

export default BottomTab;

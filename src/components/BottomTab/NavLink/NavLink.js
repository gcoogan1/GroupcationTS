import { TouchableOpacity, Text } from "react-native";

import Icon from "../../Icon/Icon";
import { navLinkStyles } from "./styles/NavLink.styles";

/**
 * This component renders a nav link that is displayed inside the bottom nav.
 * @prop {component} icon required -> icon to be displayed when not enabled
 * @prop {component} selectedIcon required -> icon to be displayed when active
 * @prop {component} disabledIcon required -> icon to be displayed when disabled
 * @prop {text} label required -> text to be displayed under icon
 * @prop {function} onPress required -> event to be fired, should go to a screen
 * @prop {boolean} isFocused required -> if true, the icon (page) is active 
 * @prop {boolean} isDisabled required -> if true, the link is disabled
 * @returns {ReactNode} Renders a nav link.
 * 
 * @example   
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
 */
const NavLink = ({
  icon,
  selectedIcon,
  disabledIcon,
  label,
  onPress,
  isFocused,
  isDisabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={navLinkStyles.container}
      disabled={isDisabled}
    >
      <Icon size="lg">
        {isFocused ? selectedIcon : isDisabled ? disabledIcon : icon}
      </Icon>
      <Text
        style={[
          navLinkStyles.text,
          isFocused && navLinkStyles.focusedText,
          isDisabled && navLinkStyles.diabledText,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default NavLink;

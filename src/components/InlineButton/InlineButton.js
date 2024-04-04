import { Pressable, Text } from "react-native";

import Icon from "../Icon/Icon";
import { theme } from "../../styles/theme";
import { defaultInlineStyles } from "./styles/InlineButton.styles";

/**
 * This component renders a button based on type and size.
 * @important -> Needs a View wrapping the button to set width/height
 * 
 * @param {string} children required -> label of button
 * @param {function} onPress required -> onClick event for button
 * @param {string} buttonType optional -> primary, secondary (defaults to the primary type)
 * @param {boolean} isDisabled optional -> sets disabled state of button
 * @param {svg} iconRight optional -> displays icon (set color in icon element) to the right of text
 * @param {svg} iconLeft optional -> displays icon (set color in icon element) to the left of text
 * @returns {ReactElement} Renders a button.
 * 
 * @example  <InlineButton buttonType={"secondary"}>Click me</InlineButton>
 */
const InlineButton = ({
  children,
  onPress,
  buttonType,
  isDisabled,
  iconRight,
  iconLeft,
}) => {
  const getTextColor = (buttonType, isDisabled) => {
    if (isDisabled || buttonType === "secondary")
      return { color: theme.color.surface.onBaseSecondary };
    return { color: theme.color.surface.onBasePrimary };
  };

  return (
    <Pressable
      style={({ pressed, focused }) => [
        defaultInlineStyles.button,
        pressed && defaultInlineStyles.pressed,
        focused && defaultInlineStyles.focused,
      ]}
      disabled={isDisabled}
      onPress={onPress}
    >
      {!!iconRight && <Icon>{iconRight}</Icon>}
      <Text
        style={[defaultInlineStyles.text, getTextColor(buttonType, isDisabled)]}
      >
        {children}
      </Text>
      {!!iconLeft && <Icon>{iconLeft}</Icon>}
    </Pressable>
  );
};

export default InlineButton;

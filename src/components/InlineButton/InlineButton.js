import { Pressable, Text } from "react-native";

import Icon from "../Icon/Icon";
import { theme } from "../../styles/theme";
import { defaultInlineStyles } from "./styles/InlineButton.styles";

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

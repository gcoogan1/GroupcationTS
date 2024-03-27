import { Pressable, Text } from "react-native";

import { defaultButtonStyles } from "./style/Button.styles";
import Loader from "../Loader/Loader";
import { getButtonStyle, getTextStyle, getDisplayIcon } from "./util/util";

const Button = ({
  children,
  onPress,
  buttonType,
  buttonSize,
  isDisabled,
  isLoading,
  iconRight,
  iconLeft,
}) => {

  const textStyle = getTextStyle(buttonType, isDisabled)

  return (
    <Pressable
      style={({ pressed, focused }) => [
        defaultButtonStyles.button,
        getButtonStyle(buttonType, buttonSize, pressed, isDisabled),
        focused && defaultButtonStyles.focused,
      ]}
      disabled={isDisabled}
      onPress={onPress}
    >
      {getDisplayIcon(iconRight, isLoading)}
      {isLoading && <Loader color={textStyle.color} />}
      <Text style={[textStyle, defaultButtonStyles.text]}>{children}</Text>
      {getDisplayIcon(iconLeft, isLoading)}
    </Pressable>
  );
};

export default Button;

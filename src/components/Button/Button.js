import { Pressable, Text } from "react-native";

import { defaultButtonStyles } from "./Button.styles";
import Loader from '../Loader/Loader';
import { theme } from "../../styles/theme";

const Button = ({ children, onPress, isDisabled, isLoading }) => {
  return (
    <Pressable
      style={({ pressed, focused }) => [
        defaultButtonStyles.button,
        pressed && defaultButtonStyles.pressed,
        focused && defaultButtonStyles.focused,
        isDisabled && defaultButtonStyles.disabled
      ]}
      disabled={isDisabled}
      onPress={onPress}
    >
      {isLoading && <Loader color={theme.color.primary.onBase} />}
      <Text style={defaultButtonStyles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

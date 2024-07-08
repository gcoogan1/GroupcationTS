import { Pressable, Text, TextStyle, ViewStyle } from "react-native";

import { defaultButtonStyles } from "./styles/Button.styles";
import Loader from "../Loader/Loader";
import { getButtonStyle, getTextStyle, getDisplayIcon } from "./util/util";
import { ReactElement } from "react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onPress: () => void;
  buttonType?: string; // Adjust to specific button types if necessary
  buttonSize?: "sm" | "md"; // Specify allowed button sizes
  isDisabled?: boolean;
  isLoading?: boolean;
  iconRight?: ReactElement<any, string | React.JSXElementConstructor<any>>;
  iconLeft?: ReactElement<any, string | React.JSXElementConstructor<any>>;
  styles?: ViewStyle;
  textStyle?: TextStyle;
}

/**
 * This component renders a button based on type and size.
 * @important -> Needs a style (styles) to determine width/height
 *
 * @param {string} children required -> label of button
 * @param {function} onPress required -> onClick event for button
 * @param {string} buttonType optional -> primary, default, default-inverse, secondary,
 * tonal, tonal-inverse, tertiary, destructive (defaults to the default type)
 * @param {string} buttonSize optional -> sm, md (defaults to md)
 * @param {boolean} isDisabled optional -> sets disabled state of button
 * @param {boolean} isLoading optional -> sets loading state of button
 * @param {svg} iconRight optional -> displays icon (set color in icon element) to the right of text
 * @param {svg} iconLeft optional -> displays icon (set color in icon element) to the left of text
 * @param {object} styles optional -> add styles to button
 * @param {object} textStyle optional -> add styles to button text
 * @returns {ReactElement} Renders a button.
 *
 * @example
 * <Button
 *  buttonSize={'sm'}
 *  onPress={() => console.log("Pressed!")}
 *  buttonType={'default-inverse'}
 *  iconRight={<Add color={theme.color.surface} />}
 * >
 *  Click me
 * </Button>
 */

const Button: React.FC<ButtonProps> = ({
  children,
  onPress,
  buttonType = "default", // Default to "default" type if not provided
  buttonSize = "md", // Default to "md" size if not provided
  isDisabled = false,
  isLoading = false,
  iconRight,
  iconLeft,
  styles,
  textStyle,
}) =>{
  const typeTextStyle = getTextStyle(buttonType, isDisabled);

  return (
    <Pressable
      style={({ pressed }) => [
        defaultButtonStyles.button,
        getButtonStyle(buttonType, buttonSize, pressed, isDisabled),
        { ...styles },
        // focused && defaultButtonStyles.focused, // NO STATE FOR FOCUSED IN TS
      ]}
      disabled={isDisabled}
      onPress={onPress}
    >
      {getDisplayIcon(iconLeft, isLoading)}
      {isLoading && <Loader color={typeTextStyle.color} />}
      <Text style={[typeTextStyle, defaultButtonStyles.text, { ...textStyle }]}>
        {children}
      </Text>
      {getDisplayIcon(iconRight, isLoading)}
    </Pressable>
  );
};

export default Button;

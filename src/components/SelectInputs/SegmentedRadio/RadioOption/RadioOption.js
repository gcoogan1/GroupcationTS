import { Pressable, Text } from "react-native";

import { radioOptionStyles } from "./RadioOption.styles";

/**
 * This component renders a button that is used as a radio option.
 * @prop {string} label required -> label of button
 * @prop {boolean} isSelected required -> selected state of button
 * @prop {function} onRadioPress required -> event to be fired when button is pressed
 * 
 * @returns {ReactElement} Renders a Radio Option.
 *
 * @example
 * <RadioOption
    label={'label'}
    isSelected={false}
    onRadioPress={() => console.log('radio selected')}
  />
 */
const RadioOption = ({ label, isSelected, onRadioPress }) => {
  const onSelectOption = () => {
    onRadioPress();
  };

  const buttonStyles = ({ pressed, focused }) => {
    if (!isSelected) {
      return [
        radioOptionStyles.button,
        pressed && radioOptionStyles.pressed,
        focused && radioOptionStyles.focused,
      ];
    }
    return [
      radioOptionStyles.selectedButton,
      pressed && radioOptionStyles.selectedPressed,
      focused && radioOptionStyles.selectedPressed,
    ];
  };

  return (
    <Pressable
      onPress={onSelectOption}
      style={({ pressed, focused }) => buttonStyles(pressed, focused)}
    >
      <Text
        style={
          !isSelected ? radioOptionStyles.text : radioOptionStyles.selectedText
        }
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default RadioOption;

import { Pressable, Text } from "react-native";

import { selectSmallBoxStyles } from "./SelectSmallBox.styles";

/**
 * This component renders a select small box (button) with different styles for when the box is selected.
 * @prop {string} selectText required -> text inside the button
 * @prop {function} onSelectPress required -> event to be fired when the box is pressed
 * @prop {boolean} isSelected optional -> selected state of select small box
 * @prop {boolean} isDisabled optional -> disabled state of select small box
 * 
 * @returns {ReactElement} Renders a Select Small Box.
 *
 * @example
 * <SelectSmallBox
    isSelected
    selectOnPress={() => console.log("select small box")}
    selectText={"Option"}
   />
 */
const SelectSmallBox = ({
  selectText,
  onSelectPress,
  isSelected,
  isDisabled
}) => {

  const containerStyles = (pressed, focused) => {
    if (!isSelected) {
      return [
        selectSmallBoxStyles.container,
        pressed && selectSmallBoxStyles.pressed,
        focused && selectSmallBoxStyles.focused,
        isDisabled && selectSmallBoxStyles.disabled,
      ];
    }
    return [
      selectSmallBoxStyles.selectedContainer,
      pressed && selectSmallBoxStyles.selectedPressed,
      focused && selectSmallBoxStyles.selectedFocused,
      isDisabled && selectSmallBoxStyles.selectedDisabled,
    ];
  };

  return (
    <Pressable
      style={({ pressed, focused }) => containerStyles(pressed, focused)}
      onPress={onSelectPress}
    >
      <Text
        style={[
          selectSmallBoxStyles.text,
          !!isDisabled && selectSmallBoxStyles.disabledText,
        ]}
      >
        {selectText}
      </Text>
    </Pressable>
  );
};

export default SelectSmallBox;

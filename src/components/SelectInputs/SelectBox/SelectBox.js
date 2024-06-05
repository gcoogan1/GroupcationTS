import { Pressable, Text, View } from "react-native";

import Icon from "../../Icon/Icon";
import { selectBoxStyles } from "./SelectBox.styles";

/**
 * This component renders a select box with different styles for the box is selected.
 * @prop {boolean} isSelected optional -> selected state of select box
 * @prop {function} onSelectPress required -> event to be fired when the box is pressed
 * @prop {component} selectIcon required -> icon inside select box
 * @prop {string} selectLabel required -> label of select box
 * @prop {string} selectSubLabel optional -> sub-label of select box
 * @prop {boolean} isDisabled optional -> disabled state of select box
 * 
 * @important -> update the icon disabled color in parent component
 * 
 * @returns {ReactElement} Renders a Select Box.
 *
 * @example
 * <SelectBox 
    onSelectPress={() => console.log("pressed")}
    selectIcon={<Placeholder color="black" />}
    selectLabel="Input Label"
    selectSubLabel="sublabel"
    isSelected
   />
 */
const SelectBox = ({
  isSelected,
  onSelectPress,
  selectIcon,
  selectLabel,
  selectSubLabel,
  isDisabled,
}) => {
  const containerStyles = (pressed, focused) => {
    if (!isSelected) {
      return [
        selectBoxStyles.container,
        pressed && selectBoxStyles.pressed,
        focused && selectBoxStyles.focused,
        isDisabled && selectBoxStyles.disabled,
      ];
    }
    return [
      selectBoxStyles.selectedContainer,
      pressed && selectBoxStyles.selectedPressed,
      focused && selectBoxStyles.selectedFocused,
      isDisabled && selectBoxStyles.selectedDisabled,
    ];
  };

  return (
    <Pressable
      style={({ pressed, focused }) => containerStyles(pressed, focused)}
      onPress={onSelectPress}
    >
      <Icon>{selectIcon}</Icon>
      <View>
        <Text
          style={[
            selectBoxStyles.label,
            isDisabled && selectBoxStyles.disabledText,
          ]}
        >
          {selectLabel}
        </Text>
        <Text
          style={[
            selectBoxStyles.subLabel,
            isDisabled && selectBoxStyles.disabledText,
          ]}
        >
          {selectSubLabel}
        </Text>
      </View>
    </Pressable>
  );
};

export default SelectBox;

import { Pressable } from "react-native";

import { theme } from "../../../styles/theme";
import { selectButtonStyles } from "./SelectButton.styles";
import Checkbox from "../../../../assets/icons/Checkbox_Unselected.svg";
import CheckboxSelected from "../../../../assets/icons/Checkbox_Selected.svg";
import Radio from "../../../../assets/icons/Radio_Selected.svg";
import RadioUnselected from "../../../../assets/icons/Radio_Unselected.svg";

/**
 * This component renders a select or multiSelect button with different styles.
 * @prop {boolean} multiSelect optional -> if true the button will be multi-selectable
 * @prop {boolean} isSelected optional -> selected state of select button
 * @prop {function} onSelectPress optional -> event to be fired when the select button is pressed
 * @prop {function} onMultiSelectPress optional -> event to be fired when the multiSelect button is pressed
 * @prop {boolean} isDisabled optional -> disabled state of select box
 * 
 * @important -> onSelectPress should only be passed when the button is NOT multiSelect, else
 * onMultiSelectPress should be passed. 
 * 
 * @returns {ReactElement} Renders a Select Button.
 *
 * @example
 * <SelectButton 
    onSelectPress={() => console.log("pressed")}
    isSelected
   />
 */
const SelectButton = ({
  multiSelect,
  isSelected,
  onSelectPress,
  onMultiSelectPress,
  isDisabled
}) => {
  const iconColor = !isDisabled
    ? theme.color.surface.onBasePrimary
    : theme.color.disabled.onBase;

  return (
    <>
      {!!multiSelect ? (
        <Pressable
          style={({ focused }) => [
            selectButtonStyles.multiSelectContainer,
            focused && selectButtonStyles.containerFocused,
          ]}
          onPress={onMultiSelectPress}
        >
          {isSelected ? (
            <CheckboxSelected color={iconColor} />
          ) : (
            <Checkbox color={iconColor} />
          )}
        </Pressable>
      ) : (
        <Pressable
          style={({ focused }) => [
            selectButtonStyles.selectContainer,
            focused && selectButtonStyles.containerFocused,
          ]}
          onPress={onSelectPress}
        >
          {isSelected ? (
            <Radio color={iconColor} />
          ) : (
            <RadioUnselected color={iconColor} />
          )}
        </Pressable>
      )}
    </>
  );
};

export default SelectButton;

import { useState } from "react";
import { Pressable, Text, View } from "react-native";

import Icon from "../Icon/Icon";
import { theme } from "../../styles/theme";
import CheckboxUnselected from "../../../assets/icons/Checkbox_Unselected.svg";
import CheckboxSelected from "../../../assets/icons/Checkbox_Selected.svg";
import { checkboxStyles } from "./styles/Checkbox.styles";
import { capitilaizeFirstLetter } from "../../../util/helperFunctions/helperFunctions";

/**
 * This component renders a custom checkbox.
 * @prop {boolean} selected optional -> displays the initial state of the checkbox
 * @prop {function} onCheckboxPress optional -> function to execute when the checkbox is pressed
 * @prop {string} label required -> text for label
 * @prop {string} subLabel optional -> text for subLabel
 * @prop {boolean} hasBackground optional -> adds background to checkbox
 * @returns {ReactElement} Renders a checkbox.
 *
 * @example
 * <Checkbox label={'Checkbox-label'} subLabel={'sub-label'} onCheckboxPress={() => console.log("pressed!")} />
 */
const Checkbox = ({
  selected,
  onCheckboxPress,
  label,
  subLabel,
  hasBackground,
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  const selectHandler = () => {
    setIsSelected(!isSelected);
    if (onCheckboxPress) {
      onCheckboxPress();
    }
  };

  return (
    <Pressable
      style={[
        hasBackground && {
          backgroundColor: theme.color.surface.layer,
          padding: theme.spacing.md,
        },
        checkboxStyles.container,
      ]}
      onPress={selectHandler}
      accessibilityLabel={`${label} checkbox`}
      accessibilityState={{ checked: isSelected }}
    >
      <View style={checkboxStyles.iconContainer}>
        <Icon>
          {!isSelected ? (
            <CheckboxUnselected color={theme.color.surface.onBasePrimary} />
          ) : (
            <CheckboxSelected color={theme.color.surface.onBasePrimary} />
          )}
        </Icon>
      </View>
      <View style={checkboxStyles.labelContainer}>
        <Text style={checkboxStyles.label}>
          {capitilaizeFirstLetter(label)}
        </Text>
        <Text style={checkboxStyles.subLabel}>
          {capitilaizeFirstLetter(subLabel)}
        </Text>
      </View>
    </Pressable>
  );
};

export default Checkbox;

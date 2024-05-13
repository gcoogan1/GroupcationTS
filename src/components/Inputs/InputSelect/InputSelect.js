import { Text, View } from "react-native";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";

import { theme } from "../../../styles/theme";
import { inputSelectStyles } from "./styles/InputSelect.styles";
import Icon from "../../Icon/Icon";
import Error from "../../../../assets/icons/Error.svg";
import DropdownIcon from "../../../../assets/icons/Dropdown.svg";

/**
 * This component renders a select input with selectable options.
 * @prop {array} inputOptions required -> array of objects that contains the selectable options,
 * the object MUST contain a value and a label.
 * Ex. const options = [{value: '1', label: 'one' }, {value: '2', label: 'two' }]
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {string} placeholder optional -> placeholder text to be displayed
 * @prop {component} placeholderIcon optional -> icon to be displayed next to placeholder text, 
 * remember to include disabled color. (see below)
 * Ex. <Placeholder color={!isDisabled ? theme.color.surface.onBasePrimary : theme.color.disabled.onBase} />
 * @prop {string} helperText optional -> helper text to be displayed below the input
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input select field.
 * 
 * @example 
 * <InputSelect
    inputOptions={data}
    inputLabel={"input label"}
    placeholder={"Placeholder Text"}
    helperText={"helper text"}
    isDisabled={disabledState}
    placeholderIcon={
      <Placeholder
        color={
          !disabledState
            ? theme.color.surface.onBasePrimary
            : theme.color.disabled.onBase
        }
      />
    }
   />
 */
const InputSelect = ({
  inputOptions,
  inputLabel,
  placeholder,
  placeholderIcon,
  helperText,
  isDisabled,
  inputError,
}) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderItem = (item) => {
    return (
      <View style={inputSelectStyles.itemContainer}>
        <Text style={inputSelectStyles.placeholder}>{item.label}</Text>
      </View>
    );
  };

  return (
    <View style={inputSelectStyles.container}>
      <View style={inputSelectStyles.labelContainer}>
        <Text
          style={[
            inputSelectStyles.label,
            isDisabled && inputSelectStyles.labelDisabled,
            inputError && inputSelectStyles.labelError,
          ]}
        >
          {inputLabel}
        </Text>
      </View>
      <Dropdown
        style={[
          inputSelectStyles.inputContainer,
          isFocus && inputSelectStyles.inputContainerFocused,
          isDisabled && inputSelectStyles.inputContainerDisabled,
          inputError && inputSelectStyles.inputContainerError,
        ]}
        placeholderStyle={[
          inputSelectStyles.placeholder,
          isDisabled && inputSelectStyles.placeholderDisabled,
        ]}
        selectedTextStyle={inputSelectStyles.placeholderSelected}
        data={inputOptions}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value}
        disable={isDisabled}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <View style={inputSelectStyles.leftIconContainer}>
            <Icon>{placeholderIcon}</Icon>
          </View>
        )}
        renderRightIcon={() => (
          <View style={inputSelectStyles.rightIconContainer}>
            {!!inputError && (
              <Icon>
                <Error color={theme.color.error.base} />
              </Icon>
            )}
            <Icon size="xl">
              <DropdownIcon color={theme.color.surface.onBasePrimary} />
            </Icon>
          </View>
        )}
        renderItem={renderItem}
      />
      {!!helperText && (
        <Text
          style={[
            inputSelectStyles.helperText,
            isDisabled && inputSelectStyles.helperTextDisabled,
          ]}
        >
          {helperText}
        </Text>
      )}
      {!!inputError && (
        <Text style={inputSelectStyles.errorText}>This is required.</Text>
      )}
    </View>
  );
};

export default InputSelect;

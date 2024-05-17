import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createRef, useState } from "react";

import { theme } from "../../../styles/theme";
import { inputNumberStyles } from "./styles/InputNumber.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import Icon from "../../Icon/Icon";
import Close from "../../../../assets/icons/Close.svg";
import Error from "../../../../assets/icons/Error.svg";

/**
 * This component renders a number input with an optional placeholder icon and helper text.
 * @prop {string} inputName required -> name of input
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {string} placeholder optional -> placeholder text to be displayed
 * @prop {component} placeholderIcon optional -> icon to be displayed next to placeholder text, 
 * remember to include disabled color. (see below)
 * Ex. <Placeholder color={!isDisabled ? theme.color.surface.onBasePrimary : theme.color.disabled.onBase} />
 * @prop {string} helperText optional -> helper text to be displayed below the input
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input number field.
 * 
 * @example 
 * <InputNumber
    placeholder={"placeholder text"}
    inputLabel={"input label"}
    inputName="placeholder"
    placeholderIcon={
      <Placeholder
        color={
          !disabledState
            ? theme.color.surface.onBasePrimary
            : theme.color.disabled.onBase
        }
      />
    }
    isDisabled={disabledState}
    helperText={"helper text"}
  />
 */
const InputNumber = ({
  inputName,
  inputLabel,
  placeholder,
  placeholderIcon,
  helperText,
  isDisabled,
  inputError,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [count, setCount] = useState(0);
  const { control } = useForm();
  const inputRef = createRef();

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleOnChange = (char) => {
    const countLength = count.length;
    const characterLength = char.length;
    if (countLength !== characterLength) {
      setCount(characterLength);
    }
  };

  return (
    <View style={inputNumberStyles.container}>
      <View style={inputNumberStyles.labelContainer}>
        <Text
          style={[
            inputNumberStyles.label,
            isDisabled && inputNumberStyles.labelDisabled,
            inputError && inputNumberStyles.labelError,
          ]}
        >
          {inputLabel}
        </Text>
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              inputNumberStyles.inputContainer,
              isFocused && inputNumberStyles.inputContainerFocused,
              inputError && inputNumberStyles.inputContainerError,
              isDisabled && inputNumberStyles.inputContainerDisabled,
            ]}
          >
            <Icon>{placeholderIcon}</Icon>
            <TextInput
              ref={inputRef}
              style={[
                inputNumberStyles.input,
                isDisabled && inputNumberStyles.inputDisabled,
              ]}
              keyboardType="number-pad"
              placeholder={capitilaizeFirstLetter(placeholder)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChangeText={(e) => {
                handleOnChange(e), onChange;
              }}
              value={value}
              editable={!isDisabled}
            />
            {!!inputError && (
              <Icon>
                <Error color={theme.color.error.base} />
              </Icon>
            )}
          </View>
        )}
        name={inputName}
      />
      {!!helperText && (
        <Text
          style={[
            inputNumberStyles.helperText,
            isDisabled && inputNumberStyles.helperTextDisabled,
          ]}
        >
          {helperText}
        </Text>
      )}
      {!!inputError && (
        <Text style={inputNumberStyles.errorText}>This is required.</Text>
      )}
    </View>
  );
};

export default InputNumber;

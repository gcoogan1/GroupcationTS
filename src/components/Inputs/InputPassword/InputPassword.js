import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createRef, useState } from "react";

import { theme } from "../../../styles/theme";
import { inputPasswordStyles } from "./styles/InputPassword.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import Icon from "../../Icon/Icon";
import Close from "../../../../assets/icons/Close.svg";
import Error from "../../../../assets/icons/Error.svg";
import InlineButton from "../../InlineButton/InlineButton";

/**
 * This component renders a password input that gives the option to show/hide password.
 * @prop {string} inputName required -> name of input
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {string} placeholder optional -> placeholder text to be displayed
 * @prop {component} placeholderIcon optional -> icon to be displayed next to placeholder text, 
 * remember to include disabled color. (see below)
 * Ex. <Placeholder color={!isDisabled ? theme.color.surface.onBasePrimary : theme.color.disabled.onBase} />
 * @prop {string} helperText optional -> helper text to be displayed below the input
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input password field.
 * 
 * @example 
 * <InputPassword
    placeholder={"placeholder text"}
    inputLabel={"input label"}
    inputName="placeholder"
    showCount
    showClear
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
const InputPassword = ({
  inputName,
  inputLabel,
  placeholder,
  placeholderIcon,
  helperText,
  isDisabled,
  inputError
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
    <View style={inputPasswordStyles.container}>
      <View style={inputPasswordStyles.labelContainer}>
        <Text
          style={[
            inputPasswordStyles.label,
            isDisabled && inputPasswordStyles.labelDisabled,
            inputError && inputPasswordStyles.labelError,
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
              inputPasswordStyles.inputContainer,
              isFocused && inputPasswordStyles.inputContainerFocused,
              inputError && inputPasswordStyles.inputContainerError,
              isDisabled && inputPasswordStyles.inputContainerDisabled,
            ]}
          >
            <Icon>{placeholderIcon}</Icon>
            <TextInput
              ref={inputRef}
              secureTextEntry={!showPassword}
              style={[
                inputPasswordStyles.input,
                isDisabled && inputPasswordStyles.inputDisabled,
              ]}
              placeholder={capitilaizeFirstLetter(placeholder)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChangeText={(e) => {
                handleOnChange(e), onChange;
              }}
              value={value}
              editable={!isDisabled}
            />

            {count > 0 && (
              <>
                {!showPassword ? (
                  <InlineButton
                    onPress={() => setShowPassword(true)}
                    buttonType={"secondary"}
                    isDisabled={isDisabled}
                  >
                    Show
                  </InlineButton>
                ) : (
                  <InlineButton
                    onPress={() => setShowPassword(false)}
                    buttonType={"secondary"}
                    isDisabled={isDisabled}
                  >
                    Hide
                  </InlineButton>
                )}
              </>
            )}
          </View>
        )}
        name={inputName}
      />
      {!!helperText && (
        <Text
          style={[
            inputPasswordStyles.helperText,
            isDisabled && inputPasswordStyles.helperTextDisabled,
          ]}
        >
          {helperText}
        </Text>
      )}
      {!!inputError && (
        <Text style={inputPasswordStyles.errorText}>This is required.</Text>
      )}
    </View>
  );
};

export default InputPassword;

import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createRef, useState } from "react";

import { theme } from "../../../styles/theme";
import { inputTextAreaStyles } from "./styles/InputTextArea.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import Icon from "../../Icon/Icon";
import Close from "../../../../assets/icons/Close.svg";
import Error from "../../../../assets/icons/Error.svg";

/**
 * This component renders a text area input with an optional clear button, helper text and counter.
 * @prop {string} inputName required -> name of input
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {string} placeholder optional -> placeholder text to be displayed
 * @prop {string} helperText optional -> helper text to be displayed below the input
 * @prop {boolean} showCount optional -> shows current input charcter count above the input 
 * @prop {boolean} showClear optional -> if true, displays a clear buttton with the option 
 * to clear the input field
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input text area field.
 * 
 * @example 
 * <InputTextArea
    placeholder={"placeholder text"}
    inputLabel={"input label"}
    inputName="placeholder"
    showCount
    showClear
    isDisabled={disabledState}
    helperText={"helper text"}
  />
 */
const InputTextArea = ({
  inputName,
  inputLabel,
  placeholder,
  helperText,
  showCount,
  showClear,
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
    if (!!showCount) {
      const countLength = count.length;
      const characterLength = char.length;
      if (countLength !== characterLength) {
        setCount(characterLength);
      }
    }
  };

  const handleClearInput = () => {
    inputRef.current.clear();
    setCount(0);
  };

  return (
    <View style={inputTextAreaStyles.container}>
      <View style={inputTextAreaStyles.labelContainer}>
        <Text
          style={[
            inputTextAreaStyles.label,
            isDisabled && inputTextAreaStyles.labelDisabled,
            inputError && inputTextAreaStyles.labelError,
          ]}
        >
          {inputLabel}
        </Text>
        {!!showCount && <Text style={inputTextAreaStyles.count}>{count}/999</Text>}
      </View>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              inputTextAreaStyles.inputContainer,
              isFocused && inputTextAreaStyles.inputContainerFocused,
              inputError && inputTextAreaStyles.inputContainerError,
              isDisabled && inputTextAreaStyles.inputContainerDisabled,
            ]}
          >
            <TextInput
              ref={inputRef}
              style={[
                inputTextAreaStyles.input,
                isDisabled && inputTextAreaStyles.inputDisabled,
              ]}
              multiline={true}
              numberOfLines={5}
              placeholder={capitilaizeFirstLetter(placeholder)}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChangeText={(e) => {
                handleOnChange(e), onChange;
              }}
              value={value}
              editable={!isDisabled}
            />
            {!!showClear && !inputError && !isDisabled && (
              <TouchableOpacity onPress={handleClearInput}>
                <Icon>
                  <Close color={theme.color.surface.onBaseSecondary} />
                </Icon>
              </TouchableOpacity>
            )}
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
            inputTextAreaStyles.helperText,
            isDisabled && inputTextAreaStyles.helperTextDisabled,
          ]}
        >
          {helperText}
        </Text>
      )}
      {!!inputError && (
        <Text style={inputTextAreaStyles.errorText}>This is required.</Text>
      )}
    </View>
  );
};

export default InputTextArea;

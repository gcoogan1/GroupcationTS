import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { createRef, useState } from "react";

import { inputCodeStyles } from "./styles/InputCode.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";

/**
 * This component renders a code input that MUST be a 4 digit number.
 * @prop {string} inputName required -> name of input
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input code field.
 * 
 * @example 
 * <InputCode
    placeholder={0000}
    inputLabel={"input label"}
    inputName={"input name"}
    isDisabled={disabledState}
  />
 */
const InputCode = ({ inputName, inputLabel, isDisabled, inputError }) => {
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
    setCount(char.replace(/[^0-9]/, ""));
  };

  return (
    <View style={inputCodeStyles.container}>
      <View style={inputCodeStyles.labelContainer}>
        <Text
          style={[
            inputCodeStyles.label,
            isDisabled && inputCodeStyles.labelDisabled,
            inputError && inputCodeStyles.labelError,
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
              inputCodeStyles.inputContainer,
              isFocused && inputCodeStyles.inputContainerFocused,
              inputError && inputCodeStyles.inputContainerError,
              isDisabled && inputCodeStyles.inputContainerDisabled,
            ]}
          >
            <TextInput
              maxLength={4}
              ref={inputRef}
              keyboardType="numeric"
              style={[
                inputCodeStyles.input,
                isDisabled && inputCodeStyles.inputDisabled,
              ]}
              placeholder={"0000"}
              onBlur={handleBlur}
              onFocus={handleFocus}
              onChangeText={(e) => {
                handleOnChange(e), onChange;
              }}
              value={count}
              editable={!isDisabled}
            />
          </View>
        )}
        name={inputName}
      />
      {!!inputError && (
        <Text style={inputCodeStyles.errorText}>This is required.</Text>
      )}
    </View>
  );
};

export default InputCode;

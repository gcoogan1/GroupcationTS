import { createRef, useState } from "react";
import { Text, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";

import { theme } from "../../../styles/theme";
import { inputDateStyles } from "./styles/InputDate.styles";
import Icon from "../../Icon/Icon";
import Date from "../../../../assets/icons/Date.svg";
import Error from "../../../../assets/icons/Error.svg";

/**
 * This component renders a date input with optional helper text.
 * @prop {string} inputName required -> name of input
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {string} helperText optional -> helper text to be displayed below the input
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @prop {boolean} inputError optional -> error state of the input
 * @returns {ReactNode} Renders a input date field.
 *
 * @example
 * <InputDate
 *  inputLabel={"input label"}
 *  inputName={"date"}
 *  helperText={"helper"}
 *  inputError
 * />
 *
 */
const InputDate = ({
  inputName,
  inputLabel,
  helperText,
  isDisabled,
  inputError,
}) => {
  const [date, setDate] = useState();
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = createRef();
  const { control } = useForm();

  return (
    <View style={inputDateStyles.container}>
      <View style={inputDateStyles.labelContainer}>
        <Text
          style={[
            inputDateStyles.label,
            isDisabled && inputDateStyles.labelDisabled,
            inputError && inputDateStyles.labelError,
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
              inputDateStyles.inputContainer,
              isFocused && inputDateStyles.inputContainerFocused,
              inputError && inputDateStyles.inputContainerError,
              isDisabled && inputDateStyles.inputContainerDisabled,
            ]}
          >
            <Icon size={"lg"}>
              <Date
                color={
                  !isDisabled
                    ? theme.color.surface.onBasePrimary
                    : theme.color.disabled.onBase
                }
              />
            </Icon>
            <TextInputMask
              ref={inputRef}
              placeholder="MM/DD/YYYY"
              type={"datetime"}
              options={{
                format: "MM/DD/YYYY",
              }}
              value={date}
              onChangeText={(text) => {
                setDate(text);
              }}
              style={inputDateStyles.input}
            />
            <View style={inputDateStyles.errorIconContainer}>
              {!!inputError && (
                <Icon>
                  <Error color={theme.color.error.base} />
                </Icon>
              )}
            </View>
          </View>
        )}
        name={inputName}
      />
      {!!helperText && (
        <Text
          style={[
            inputDateStyles.helperText,
            isDisabled && inputDateStyles.helperTextDisabled,
          ]}
        >
          {helperText}
        </Text>
      )}
      {!!inputError && (
        <Text style={inputDateStyles.errorText}>This is required.</Text>
      )}
    </View>
  );
};

export default InputDate;

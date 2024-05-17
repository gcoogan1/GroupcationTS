import { createRef, useMemo, useState } from "react";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { TextInputMask } from "react-native-masked-text";

import { theme } from "../../../styles/theme";
import { inputTimeStyles } from "./styles/InputTime.styles";
import Icon from "../../Icon/Icon";
import Time from "../../../../assets/icons/Time.svg";
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
 * <InputTime
 *  inputLabel={"input label"}
 *  inputName={"date"}
 *  helperText={"helper"}
 *  inputError
 * />
 */
const InputTime = ({
  inputName,
  inputLabel,
  helperText,
  isDisabled,
  inputError,
}) => {
  const [time, setTime] = useState("");
  const [AM, setAM] = useState(true);
  const startsWithTwo = time[0] === "2";
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = createRef();
  const { control } = useForm();

  const mask = [
    /[0-2]/,
    startsWithTwo ? /[0-3]/ : /[0-9]/,
    ":",
    /[0-5]/,
    /[0-9]/,
  ];

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={inputTimeStyles.container}>
      <View style={inputTimeStyles.labelContainer}>
        <Text
          style={[
            inputTimeStyles.label,
            isDisabled && inputTimeStyles.labelDisabled,
            inputError && inputTimeStyles.labelError,
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
              inputTimeStyles.inputContainer,
              isFocused && inputTimeStyles.inputContainerFocused,
              inputError && inputTimeStyles.inputContainerError,
              isDisabled && inputTimeStyles.inputContainerDisabled,
            ]}
          >
            <Icon size={"lg"}>
              <Time
                color={
                  !isDisabled
                    ? theme.color.surface.onBasePrimary
                    : theme.color.disabled.onBase
                }
              />
            </Icon>
            <TextInputMask
              ref={inputRef}
              maxLength={5}
              placeholder="12:00"
              type={"datetime"}
              options={{
                format: "HH:mm",
              }}
              onBlur={handleBlur}
              onFocus={handleFocus}
              mask={mask}
              value={time}
              onChangeText={(text) => {
                setTime(text);
              }}
              style={inputTimeStyles.input}
            />
            <Pressable
              onPress={() => setAM(!AM)}
              style={inputTimeStyles.timeZoneButton}
              isDisabled={isDisabled}
            >
              <Text
                style={[
                  inputTimeStyles.timeZoneText,
                  !time && { opacity: 0.6 },
                  isDisabled && inputTimeStyles.timeZoneTextDisabled,
                ]}
              >
                {!!AM ? "AM" : "PM"}
              </Text>
            </Pressable>
            <View style={inputTimeStyles.errorIconContainer}>
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
            inputTimeStyles.helperText,
            isDisabled && inputTimeStyles.helperTextDisabled,
          ]}
        >
          {helperText}
        </Text>
      )}
      {!!inputError && (
        <Text style={inputTimeStyles.errorText}>This is required.</Text>
      )}
    </View>
  );
};

export default InputTime;

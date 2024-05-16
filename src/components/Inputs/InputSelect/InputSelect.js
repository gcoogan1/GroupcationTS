import { Text, View } from "react-native";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import RNPickerSelect from "react-native-picker-select";

import { theme } from "../../../styles/theme";
import {
  inputSelectStyles,
  pickerSelectStyles,
} from "./styles/InputSelect.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import Icon from "../../Icon/Icon";
import Error from "../../../../assets/icons/Error.svg";

/**
 * This component renders a select input with selectable options.
 * @prop {array} inputOptions required -> array of objects that contains the selectable options,
 * the object MUST contain a value and a label.
 * Ex. const options = [{value: '1', label: 'one' }, {value: '2', label: 'two' }]
 * @prop {string} inputName required -> name of the input
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
    }
   />
 */
const InputSelect = ({
  inputOptions,
  inputName,
  inputLabel,
  placeholder,
  placeholderIcon,
  helperText,
  isDisabled,
  inputError,
}) => {
  const [value, setValue] = useState(null);
  const { control } = useForm();

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
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <View
            style={[
              inputSelectStyles.inputContainer,
              !!placeholderIcon && { paddingLeft: 24 },
              isDisabled && inputSelectStyles.inputContainerDisabled,
              inputError && inputSelectStyles.inputContainerError,
            ]}
          >
            <View style={inputSelectStyles.placeholderIconContainer}>
              <Icon>{placeholderIcon}</Icon>
            </View>
            <RNPickerSelect
              onValueChange={(value) => setValue(value)}
              items={inputOptions}
              style={[
                inputSelectStyles.placeholder,
                pickerSelectStyles,
                isDisabled && inputSelectStyles.placeholderDisabled,
              ]}
              placeholder={{ label: capitilaizeFirstLetter(placeholder) ?? "" }}
              disabled={isDisabled}
              Icon={() => {
                !!inputError && (
                  <View style={inputSelectStyles.errorIcon}>
                    <Icon>
                      <Error color={theme.color.error.base} />
                    </Icon>
                  </View>
                );
              }}
              pickerProps={{
                style: [
                  inputSelectStyles.placeholderSelected,
                  isDisabled && inputSelectStyles.placeholderDisabled,
                ],
              }}
            />
          </View>
        )}
        name={inputName}
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

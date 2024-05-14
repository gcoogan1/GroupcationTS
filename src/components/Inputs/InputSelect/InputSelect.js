import { Text, View } from "react-native";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";

import { theme } from "../../../styles/theme";
import { inputSelectStyles } from "./styles/InputSelect.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import Icon from "../../Icon/Icon";
import Error from "../../../../assets/icons/Error.svg";

/**
 * This component renders a select input with selectable options.
 * @prop {array} inputOptions required -> array of objects that contains the selectable options,
 * the object MUST contain a value and a label.
 * Ex. const options = [{value: '1', label: 'one' }, {value: '2', label: 'two' }]
 * @prop {string} inputLabel required -> label to be displayed
 * @prop {string} placeholder optional -> placeholder text to be displayed
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
  inputLabel,
  placeholder,
  helperText,
  isDisabled,
  inputError
}) => {
  const [value, setValue] = useState(null);

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
      <View
        style={[
          inputSelectStyles.inputContainer,
          isDisabled && inputSelectStyles.inputContainerDisabled,
          inputError && inputSelectStyles.inputContainerError,
        ]}
      >
        <RNPickerSelect
          onValueChange={(value) => setValue(value)}
          items={inputOptions}
          style={[
            inputSelectStyles.placeholder,
            isDisabled && inputSelectStyles.placeholderDisabled,
          ]}
          placeholder={{ label: capitilaizeFirstLetter(placeholder) ?? "" }}
          disabled={isDisabled}
          Icon={() =>
            !!inputError && (
              <View style={inputSelectStyles.errorIcon}>
                <Icon>
                  <Error color={theme.color.error.base} />
                </Icon>
              </View>
            )
          }
          pickerProps={{
            style: [
              inputSelectStyles.placeholderSelected,
              isDisabled && inputSelectStyles.placeholderDisabled,
            ],
          }}
        />
      </View>
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

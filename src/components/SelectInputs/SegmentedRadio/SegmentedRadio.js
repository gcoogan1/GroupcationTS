import { Text, View } from "react-native";
import { useState } from "react";

import RadioOption from "./RadioOption/RadioOption";
import { segmentedRadioStyles } from "./SegmentedRadio.styles";

/**
 * This component renders a display (input) of radio buttons with label and helper text.
 * @prop {string} inputLabel required -> label of input
 * @prop {array} radioOptions required -> array of objects that contain radio option (button) data,
 * exach object MUST have radioLabel and radioValue
 * ex.
 *   const radioOptions = [
    {
      radioLabel: "option",
      radioValue: "1",
    },
    {
      radioLabel: "option",
      radioValue: "2",
    },
    {
      radioLabel: "option",
      radioValue: "3",
    },
  ];
 * @prop {string} helperText required -> text to be displayed under radio input
 * @prop {boolean} hasBackground optional -> has a background color if true
 * 
 * @returns {ReactElement} Renders a Segmented Radio.
 *
 * @example
 * <SegmentedRadio
    radioOptions={radioOptions}
    inputLabel={"Input Label"}
    helperText={"Descriptive Text"}
    hasBackground
  />
 */
const SegmentedRadio = ({
  inputLabel,
  radioOptions,
  helperText,
  hasBackground,
}) => {
  const [selectedValue, setSelectedValue] = useState();

  return (
    <View
      style={[
        segmentedRadioStyles.container,
        hasBackground && segmentedRadioStyles.containerBackground,
      ]}
    >
      <View style={segmentedRadioStyles.inputContainer}>
        <Text style={segmentedRadioStyles.label}>{inputLabel}</Text>
        <View style={segmentedRadioStyles.options}>
          {radioOptions.map((option) => (
            <RadioOption
              key={option.radioValue}
              label={option.radioLabel}
              isSelected={selectedValue === option.radioValue}
              onRadioPress={() => setSelectedValue(option.radioValue)}
            />
          ))}
        </View>
      </View>
      <Text style={segmentedRadioStyles.helperText}>{helperText}</Text>
    </View>
  );
};

export default SegmentedRadio;

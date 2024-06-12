import { Text, View } from "react-native";
import { useState } from "react";

import { selectHorizontalStyles } from "./SelectHorizontal.styles";
import SelectSmallBox from "./SelectSmallBox/SelectSmallBox";

/**
 * This component renders select small boxs in a horizontal layout.
 * @prop {string} inputLabel required -> lable of input
 * @prop {function} selectOptions required -> array of objects that container select small box data.
 * Each object MUST include a label and value.
 * ex.
 * const options = [
 * {
      label: 'option',
      value: 1,
    },
    {
      label: 'option',
      value: 2,
    },
    {
      label: 'option',
      value: 3,
    }
 * ]
 * 
 * @returns {ReactElement} Renders Select Horizontal.
 *
 * @example
 * <SelectHorizontal 
      selectOptions={options}
      inputLabel={"Input Label"}
    />
 */
const SelectHorizontal = ({ inputLabel, selectOptions }) => {
  const [selectedValue, setSelectedValue] = useState();
  return (
    <View style={selectHorizontalStyles.container}>
      <Text style={selectHorizontalStyles.label}>{inputLabel}</Text>
      <View style={selectHorizontalStyles.optionsContainer}>
        {selectOptions.map((option) => {
          return (
            <SelectSmallBox
              selectText={option.label}
              isSelected={selectedValue === option.value}
              onSelectPress={() => setSelectedValue(option.value)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default SelectHorizontal;

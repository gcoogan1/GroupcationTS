import { View } from "react-native";
import InputDate from "../Inputs/InputDate/InputDate";
import { theme } from "../../styles/theme";

//TODO: Add logic to make sure startDate value (date) is always before endDate

/**
 * This component renders a row with two date inputs.
 * @prop {object} startDate required -> object that contains start date data
 * @prop {object} endDate required -> object that contains end date data
 * 
 * @important -> Objects MUST contain: name, label, helperText, isDisabled, inputError
 * Ex.
 * const startDateData = {
    name: 'arrival',
    label: 'Input label',
    initialDate: '04/16/2024',
    helperText: 'helper text',
    isDisabled: false,
    isError: false
  }
 * @returns {ReactNode} Renders a input row.
 *
 * @example <InputRow startDate={startDateData} endDate={endDateData} />
 *
 */
const InputRow = ({ startDate, endDate }) => {
  return (
    <View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
      <InputDate
        inputName={startDate.name}
        inputLabel={startDate.label}
        initialDate={startDate.initialDate}
        helperText={startDate.helperText}
        isDisabled={startDate.isDisabled}
        inputError={startDate.inputError}
      />
      <InputDate
        inputName={endDate.name}
        inputLabel={endDate.label}
        initialDate={endDate.initialDate}
        helperText={endDate.helperText}
        isDisabled={endDate.isDisabled}
        inputError={endDate.inputError}
      />
    </View>
  );
};

export default InputRow;

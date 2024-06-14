import { View } from "react-native";
import InputDate from "../Inputs/InputDate/InputDate";
import { theme } from "../../styles/theme";

/**
 * This component renders a row with two date inputs.
 * @prop {object} dateOneData required -> object that contains start date data
 * @prop {object} dataTwoData required -> object that contains end date data
 * 
 * @important -> Objects MUST contain: name, label, helperText, isDisabled, inputError
 * Ex.
 * const dateOne = {
    name: 'arrival',
    label: 'Input label',
    initialDate: '04/16/2024',
    helperText: 'helper text',
    isDisabled: false,
    isError: false
  }
 * @returns {ReactNode} Renders a input row.
 *
 * @example <InputRow dateOneData={dateOne} dateTwoData={dateTwo} />
 *
 */
const InputRow = ({ dateOneData, dateTwoData }) => {
  return (
    <View style={{ flexDirection: "row", gap: theme.spacing.sm }}>
      <InputDate
        inputName={dateOneData.name}
        inputLabel={dateOneData.label}
        initialDate={dateOneData.initialDate}
        helperText={dateOneData.helperText}
        isDisabled={dateOneData.isDisabled}
        inputError={dateOneData.inputError}
      />
      <InputDate
        inputName={dateTwoData.name}
        inputLabel={dateTwoData.label}
        initialDate={dateTwoData.initialDate}
        helperText={dateTwoData.helperText}
        isDisabled={dateTwoData.isDisabled}
        inputError={dateTwoData.inputError}
      />
    </View>
  );
};

export default InputRow;

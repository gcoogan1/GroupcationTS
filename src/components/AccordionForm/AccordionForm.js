import { Text, View } from "react-native";

import { accodionFormStyles } from "./styles/AcccordionForm.styles";
import Button from "../Button/Button";

/**
 * This component renders an accordion form that is displayed when an accodion item is explanded.
 * @prop {component} children required -> inputs to be displayed
 * @prop {number} step required -> step (number) of form
 * @prop {string} stepTitle required -> title in form
 * @prop {string} stepSubTitle required -> subtitle in form
 * @returns {ReactElement} Renders an accordion form.
 *
 * @example 
 * <AccordionForm
    step={1}
    stepTitle={"Step title"}
    stepSubTitle={"step sub-title"}
   >
    <InputText
      placeholder={"placeholder text"}
      inputLabel={"input label"}
      inputName="placeholder"
    />
   </AccordionForm>
 */
const AccordionForm = ({ children, step, stepTitle, stepSubTitle }) => {
  return (
    <View style={accodionFormStyles.container}>
      <View style={accodionFormStyles.stepContainer}>
        <View style={accodionFormStyles.stepTextContainer}>
          <Text style={accodionFormStyles.stepText}>{step}</Text>
        </View>
        <Text style={accodionFormStyles.stepTitle}>{stepTitle}</Text>
        <Text style={accodionFormStyles.stepSubTitle}>{stepSubTitle}</Text>
      </View>
      <View style={accodionFormStyles.inputsContainer}>{children}</View>
      <View style={accodionFormStyles.footer}>
        <Button onPress={() => console.log("prev")} buttonType={"tertiary"}>
          Previous
        </Button>
        <Button onPress={() => console.log("next")} buttonType={"default"}>
          next
        </Button>
      </View>
    </View>
  );
};

export default AccordionForm;

import { StyleSheet, View } from "react-native";

import AccordionItem from "../components/AccordionForm/AccordianItem/AccordionItem";
import AccordionForm from "../components/AccordionForm/AccordionForm";
import InputText from "../components/Inputs/InputText/InputText";

const TestSecondScreen = () => {
  return (
    <View style={styles.container}>
      <AccordionItem
        step={1}
        stepTitle={"Step title"}
        stepSubTitle={"step sub-title"}
        isComplete
      >
        <AccordionForm
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
      </AccordionItem>
    </View>
  );
};

export default TestSecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 400,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#fffff",
  },
  text: {
    color: "red",
  },
});

import { StyleSheet, Text, View } from "react-native";

import FormGroup from "../components/FormGroup/FormGroup";
import InputText from "../components/Inputs/InputText/InputText"

const TestSecondScreen = () => {
  const actionButtons = {
    vertical: {
      top: {
        label: "Label Top",
        onPress: () => console.log("TOP"),
      },
      middle: {
        label: "Label Middle",
        onPress: () => console.log("MIDDLE"),
      },
      bottom: {
        label: "Label Bottom",
        onPress: () => console.log("BOTTOM"),
      },
    },
  };
  return (
    <View style={styles.container}>
      <FormGroup
        formHeader={"Page header"}
        formSubHeader={"Page sub-header"}
        footerButtons={actionButtons}
        footerLayout={"vertical"}
        density={'compact'}
      >
        <Text>Slot</Text>
        <Text>Slot</Text>
        <Text>Slot</Text>
      </FormGroup>
    </View>
  );
};

export default TestSecondScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // width: 400,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#fffff",
  },
  text: {
    color: "red",
  },
});

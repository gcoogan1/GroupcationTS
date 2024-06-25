import { StyleSheet, Text, View } from "react-native";

import FormGroup from "../components/FormGroup/FormGroup";
import InputText from "../components/Inputs/InputText/InputText"
import TopBar from "../components/TopBar/TopBar";

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

  const mockSuggestions = [
    { itemLabel: 'Paris' },
    { itemLabel: 'Hong kong'}
   ];

  return (
    <View style={styles.container}>
      <TopBar 
        isSearch
        onButtonPress={() => console.log("here")}
        searchData={mockSuggestions}
        onSearch={() => console.log("search")}
        sectionTitle={'section title'} 
        emptyText={"Empty State Text"}
      />
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

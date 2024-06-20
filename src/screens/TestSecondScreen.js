import { StyleSheet, View } from "react-native";

import PageHeader from "../components/PageHeader/PageHeader";

const TestSecondScreen = () => {
  return (
    <View style={styles.container}>
      <PageHeader header={"page header"} subHeader={"page sub-header"} />
    </View>
  );
};

export default TestSecondScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#fffff",
  },
  text: {
    color: "red",
  },
});

import { StyleSheet, Text, View } from "react-native";
import UserInput from "../components/UserInput/UserInput";
import Placeholder from "../../assets/icons/Placeholder.svg";
import { theme } from "../styles/theme";

const TestScreen = () => {
  const ITEMS_SELECT = [
    { itemLabel: "item label", itemValue: "1", isDisabled: false },
    { itemLabel: "item label", itemValue: "2", isDisabled: false },
    { itemLabel: "item label", itemValue: "3", isDisabled: false }
  ];

  const ITEMS_USER = [
    {
      fullName: 'User Label',
      userAvatar: '',
      userInitials: 'HG',
      isDisabled: false
    },
    {
      fullName: 'User Null',
      userAvatar: '',
      userInitials: 'ki',
      isDisabled: false
    }
  ]

  const ITEMS_SEARCH =  [
     {
        itemLabel: 'Paris',
         itemSubLabel: "Item Sub-Label",
         itemIcon: <Placeholder color={theme.color.surface.onBasePrimary} />
      },
       {
         itemLabel: 'Berlin',
         itemSubLabel: "Item Sub-Label",
         itemIcon: <Placeholder color={theme.color.surface.onBasePrimary} />
       }
  ]

  const dateOne = {
    name: 'arrival',
    label: 'Input label',
    initialDate: '04/12/2024',
    helperText: 'helper text',
    isDisabled: false,
    isError: false
  }

  const dateTwo = {
    name: 'departure',
    label: 'Input label',
    initialDate: '04/16/2024',
    helperText: 'helper text',
    isDisabled: false,
    isError: false
  }

  return (
    <View style={styles.container}>
      <UserInput
        type={"select"}
        // startDateData={dateOne}
        // endDateData={dateTwo}
        selectList={ITEMS_SELECT}
        selectType={"select"}
        // searchEmptyText={"Empty"}
        // searchData={ITEMS_SEARCH}
        // searchSectionTitle={"Section title"}
      />
    </View>
  );
};

export default TestScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff",
  },
});

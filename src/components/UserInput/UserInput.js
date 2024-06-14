import { View } from "react-native";
import { format, parse } from "date-fns";

import { userInputStyles } from "./styles/UserInput.styles";
import InputSearch from "../Inputs/InputSearch/InputSearch";
import InputRow from "../InputRow/InputRow";
import DatePicker from "../DatePicker/DatePicker";
import SelectList from "../SelectInputs/SelectList/SelectList";
import Button from "../Button/Button";
import { formatInputDate } from "../../../util/helperFunctions/helperFunctions";

//TODO: Add logic (through global state) to update both input dates and calander dates simultaneously for type date.
/**
 * This component renders a user input with either type text, select or date.
 * @important -> optional props are required if a specific type is referenced.
 * Prop examples can be found in references file.
 *
 * @prop {string} type required -> type of user input
 * @prop {string} searchSectionTitle optional -> title of search list (TYPE: text)
 * @prop {array} searchData optional -> array of objects containing search list (TYPE: text)
 * @prop {string} searchEmptyText optional -> text to be displayed when search list is not shown (TYPE: text)
 * @prop {string} selectType optional -> type of select input (TYPE: select)
 * @prop {array} selectList optional -> array of objects containing the select list (TYPE: select)
 * @prop {object} startDateData optional -> object containing start date info (TYPE: date)
 * @prop {object} endDateData optional -> object containing end date info (TYPE: date)
 * @returns {ReactElement} Renders a user input.
 *
 * @example
 */
const UserInput = ({
  type,
  searchSectionTitle,
  searchData,
  searchEmptyText,
  selectType,
  selectList,
  startDateData,
  endDateData,
}) => {

  const formattedStartDate = formatInputDate(startDateData?.initialDate);
  const formattedEndDate = formatInputDate(endDateData?.initialDate);

  const inputComponents = {
    text: (
      <InputSearch
        data={searchData}
        sectionTitle={searchSectionTitle}
        emptyText={searchEmptyText}
      />
    ),
    select: (
      <View style={userInputStyles.selectContainer}>
        <SelectList type={selectType} itemList={selectList} />
      </View>
    ),
    date: (
      <View style={userInputStyles.dateContainer}>
        <InputRow startDate={startDateData} endDate={endDateData} />
        <DatePicker
          isRange
          initialStartDate={formattedStartDate}
          initialEndDate={formattedEndDate}
        />
      </View>
    ),
  };

  const renderFooterButton = () => (
    <View style={userInputStyles.inputFooter}>
      <Button onPress={() => console.log('Pressed!')} styles={{ width: '100%' }}>
        {type === 'select' ? 'Confirm Selection' : 'Select Dates'}
      </Button>
    </View>
  );

  return (
    <View style={userInputStyles.container}>
      <View style={userInputStyles.listContainer}>
        {inputComponents[type]}
      </View>
      {type !== 'text' && renderFooterButton()}
    </View>
  );
};

export default UserInput;

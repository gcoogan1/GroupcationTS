import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, FlatList } from "react-native";

import Icon from "../../Icon/Icon";
import Search from "../../../../assets/icons/Search.svg";
import { theme } from "../../../styles/theme";
import { inputSearchStyles } from "./styles/InputSearch.styles";

/**
 * This component renders a search input based on selections (suggested search list).
 * @prop {array} data required -> array of objects containing the search list of suggestions. 
 * @prop {function} onSearch required -> event to be fired when search is pressed
 * @prop {function} selectionItem required -> event that returns a component to render as the 
 * selection item. The function recieves an item prop that will contain the selection item data.
 * @prop {boolean} isDisabled optional -> disabled state of the input
 * @returns {ReactNode} Renders a select input field.
 * 
 * @example 
 * <InputSearch
    onSearch={handleSearch}
    data={mockSuggestions}
    selectionItem={(item) => suggestionItem(item)}
   />
 */
const InputSearch = ({ data, onSearch, selectionItem, isDisabled }) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [selections, setSelections] = useState([]);

  const handleSearch = () => {
    if (query.trim() !== "") {
      onSearch(query.trim());
    }
    setQuery("");
  };

  const handleInputChange = (text) => {
    setQuery(text);

    // Filter selections by text
    const filteredSelections = data.filter((item) =>
      item.text.toLowerCase().includes(text.toLowerCase())
    );
    setSelections(filteredSelections);
  };

  const handleSelectSelection = (item) => {
    setQuery(item.text);
    setSelections([]);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const renderSelectionItem = ({ item }) => (
    <TouchableOpacity
      style={inputSearchStyles.selectionItem}
      onPress={() => handleSelectSelection(item)}
    >
      {selectionItem(item)}
    </TouchableOpacity>
  );

  return (
    <View style={inputSearchStyles.container}>
      <View
        style={[
          inputSearchStyles.inputContainer,
          isFocused && inputSearchStyles.inputContainerFocused,
          isDisabled && inputSearchStyles.inputContainerDisbled,
        ]}
      >
        <TouchableOpacity onPress={handleSearch}>
          <Icon>
            <Search
              color={
                !isDisabled
                  ? theme.color.surface.onBasePrimary
                  : theme.color.disabled.base
              }
            />
          </Icon>
        </TouchableOpacity>
        <TextInput
          editable={isDisabled}
          style={[
            inputSearchStyles.input,
            isDisabled && inputSearchStyles.inputDisabled,
          ]}
          placeholder="Search..."
          value={query}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChangeText={handleInputChange}
          onSubmitEditing={handleSearch}
        />
      </View>
      {selections.length > 0 && (
        <FlatList
          data={selections}
          renderItem={renderSelectionItem}
          keyExtractor={(item) => item.id.toString()}
          style={inputSearchStyles.selectionsList}
        />
      )}
    </View>
  );
};

export default InputSearch;

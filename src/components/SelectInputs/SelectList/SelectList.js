import { FlatList } from "react-native";

import refItems from "./SelectList.reference";
import SelectItem from "../SelectItem/SelectItem";
import {
  existsInArray,
  objectKeysMatch,
} from "../../../../util/helperFunctions/helperFunctions";
import { useState } from "react";

//TODO: Add error message and write a function to check all objects in the array match. Add userId to use as a value instead of fullname for user.

/**
 * This component renders a list if select items.
 * @prop {string} type required -> sets the type of select item to display. ('user', 'multiSelect', 'select')
 * @prop {array} itemList required -> array of objects that contain select items data.
 * See reference file for object and type options.
 * Ex.
 *  const ITEMS = [ 
    {
      itemLabel: 'item label',
      itemValue: '1',
      isDisabled: false
    },
    {
      itemLabel: 'item label',
      itemValue: '2',
      isDisabled: true
    },
    {
      itemLabel: 'item label',
      itemValue: '3',
      isDisabled: false
    }
  ]
 *
 * @returns {ReactElement} Renders a Select List.
 *
 * @example <SelectList type={'select'} itemList={ITEMS} />
 */
const SelectList = ({ type, itemList }) => {
  const typeValid = existsInArray(type, refItems.LIST_TYPES);
  if (!typeValid) return;

  const isUser = type === "user";
  const isMultiSelect = type === "multiSelect";

  const listIsValid = isUser
    ? objectKeysMatch(itemList[0], refItems.USER_ITEMS)
    : objectKeysMatch(itemList[0], refItems.SELECT_ITEMS);
  if (!listIsValid) return;

  const [multiSelectedValue, setMultiSelectedValue] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  const handleMultiSelected = (value) => {
    if (multiSelectedValue.includes(value)) {
      setMultiSelectedValue(
        multiSelectedValue.filter((multiVal) => multiVal !== value)
      );
      return;
    }
    setMultiSelectedValue([...multiSelectedValue, value]);
  };

  const handleSelectedValue = (value) => {
    setSelectedValue(value);
  };

  const renderSelectItem = ({ item }) => {
    return (
      <>
        {isUser ? (
          <SelectItem
            isUser={isUser}
            multiSelect
            isSelected={multiSelectedValue.includes(item.fullName)}
            onItemPress={() => handleMultiSelected(item.fullName)}
            fullName={item.fullName}
            userAvatar={item.userAvatar}
            userInitials={item.userInitials}
            isDisabled={item.isDisabled}
          />
        ) : (
          <>
            {isMultiSelect ? (
              <SelectItem
                multiSelect
                isSelected={multiSelectedValue.includes(item.itemValue)}
                itemLabel={item.itemLabel}
                onItemPress={() => handleMultiSelected(item.itemValue)}
                isDisabled={item.isDisabled}
              />
            ) : (
              <SelectItem
                isSelected={selectedValue === item.itemValue}
                itemLabel={item.itemLabel}
                onItemPress={() => handleSelectedValue(item.itemValue)}
                isDisabled={item.isDisabled}
              />
            )}
          </>
        )}
      </>
    );
  };

  return <FlatList data={itemList} renderItem={renderSelectItem} />;
};

export default SelectList;

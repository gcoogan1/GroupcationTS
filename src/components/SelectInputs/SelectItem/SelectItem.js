import { Pressable, Text, View } from "react-native";

import SelectButton from "../SelectButton/SelectButton";
import Avatar from "../../Avatar/Avatar";
import { selectItemStyles } from "./SelectItem.styles";

/**
 * This component renders a select item that can be either select, multiSelect, or user. (defaults to select)
 * @prop {boolean} isUser optional -> sets the item to user display
 * @prop {boolean} multiSelect optional -> sets the item to multiSelect
 * @prop {boolean} isSelected optional -> selected state of the item
 * @prop {function} onSelectPress required -> event to be fired when the select button is pressed
 * @prop {function} onItemPress required -> event to be fired when the item is pressed
 * @prop {string} itemLabel required -> label of item
 * @prop {string} fullName optional -> full name of user (MUST be passed if isUser is true)
 * @prop {string} userAvatar optional -> avatar (img) of user
 * @prop {string} userInitials optional -> initials of user (MUST be passed if isUser is true)
 * @prop {boolean} isDisabled optional -> disabled state of select box
 *
 * @important -> update the icon disabled color in parent component
 *
 * @returns {ReactElement} Renders a Select Item.
 *
 * @example
 * <SelectItem
      multiSelect
      isSelected
      itemLabel={"Option label"}
      onSelectPress={() => console.log("select pressed")}
      onItemPress={() => console.log("item pressed")}
    />
 */
const SelectItem = ({
  isUser,
  multiSelect,
  onSelectPress,
  isSelected,
  onItemPress,
  itemLabel,
  fullName,
  userAvatar,
  userInitials,
  isDisabled,
}) => {
  const selectButton = !!multiSelect ? (
    <SelectButton
      multiSelect
      onSelectPress={onSelectPress}
      isSelected={isSelected}
      isDisabled={isDisabled}
    />
  ) : (
    <SelectButton
      onSelectPress={onSelectPress}
      isSelected={isSelected}
      isDisabled={isDisabled}
    />
  );

  return (
    <>
      {!isUser ? (
        <View style={selectItemStyles.selectContainer}>
          <Pressable
            style={({ pressed, focused }) => [
              selectItemStyles.itemContainer,
              pressed && selectItemStyles.itemPressed,
              focused && selectItemStyles.itemFocused,
            ]}
            onPress={onItemPress}
            disabled={isDisabled}
          >
            {selectButton}
            <Text
              style={[
                selectItemStyles.label,
                !!isSelected && selectItemStyles.labelSelected,
                !!isDisabled && selectItemStyles.labelDisabled,
              ]}
            >
              {itemLabel}
            </Text>
          </Pressable>
        </View>
      ) : (
        <View style={selectItemStyles.selectContainer}>
          <Pressable
            style={({ pressed, focused }) => [
              selectItemStyles.itemContainer,
              { justifyContent: "space-between" },
              pressed && selectItemStyles.itemPressed,
              focused && selectItemStyles.itemFocused,
            ]}
            onPress={onItemPress}
            disabled={isDisabled}
          >
            <Avatar
              size="sm"
              avatarImage={{ uri: userAvatar }}
              initials={userInitials}
            />
            <Text
              style={[
                selectItemStyles.label,
                !!isSelected && selectItemStyles.labelSelected,
                !!isDisabled && selectItemStyles.labelDisabled,
              ]}
            >
              {fullName}
            </Text>
            <SelectButton
              multiSelect
              onSelectPress={onSelectPress}
              isSelected={isSelected}
              isDisabled={isDisabled}
            />
          </Pressable>
        </View>
      )}
    </>
  );
};

export default SelectItem;

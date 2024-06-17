import { View, Text, FlatList } from "react-native";

import SearchItem from "./SearchItem/SearchItem";
import { searchListStyles } from "./SearchList.styles";

/**
 * This component renders a list of search item components.
 * @prop {string} title required -> title of list
 * @prop {array} itemList required -> array of objects containing search item data. 
 * (object MUST include: itemLabel, full object can include: itemLabel, itemSubLabel, itemIcon)
 * ex. 
 * const items = [
 *  {
 *    itemLabel: 'Item Label', 
      itemSubLabel: "Item Sub-Label", 
      itemIcon: <Placeholder color={theme.color.surface.onBasePrimary} /> 
 *  },
    {
      itemLabel: 'Item Label', 
      itemSubLabel: "Item Sub-Label", 
      itemIcon: <Placeholder color={theme.color.surface.onBasePrimary} /> 
    }
 * ]
 * @prop {function} onSelect required -> event to be fired when a search item is pressed.
 * @prop {array} listStyles optional -> styles to be passed to list.
 * @returns {ReactElement} Renders a search list.
 *
 * @example
 * <SearchList title={"Section Title"} itemList={items} />
 */
const SearchList = ({ title, itemList, onSelect, listStyles }) => {
  return (
    <View style={searchListStyles.container}>
      <Text style={searchListStyles.title}>{title}</Text>
      <FlatList
        data={itemList}
        style={listStyles}
        renderItem={({ item }) => (
          <SearchItem
            itemLabel={item.itemLabel}
            itemSubLabel={item.itemSubLabel}
            itemIcon={item.itemIcon}
            onSelectItem={onSelect}
          />
        )}
      />
    </View>
  );
};

export default SearchList;

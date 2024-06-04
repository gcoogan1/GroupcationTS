import { View, Text, FlatList } from "react-native";

import SearchItem from "./SearchItem/SearchItem";
import { searchListStyles } from "./SearchList.styles";

/**
 * This component renders a list of search item components.
 * @prop {string} title required -> title of list
 * @prop {array} itemList required -> array of objects containing search item data. 
 * (object MUST include: itemLabel, itemSubLabel, itemIcon) 
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
 * @returns {ReactElement} Renders a search list.
 *
 * @example
 * <SearchList title={"Section Title"} itemList={items} />
 */
const SearchList = ({ title, itemList }) => {
  return (
    <View style={searchListStyles.container}>
      <Text style={searchListStyles.title}>{title}</Text>
      <FlatList
        data={itemList}
        renderItem={({ item }) => (
          <SearchItem
            itemLabel={item.itemLabel}
            itemSubLabel={item.itemSubLabel}
            itemIcon={item.itemIcon}
          />
        )}
      />
    </View>
  );
};

export default SearchList;

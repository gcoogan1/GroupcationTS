import { Pressable, Text, View } from "react-native";

import { searchItemStyles } from "./styles/SearchItem.styles";
import Pictogram from "../../Pictogram/Pictogram";

/**
 * This component renders a search item (Found inside a search list).
 * @prop {string} itemlabel required -> label of item
 * @prop {string} itemSublabel required -> sub-label of item
 * @prop {component} itemIcon required -> icon in item
 * @returns {ReactElement} Renders a search item.
 *
 * @example
 * <SearchItem
 *  itemLabel={'Item Label'}
 *  itemSubLabel={'Item Sub-Label'}
 *  itemIcon={<Placeholder color={theme.color.surface.onBasePrimary} />}
 * />
 */
const SearchItem = ({ itemLabel, itemSubLabel, itemIcon }) => {
  return (
    <Pressable
      style={({ pressed, focused }) => [
        searchItemStyles.container,
        pressed && searchItemStyles.pressedContainer,
        focused && searchItemStyles.focusedContainer,
      ]}
    >
      <Pictogram size="sm">{itemIcon}</Pictogram>
      <View>
        <Text style={searchItemStyles.label}>{itemLabel}</Text>
        <Text style={searchItemStyles.subLabel}>{itemSubLabel}</Text>
      </View>
    </Pressable>
  );
};

export default SearchItem;

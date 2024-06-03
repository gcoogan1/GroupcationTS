import { Pressable, Text, View } from "react-native";
import { searchItemStyles } from "./styles/SearchItem.styles";
import Pictogram from "../../Pictogram/Pictogram";

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

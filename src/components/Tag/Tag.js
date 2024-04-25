import { View, Text } from "react-native";

import { tagStyles } from "./styles/Tag.styles";
import Icon from "../Icon/Icon";
import TagConstants from "./constants/Tag.constants";
import { capitilaizeFirstLetter } from "../../../util/helperFunctions/helperFunctions";

/**
 * This component renders a tag specified by the tagType passed.
 * @prop {string} tagType required -> type of tag to display (see below). 
 * MUST be one of the following (strings): Favorited, Traveler, Creator, Following, Member, Admin
 * @prop {booleen} small optional -> if true, sets tag to small size (defaults to md size)
 * @returns {ReactElement} Renders a tag.
 *
 * @example
 * <Tag tagType='Favorited' />
 */
const Tag = ({ tagType, small }) => {
  return (
    <View style={tagStyles.container}>
      {TagConstants.TAGS.map((tag) => {
        if (tag.label === tagType) {
          return (
            <>
              <Icon key={tag.label} size={!!small && "sm"}>{tag.icon}</Icon>
              <Text
                style={[
                  tagStyles.label,
                  !!small && TagConstants.SM_LABEL_STYLE,
                ]}
              >
                {capitilaizeFirstLetter(tag.label)}
              </Text>
            </>
          );
        }
      })}
    </View>
  );
};

export default Tag;

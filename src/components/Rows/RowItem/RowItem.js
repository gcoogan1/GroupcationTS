import { Text, View } from "react-native";

import Icon from "../../Icon/Icon";
import { rowItemStyles } from "./styles/RowItem.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";

/**
 * This component renders a row item that inludes an icon and text.
 * @prop {svg} icon optional -> icon to be displayed
 * @prop {string} label required -> text for label
 * @prop {string} subLabel required -> text for subLabel
 * @returns {ReactElement} Renders a row item.
 *
 * @example
 * <RowItem label={'label'} subLabel={'sub-label'} icon={<Placeholder color="black" />} />
 */
const RowItem = ({
  icon,
  label,
  subLabel
}) => {

  return (
      <View style={rowItemStyles.container}>
        <View style={rowItemStyles.iconContainer}>
          {!!icon && <Icon>{icon}</Icon>}
        </View>
      <View style={rowItemStyles.labelContainer}>
        <Text style={rowItemStyles.label}>
          {capitilaizeFirstLetter(label)}
        </Text>
        <Text style={rowItemStyles.subLabel}>
          {capitilaizeFirstLetter(subLabel)}
        </Text>
      </View>
      </View>
  );
};

export default RowItem;

import { View } from "react-native";
import { rowListStyles } from "./styles/RowList.styles";

/**
 * This component renders a list of either row items or row item links.
 * @prop {component} children required -> row items or row item links to be displayed
 * @prop {boolean} isRowItemLink optional -> should be true if row item links are passed as children
 * @returns {ReactElement} Renders a list of rows.
 *
 * @example       
 * <RowList>
    <RowItem label={'label'} subLabel={'sub-label'} icon={<Placeholder color="black" />} />
    <RowItem label={'label'} subLabel={'sub-label'} icon={<Placeholder color="black" />} />
    <RowItem label={'label'} subLabel={'sub-label'} icon={<Placeholder color="black" />} />
 * </RowList>
 * 
 */
const RowList = ({ children, isRowItemLink }) => {
  return (
    <View
      style={[
        rowListStyles.listContainer,
        !!isRowItemLink
          ? rowListStyles.rowLinkListContainer
          : rowListStyles.rowListContainer,
      ]}
    >
      {children}
    </View>
  );
};

export default RowList;

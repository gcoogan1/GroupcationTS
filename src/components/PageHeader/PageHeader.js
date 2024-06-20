import { View, Text } from "react-native";

import { pageHeaderStyles } from "./styles/PageHeader.styles";

/**
 * This component renders a container with a header and sub-header.
 * @prop {string} header optional -> top header text
 * @prop {string} subHeader optional -> bottom sub-header text
 * @returns {ReactNode} Renders a page header.
 *
 * @example <PageHeader header={"page header"} subHeader={"page sub-header"} />
 */
const PageHeader = ({ header, subHeader }) => {
  return (
    <View style={pageHeaderStyles.container}>
      <Text style={pageHeaderStyles.header}>{header}</Text>
      <Text style={pageHeaderStyles.subHeader}>{subHeader}</Text>
    </View>
  );
};

export default PageHeader;

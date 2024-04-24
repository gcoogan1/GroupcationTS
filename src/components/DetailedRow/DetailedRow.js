import { Text, View } from "react-native";
import { capitilaizeFirstLetter } from "../../../util/helperFunctions/helperFunctions";
import { detailedRowStyles } from "./styles/DetailedRow.styles";

/**
 * This component renders a detailed row with optional button/avatarStack display.
 * @prop {string} rowLabel required -> label text to be displayed
 * @prop {string} rowText required -> row text to be displayed
 * @prop {component} rowButton optional -> button to be displayed
 * @prop {component} avatarStack optional -> avatarStack to be displayed
 * @returns {ReactElement} Renders a detailed row.
 *
 * @example
 * <DetailedRow
    rowLabel={"row label"}
    rowText={"row text"}
    rowButton={
      <Button
        buttonType="primary"
        buttonSize={"sm"}
        onPress={() => console.log("here")}
        iconRight={<Placeholder color="white" />}
        iconLeft={<Placeholder color="white" />}
        >
          Label
        </Button>
      }
     avatarStack={<AvatarStack users={usersInGroup} size={"md"} />}
   />
 */
const DetailedRow = ({ rowLabel, rowText, rowButton, avatarStack }) => {
  return (
    <View style={detailedRowStyles.container}>
      <View style={detailedRowStyles.contentContainer}>
        <Text style={detailedRowStyles.label}>
          {capitilaizeFirstLetter(rowLabel)}
        </Text>
        <Text style={detailedRowStyles.text}>
          {capitilaizeFirstLetter(rowText)}
        </Text>
        {!!rowButton && <>{rowButton}</>}
      </View>
      {!!avatarStack && <>{avatarStack}</>}
    </View>
  );
};

export default DetailedRow;

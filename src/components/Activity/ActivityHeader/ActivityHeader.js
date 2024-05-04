import { Text, View } from "react-native";

import Navbar from "../../Navbar/Navbar";
import Close from "../../../../assets/icons/Close.svg";
import Edit from "../../../../assets/icons/Edit.svg";
import Button from "../../Button/Button";
import Icon from "../../Icon/Icon";
import { theme } from "../../../styles/theme";
import ActivityConstants from "../constants/Activity.constants";
import { activityHeaderStyles } from "./styles/ActivityHeader.styles";
import Pictogram from "../../Pictogram/Pictogram";

//TODO: Replace constant text with user data (pass props or through state with react context) and fix tonal button colors (specifically note)

/**
 * This component renders an activity card based on type passed.
 * @prop {string} type required -> type of activity
 * MUST be one of the following (strings): "flight", "stay", "rental", "event" or "note"
 * @prop {function} onClosePress required -> event when close button is pressed
 * @prop {function} onEditPress required -> event when edit button is pressed
 * @returns {ReactElement} Renders an activity card.
 *
 * @example <ActivityCard type={"event"} />
 */
const ActivityHeader = ({ type, onClosePress, onEditPress }) => {
  const { ACTIVITIES } = ActivityConstants;
  return (
    <>
      {ACTIVITIES.map((activity) => {
        if (activity.type === type) {
          return (
            <View
              style={[
                activityHeaderStyles.container,
                { backgroundColor: activity.backgroundColor },
              ]}
            >
              <View style={activityHeaderStyles.navbar}>
                <Button
                  buttonSize="sm"
                  buttonType="tonal"
                  styles={{ gap: 0 }}
                  onPress={onClosePress}
                  iconRight={<Close color={activity.textColor} />}
                />
                <Button
                  buttonSize="sm"
                  buttonType="tonal"
                  textStyle={{ color: activity.textColor }}
                  onPress={onEditPress}
                  iconRight={<Edit color={activity.textColor} />}
                >
                  Edit
                </Button>
              </View>
              <View style={activityHeaderStyles.contentContainer}>
                <Pictogram>{activity.inversePictogram}</Pictogram>
                <Text
                  style={[
                    activityHeaderStyles.header,
                    { color: activity.textColor },
                  ]}
                >
                  {activity.header}
                </Text>
                <Text
                  style={[
                    activityHeaderStyles.subHeader,
                    { color: activity.textColor },
                  ]}
                >
                  {activity.subHeader}
                </Text>
              </View>
            </View>
          );
        }
      })}
    </>
  );
};

export default ActivityHeader;

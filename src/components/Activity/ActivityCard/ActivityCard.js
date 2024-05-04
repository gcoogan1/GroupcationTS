import { Pressable, Text, View } from "react-native";

import { activityCardStyles } from "./styles/ActivityCard.styles";
import activtyConstants from "./constants/ActivityCard.constants";
import Pictogram from "../../Pictogram/Pictogram";

// TODO: Replace activityConstants Header/subHeader with props passed, check types display

/**
 * This component renders an activity card based on type passed.
 * @prop {string} type required -> type of activity
 * MUST be one of the following (strings): "flight", "stay", "rental", "event" or "note"
 * @returns {ReactElement} Renders an activity card.
 *
 * @example <ActivityCard type={"event"} />
 */
const ActivityCard = ({ type }) => {
  const { ACTIVITIES } = activtyConstants;
  return (
    <>
      {ACTIVITIES.map((activity) => {
        if (type !== activity.type) return;
        return (
          <Pressable
            key={activity.type}
            style={({ pressed, focused }) => [
              activityCardStyles.container,
              pressed && activityCardStyles.pressedContainer,
              focused && activityCardStyles.focusedContainer,
            ]}
          >
            <Pictogram>{activity.pictogram}</Pictogram>
            <View style={activityCardStyles.textContent}>
              <Text style={activityCardStyles.headerText}>
                {activity.header}
              </Text>
              <Text style={activityCardStyles.subHeaderText}>
                {activity.subHeader}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </>
  );
};

export default ActivityCard;

import { Pressable, Text, View } from "react-native";

import { activityCardStyles } from "./styles/ActivityCard.styles";
import Pictogram from "../../Pictogram/Pictogram";

// TODO: Replace activityConstants Header/subHeader with props passed, check types display

/**
 * This component renders an activity card based on type passed.
 * @prop {array} activities required -> array of objects that have activity data.
 * See activity constants for reference of objects.
 * 
 * @returns {ReactElement} Renders an activity card.
 *
 * @example <ActivityCard type={"event"} />
 */
const ActivityCard = ({ activities }) => {
  return (
    <>
      {activities.map((activity) => {
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

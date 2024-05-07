import { Text, View } from "react-native";

import Icon from "../../Icon/Icon";
import ActivityInformationContstants from "./constants/ActivityInformation.constants";
import { activityInfoStyles } from "./styles/ActivityInformation.styles";

//TODO: Replace constant text with user data (pass props or through state with react context) and fix address fields

/**
 * This component renders an activity infomation card based on type passed.
 * @prop {string} type required -> type of activity
 * MUST be one of the following (strings): "flight", "stay", "rental", "event" or "note"
 * @returns {ReactElement} Renders activity information.
 *
 * @example <ActivityInformation type={"event"} />
 */
const ActivityInformation = ({ type }) => {
  const { ACTIVITY_INFORMATION } = ActivityInformationContstants;

  const activityInfoHeader = (header, subHeader, isFooter) => {
    return (
      <View style={[activityInfoStyles.summaryHeaderContainer, isFooter && { alignItems: 'baseline' }]}>
        <Text style={activityInfoStyles.summaryHeader}>{header}</Text>
        <Text style={activityInfoStyles.summarySubHeader}>{subHeader}</Text>
      </View>
    );
  };

  return (
    <>
      {ACTIVITY_INFORMATION.map((actInfo) => {
        if (actInfo.type === type) {
          return (
            <View style={activityInfoStyles.container}>
              {type !== "note" ? (
                <>
                  {type !== "event" && 
                    activityInfoHeader(
                      actInfo.summaryHeader,
                      actInfo.summarySubHeader
                    )
                  }
                  <View style={activityInfoStyles.detailsContainer}>
                    <View style={activityInfoStyles.departureContainer}>
                      <Icon size="lg">{actInfo.departureIcon}</Icon>
                      <View style={activityInfoStyles.departureTextContainer}>
                        <Text style={activityInfoStyles.departureHeader}>
                          {actInfo.departureHeader}
                        </Text>
                        <Text style={activityInfoStyles.departureSubHeader}>
                          {actInfo.departureSubHeader}
                        </Text>
                      </View>
                    </View>
                    <View style={activityInfoStyles.durationContainer}>
                      <Icon size="sm">{actInfo.durantionIcon}</Icon>
                      <Text style={activityInfoStyles.durationText}>
                        {actInfo.durantion}
                      </Text>
                    </View>
                    <View style={activityInfoStyles.departureContainer}>
                      <Icon size="lg">{actInfo.arrivalIcon}</Icon>
                      <View style={activityInfoStyles.departureTextContainer}>
                        <Text style={activityInfoStyles.departureHeader}>
                          {actInfo.arrivalHeader}
                        </Text>
                        <Text style={activityInfoStyles.departureSubHeader}>
                          {actInfo.arrivalSubheader}
                        </Text>
                      </View>
                    </View>
                  </View>
                  {!!actInfo.summaryFooter && (
                    <View style={activityInfoStyles.summaryFooterContainer}>
                      <Text style={activityInfoStyles.departureSubHeader}>
                        {actInfo.summaryFooter}
                      </Text>
                    </View>
                  )}
                  {type === "event" &&
                    activityInfoHeader(
                      actInfo.summaryHeader,
                      actInfo.summarySubHeader,
                      true
                    )}
                </>
              ) : (
                <View style={activityInfoStyles.notesContainer}>
                  <Text style={activityInfoStyles.notesText}>
                    {actInfo.details}
                  </Text>
                </View>
              )}
            </View>
          );
        }
      })}
    </>
  );
};

export default ActivityInformation;

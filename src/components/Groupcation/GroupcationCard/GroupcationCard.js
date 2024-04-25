import { ImageBackground, Pressable, Text, View } from "react-native";

import FavoriteToggle from "../../FavoriteToggle/FavoriteToggle";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import { groupcationCardStyles } from "./styles/GroupcationCard.styles";

/**
 * This component renders a groucation card that navigates to a groupcation 
 * and displays basic infomation about the groupcation
 * @prop {component} avatarStack required -> avatarStack to be displayed
 * @prop {component} cardTag required -> the tag to be displayed
 * @prop {string} groupcationName required -> groupcation name 
 * @prop {string} groupcationAddress required -> groupcation address
 * @prop {string} groupcationDates required -> groupcation dates
 * @prop {function} onPressCard required -> event to be fired when a card is clicked, 
 * MUST contain logic to navigate to the groupcation
 * @prop {string} cardImage required -> the background image of card
 * @returns {ReactElement} Renders a groupcation card.
 *
 * @example
 * <GroupcationCard
    groupcationName={"Groupcation Name"}
    groupcationAddress={"City, Country & 99 more"}
    groupcationDates={"1 Jan 3000 to 31 Dec 3000"}
    cardImage={
      "https://images.unsplash.com/photo-1525874684015-58379d421a52?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    cardTag={<Tag tagType="traveler" small />}
    avatarStack={<AvatarStack users={usersInGroup} size={"sm"} />}
    onPressCard={() => console.log("Navigate to groupcation.")}
  />
 */
const GroupcationCard = ({
  avatarStack,
  cardTag,
  groupcationName,
  groupcationAddress,
  groupcationDates,
  onPressCard,
  cardImage,
}) => {
  return (
    <Pressable
      style={({ pressed, focused }) => [
        groupcationCardStyles.container,
        pressed && groupcationCardStyles.containerPressed,
        focused && groupcationCardStyles.containerFocused,
      ]}
      onPress={onPressCard}
    >
      <ImageBackground
        source={{ uri: cardImage }}
        style={groupcationCardStyles.imageContainer}
      >
        <View style={groupcationCardStyles.imageTopOverlay}>
          <>{avatarStack}</>
          <FavoriteToggle size="sm" />
        </View>
        <View style={groupcationCardStyles.imageBottomOverlay}>
          <>{cardTag}</>
        </View>
      </ImageBackground>
      <View style={groupcationCardStyles.textContainer}>
        <Text style={groupcationCardStyles.textName} numberOfLines={1}>
          {capitilaizeFirstLetter(groupcationName)}
        </Text>
        <Text style={groupcationCardStyles.textAddress} numberOfLines={1}>
          {capitilaizeFirstLetter(groupcationAddress)}
        </Text>
        <Text style={groupcationCardStyles.textDates} numberOfLines={1}>
          {capitilaizeFirstLetter(groupcationDates)}
        </Text>
      </View>
    </Pressable>
  );
};

export default GroupcationCard;

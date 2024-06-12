import { Pressable, Text } from "react-native";

import Avatar from "../Avatar/Avatar";
import { userCardStyles } from "./UserCard.style";

/**
 * This component renders a card with user information.
 * @prop {string} fullname required -> users full name
 * @prop {string} userInitials required -> initials of user
 * @prop {function} onUserCardPress required -> event that is fired when the user card is pressed
 * @prop {string} userImage optional -> image of user (url)
 * @returns {ReactElement} Renders a user card.
 *
 * @example
 * <UserCard 
    fullname={"user name"}  
    userInitials={"CG"} 
    userImage={'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png'} 
   />
 */
const UserCard = ({ userInitials, fullname, onUserCardPress, userImage }) => {
  return (
    <Pressable
      style={({ pressed, focused }) => [
        userCardStyles.container,
        pressed && userCardStyles.pressed,
        focused && userCardStyles.focused,
      ]}
      onPress={onUserCardPress}
    >
      <Avatar
        size="lg"
        avatarImage={{ uri: userImage }}
        initials={userInitials}
      />
      <Text style={userCardStyles.text}>{fullname}</Text>
    </Pressable>
  );
};

export default UserCard;

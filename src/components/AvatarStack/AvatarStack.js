import { Pressable } from "react-native";

import Avatar from "../Avatar/Avatar";
import { avatarStackStyles } from "./styles/AvatarStack.styles";
import { theme } from "../../styles/theme";

/**
 * This component renders a stack of avatars based on the numbers of users given.
 * @prop {array of objects} string required -> users (avatars) to in a group
 * @prop {string} size optional -> sm, md (defaults to 'md')
 * @prop {function} avatarsOnPress optional -> clickable event for avatar stack
 * @returns {ReactElement} Renders an avatar.
 *
 * @note Only up to 4 users (avatars) cann be displayed. If more then 4, 3 users (avatars) will be displayed with
 * the last avatar (4th) to display the number of users (avatars) left.
 * @example 
 *  const usersInGroup = [
    {
      initials: 'gc',
      userId: '123'
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Patrick_Star.svg/440px-Patrick_Star.svg.png',
      initials: 'hb',
      userId: '456'
    }
  ]
 * 
 * <AvatarStack users={usersInGroup} size={'md'} />
 */
const AvatarStack = ({ users, size, avatarsOnPress }) => {
  const greaterThanFive = users.length >= 5;

  const displayedUsers = greaterThanFive && users.slice(0, 2);
  const remainingUsers = users.length - displayedUsers.length;

  return (
    <Pressable
      style={({ pressed, focused }) => [
        [avatarStackStyles.container],
        (pressed && !!avatarsOnPress) && { borderColor: theme.color.surface.onBasePrimary },
        (focused && !!avatarsOnPress) && { borderColor: theme.color.focus.line }
      ]}
      onPress={avatarsOnPress}
    >
      {!!greaterThanFive ? (
        <>
          {displayedUsers.map((user) => {
            return (
              <Avatar
                key={user.userId}
                size={size}
                avatarImage={{ uri: user.image }}
                initials={user.initials}
              />
            );
          })}
          <Avatar size={size} numOfUsers={remainingUsers} />
        </>
      ) : (
        <>
          {users.map((user) => {
            return (
              <Avatar
                key={user.userId}
                size={size}
                avatarImage={{ uri: user.image }}
                initials={user.initials}
              />
            );
          })}
        </>
      )}
    </Pressable>
  );
};

export default AvatarStack;

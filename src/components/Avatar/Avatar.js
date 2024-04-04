import { Image, Text, View } from "react-native";

import { avatarStyles } from "./styles/Avatar.styles";
import AvatarConstants from "./constants/Avatar.constants";

/**
 * This component renders an avatar with either a image or initials. If no props are passed
 * the default will be a md avatar with the initials AZ.
 * @prop {image} avatarImage optional -> users image (png) to be displayed
 * @prop {string} size optional -> sm, md, lg, xl, 2x (defaults to 'md')
 * @prop {string} initials optional -> users initials (limit to two characters)
 * @returns {ReactElement} Renders an avatar.
 * 
 * @note Image takes precedence over initials. So if an image if given, the image will appear instead of initials.
 * @example <Avatar avatarImage={require('./assets/imagery/DefaultAvatar.png')} size="2xl" />
 */
const Avatar = ({ avatarImage, size, initials }) => {
  const formatedInitials = !!initials ? initials.toUpperCase().slice(0, 2) : 'AZ';

  return (
    <>
      {!!avatarImage ? (
        <Image
          source={avatarImage}
          style={[
            size
              ? AvatarConstants.AVATAR_SIZES_STYLE[size]
              : AvatarConstants.AVATAR_SIZES_STYLE["md"],
            avatarStyles.image,
          ]}
        />
      ) : (
        <View
          style={[
            !!size
              ? AvatarConstants.AVATAR_SIZES_STYLE[size]
              : AvatarConstants.AVATAR_SIZES_STYLE["md"],
            avatarStyles.initialsContainer,
          ]}
        >
          <Text
            style={[
              !!size
                ? AvatarConstants.AVATAR_TEXT_STYLE[size]
                : AvatarConstants.AVATAR_TEXT_STYLE["md"],
                avatarStyles.text
            ]}
          >{formatedInitials}</Text>
        </View>
      )}
    </>
  );
};

export default Avatar;

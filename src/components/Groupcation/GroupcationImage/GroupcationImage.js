import { ImageBackground, Pressable, View } from "react-native";

import { theme } from "../../../styles/theme";
import { groupcationImageStyles } from "./styles/GroupcationImage.styles";
import Button from "../../Button/Button";
import Close from "../../../../assets/icons/Close.svg";
import Share from "../../../../assets/icons/Share.svg";
import Settings from "../../../../assets/icons/Settings.svg";

/**
 * This component renders a groucation image with navigation options (user, share, settings)
 * @prop {function} onClosePress required -> event to close the card
 * @prop {string} groupcationImage optional -> background image to be displayed, MUST be a url
 * @prop {component} imageTab optional -> the tag to be displayed (creator or traveler)
 * @prop {function} onTagPress optional -> event to navigate to user
 * @prop {function} onSharePress optional -> event to share groupcation
 * @prop {function} onSettingsPress optional -> event to navigate to settings 
 * @returns {ReactElement} Renders a groupcation image.
 *
 * @example
 * <GroupcationImage
    groupcationImage={
      "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
    imageTab={<Tag tagType={"traveler"} />}
    onTagPress={() => console.log("Tab")}
    onSharePress={() => console.log("Share")}
    onSettingsPress={() => console.log("Settings")}
   />
 */
const GroupcationImage = ({
  onClosePress,
  groupcationImage,
  imageTab,
  onTagPress,
  onSharePress,
  onSettingsPress,
}) => {
  const iconButton = (icon, iconOnPress) => {
    return (
      <View style={groupcationImageStyles.iconContainer}>
        <Button
          styles={{ gap: 0 }}
          buttonSize="sm"
          buttonType="default-inverse"
          iconRight={icon}
          onPress={iconOnPress}
        />
      </View>
    );
  };

  return (
    <ImageBackground
      source={{ uri: groupcationImage }}
      style={groupcationImageStyles.container}
    >
      <View style={groupcationImageStyles.topContentContainer}>
        <View style={{ width: 36, height: 36 }}>
          {iconButton(
            <Close color={theme.color.surface.onBasePrimary} />,
            onClosePress
          )}
        </View>
        <View style={groupcationImageStyles.topRightContent}>
          {!!onSharePress && (
            <>
              {iconButton(
                <Share color={theme.color.surface.onBasePrimary} />,
                onSharePress
              )}
            </>
          )}
          {!!onSettingsPress && (
            <>
              {iconButton(
                <Settings color={theme.color.surface.onBasePrimary} />,
                onSettingsPress
              )}
            </>
          )}
        </View>
      </View>
      {!!imageTab && !!onTagPress && (
        <View style={groupcationImageStyles.bottomContentContainer}>
          <Pressable
            style={({ pressed, focused }) => [
              { ...groupcationImageStyles.tagLink },
              pressed && { ...groupcationImageStyles.tagLinkPressed },
              focused && { ...groupcationImageStyles.tagLinkFocused },
            ]}
            onPress={onTagPress}
          >
            {imageTab}
          </Pressable>
        </View>
      )}
    </ImageBackground>
  );
};

export default GroupcationImage;

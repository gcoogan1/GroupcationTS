import { Pressable, Text, View } from "react-native";

import Icon from "../../Icon/Icon";
import ChevronRight from "../../../../assets/icons/Chevron_Right.svg";
import { theme } from "../../../styles/theme";
import { rowItemLinkStyles } from "./styles/RowItemLink.styles";
import { capitilaizeFirstLetter } from "../../../../util/helperFunctions/helperFunctions";
import RowItemLinkConstants from "./constants/RowItemLink.constants";

/**
 * This component renders a row item that inludes an icon and text.
 * @prop {string} type required -> type of row item link (basic, activity, user, notification, message, avatars)
 * @prop {string} label required -> text for label
 * @prop {string} subLabel optional -> text for subLabel
 * @prop {svg} icon optional -> icon to be displayed
 * @prop {component} user optional -> avatar to be displayed in place of icon
 * @prop {component} avatars optional -> avatar stack to be displayed
 * @prop {boolean} showChevron optional -> displays chevron (set to false if using avatars or message)
 * @prop {boolean} showDivider optional -> displays bottom divider
 * @prop {boolean} isDisabled optional -> sets disabled state if row item link
 * @prop {number} count optional -> number of messages left unread (type message)
 * @prop {string} time optional -> time the message was sent(type message) -> ex. 12:06pm, yesterday, 10/09/2024
 * @returns {ReactElement} Renders a row item.
 *
 * @note Be sure to update the icon color to match the button type
 * @example
 * <RowItemLink
    type={'avatars'}
    label={"label"}
    subLabel={"sub-label"}
    avatars={<AvatarStack users={users}  />}
    />
 */
const RowItemLink = ({
  type,
  label,
  subLabel,
  icon,
  user,
  avatars,
  showChevron,
  showDivider,
  isDisabled,
  count,
  time
}) => {
  const typeTextStyles = RowItemLinkConstants.ROW_ITEM_LINK_TEXT_STYLE[type];

  return (
    <>
      <View style={rowItemLinkStyles.container}>
        <Pressable
          style={({ pressed, focused }) => [
            rowItemLinkStyles.contentContainer,
            !!avatars && { padding: theme.spacing.sm },
            pressed && rowItemLinkStyles.pressedContentContainer,
            focused && rowItemLinkStyles.focusedContentContainer,
          ]}
        >
          <View style={rowItemLinkStyles.iconContainer}>
            {!!icon && <Icon>{icon}</Icon>}
            {!!user && <>{user}</>}
          </View>
          <View style={rowItemLinkStyles.labelContainer}>
            <Text
              numberOfLines={1}
              style={[
                rowItemLinkStyles.label,
                typeTextStyles?.label,
                isDisabled && rowItemLinkStyles.textDisabled,
              ]}
            >
              {capitilaizeFirstLetter(label)}
            </Text>
            {subLabel && type !== "user" && (
              <Text
                numberOfLines={2}
                style={[
                  rowItemLinkStyles.subLabel,
                  typeTextStyles?.subLabel,
                  isDisabled && rowItemLinkStyles.textDisabled,
                ]}
              >
                {capitilaizeFirstLetter(subLabel)}
              </Text>
            )}
          </View>
          <View
            style={[
              rowItemLinkStyles.extrasContainer,
              isDisabled && type === "avatars" && { opacity: 0.4 },
            ]}
          >
            {showChevron && (
              <Icon>
                <ChevronRight
                  color={
                    isDisabled
                      ? theme.color.disabled.onBase
                      : theme.color.surface.onBaseSecondary
                  }
                />
              </Icon>
            )}
            {!!avatars && type === "avatars" && <>{avatars}</>}
            {type === "message" && (
              <View style={rowItemLinkStyles.messageContainer}>
                <Text
                  style={[
                    rowItemLinkStyles.timeText,
                    isDisabled && rowItemLinkStyles.disabledExtraText,
                  ]}
                >
                  {time}
                </Text>
                <View
                  style={[
                    rowItemLinkStyles.countContainer,
                    isDisabled && rowItemLinkStyles.disabledCountConatiner,
                  ]}
                >
                  <Text
                    style={[
                      rowItemLinkStyles.countText,
                      isDisabled && rowItemLinkStyles.disabledExtraText,
                    ]}
                  >
                    {count}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </Pressable>
      </View>
      {showDivider && <View style={rowItemLinkStyles.divider}></View>}
    </>
  );
};

export default RowItemLink;

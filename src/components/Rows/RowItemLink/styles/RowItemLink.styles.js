import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const rowItemLinkStyles = StyleSheet.create({
  container: {
    width: 300,
    padding: theme.spacing.xs,
  },
  contentContainer: {
    ...theme.border.width.lg,
    ...theme.border.radius.sm,
    borderColor: 'transparent',
    flexDirection: 'row',
    padding: theme.spacing.md, 
    gap: theme.spacing.sm
  },
  pressedContentContainer: {
    ...theme.border.width.lg,
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary
  },
  focusedContentContainer: {
    ...theme.border.width.lg,
    borderColor: theme.color.focus.line
  },
  iconContainer: {
    minWidth: 20
  },
  labelContainer: {
    gap: theme.spacing["2xs"],
    flex: 2
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  },
  textDisabled: {
    color: theme.color.disabled.onBase
  },
  subLabel: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary
  },
  extrasContainer: {
    justifySelf: 'flex-start',
    justifyContent: 'center'
  },
  divider: {
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.surface.line
  },
  messageContainer: {
    alignItems: 'flex-end'
  },
  timeText: {
    ...theme.typeography.body.sm,
    color: theme.color.surface.onBaseSecondary,
  },
  countContainer: {
    ...theme.border.radius.full,
    paddingVertical: theme.spacing.xs,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.color.error.base
  },
  countText: {
    ...theme.typeography.body.mdBold,
    color: theme.color.error.onBase,
  },
  disabledCountConatiner: {
    backgroundColor: theme.color.disabled.base
  },
  disabledExtraText: {
    color: theme.color.disabled.onBase
  }
})
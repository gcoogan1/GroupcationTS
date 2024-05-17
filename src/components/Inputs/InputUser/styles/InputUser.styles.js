import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const inputUserStyles = StyleSheet.create({
  container: {
    width: 300,
    minHeight: 165,
    gap: theme.spacing["2xs"]
  },
  contentContainer: {
    ...theme.border.radius.sm,
    ...theme.border.width.lg,
    borderColor: theme.color.surface.onBasePrimary
  },
  contentContainerFocused: {
    borderColor: theme.color.focus.line
  },
  contentContainerError: {
    borderColor: theme.color.error.base
  },
  contentContainerDisabled: {
    borderColor: 'transparent',
    backgroundColor: theme.color.disabled.base
  },
  userContainer: {
    padding: theme.spacing.md,
    justifyContent: 'space-between',
    borderBottomWidth: theme.border.width.lg.borderWidth,
    borderBottomColor: theme.color.surface.onBasePrimary
  },
  userContainerFocused: {
    borderBottomColor: theme.color.focus.line
  },
  userContainerError: {
    borderBottomColor: theme.color.error.base
  },
  userContainerDisabled: {
    borderBottomWidth: theme.border.width.md.borderWidth,
    borderBottomColor: theme.color.disabled.onBase
  },
  userContent: {
    ...theme.border.radius.lg,
    ...theme.border.width.lg,
    maxWidth: 300,
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderColor: theme.color.surface.line,
    borderStyle: 'dashed',
    flexDirection: 'row'
  },
  userContentAvatar: {
    paddingVertical: 0,
    paddingHorizontal: 0,
    borderColor: 'transparent',
  },
  userEmptyText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary
  },
  userEmptyDisabled: {
    color: theme.color.disabled.onBase
  },
  labelContainer: {
    padding: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  labelText: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  },
  labelTextDisabled: {
    color: theme.color.disabled.onBase
  },
  labelTextError: {
    color: theme.color.error.base
  },
  errorText: {
    ...theme.typeography.body.md,
    color: theme.color.error.base
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22
  },
  modalContent: {
    height: 300,
    width: '100%',
    backgroundColor: theme.color.surface.layer,
    padding: theme.spacing.md
  },
  modalListItem: {
    padding: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm
  },
  modalText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  }
})
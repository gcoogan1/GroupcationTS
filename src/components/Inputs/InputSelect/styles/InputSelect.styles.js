import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const inputSelectStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    gap: theme.spacing["2xs"],
  },
  labelContainer: {
    ...theme.border.width.lg,
    borderColor: "transparent",
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
    textTransform: "capitalize",
  },
  labelError: {
    color: theme.color.error.base,
  },
  labelDisabled: {
    color: theme.color.disabled.onBase,
  },
  inputContainer: {
    ...theme.border.radius.sm,
    ...theme.border.width.lg,
    borderColor: theme.color.surface.onBasePrimary,
    padding: theme.spacing.md,
    backgroundColor: theme.color.surface.layer,
    gap: theme.spacing.xs,
  },
  inputContainerFocused: {
    borderColor: theme.color.focus.line,
  },
  inputContainerError: {
    borderColor: theme.color.error.base,
  },
  inputContainerDisabled: {
    borderColor: theme.color.disabled.base,
    backgroundColor: theme.color.disabled.base,
  },
  itemContainer: {
    padding: theme.spacing.md,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  placeholder: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
  placeholderSelected: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary,
  },
  placeholderDisabled: {
    color: theme.color.disabled.onBase,
  },
  leftIconContainer: {
    marginRight: theme.spacing.sm,
  },
  rightIconContainer: {
    flexDirection: "row",
  },
  helperText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
  helperTextDisabled: {
    color: theme.color.disabled.onBase,
  },
  errorText: {
    ...theme.typeography.body.md,
    color: theme.color.error.base,
  },
});

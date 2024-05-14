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
    backgroundColor: theme.color.surface.layer,
    gap: theme.spacing.xs,
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
    color: theme.color.surface.onBaseSecondary
  },
  placeholderSelected: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary,
  },
  placeholderDisabled: {
    color: theme.color.disabled.onBase,
  },
  helperText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
  helperTextDisabled: {
    color: theme.color.disabled.onBase,
  },
  errorIcon: {
    top: 18,
    right: 36
  },
  errorText: {
    ...theme.typeography.body.md,
    color: theme.color.error.base,
  }
});

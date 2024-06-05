import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const selectBoxStyles = StyleSheet.create({
  container: {
    ...theme.border.width.md,
    ...theme.border.radius.md,
    minWidth: 300,
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    flexDirection: "row",
    borderColor: theme.color.surface.line,
  },
  focused: {
    ...theme.border.width.lg,
    borderColor: theme.color.focus.line,
  },
  pressed: {
    ...theme.border.width.lg,
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.base,
  },
  disabled: {
    borderColor: theme.color.disabled.base,
  },
  selectedContainer: {
    ...theme.border.width.lg,
    ...theme.border.radius.lg,
    minWidth: 300,
    flexDirection: "row",
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary,
  },
  selectedFocused: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.focus.line,
  },
  selectedPressed: {
    backgroundColor: theme.color.surface.line,
    borderColor: theme.color.surface.onBasePrimary,
  },
  selectedDisabled: {
    backgroundColor: theme.color.disabled.base,
    borderColor: theme.color.disabled.onBase,
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
  },
  subLabel: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
  disabledText: {
    color: theme.color.disabled.onBase,
  },
});

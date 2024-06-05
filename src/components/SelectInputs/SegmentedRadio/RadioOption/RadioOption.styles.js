import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const radioOptionStyles = StyleSheet.create({
  button: {
    ...theme.border.radius.full,
    ...theme.border.width.lg,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    borderColor: "transparent",
  },
  text: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
    textTransform: "capitalize",
  },
  pressed: {
    backgroundColor: theme.color.surface.line,
    borderColor: theme.color.surface.layer,
  },
  focused: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.focus.line,
  },
  selectedButton: {
    ...theme.border.radius.full,
    ...theme.border.width.lg,
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.color.surface.onBasePrimary,
    borderColor: theme.color.surface.layer,
  },
  selectedText: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.base,
    textTransform: "capitalize",
  },
  selectedPressed: {
    borderColor: theme.color.surface.layer,
  },
  selectedFocused: {
    borderColor: theme.color.focus.line,
  },
});

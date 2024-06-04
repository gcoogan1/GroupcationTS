import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const userCardStyles = StyleSheet.create({
  container: {
    ...theme.border.width.lg,
    ...theme.border.radius.md,
    padding: theme.spacing.sm,
    alignItems: "center",
    gap: theme.spacing.sm,
    backgroundColor: theme.color.surface.base,
    borderColor: "transparent",
  },
  pressed: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary,
  },
  focused: {
    borderColor: theme.color.focus.line,
  },
  text: {
    ...theme.typeography.body.smBold,
    color: theme.color.surface.onBasePrimary,
    textTransform: "capitalize",
  },
});

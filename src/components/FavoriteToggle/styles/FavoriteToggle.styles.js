import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const favoriteToggleStyles = StyleSheet.create({
  filledContainer: {
    ...theme.border.width.lg,
    ...theme.border.radius.full,
    padding: theme.spacing.md,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.primary.base,
  },
  filledPressed: {
    borderColor: theme.color.primary.tonal,
  },
  filledFocus: {
    borderColor: theme.color.focus.line,
  },
  outlinedContainer: {
    ...theme.border.width.lg,
    ...theme.border.radius.md,
    padding: theme.spacing.md,
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.color.surface.base,
  },
  outlinedPressed: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary,
  },
  outlinedFocus: {
    backgroundColor: "rgba(255, 255, 255, .8)",
    borderColor: theme.color.focus.line,
  },
});

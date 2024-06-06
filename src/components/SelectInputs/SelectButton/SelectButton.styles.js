import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const selectButtonStyles = StyleSheet.create({
  selectContainer: {
    ...theme.border.width.lg,
    ...theme.border.radius.full,
    borderColor: "transparent",
  },
  multiSelectContainer: {
    ...theme.border.width.lg,
    ...theme.border.radius.sm,
    borderColor: "transparent",
  },
  containerFocused: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.focus.line,
  },
});

import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const rowListStyles = StyleSheet.create({
  listContianer: {
    ...theme.border.radius.md,
    width: 300
  },
  rowListContainer: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
    backgroundColor: theme.color.surface.layer
  },
  rowLinkListContainer: {
    ...theme.border.width.md,
    borderColor: theme.color.surface.line
  }
})
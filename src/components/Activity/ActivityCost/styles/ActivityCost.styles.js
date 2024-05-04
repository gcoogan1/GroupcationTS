import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const activityCostStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    gap: theme.spacing.sm
  },
  headerContainer: {
    ...theme.border.radius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    gap: theme.spacing["2xs"],
    backgroundColor: theme.color.surface.layer
  },
  title: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary
  },
  totalCost: {
    ...theme.typeography.title.md,
    color: theme.color.surface.onBasePrimary
  }
})
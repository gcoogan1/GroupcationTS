import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const rowItemStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    flexDirection: 'row',
    gap: theme.spacing.sm
  },
  iconContainer: {
    minWidth: 20
  },
  labelContainer: {
    gap: theme.spacing["2xs"]
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  },
  subLabel: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary
  }
})
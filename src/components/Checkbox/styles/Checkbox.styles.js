import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const checkboxStyles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: 'row',
    gap: theme.spacing.sm
  },
  labelContainer: {
    paddingVertical: 2
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
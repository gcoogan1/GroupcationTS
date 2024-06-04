import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const searchItemStyles = StyleSheet.create({
  container: {
    ...theme.border.width.lg,
    minWidth: 300,
    borderColor: 'transparent',
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
    flexDirection: 'row'
  },
  focusedContainer: {
    borderColor: theme.color.focus.line
  },
  pressedContainer: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary
  },
  label: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary
  },
  subLabel: {
    ...theme.typeography.body.sm,
    color: theme.color.surface.onBaseSecondary
  }
})
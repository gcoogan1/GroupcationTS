import { StyleSheet } from "react-native"

import { theme } from "../../../styles/theme"

export const utilityMessageStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.md,
  },
  messageContainer: {
    gap: theme.spacing.sm,
    alignItems: 'center'
  },
  textContainer: {
    gap: theme.spacing.xs,
    alignItems: 'center'
  },
  title: {
    ...theme.typeography.title.md,
    color: theme.color.surface.onBasePrimary
  },
  subTitle: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary
  }
})
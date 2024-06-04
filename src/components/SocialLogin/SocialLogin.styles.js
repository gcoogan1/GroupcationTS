import { StyleSheet } from "react-native";

import { theme } from "../../styles/theme";

export const socialLoginStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    gap: theme.spacing.sm
  },
  textContainer: {
    gap: theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center'
  },
  line: {
    width: 168,
    height: 1,
    backgroundColor: theme.color.surface.line
  },
  text: {
    ...theme.typeography.body.sm,
    color: theme.color.surface.onBaseSecondary
  }
})
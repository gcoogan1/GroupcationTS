import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme"

export const navLinkStyles = StyleSheet.create({
  container: {
    ...theme.border.radius.sm,
    width: 80,
    padding: theme.spacing["2xs"],
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    ...theme.typeography.body.sm,
    color: theme.color.surface.onBaseSecondary
  },
  focusedText: {
    color: theme.color.primary.base
  },
  diabledText: {
    color: theme.color.disabled.onBase
  }
});

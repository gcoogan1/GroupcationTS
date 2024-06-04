import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const socialLoginButtonStyles = StyleSheet.create({
  button: {
    ...theme.border.radius.md,
    ...theme.border.width.lg,
    padding: theme.spacing.md,
    borderColor: theme.color.surface.layer,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.sm
  },
  text: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  },
  focused: {
    borderColor: theme.color.focus.line,
  },
  pressed: {
    borderColor: theme.color.surface.onBasePrimary,
    backgroundColor: theme.color.surface.layer
  }
})
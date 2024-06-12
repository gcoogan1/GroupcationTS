import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const selectSmallBoxStyles = StyleSheet.create({
  container: {
    ...theme.border.radius.md,
    ...theme.border.width.md,
    padding: theme.spacing.md,
    borderColor: theme.color.surface.line
  },
  pressed: {
    ...theme.border.width.lg,
    borderColor: theme.color.surface.base,
    backgroundColor: theme.color.surface.layer
  },
  focused: {
    ...theme.border.width.lg,
    borderColor: theme.color.focus.line
  },
  disabled: {
    borderColor: theme.color.disabled.base
  },
  text: {
    ...theme.typeography.body.md,
    textTransform: 'capitalize',
    color: theme.color.surface.onBasePrimary
  },
  disabledText: {
    color: theme.color.disabled.onBase
  },
  selectedContainer: {
    ...theme.border.radius.md,
    ...theme.border.width.md,
    padding: theme.spacing.md,
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary
  },
  selectedPressed: {
    ...theme.border.width.lg,
    backgroundColor: theme.color.surface.line,
    borderColor: theme.color.surface.onBasePrimary
  },
  selectedFocused: {
    ...theme.border.width.lg,
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.focus.line
  },
  selectedDisabled: {
    ...theme.border.width.lg,
    backgroundColor: theme.color.disabled.base,
    borderColor: theme.color.disabled.onBase
  },
})
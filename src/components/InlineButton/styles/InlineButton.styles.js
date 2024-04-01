import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const defaultInlineStyles = StyleSheet.create({
  button: {
    ...theme.border.radius.full,
    ...theme.border.width.lg,
    width: '100%',
    height: '100%',
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.xs
  },
  focused: {
    borderColor: theme.color.focus.line,
  },
  pressed: {
    borderColor: theme.color.surface.onBasePrimary,
    backgroundColor: theme.color.surface.layer
  },
  text: {
    ...theme.typeography.body.mdBold,
    fontSize: 14
  }
});
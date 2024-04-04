import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const avatarStyles = StyleSheet.create({
  image: {
    ...theme.border.radius.full,
    ...theme.border.width.lg,
    borderColor: theme.color.surface.base,
    backgroundColor: theme.color.disabled.base
  },
  initialsContainer: {
    ...theme.border.radius.full,
    ...theme.border.width.lg,
    borderColor: theme.color.surface.base,
    backgroundColor: theme.color.primary.tonal,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: theme.color.primary.base,
  }
})
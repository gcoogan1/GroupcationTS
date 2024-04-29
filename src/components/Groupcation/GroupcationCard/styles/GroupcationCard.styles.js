import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const groupcationCardStyles = StyleSheet.create({
  container: {
    ...theme.border.radius.lg,
    ...theme.border.width.md,
    width: 240,
    padding: theme.spacing.sm,
    backgroundColor: theme.color.surface.base,
    borderColor: theme.color.surface.line,
  },
  containerPressed: {
    ...theme.border.width.lg,
    borderColor: theme.color.surface.onBasePrimary,
  },
  containerFocused: {
    ...theme.border.width.lg,
    borderColor: theme.color.focus.line,
  },
  imageContainer: {
    ...theme.border.radius.md,
    height: 160,
    justifyContent: "space-between",
    alignContent: "space-between",
    backgroundColor: theme.color.disabled.base,
    padding: theme.spacing.sm,
  },
  imageTopOverlay: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
  },
  imageBottomOverlay: {
    alignSelf: "flex-start",
  },
  textContainer: {
    padding: theme.spacing.sm,
    gap: theme.spacing["2xs"],
  },
  textName: {
    ...theme.typeography.title.sm,
    color: theme.color.surface.onBasePrimary,
  },
  textAddress: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
  textDates: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
});

import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const activityCardStyles = StyleSheet.create({
  container: {
    ...theme.border.width.lg,
    ...theme.border.radius.md,
    width: 300,
    flexDirection: "row",
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    backgroundColor: theme.color.surface.base,
    borderColor: theme.color.surface.line,
  },
  pressedContainer: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary,
  },
  focusedContainer: {
    borderColor: theme.color.focus.line,
  },
  textContent: {
    gap: theme.spacing["2xs"],
    justifyContent: "center",
  },
  headerText: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
  },
  subHeaderText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
});

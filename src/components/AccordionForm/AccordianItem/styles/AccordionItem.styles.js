import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const accordianItemStyles = StyleSheet.create({
  containerDefault: {
    ...theme.border.radius.md,
    ...theme.border.width.md,
    minWidth: 300,
    padding: theme.spacing.md,
    gap: theme.spacing.xs,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    borderColor: theme.color.surface.layer,
    backgroundColor: theme.color.surface.base
  },
  containerComplete: {
    borderColor: "transparent",
    backgroundColor: theme.color.surface.layer
  },
  containerFocused: {
    borderColor: theme.color.focus.line,
  },
  containerPressed: {
    ...theme.border.width.lg,
  },
  containerCompletePressed: {
    backgroundColor: theme.color.surface.line,
  },
  containerDisabled: {
    backgroundColor: theme.color.disabled.base,
  },
  stepContainerDefault: {
    ...theme.border.radius.full,
    width: 30, // -> 24?
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  stepContainer: {
    ...theme.border.width.lg,
    borderColor: theme.color.surface.line,
  },
  stepContainerComplete: {
    backgroundColor: theme.color.surface.line,
  },
  stepText: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
  titleContainer: {
    flex: 2,
    justifyContent: "center",
    marginLeft: 4,
  },
  title: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
  titleComplete: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
  },
  titleDisabled: {
    color: theme.color.disabled.onBase,
  },
  subTitle: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
});

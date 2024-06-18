import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const accodionFormStyles = StyleSheet.create({
  container: {
    ...theme.border.radius.lg,
    padding: theme.spacing.md,
    gap: theme.spacing.md,
    marginTop: 16,
    minWidth: 300,
    backgroundColor: theme.color.surface.base,
    elevation: 1,
    shadowColor: theme.color.shadow.dark,
    shadowOpacity: 0.12,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  stepContainer: {
    justifyContent: "center",
    paddingVertical: theme.spacing.xs,
    alignItems: "center",
  },
  stepTextContainer: {
    ...theme.border.radius.full,
    width: 32,
    height: 32,
    backgroundColor: theme.color.surface.line,
    justifyContent: "center",
    alignItems: "center",
  },
  stepText: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
  stepTitle: {
    ...theme.typeography.title.sm,
    color: theme.color.surface.onBasePrimary,
  },
  stepSubTitle: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
  inputsContainer: {
    gap: theme.spacing.sm,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

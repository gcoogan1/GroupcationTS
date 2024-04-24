import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const detailedRowStyles = StyleSheet.create({
  container: {
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderTopColor: theme.color.surface.line,
    paddingVertical: theme.spacing.md,
    gap: theme.spacing.xs,
  },
  contentContainer: {
    gap: theme.spacing.xs,
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBaseSecondary,
  },
  text: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary,
  },
});

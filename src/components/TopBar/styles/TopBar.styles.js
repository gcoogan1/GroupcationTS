import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const topBarStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    paddingTop: 56,
    paddingHorizontal: theme.spacing.md,
    paddingBottom: theme.spacing.md,
    gap: theme.spacing.sm,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    ...theme.typeography.title.lg,
    color: theme.color.surface.onBasePrimary,
    textTransform: "capitalize",
  },
});

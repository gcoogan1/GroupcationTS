import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const segmentedRadioStyles = StyleSheet.create({
  container: {
    ...theme.border.radius.lg,
    gap: theme.spacing.sm,
    alignItems: "center",
    padding: theme.spacing.lg,
    minWidth: 300,
  },
  containerBackground: {
    backgroundColor: theme.color.surface.layer,
  },
  inputContainer: {
    gap: theme.spacing["2xs"],
    alignItems: "center",
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
    textTransform: "capitalize",
  },
  options: {
    ...theme.border.radius.full,
    ...theme.border.width.lg,
    padding: theme.spacing.sm,
    minWidth: 300,
    gap: theme.spacing.sm,
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: theme.color.surface.base,
  },
  helperText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary,
  },
});

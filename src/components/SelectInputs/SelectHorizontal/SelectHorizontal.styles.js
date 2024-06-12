import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const selectHorizontalStyles = StyleSheet.create({
  container: {
    width: 300,
    gap: theme.spacing.sm,
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
    textTransform: "capitalize",
  },
  optionsContainer: {
    gap: theme.spacing.xs,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

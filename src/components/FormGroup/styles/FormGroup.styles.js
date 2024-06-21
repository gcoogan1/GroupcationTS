import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const formGroupStyles = StyleSheet.create({
  default: {
    padding: theme.spacing.md,
    gap: theme.spacing.md
  },
  compact: {
    padding: theme.spacing.md,
    gap: theme.spacing.sm
  },
  spacious: {
    padding: theme.spacing.md,
    gap: theme.spacing.lg
  }
})
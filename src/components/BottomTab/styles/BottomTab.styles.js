import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

export const bottomTabStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    borderTopWidth: 1,
    borderTopColor: theme.color.surface.line,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    backgroundColor: theme.color.surface.base,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: theme.spacing["2xs"]
  }
})
import { StyleSheet } from "react-native";
import { theme } from "../../../../styles/theme";

export const activityHeaderStyles = StyleSheet.create({
  container: {
    minWidth: 300
  },
  navbar: {
    paddingTop: 56,
    paddingHorizontal: theme.spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentContainer: {
    paddingBottom: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.sm,
    alignItems: 'center'
  },
  header: {
    ...theme.typeography.title.sm,
    color: theme.color.flight.onBase
  },
  subHeader: {
    ...theme.typeography.body.md,
    color: theme.color.flight.onBase
  }
})
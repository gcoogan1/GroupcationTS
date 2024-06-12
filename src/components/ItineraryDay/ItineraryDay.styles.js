import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const itineraryDayStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    gap: theme.spacing.xs
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dayText: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  },
  dateText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary
  }
})
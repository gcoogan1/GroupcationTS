import { StyleSheet } from "react-native";
import { theme } from "../../../styles/theme";

export const userInputStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  listContainer: {
    paddingBottom: theme.spacing.md,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.md,
    flex: 2,
  },
  selectContainer: {
    ...theme.border.radius.md,
    ...theme.border.width.md,
    borderColor: theme.color.surface.line
  },
  dateContainer: {
    padding: theme.spacing.md,
    gap: theme.spacing.md,
    alignItems: 'center'
  },
  inputFooter: {
    borderTopWidth: 1,
    width: '100%',
    paddingHorizontal: theme.spacing.md,
    paddingTop: theme.spacing.md,
    paddingBottom: theme.spacing.lg,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.xs,
    backgroundColor: theme.color.surface.base,
    borderColor: theme.color.surface.line
  }
})
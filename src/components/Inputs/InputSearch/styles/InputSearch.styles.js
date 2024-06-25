import { theme } from "../../../../styles/theme";

const { StyleSheet } = require("react-native");

export const inputSearchStyles = StyleSheet.create({
  container: {
    // alignItems: "center",
    marginHorizontal: 16,
    marginTop: 10,
    minWidth: 300,
    // minHeight: 130
  },
  inputContainer: {
    ...theme.border.radius.md,
    ...theme.border.width.lg,
    borderColor: "transparent",
    padding: theme.spacing.md,
    backgroundColor: theme.color.surface.layer,
    gap: theme.spacing.xs,
    flexDirection: "row",
    alignItems: "center"
  },
  inputContainerFocused: {
    borderColor: theme.color.focus.line, 
    backgroundColor: theme.color.surface.base
  },
  inputContainerDisabled: {
    backgroundColor: theme.color.disabled.base
  },
  input: {
    flex: 1,
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  },
  inputDisabled: {
    color: theme.color.disabled.onBase
  },
  listContainer: {
    paddingVertical: theme.spacing.md,
    gap: theme.spacing.md
  },
  selectionsList: {
    position: "absolute",
    width: "100%",
    maxHeight: 200,
    zIndex: 1,
    top: "100%"
  },
  emptyTextContainer: {
    ...theme.border.radius.lg,
    ...theme.border.width.lg,
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.md,
    gap: theme.spacing.sm,
    borderStyle: 'dashed',
    borderColor: theme.color.surface.line,
  },
  emptyText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
    textAlign: 'center',
    textTransform: 'capitalize'
  }
});

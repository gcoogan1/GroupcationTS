import { StyleSheet } from "react-native";

import { theme } from "../../../../styles/theme";

export const inputCurrencyStyles = StyleSheet.create({
  container: {
    minWidth: 300,
    minHeight: 130,
    gap: theme.spacing["2xs"],
  },
  labelContainer: {
    ...theme.border.width.lg,
    borderColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary,
    textTransform: "capitalize",
  },
  labelError: {
    color: theme.color.error.base,
  },
  labelDisabled: {
    color: theme.color.disabled.onBase,
  },
  currencySymbol: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  },
  inputContainer: {
    ...theme.border.radius.sm,
    ...theme.border.width.lg,
    borderColor: theme.color.surface.onBasePrimary,
    padding: theme.spacing.md,
    backgroundColor: theme.color.surface.layer,
    gap: theme.spacing.xs,
    flexDirection: "row",
    alignItems: "center"
  },
  inputContainerFocused: {
    borderColor: theme.color.focus.line,
  },
  inputContainerError: {
    borderColor: theme.color.error.base,
  },
  inputContainerDisabled: {
    borderColor: theme.color.disabled.base,
    backgroundColor: theme.color.disabled.base,
  },
  input: {
    ...theme.typeography.body.md,
    flex: 2,
    color: theme.color.surface.onBaseSecondary,
  },
  inputDisabled: {
    color: theme.color.disabled.onBase,
  },
  helperText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
    textTransform: "capitalize",
  },
  helperTextDisabled: {
    color: theme.color.disabled.onBase,
  },
  errorText: {
    ...theme.typeography.body.md,
    color: theme.color.error.base,
  },
  modalContianer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22
  },
  modalContent: {
    height: 300,
    width: '100%',
    backgroundColor: theme.color.surface.layer,
    padding: theme.spacing.md
  },
  modalListItem: {
    padding: theme.spacing.md
  },
  modalText: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBaseSecondary,
  }
});

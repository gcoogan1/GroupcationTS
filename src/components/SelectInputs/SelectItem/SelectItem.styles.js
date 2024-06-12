import { StyleSheet } from "react-native";

import { theme } from "../../../styles/theme";

 export const selectItemStyles = StyleSheet.create({
  selectContainer: {
    minWidth: 300,
    padding: theme.spacing.xs,
    borderBottomWidth: 1,
    borderColor: theme.color.surface.line
  },
  itemContainer: {
    ...theme.border.radius.sm,
    ...theme.border.width.lg,
    flexDirection: 'row',
    padding: theme.spacing.sm,
    gap: theme.spacing.sm,
    alignItems: 'center',
    borderColor: 'transparent'
  },
  itemPressed: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.base
  },
  itemFocused: {
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.focus.line
  },
  label: {
    ...theme.typeography.body.md,
    color: theme.color.surface.onBasePrimary,
    textTransform: 'capitalize'
  },
  labelSelected: {
    ...theme.typeography.body.mdBold,
  },
  labelDisabled: {
    color: theme.color.disabled.onBase
  }
 })
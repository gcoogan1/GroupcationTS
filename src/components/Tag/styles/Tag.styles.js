import { StyleSheet } from "react-native";

import { theme } from '../../../styles/theme';

export const tagStyles = StyleSheet.create({
  container: {
   ...theme.border.radius.sm,
   flexDirection: 'row',
   alignItems: 'center',
   padding: theme.spacing.xs,
   gap: theme.spacing.xs,
  backgroundColor: theme.color.surface.base
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  }
})
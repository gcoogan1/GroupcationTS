import { StyleSheet } from "react-native";

import { theme } from '../../../styles/theme';

export const tagStyles = StyleSheet.create({
  container: {
   ...theme.border.radius.sm,
   flexDirection: 'row',
   alignItems: 'center',
   padding: theme.spacing.xs,
   gap: theme.spacing.xs,
   backgroundColor: 'rgba(255, 255, 255, .1)'
  },
  label: {
    ...theme.typeography.body.mdBold,
    color: theme.color.surface.onBasePrimary
  }
})
import { StyleSheet } from 'react-native'
import { theme } from '../../../styles/theme'

export const defaultButtonStyles = StyleSheet.create({
  button: {
    ...theme.border.radius.md,
    ...theme.border.width.lg,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: theme.spacing.xs,
  },
  // focused: {
  //   borderColor: theme.color.focus.line
  // },
  text: {
    ...theme.typeography.body.mdBold
  }
})
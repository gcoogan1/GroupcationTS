import { StyleSheet } from 'react-native'
import { theme } from '../../styles/theme'

export const defaultButtonStyles = StyleSheet.create({
  button: {
    ...theme.border.radius.md,
    ...theme.border.width.lg,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    padding: theme.spacing.md,
    gap: theme.spacing.xs,
    borderColor: theme.color.primary.base,
    backgroundColor: theme.color.primary.base
  },
  pressed: {
    ...theme.border.width.lg,
    borderColor: theme.color.primary.tonal
  },
  focused: {
    borderWidth: 2,
    borderColor: theme.color.focus.line
  },
  disabled: {

  },
  text: {
    ...theme.typeography.body.mdBold,
    color: theme.color.primary.onBase
  }
})
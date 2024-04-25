import { StyleSheet } from 'react-native'

import { theme } from '../../../styles/theme'

export const favoriteToggleStyles = StyleSheet.create({
  filledContainer: {
    ...theme.border.radius.full,
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.primary.base
  },
  filledPressed: {
    ...theme.border.width.lg,
    borderColor: theme.color.primary.tonal
  },
  filledFocus: {
    ...theme.border.width.lg,
    borderColor: theme.color.focus.line
  },
  outlinedContainer: {
    ...theme.border.radius.md,
    padding: theme.spacing.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.surface.base
  },
  outlinedPressed: {
    ...theme.border.width.lg,
    backgroundColor: theme.color.surface.layer,
    borderColor: theme.color.surface.onBasePrimary
  },
  outlinedFocus: {
    ...theme.border.width.lg,
    backgroundColor: 'rgba(255, 255, 255, .8)',
    borderColor: theme.color.focus.line
  },
})
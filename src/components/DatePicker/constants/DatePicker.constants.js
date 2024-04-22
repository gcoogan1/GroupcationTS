import { theme } from "../../../styles/theme"

const THEME_STYLES = {
  textDayFontFamily: theme.typeography.body.md.fontFamily,
  textDayHeaderFontFamily: theme.typeography.body.sm.fontFamily,
  textMonthFontFamily: theme.typeography.body.mdBold.fontFamily
}

const START_DATE_STYLES = {
  startingDay: true, 
  endingDay: true,
  color: theme.color.surface.onBasePrimary,
  textColor: theme.color.surface.base,
}

const END_DATE_STYLES = {
  startingDay: true, 
  endingDay: true,
  color: theme.color.surface.onBasePrimary,
  textColor: theme.color.surface.base
}

const RANGE_DATE_STYLES = {
  color: theme.color.surface.layer
}

export default { THEME_STYLES, START_DATE_STYLES, END_DATE_STYLES, RANGE_DATE_STYLES }
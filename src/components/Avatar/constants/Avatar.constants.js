import { theme } from "../../../styles/theme"

const AVATAR_SIZES_STYLE = {
  sm: {
    width: 32,
    height: 32
  },
  md: {
    width: 48,
    height: 48
  },
  lg: {
    width: 64,
    height: 64
  },
  xl: {
    width: 80,
    height: 80
  },
  '2xl': {
    width: 96,
    height: 96
  }
}

const AVATAR_TEXT_STYLE = {
  sm: {
    ...theme.typeography.body.mdBold
  },
  md: {
    ...theme.typeography.title.sm
  },
  lg: {
    ...theme.typeography.title.md
  },
  xl: {
    ...theme.typeography.title.lg
  },
  '2xl': {
    ...theme.typeography.display.md
  }
}

export default { AVATAR_SIZES_STYLE, AVATAR_TEXT_STYLE }
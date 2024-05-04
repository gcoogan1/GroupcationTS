// Colors
const primitiveColors = {
  neutral: {
    white: "#FFFFFF",
    "100": "#F8F8F8",
    "200": "#EEEEEE",
    "300": "#DADADA",
    "400": "#B4B4B4",
    "500": "#707070",
    "600": "#5A5A5A",
    "700": "#383838",
    "800": "#2D2D2D",
    black: "#000000",
  },
  pink: {
    "50": "#FCE6F2",
    "100": "#FACCE4",
    "200": "#F499C9",
    "300": "#EF66AE",
    "400": "#E93393",
    "500": "#E40078",
    "600": "#B60060",
    "700": "#890048",
    "800": "#5B0030",
    "900": "#2E0018",
  },
  blue: {
    "50": "#E6F0FC",
    "100": "#CCE1FA",
    "200": "#99C3F4",
    "300": "#66A5EF",
    "400": "#3387E9",
    "500": "#0069E4",
    "600": "#0054B6",
    "700": "#003F89",
    "800": "#002A5B",
    "900": "#00152E",
  },
  red: {
    "50": "#FCEBEB",
    "100": "#F9D6D6",
    "200": "#F2ADAD",
    "300": "#EC8585",
    "400": "#E55C5C",
    "500": "#DF3333",
    "600": "#B22929",
    "700": "#861F1F",
    "800": "#591414",
    "900": "#2D0A0A",
  },
  green: {
    "50": "#E6F3E6",
    "100": "#CCE8CD",
    "200": "#99D09C",
    "300": "#66B96A",
    "400": "#33A139",
    "500": "#008A07",
    "600": "#006E06",
    "700": "#005304",
    "800": "#003703",
    "900": "#001C01",
  },
  yellow: {
    "50": "#FEFAE9",
    "100": "#FEF4D3",
    "200": "#FDE9A6",
    "300": "#FBDF7A",
    "400": "#FAD44D",
    "500": "#F9C921",
    "600": "#C7A11A",
    "700": "#957914",
    "800": "#64500D",
    "900": "#322807",
  },
  purple: {
    "50": "#F4E6FC",
    "100": "#E8CCFA",
    "200": "#D199F4",
    "300": "#BB66EF",
    "400": "#A433E9",
    "500": "#8D00E4",
    "600": "#7100B6",
    "700": "#550089",
    "800": "#38005B",
    "900": "#1C002E",
  },
  utility: {
    blue500: "#0000FF",
    red50: "#FDE6E6",
    red500: "#EB0000",
    orange50: "#FFF2E9",
    orange500: "#FF7C1F",
    green50: "#E6F3E7",
    green500: "#00820D",
  },
};
// -- Full color themes
const semanticColors = {
  surface: {
    base: primitiveColors.neutral.white,
    layer: primitiveColors.neutral[100],
    line: primitiveColors.neutral[200],
    onBasePrimary: primitiveColors.neutral[700],
    onBaseSecondary: primitiveColors.neutral[500],
  },
  primary: {
    base: primitiveColors.pink[500],
    tonal: primitiveColors.pink[50],
    onBase: primitiveColors.neutral.white,
  },
  flight: {
    base: primitiveColors.purple[500],
    tonal: primitiveColors.purple[50],
    onBase: primitiveColors.neutral.white,
  },
  stay: {
    base: primitiveColors.blue[500],
    tonal: primitiveColors.blue[50],
    onBase: primitiveColors.neutral.white,
  },
  rental: {
    base: primitiveColors.green[500],
    tonal: primitiveColors.green[50],
    onBase: primitiveColors.neutral.white,
  },
  event: {
    base: primitiveColors.red[500],
    tonal: primitiveColors.red[50],
    onBase: primitiveColors.neutral.white,
  },
  note: {
    base: primitiveColors.yellow[500],
    tonal: primitiveColors.yellow[50],
    onBase: primitiveColors.yellow[900],
  },
  error: {
    base: primitiveColors.utility.red500,
    tonal: primitiveColors.utility.red50,
    onBase: primitiveColors.neutral.white,
  },
  warning: {
    base: primitiveColors.utility.orange500,
    tonal: primitiveColors.utility.orange50,
    onBase: primitiveColors.neutral.white,
  },
  sucess: {
    base: primitiveColors.utility.green500,
    tonal: primitiveColors.utility.green50,
    onBase: primitiveColors.neutral.white,
  },
  focus: {
    line: primitiveColors.blue[500],
  },
  disabled: {
    base: primitiveColors.neutral[200],
    onBase: primitiveColors.neutral[400],
  },
  shadow: {
    dark: primitiveColors.neutral.black
  }
};

// Typography
const primitiveFonts = {
  regular: {
    fontFamily: 'Rubik_400Regular'
  },
  bold: {
    fontFamily: 'Rubik_600SemiBold'
  },
  decoration: "underlined"
}

//  -- Includes full CSS styles for fonts
const semanticFonts = {
  display: {
    md: {
      ...primitiveFonts.bold,
      fontSize: 40,
      // lineHeight: 48,
    },
  },
  title: {
    sm: {
      ...primitiveFonts.bold,
      fontSize: 18,
      // lineHeight: 24
    },
    md: {
      ...primitiveFonts.bold,
      fontSize: 22,
      // lineHeight: 28,
    },
    lg: {
      ...primitiveFonts.bold,
      fontSize: 30,
      // lineHeight: 36
    },
  },
  body: {
    sm: {
      ...primitiveFonts.regular,
      fontSize: 12,
      // lineHeight: 16
    },
    smBold: {
      ...primitiveFonts.bold,
      fontSize: 12,
      // lineHeight: 16
    },
    md: {
      ...primitiveFonts.regular,
      fontSize: 14,
      // lineHeight: 20
    },
    mdBold: {
      ...primitiveFonts.bold,
      fontSize: 14,
      // lineHeight: 20
    },
  },
  link: {
    sm: {
      ...primitiveFonts.bold,
      fontSize: 12,
      // lineHeight: 16,
      textDecoration: primitiveFonts.decoration,
    },
  },
};

// Border full CSS style for (width/radius)
const semanticBorder = {
  width: {
    md: {
      borderWidth: 1,
    },
    lg: {
      borderWidth: 2,
    },
  },
  radius: {
    sm: {
      borderRadius: 4,
    },
    md: {
      borderRadius: 9,
    },
    lg: {
      borderRadius: 12,
    },
    full: {
      borderRadius: 999,
    },
  },
};

// Spacing values
const semanticSpacing = {
  '2xs': 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 32,
  xl: 64
}

// Opacity full CSS style
const semanticOpacity = {
  strong: {
    opacity: 0.80
  },
  medium: {
    opacity: 0.40
  },
  weak: {
    opacity: 0.20
  },
  tonal: {
    opacity: 0.10,
  }
}

// Shadow full CSS style (overlay)
const semanticShadow = {
  overlay: '0 0 12px 0 rgba(0, 0, 0, 0.1)'
}

export const theme = {
  color: {...semanticColors},
  typeography: {...semanticFonts},
  border: {...semanticBorder},
  spacing: {...semanticSpacing},
  opacity: {...semanticOpacity},
  shadow: {...semanticShadow}
};

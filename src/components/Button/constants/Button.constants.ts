import { theme } from "../../../styles/theme";

interface ButtonStyle {
  borderColor: string;
  backgroundColor: string;
}

interface ButtonType {
  enabled: ButtonStyle;
  pressed: ButtonStyle;
  disabled: ButtonStyle;
}

interface ButtonSizes {
  padding: number;
}

interface ButtonStyles {
  [key: string]: ButtonType;
}

interface ButtonSizeStyles {
  [key: string]: ButtonSizes;
}

const BUTTON_TYPE_COLORS: ButtonStyles = {
  primary: {
    enabled: {
      borderColor: theme.color.primary.base,
      backgroundColor: theme.color.primary.base,
    },
    pressed: {
      borderColor: 'rgba(228, 0, 120, .7)',
      backgroundColor: 'rgba(228, 0, 120, .7)',
    },
    disabled: {
      borderColor: 'rgba(228, 0, 120, .1)',
      backgroundColor: 'rgba(228, 0, 120, .1)'
    },
  },
  default: {
    enabled: {
      borderColor: theme.color.surface.onBasePrimary,
      backgroundColor: theme.color.surface.onBasePrimary,
    },
    pressed: {
      borderColor: "rgba(56, 56, 56, .7)",
      backgroundColor: "rgba(56, 56, 56, .7)",
    },
    disabled: {
      borderColor: 'rgba(56, 56, 56, .1)',
      backgroundColor: 'rgba(56, 56, 56, .1)',
    },
  },
  "default-inverse": {
    enabled: {
      borderColor: theme.color.surface.base,
      backgroundColor: theme.color.surface.base,
    },
    pressed: {
      borderColor: theme.color.surface.base,
      backgroundColor: theme.color.surface.layer,
    },
    disabled: {
      borderColor: theme.color.disabled.base,
      backgroundColor: theme.color.disabled.base,
    },
  },
  secondary: {
    enabled: {
      borderColor: theme.color.surface.onBasePrimary,
      backgroundColor: "transparent",
    },
    pressed: {
      borderColor: theme.color.surface.onBasePrimary,
      backgroundColor: theme.color.surface.line,
    },
    disabled: {
      borderColor: theme.color.disabled.onBase,
      backgroundColor: "transparent",
    },
  },
  tonal: {
    enabled: {
      borderColor: "rgba(56, 56, 56, .1)",
      backgroundColor: "rgba(56, 56, 56, .1)",
    },
    pressed: {
      borderColor: theme.color.surface.onBasePrimary,
      backgroundColor: "rgba(56, 56, 56, .5)"
    },
    disabled: {
      borderColor: "transparent",
      backgroundColor: "transparent",
    },
  },
  "tonal-inverse": {
    enabled: {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
    pressed: {
      borderColor: theme.color.surface.base,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    disabled: {
      borderColor: 'rgba(255, 255, 255, 0.1)',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  tertiary: {
    enabled: {
      borderColor: theme.color.surface.layer,
      backgroundColor: "transparent",
    },
    pressed: {
      borderColor: theme.color.surface.onBasePrimary,
      backgroundColor: theme.color.surface.layer,
    },
    disabled: {
      borderColor: theme.color.surface.layer,
      backgroundColor: "transparent",
    },
  },
  destructive: {
    enabled: {
      borderColor: theme.color.error.base,
      backgroundColor: theme.color.error.base,
    },
    pressed: {
      borderColor: 'rgba(235, 0, 0, 0.85)',
      backgroundColor: 'rgba(235, 0, 0, 0.85)',
    },
    disabled: {
      borderColor: theme.color.disabled.base,
      backgroundColor: theme.color.disabled.base,
    },
  },
};

const BUTTON_SIZES_STYLE: ButtonSizeStyles = {
  md: {
    padding: theme.spacing.md,
  },
  sm: {
    padding: theme.spacing.sm,
  },
};

const DARK_BUTTON_TEXT: string[] = ["default-inverse", "secondary", "tonal", "tertiary"];
const DISABLED_LIGHT_BUTTON_TEXT: string[] = ["primary", "default"];

const buttonStyles = {
  BUTTON_TYPE_COLORS,
  DARK_BUTTON_TEXT,
  BUTTON_SIZES_STYLE,
  DISABLED_LIGHT_BUTTON_TEXT,
};

export default buttonStyles;

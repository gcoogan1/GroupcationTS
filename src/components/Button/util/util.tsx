import React, { ReactElement } from "react";

import { theme } from "../../../styles/theme";
import ButtonConstants from "../constants/Button.constants";
import Icon from "../../Icon/Icon";

export const getButtonStyle = (type: string, size: string, pressed: boolean, disabled: boolean) => {
  const { BUTTON_TYPE_COLORS, BUTTON_SIZES_STYLE } = ButtonConstants;

  const btnColors =
    BUTTON_TYPE_COLORS[type]?.["enabled"] ||
    BUTTON_TYPE_COLORS.default?.["enabled"];
  const pressedBtnColor =
    BUTTON_TYPE_COLORS[type]?.pressed || BUTTON_TYPE_COLORS.default?.pressed;
  const disabledBtnColor =
    BUTTON_TYPE_COLORS[type]?.disabled || BUTTON_TYPE_COLORS.default?.disabled;

  const btnSize = BUTTON_SIZES_STYLE[size] || BUTTON_SIZES_STYLE.md;

  return {
    ...(pressed ? pressedBtnColor : disabled ? disabledBtnColor : btnColors),
    ...btnSize,
  };
};

export const getTextStyle = (type: string, isDisabled: boolean) => {
  if (isDisabled) {
    const whiteText = ButtonConstants.DISABLED_LIGHT_BUTTON_TEXT.includes(type);
    return whiteText
      ? { color: theme.color.primary.onBase }
      : { color: theme.color.disabled.onBase };
  }
  
  const darkText = ButtonConstants.DARK_BUTTON_TEXT.includes(type);
  return darkText
    ? { color: theme.color.surface.onBasePrimary }
    : { color: theme.color.primary.onBase };
};

export const getDisplayIcon = (icon?: ReactElement, loading?: boolean): React.ReactNode => {
  if (icon && !loading) {
    return <Icon>{icon}</Icon>;
  }
  return null;
};

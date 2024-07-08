import React, { ReactNode } from "react";
import { View, ViewStyle } from "react-native";

type IconSize = "sm" | "lg" | "xl" | "2x" | "default";

const iconSizes: Record<IconSize, ViewStyle> = {
  sm: { width: 16, height: 16 },
  lg: { width: 24, height: 24 },
  xl: { width: 28, height: 28 },
  "2x": { width: 36, height: 36 },
  default: { width: 20, height: 20 },
};

interface IconProps {
  size?: IconSize;
  children: ReactNode;
}

/**
 * This component renders an icon based on size (defaults to a md size) and child (svg) passed.
 * @prop {ReactNode} children required -> svg to be displayed -> CHILD MUST HAVE A COLOR PROP
 * @prop {string} size optional -> sm, lg, xl, 2x, (defaults to default size)
 * @returns {ReactNode} Renders an icon.
 * 
 * @requires color SVG MUST HAVE A COLOR PROP
 * @example <Icon size="sm"> <Close color="white" /> </Icon>
 */
const Icon: React.FC<IconProps> = ({ size = "default", children }) => {
  const iconStyle = iconSizes[size] || iconSizes["default"];

  return <View style={iconStyle}>{children}</View>;
};

export default Icon;

import { View } from "react-native";

/**
 * This component renders an icon based on size (defaults to a md size) and child (svg) passed.
 * @prop {image} children required -> svg to be displayed -> CHILD MUST HAVE A COLOR PROP
 * @prop {string} size optional -> sm, lg, xl, 2x
 * @returns {ReactNode} Renders an icon.
 * 
 * @requires color SVG MUST HAVE A COLOR PROP
 * @example <Icon size="sm"> <Close color="white" /> </Icon>
 */
const Icon = ({ size, children }) => {
  const getIconSize = () => {
    const iconSize = {
      sm: { width: 16, height: 16 },
      lg: { width: 24, height: 24 },
      xl: { width: 28, height: 28 },
      "2x": { width: 36, height: 36 },
      default: { width: 20, height: 20 },
    };
    return iconSize[size] || iconSize.default;
  };

  const iconStyle = getIconSize(size);

  return <View style={{ ...iconStyle }}>{children}</View>;
};

export default Icon;

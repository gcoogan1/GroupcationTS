import { View } from "react-native";

/**
 * This component renders an icon based on size (defaults to a md size) and child (img) passed.
 * @param {image} children required -> image to be displayed -> CHILD MUST HAVE WIDTH & HEIGHT SET TO 100%
 * SVG ex. <Close width={'100%} height={'100%'} />
 * @param {string} size optional -> sm, lg, xl, 2x
 * @returns {ReactNode} Renders an icon.
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

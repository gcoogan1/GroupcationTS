import { View } from "react-native";

/**
 * This component renders a pictogram based on size (defaults to a md size) and child (img) passed.
 * @param {image} children required -> image to be displayed -> CHILD MUST HAVE WIDTH & HEIGHT SET TO 100%
 * SVG ex. <Close width={'100%} height={'100%'} />
 * @param {string} size optional -> sm, lg, xl, 2x
 * @returns {ReactNode} Renders a pictogram.
 */
const Pictogram = ({ size, children }) => {
  const getPictogramSize = () => {
    const pictogramSize = {
      sm: { width: 16, height: 16 },
      lg: { width: 24, height: 24 },
      xl: { width: 28, height: 28 },
      "2x": { width: 36, height: 36 },
      default: { width: 20, height: 20 },
    };
    return pictogramSize[size] || pictogramSize.default;
  };

  const pictogramStyle = getPictogramSize(size)

  return <View style={{ ...pictogramStyle }}>{children}</View>;
};

export default Pictogram;
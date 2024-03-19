import { View } from "react-native";

/**
 * This component renders a pictogram based on size (defaults to a md size) and child (svg) passed.
 * @prop {image} children required -> svg to be displayed
 * @prop {string} size optional -> sm, lg, xl, 2x
 * @returns {ReactNode} Renders a pictogram.
 * 
 * @example <Pictogram size="lg"> <User /> </Pictogram>
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
import { View } from "react-native";

/**
 * This component renders a pictogram based on size (defaults to a md size) and child (svg) passed.
 * @prop {image} children required -> svg to be displayed
 * @prop {string} size optional -> sm, lg, xl
 * @returns {ReactNode} Renders a pictogram.
 * 
 * @example <Pictogram size="lg"> <User /> </Pictogram>
 */
const Pictogram = ({ size, children }) => {
  const getPictogramSize = () => {
    const pictogramSize = {
      sm: { width: 32, height: 32 },
      lg: { width: 64, height: 64 },
      xl: { width: 80, height: 80 },
      default: { width: 48, height: 48 },
    };
    return pictogramSize[size] || pictogramSize.default;
  };

  const pictogramStyle = getPictogramSize(size)

  return <View style={{ ...pictogramStyle }}>{children}</View>;
};

export default Pictogram;
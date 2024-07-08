import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

import { theme } from "../../styles/theme";
import SmEllipse from "../../../assets/loader/SmEllipse.svg";
import MdEllipse from "../../../assets/loader/MdEllipse.svg";
import LgEllipse from "../../../assets/loader/LgEllipse.svg";
import XLEllipse from "../../../assets/loader/XLEllipse.svg";
import DoubleXLEllipse from "../../../assets/loader/DoubleXLEllipse.svg";

type LoaderSize = "sm" | "lg" | "xl" | "2x" | "default";

interface LoaderProps {
  size?: LoaderSize;
  color?: string;
}

/**
 * This component renders a loading spinner based on size (defaults to a md size).
 * @param {string} size optional -> sm, lg, xl, 2x
 * @param {string} color optional -> changes color of loader
 * @returns {ReactNode} Renders a loader.
 */
const Loader: React.FC<LoaderProps> = ({ size = "default", color }) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  const LoaderImage = () => {
    const loaderColor = color ? color : theme.color.surface.onBasePrimary
    const loaderSize = {
      sm: <SmEllipse fill={loaderColor}  />,
      lg: <LgEllipse fill={loaderColor}  />,
      xl: <XLEllipse fill={loaderColor}  />,
      "2x": <DoubleXLEllipse fill={loaderColor}  />,
      default: <MdEllipse fill={loaderColor} />,
    };

    return loaderSize[size] || loaderSize.default;
  };

  return (
    <Animated.View style={{ transform: [{ rotate: spin }] }}>
      <LoaderImage />
    </Animated.View>
  );
};

export default Loader;
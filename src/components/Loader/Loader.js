import { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

import SmEllipse from "../../../assets/loader/SmEllipse.svg";
import MdEllipse from "../../../assets/loader/MdEllipse.svg";
import LgEllipse from "../../../assets/loader/LgEllipse.svg";
import XLEllipse from "../../../assets/loader/XLEllipse.svg";
import DoubleXLEllipse from "../../../assets/loader/DoubleXLEllipse.svg";

/**
 * This component renders a loading spinner based on size (defaults to a md size).
 * @param {string} size optional -> sm, lg, xl, 2x
 * @returns {ReactNode} A React element that renders a loader.
 */

const Loader = ({ size }) => {
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
    const loaderSize = {
      sm: <SmEllipse />,
      lg: <LgEllipse />,
      xl: <XLEllipse />,
      "2x": <DoubleXLEllipse />,
      default: <MdEllipse />,
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
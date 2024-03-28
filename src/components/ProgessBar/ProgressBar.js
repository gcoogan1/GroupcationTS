import ProgressBar from "react-native-progress/Bar";

import { theme } from "../../styles/theme";

const Progress = ({ step }) => {
  return (
      <ProgressBar
        progress={step}
        width={300}
        color={theme.color.primary.base}
        unfilledColor={theme.color.surface.line}
        borderColor={theme.color.surface.line}
        height={4} //or hug
        borderRadius={0}
      />
  );
};

export default Progress;

import ProgressBar from "react-native-progress/Bar";

import { theme } from "../../styles/theme";

/**
 * This component renders a progress bar with the current step.
 * @prop {number} step required -> Must contain a step from 0-1 (.30 converts to 30%), 
 * otherwise no progress will be shown.
 * @returns {ReactElement} Renders a progress bar.
 * 
 * @example  <Progress step={.20} />
 */
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

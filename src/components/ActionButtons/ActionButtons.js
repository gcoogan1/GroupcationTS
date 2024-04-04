import { View } from "react-native";

import Button from "../Button/Button";
import {
  retrieveButtonPropertiesFromGroup,
  verifyButtonProperties,
} from "./util/util";
import Progress from "../ProgessBar/ProgressBar";
import Loader from "../Loader/Loader";
import { horizontalStyles, verticalStyles } from "./styles/ActionButton.styles";

/**
 * This component renders a group of action buttons based on layout given.
 * @param {string} layoutStyle required -> vertical or horizontal
 * @param {object} buttonsGroup required -> object must either have a vertical or horizontal nested object with the following properties:
  * @example vertical:  
  * const actionButtons = {
      vertical: {
        top: {
          label: 'Label Top',
          onPress: () => console.log("TOP")
        },
        middle: {
          label: 'Label Middle',
          onPress: () => console.log("MIDDLE")
        },
        bottom: {
          label: 'Label Bottom',
          onPress: () => console.log("BOTTOM")
        },
      }
    }
   * @example horizontal: 
    const actionButtons = {
      horizontal: {
        left: {
          label: 'Label Left',
          onPress: () => console.log("LEFT")
        },
        right: {
          label: 'Label Right',
          onPress: () => console.log("RIGHT")
        }
      }
  }
 * @param {number} progressStep required -> Must contain a step from 0-1
 * @returns {ReactElement} Renders a group of action buttons.
 * 
 * @example   
 * <ActionButtons
    layoutStyle="horizontal"
    buttonsGroup={actionButtons}
  />
 */
const ActionButtons = ({ layoutStyle, buttonsGroup, progressStep }) => {

  const buttonProperties = retrieveButtonPropertiesFromGroup(
    layoutStyle,
    buttonsGroup
  );

  if (buttonProperties.length === "0") {
    return <Loader />;
  }

  return (
    <>
      {layoutStyle === "vertical" ? (
        <View style={verticalStyles.layout}>
          <Button styles={{ width: '100%'}} buttonType={'default'} onPress={buttonProperties.top.onPress}>
            {buttonProperties.top.label}
          </Button>
          <Button styles={{ width: '100%'}} buttonType={'tonal'} onPress={buttonProperties.middle.onPress}>
            {buttonProperties.middle.label}
          </Button>
          <Button styles={{ width: '100%'}} buttonType={'tertiary'} onPress={buttonProperties.bottom.onPress}>
            {buttonProperties.bottom.label}
          </Button>
        </View>
      ) : (
        <View style={horizontalStyles.layout}>
          <Progress step={progressStep} />
          <View style={horizontalStyles.buttonsContainer}>
            <Button buttonType={'tertiary'}  onPress={buttonProperties.left.onPress}>
              {buttonProperties.left.label}
            </Button>
            <Button buttonType={'default'} onPress={buttonProperties.right.onPress}>
              {buttonProperties.right.label}
            </Button>
          </View>
        </View>
      )}
    </>
  );
};

export default ActionButtons;

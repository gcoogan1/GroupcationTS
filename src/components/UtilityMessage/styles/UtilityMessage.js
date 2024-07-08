import { View, Text } from "react-native";

import Pictogram from "../../Pictogram/Pictogram";
import Button from "../../Button/Button";
import Error from "../../../../assets/pictograms/Error.svg";
import Success from "../../../../assets/pictograms/Success.svg";
import { utilityMessageStyles } from "./UtilityMessage.styles";

/**
 * This component renders either an error or success message.
 * @prop {booleann} isError required -> if true an error message will show (default to success)
 * @returns {ReactElement} Renders a utility message.
 *
 * @example
 * <UtilityMessage  />
 */
const UtilityMessage = ({ isError }) => {

  const handleSuccess = () => {
    console.log("success");
  };

  const handleError = () => {
    console.log("error");
  };

  return (
    <View style={utilityMessageStyles.container}>
      <View style={utilityMessageStyles.messageContainer}>
        <Pictogram>{!!isError ? <Error /> : <Success />}</Pictogram>
        <View style={utilityMessageStyles.textContainer}>
          <Text style={utilityMessageStyles.title}>{!isError ? "Success!" : "Uh-oh!"}</Text>
          <Text style={utilityMessageStyles.subTitle}>
            {!isError
              ? "Something went wrong. Please try again."
              : "Action was successfully completed."}
          </Text>
        </View>
      </View>
      {!!isError ? (
        <Button onPress={handleError} buttonType={"tonal"}>
          Retry
        </Button>
      ) : (
        <Button onPress={handleSuccess} buttonType={"tonal"}>
          Continue
        </Button>
      )}
    </View>
  );
};

export default UtilityMessage;

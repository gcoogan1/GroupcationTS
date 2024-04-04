const REQUIRED_VERTICAL_KEYS = ["top", "middle", "bottom"];
const REQUIRED_HORIZONTAL_KEYS = ["left", "right"];
const REQUIRED_BUTTON_PROPERTIES = ["label", "onPress"];

const verifyButtonGroup = (btnsGroup, requiredKeys) => {
  const groupKeys = Object.keys(btnsGroup);
  const keysExist = requiredKeys.every((key) => groupKeys.includes(key));
  const buttonsVerified = !!keysExist && verifyButtonProperties(keysExist);
  return buttonsVerified;
};

const verifyButtonProperties = (obj) => {
  return Object.values(obj).every((nestedObj) =>
    REQUIRED_BUTTON_PROPERTIES.every(
      (requiredProperty) => requiredProperty in nestedObj
    )
  );
};

export const retrieveButtonPropertiesFromGroup = (groupType, buttonGroup) => {
  if (groupType === "vertical" && !!buttonGroup.vertical) {
    const verticalButtonsConfirmed = verifyButtonGroup(
      buttonGroup.vertical,
      REQUIRED_VERTICAL_KEYS
    );
    return !!verticalButtonsConfirmed && buttonGroup.vertical;
  }
  if (groupType === "horizontal" && !!buttonGroup.horizontal) {
    const horizontalButtonsConfirmed = verifyButtonGroup(
      buttonGroup.horizontal,
      REQUIRED_HORIZONTAL_KEYS
    );
    return !!horizontalButtonsConfirmed && buttonGroup.horizontal;
  }
  return null;
};

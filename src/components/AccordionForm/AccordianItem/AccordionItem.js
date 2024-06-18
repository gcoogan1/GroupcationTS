import { Text, Pressable, View } from "react-native";
import { useState } from "react";

import ChevronRight from "../../../../assets/icons/Chevron_Right.svg";
import ChevronDown from "../../../../assets/icons/Chevron_Down.svg";
import Icon from "../../Icon/Icon";
import { theme } from "../../../styles/theme";
import { accordianItemStyles } from "./styles/AccordionItem.styles";

/**
 * This component renders an accordion item with different styles based on whether
 * the accordion form is completeted or not. Expands to show an accordion form.
 * @prop {component} children required -> accordian form to be displayed when 
 * the item is expanded
 * @prop {number} step required -> step (number) of item
 * @prop {string} stepTitle required -> title in item
 * @prop {boolean} isComplete optional -> sets whether the accordion form inside the item is complete
 * @prop {string} stepSubTitle optional -> subtitle in item (only appears when isComplete is true)
 * @returns {ReactElement} Renders an accordion item.
 *
 * @example 
 *  <AccordionItem 
      step={1}
      stepTitle={"Step title"}
      stepSubTitle={'step sub-title'}
      isComplete
    >
      <Text>Accordion Form</Text>
    </AccordionItem>
 */
const AccordionItem = ({
  children,
  step,
  stepTitle,
  isComplete,
  stepSubTitle,
}) => {
  const [expanded, setExpanded] = useState(false);

  const iconColor = theme.color.surface.onBaseSecondary;

  const handleToggleItem = () => {
    setExpanded(!expanded);
  };

  const getContainerStyles = (pressed, focused) => {
    if (isComplete) {
      return [
        accordianItemStyles.containerDefault,
        accordianItemStyles.containerComplete,
        pressed && accordianItemStyles.containerCompletePressed,
        focused && accordianItemStyles.containerFocused,
      ];
    }
    return [
      accordianItemStyles.containerDefault,
      accordianItemStyles.container,
      pressed && accordianItemStyles.containerPressed,
      focused && accordianItemStyles.containerFocused,
    ];
  };

  const accordionBody = <View>{children}</View>;

  return (
    <View>
      <Pressable
        style={({ pressed, focused }) => getContainerStyles(pressed, focused)}
        onPress={handleToggleItem}
      >
        <View
          style={[
            accordianItemStyles.stepContainerDefault,
            !isComplete
              ? accordianItemStyles.stepContainer
              : accordianItemStyles.stepContainerComplete,
          ]}
        >
          <Text style={accordianItemStyles.stepText}>{step}</Text>
        </View>
        <View style={accordianItemStyles.titleContainer}>
          <Text
            style={[
              accordianItemStyles.title,
              isComplete && accordianItemStyles.titleComplete,
            ]}
          >
            {stepTitle}
          </Text>
          {isComplete && (
            <Text style={accordianItemStyles.subTitle}>{stepSubTitle}</Text>
          )}
        </View>
        <Icon>
          {expanded ? (
            <ChevronDown color={iconColor} />
          ) : (
            <ChevronRight color={iconColor} />
          )}
        </Icon>
      </Pressable>
      {expanded && accordionBody}
    </View>
  );
};

export default AccordionItem;

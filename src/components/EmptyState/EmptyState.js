import { Text, View } from 'react-native'

import Button from "../Button/Button";
import { emptyStateStyles } from './styles/EmptyState.styles';

/**
 * This component renders a container with text above a button.
 * @prop {string} text required -> text to be displayed above the button
 * @prop {function} onPress required -> onPress event for button
 * @prop {string} label required -> label of button
 * @returns {ReactElement} Renders a container with text and a button.
 * 
 * @example <EmptyState text={'Empty state text'} onPress={() => console.log("click")} label={'label'} />
 */
const EmptyState = ({ text, onPress, label }) => {
  return (
    <View style={emptyStateStyles.container}>
      <Text style={emptyStateStyles.text}>{text}</Text>
      <Button buttonType={'secondary'} onPress={onPress}>{label}</Button>
    </View>
  )
}

export default EmptyState
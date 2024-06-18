import { StyleSheet, Text, View } from 'react-native'
import AccordionItem from '../components/AccordionForm/AccordianItem/AccordionItem'

const TestSecondScreen = () => {
  return (
    <View style={styles.container}>
      <AccordionItem 
        step={1}
        stepTitle={"Step title"}
        stepSubTitle={'step sub-title'}
        isComplete
      >
        <Text>Accordion Form</Text>
      </AccordionItem>
    </View>
  )
}

export default TestSecondScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 400,
    alignItems: 'center',
    marginTop: 30,
    backgroundColor: "#fffff"
  },
  text: {
    color: 'red'
  }
})
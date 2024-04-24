import { StyleSheet, Text, View } from 'react-native'

const TestSecondScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test Second Screen</Text>
    </View>
  )
}

export default TestSecondScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  text: {
    color: 'red'
  }
})
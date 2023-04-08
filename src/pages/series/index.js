import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    height: '100%'
  }
})

const Series = () => {
  return (
    <View style={styles.container}>
      <Text>Series</Text>
    </View>
  )
}

export default Series
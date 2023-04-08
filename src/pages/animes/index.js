import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '100%'
  }
})

const Animes = () => {
  return (
    <View style={styles.container}>
      <Text>Animes</Text>
    </View>
  )
}

export default Animes
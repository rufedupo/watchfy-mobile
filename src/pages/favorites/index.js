import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: '100%'
  }
})

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Text>Favorites</Text>
    </View>
  )
}

export default Favorites
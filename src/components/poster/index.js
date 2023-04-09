import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10
  },
  cover:{
    width: 200,
    height: 300,
    borderRadius: 15,
    borderWidth: 1
  },
  title: {
    color: '#CED6D6',
    fontSize: 20,
    fontFamily: 'Lato_700Bold'
  },
  descriptionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%'
  },
  year: {
    fontSize: 15,
    color: '#698EA2',
    fontFamily: 'Lato_400Regular'
  },
  duration: {
    fontSize: 15,
    color: '#698EA2',
    fontFamily: 'Lato_400Regular',
    paddingRight: 28
  },
  info: {
    width: '100%',
    position: 'absolute',
    bottom: 15,
    left: 14,
    zIndex: 99
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 15,
    height: '55%',
    zIndex: 90,
    backgroundColor: 'transparent'
  }
})

const Poster = ({ item }) => {
  return(
    <TouchableOpacity style={styles.container} activeOpacity={0.75}>
      <Image
        source={{uri: item.cover}}
        style={styles.cover}
      />
      <View style={styles.info}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.descriptionContainer}>
          <Text style={styles.year}>{item.year}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
        </View>
      </View>
      <LinearGradient 
        style={styles.gradient}  
        colors={['transparent', 'rgba(0,0,0,0.70)', 'rgba(0,0,0,0.90)']} />
    </TouchableOpacity>
  )
}

export default Poster
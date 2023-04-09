import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Poster from '../poster'

const styles = StyleSheet.create({
  container: {
    paddingBottom: 15
  },
  titleArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    color: '#CED6D6',
    fontFamily: 'Lato_700Bold',
    textTransform: 'uppercase',
    paddingBottom: 15
  },
  seeAll: {
    fontSize: 15,
    color: '#CED6D6',
    fontFamily: 'Lato_700Bold',
    textTransform: 'uppercase',
    paddingBottom: 15
  }
})

const HomeSection = ({ title, tab, data }) => {
  const navigation = useNavigation();

  return(
    <View style={styles.container}>
      <View style={styles.titleArea}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate(tab)}>
          <Text style={styles.seeAll}>Ver todos</Text>
        </TouchableOpacity>
      </View>
      <FlatList 
        data={data}
        renderItem={Poster}
        horizontal
      />
    </View>
  )
}

export default HomeSection
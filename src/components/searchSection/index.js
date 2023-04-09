import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Octicons } from '@expo/vector-icons'
import Search from '../search'

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  search: {
    width: '95%',
    paddingRight: 14
  },
  filter: {
    width: '5%',
    alignItems: 'center'
  }
})

const SearchSection = ({ searchInputValue, setSearchInputValue, handleSearch }) => {
  return(
    <View style={styles.container}>
      <View style={styles.search}>
        <Search searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} handleSearch={handleSearch} />
      </View>
      <TouchableOpacity style={styles.filter} onPress={() => handleSearch()}>
        <Octicons 
          name='filter' 
          size={28} 
          color='rgba(206, 214, 214, 0.2)' 
        />
      </TouchableOpacity>
    </View>
  )
}

export default SearchSection
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import { Octicons } from '@expo/vector-icons'

const styles = StyleSheet.create({
  form: {
    width: '100%',
    backgroundColor: 'rgba(51, 54, 65, 0.5)',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'rgba(51, 54, 65, 0.6)',
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  input: {
    height: 54,
    color: 'rgba(206, 214, 214, 0.75)',
    fontSize: 17,
    fontFamily: 'Lato_400Regular', 
    padding: 0
  }
})

const Search = ({ searchInputValue, setSearchInputValue, handleSearch }) => {
  return(
    <View style={styles.form}>
      <TextInput 
        placeholder='Pesquisar' 
        placeholderTextColor='rgba(206, 214, 214, 0.2)'
        underlineColorAndroid='transparent'
        style={styles.input}
        value={searchInputValue}
        selectionColor='#E14429'
        onChangeText={(text) => setSearchInputValue(text)}
      />
      <TouchableOpacity activeOpacity={0.50} onPress={() => handleSearch()}>
        <Octicons 
          name='search' 
          size={28} 
          color='rgba(206, 214, 214, 0.2)' 
        />
      </TouchableOpacity>
    </View>
  )
}

export default Search
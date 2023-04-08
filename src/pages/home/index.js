import { 
  StatusBar, 
  StyleSheet, 
  SafeAreaView, 
  View, 
  TextInput, 
  TouchableOpacity  
} from 'react-native'
import { Octicons } from '@expo/vector-icons'
import Logo from '../../components/logo'
import { Lato_400Regular, useFonts } from '@expo-google-fonts/lato'
import { useState } from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#010412',
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15
  },
  form: {
    backgroundColor: 'rgba(51, 54, 65, 0.5)',
    width: '100%',
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
    width: '90%',
    maxWidth: '90%',
    height: 54,
    color: 'rgba(206, 214, 214, 0.75)',
    fontSize: 17,
    fontFamily: 'Lato_400Regular', 
    padding: 0
  }
})

const Home = () => {
  const [searchInputValue, setSearchInputValue] = useState('');

  const [fontLoaded] = useFonts({
    Lato_400Regular
  })

  if (!fontLoaded) return null

  const handleSearch = () => {
    console.log(searchInputValue)
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle = "light-content"
        hidden = {false}
        backgroundColor = "#010412"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <Logo />
      <View style={styles.form}>
        <TextInput 
          placeholder='Pesquisar' 
          placeholderTextColor='rgba(206, 214, 214, 0.2)'
          underlineColorAndroid='transparent'
          style={styles.input}
          value={searchInputValue}
          onChangeText={(text) => setSearchInputValue(text)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <Octicons 
            name='search' 
            size={28} 
            color='rgba(206, 214, 214, 0.2)' 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Home
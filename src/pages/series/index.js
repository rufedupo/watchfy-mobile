import { SafeAreaView, StyleSheet } from 'react-native'
import { useState } from 'react'
import SearchSection from '../../components/searchSection'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#01040E',
    paddingStart: 15,
    paddingRight: 15
	}
})

const Series = () => {
  const [searchInputValue, setSearchInputValue] = useState('')

  const handleSearch = () => {
    console.log('')
  }

  return (
		<SafeAreaView style={styles.container}>
			<SearchSection searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} handleSearch={handleSearch} />
		</SafeAreaView>
  )
}

export default Series
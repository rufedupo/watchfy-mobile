import { SafeAreaView, StyleSheet } from 'react-native'
import { useState } from 'react'
import SearchSection from '../../components/searchSection'

const dataJson = [
  {
    id: 1,
    title: 'Matrix',
    cover: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51unGrb-AAL._AC_.jpg',
    year: 1999,
    duration: '2h 16m',
    type: 'movie',
    isFavorite: true
  },
  {
    id: 4,
    title: 'Avatar',
    cover: 'https://img.elo7.com.br/product/original/46B928F/big-poster-filme-avatar-o-caminho-da-agua-90x60-cm-lo002-presente-geek.jpg',
    year: 2009,
    duration: '2h 42m',
    type: 'movie',
    isFavorite: false
  }
]

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#01040E',
    paddingStart: 15,
    paddingRight: 15
	}
})

const Movies = () => {
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

export default Movies
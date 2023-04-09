import { SafeAreaView, Text, StyleSheet } from 'react-native'
import Poster from '../../components/poster'

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
    id: 2,
    title: 'One Piece',
    cover: 'https://img.elo7.com.br/product/zoom/1EDFF3A/big-poster-do-anime-one-piece-tamanho-90x-0-cm-lo122-one-piece.jpg',
    year: 1999,
    duration: '1056 Episódios',
    type: 'anime',
    isFavorite: true
  }
]

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#01040E',
    paddingStart: 15,
    paddingRight: 15
	},
  title: {
    marginTop: 15,
    fontSize: 25,
    color: '#CED6D6',
    fontFamily: 'Lato_700Bold', 
  }
})

const Favorites = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Favoritos</Text>
      {dataJson.map((item) => {
        <Poster></Poster>
      })}
    </SafeAreaView>
  )
}

export default Favorites
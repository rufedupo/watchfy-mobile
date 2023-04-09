import { 
  StatusBar, 
  StyleSheet, 
  ScrollView,
  SafeAreaView
} from 'react-native'
import Logo from '../../components/logo'
import { useState } from 'react'
import Search from '../../components/search'
import HomeSection from '../../components/homeSection'

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
  },
  {
    id: 3,
    title: 'Supernatural',
    cover: 'https://m.media-amazon.com/images/I/81Oj9rnePcL.jpg',
    year: 2005,
    duration: '15 Temporadas',
    type: 'serie',
    isFavorite: false
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
    paddingTop: 15,
    paddingStart: 15,
    paddingEnd: 15
  }
})

const Home = () => {
  const [searchInputValue, setSearchInputValue] = useState('')
  const [favorites, setFavorites] = useState([''])

  const handleSearch = () => {
    console.log(searchInputValue)
  }

  const filterData = (tab) => {
    switch (tab) {
      case 0: 
        return dataJson.filter((d) => d.isFavorite === true)
      case 1: 
        return dataJson.filter((d) => d.type === 'movie')
      case 2: 
        return dataJson.filter((d) => d.type === 'serie')
      case 3: 
        return dataJson.filter((d) => d.type === 'anime')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle = 'light-content'
        hidden = {false}
        backgroundColor = '#01040E'
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      <Logo />
      <Search searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} handleSearch={handleSearch} />
      <ScrollView>
        {(favorites.length > 0) && <HomeSection title='Favoritos' tab='FavoritesTab' data={filterData(0)} />}
        <HomeSection title='Filmes' tab='MoviesTab' data={filterData(1)} />
        <HomeSection title='Series' tab='SeriesTab' data={filterData(2)} />
        <HomeSection title='Animes' tab='AnimesTab' data={filterData(3)} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
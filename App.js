import Routes from './src/routes'
import { NavigationContainer } from '@react-navigation/native'
import { Lato_400Regular, Lato_700Bold, useFonts } from '@expo-google-fonts/lato'

const App = () => {
  const [fontLoaded] = useFonts({
    Lato_700Bold,
    Lato_400Regular
  })

  if (!fontLoaded) return null

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App
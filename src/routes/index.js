import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../pages/home'
import Movies from '../pages/movies'
import Series from '../pages/series'
import Animes from '../pages/animes'
import Favorites from '../pages/favorites'
import HomeFillIcon from '../icons/HomeFillIcon'
import HomeIcon from '../icons/HomeIcon'
import CameraMovieIcon from '../icons/CameraMovieIcon'
import CameraMovieFillIcon from '../icons/CameraMovieFillIcon'
import GokuFillIcon from '../icons/GokuFillIcon'
import GokuIcon from '../icons/GokuIcon'
import TvWithPopcornIcon from '../icons/TvWithPopcornIcon'
import TvWithPopcornFillIcon from '../icons/TvWithPopcornFillIcon'
import StarIcon from '../icons/StarIcon'
import StarFillIcon from '../icons/StarFillIcon'

const Tab = createBottomTabNavigator()

const Routes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#E14429',
        tabBarStyle: {
          backgroundColor: '#010412',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen 
        name='HomeTab' 
        component={Home} 
        options={{
          tabBarIcon: ({ focused }) => focused ? <HomeIcon height='26' width='26' color='#E14429' /> : <HomeFillIcon  height='27' width='27' color='#CED6D6' />
        }}
      />
      <Tab.Screen 
        name='MoviesTab' 
        component={Movies}
        options={{
          tabBarIcon: ({ focused }) => focused ? <CameraMovieIcon height='23' width='23' color='#E14429' /> : <CameraMovieFillIcon  height='23' width='23' color='#CED6D6' />
        }}
      />
      <Tab.Screen 
        name='SeriesTab' 
        component={Series}
        options={{
          tabBarIcon: ({ focused }) => focused ? <TvWithPopcornIcon height='25' width='25' color='#E14429' /> : <TvWithPopcornFillIcon  height='26' width='26' color='#CED6D6' />
        }}
      />
      <Tab.Screen 
        name='AnimesTab'
        component={Animes} 
        options={{
          tabBarIcon: ({ focused }) => focused ? <GokuIcon height='21' width='21' color='#E14429' /> : <GokuFillIcon  height='21' width='21' color='#CED6D6' />
        }}
      />
      <Tab.Screen 
        name='FavoritesTab' 
        component={Favorites} 
        options={{
          tabBarIcon: ({ focused }) => focused ? <StarIcon height='23' width='23' color='#E14429' /> : <StarFillIcon  height='24' width='24' color='#CED6D6' />
        }}
      />
    </Tab.Navigator>
  )
}

export default Routes
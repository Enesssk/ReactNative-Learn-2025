import { createStackNavigator} from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from "../screens/Home/Home"
import MovieScreen from '../screens/MovieScreen/MovieScreen';
import Person from '../screens/Person/Person';
import Search from '../screens/Search/Search';

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false }}
                     initialRouteName="Home"
    >
      <Stack.Screen name={Routes.Home} component={Home}/>
      <Stack.Screen name={Routes.MovieScreen} component={MovieScreen}/>
      <Stack.Screen name={Routes.Person} component={Person}/>
      <Stack.Screen name={Routes.Search} component={Search}/>
    </Stack.Navigator>
  )
}

export default MainNavigation;
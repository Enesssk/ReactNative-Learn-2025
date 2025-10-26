import { createStackNavigator} from '@react-navigation/stack';
import { Routes } from './Routes';
import Home from "../screens/Home/Home"
import MovieScreen from '../screens/MovieScreen/MovieScreen';

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false }}
                     initialRouteName="Home"
    >
      <Stack.Screen name={Routes.Home} component={Home}/>
      <Stack.Screen name={Routes.MovieScreen} component={MovieScreen}/>
    </Stack.Navigator>
  )
}

export default MainNavigation;
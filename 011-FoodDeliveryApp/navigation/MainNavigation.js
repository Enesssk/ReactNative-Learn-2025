import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Restaurant from '../screens/Restaurant/Restaurant';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Home"}>
      <Stack.Screen name={"Home"} component={Home}/>
      <Stack.Screen name={"Restaurant"} component={Restaurant}/>
    </Stack.Navigator>
  )
}

export default MainNavigation;
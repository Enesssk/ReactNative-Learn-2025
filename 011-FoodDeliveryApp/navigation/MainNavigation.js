import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import Restaurant from '../screens/Restaurant/Restaurant';
import Delivery from '../screens/Delivery/Delivery';

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName={"Home"}>
      <Stack.Screen name={"Home"} component={Home}/>
      <Stack.Screen name={"Restaurant"} component={Restaurant}/>
      <Stack.Screen name={"Delivery"} options={{presentation: "modal"}} component={Delivery}/>
    </Stack.Navigator>
  )
}

export default MainNavigation;
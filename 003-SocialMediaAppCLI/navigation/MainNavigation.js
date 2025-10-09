import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import { Routes } from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { View } from 'react-native';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const ProfileTabs = createMaterialTopTabNavigator()

const tab1 = () => {
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>Welcome the Tab1</Text>
    </View>
  )
}
const tab2 = () => {
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>Welcome the Tab2</Text>
    </View>
  )
}
const tab3 = () => {
  return (
    <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Text>Welcome the Tab3</Text>
    </View>
  )
}

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator>
      <ProfileTabs.Screen name={"Tab1"}
                          options={{tabBarLabel: ({focused}) => (
        <ProfileTabTitle isFocused={focused} title={"Photos"}/>
        ),
        }} component={tab1}
      />
      <ProfileTabs.Screen name={"Tab2"}
        options={{tabBarLabel: ({focused}) => (
          <ProfileTabTitle isFocused={focused} title={"Videos"}/>
          ),
          }}
        component={tab2}/>
      <ProfileTabs.Screen name={"Tab3"}
                          options={{tabBarLabel: ({focused}) => (
                            <ProfileTabTitle title={"Used"} isFocused={focused}/>
                            ),
                          }}
                          component={tab3}/>
    </ProfileTabs.Navigator>
  )
}

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator screenOptions={{header: () => null, headerShown: false}}>
    <Drawer.Screen name={Routes.Home} component={Home}/>
    <Drawer.Screen name={Routes.Profile} component={Profile}/>
    </Drawer.Navigator>
  )
}

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null, headerShown: false}}
                     initialRouteName={"Drawer"}>
      <Stack.Screen name={"Drawer"} component={MainMenuNavigation}/>
    </Stack.Navigator>
  )
}

export default MainNavigation
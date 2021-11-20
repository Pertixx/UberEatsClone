import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeStack from '../StackNavigator/HomeStack'
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import BrowseScreen from '../../Screens/Browse'
import { RFValue } from 'react-native-responsive-fontsize'
import GroceryScreen from '../../Screens/Grocery'
import OrdersScreen from '../../Screens/Orders'
import AccountScreen from '../../Screens/Account'

const Tab = createBottomTabNavigator()

const BottomTabNav = () => {

  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#6c757d',
        tabBarActiveBackgroundColor: 'transparent',
        tabBarStyle: {
          backgroundColor: '#dee2e6',
          borderRadius: RFValue(10),
          margin: RFValue(10),
          position: 'absolute',
        },
        tabBarHideOnKeyboard: true,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeStack}
        options={{
          tabBarLabelStyle: {
            fontSize: RFValue(13)
          },
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" size={30} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Browse'
        component={BrowseScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: RFValue(13)
          },
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={30} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Grocery'
        component={GroceryScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: RFValue(13)
          },
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="shopping-bag" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Orders'
        component={OrdersScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: RFValue(13)
          },
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="receipt" size={24} color={color} />
          )
        }}
      />
      <Tab.Screen
        name='Account'
        component={AccountScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: RFValue(13)
          },
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="user" size={24} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export default BottomTabNav

const styles = StyleSheet.create({

})

import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from '../../Screens/Home'
import RestaurantDetail from '../../Screens/RestaurantDetail'

const Stack = createStackNavigator()

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='HomeStack' component={HomeScreen} />
      <Stack.Screen name='RestaurantDetail' component={RestaurantDetail} />
    </Stack.Navigator>
  )
}

export default HomeStack

const styles = StyleSheet.create({

})

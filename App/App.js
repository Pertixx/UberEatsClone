import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeScreen from './Screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNav from './Navigation/TabNavigator/BottomTabNav';

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <BottomTabNav />
      </NavigationContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

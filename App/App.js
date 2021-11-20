import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import HomeScreen from './Screens/Home';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomeScreen/>
      <StatusBar hidden={false}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: RFValue(30),
  },
});

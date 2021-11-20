import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === 'Delivery' ? '#000' : '#fff',
          ...styles.button
        }}
        onPress={() => setActiveTab('Delivery')}
      >
        <Text style={{color: activeTab === 'Delivery' ? '#fff' : '#000', ...styles.buttonText}}>Delivery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: activeTab === 'Pickup' ? '#000' : '#fff',
          ...styles.button
        }}
        key={2}
        onPress={() => setActiveTab('Pickup')}
      >
        <Text style={{color: activeTab === 'Pickup' ? '#fff' : '#000', ...styles.buttonText}}>Pickup</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HeaderTabs

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
    padding: RFValue(8),
    borderRadius: RFValue(15),
  },
  button: {
    alignItems: 'center',
    paddingHorizontal: RFValue(12),
    paddingVertical: RFValue(4),
    borderRadius: RFValue(30),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: RFValue(13),
  },
})

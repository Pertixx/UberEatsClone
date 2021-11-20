import React from 'react'
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name='location-sharp' size={30}/>
      <GooglePlacesAutocomplete
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: RFValue(30),
            fontWeight: '700',
          },
        }}
        placeholder='Search'
      />
      <TouchableOpacity
        style={styles.button}
      >
        <AntDesign name='clockcircle' size={14} />
        <Text style={{marginLeft: RFValue(4)}}>Search</Text>
      </TouchableOpacity>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#eee',
    marginHorizontal: RFValue(20),
    paddingHorizontal: RFValue(4),
    borderRadius: RFValue(30),
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: RFValue(30)
  },
})

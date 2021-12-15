import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const RestaurantItem = ({info}) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate('RestaurantDetail', {data: info})}
      >
        <Image
          source={{ uri: info.image_url }}
          style={styles.image}
          resizeMode='cover'
        />
        <TouchableOpacity style={styles.heartButton}>
          <FontAwesome name="heart-o" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.infoContainer}>
          <View>
            <Text style={{fontWeight: 'bold', fontSize: RFValue(14)}}>{info.name}</Text>
            <Text style={{color: '#adb5bd'}}>{info.review_count} reviews</Text>
          </View>
          <View style={styles.reviewContainer}>
            <Text>{info.rating}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default RestaurantItem

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#fff',
    padding: RFValue(10),
  },
  image: {
    width: '100%',
    height: RFValue(150),
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RFValue(10),
  },
  reviewContainer: {
    backgroundColor: '#eee',
    height: RFValue(32),
    width: RFValue(32),
    borderRadius: RFValue(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  heartButton: {
    position: 'absolute',
    right: RFValue(10),
    top: RFValue(10),
  },
})

import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoriesList from '../../Components/CategoriesList'
import HeaderTabs from '../../Components/HeaderTabs'
import RestaurantItem from '../../Components/RestaurantItem'
import SearchBar from '../../Components/SearchBar'

const YELP_API_KEY = 'GwtKpr4po9KWtW9pNbTc4Sx6k90AkM_85caccoH5G-nsAmnHgor6sMjRWpl0r06jjvF_vuTGbDS0kgjRq_S43ECKAscyVzCS7z0wjad9M3t8_7AQwq3KAvM0cCGZYXYx'

const HomeScreen = () => {
  const [restaurantsData, setRestaurantsData] = useState([])

  const items = [
    {key: 1, type: 'CategoriesList'},
    {key: 2, type: 'RestaurantItem', payload: restaurantsData},
  ]

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [])

  const getRestaurantsFromYelp = () => {
    const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurant&location=ArgentinaBuenoAires'
  
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions)
    .then(res => res.json())
    .then(json => setRestaurantsData(json.businesses))
  } 

  const _renderItem = (item) => {
    if (item.type === 'CategoriesList') {
      return (
        <View style={{backgroundColor: '#fff', paddingVertical: RFValue(10)}}>
          <CategoriesList/>
        </View>
      )
    }
    if (item.type === 'RestaurantItem') {
      return (
        item.payload.map((restaurant, index) => (
          <View key={restaurant.id} style={{marginTop: RFValue(10)}}>
          <RestaurantItem info={restaurant}/>
        </View>
        ))
      )
    }
  }

  console.log(restaurantsData)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <HeaderTabs/>
        <SearchBar/>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item, index) => item.key}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => _renderItem(item)}
      />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topContainer: {
    backgroundColor: '#fff',
    paddingBottom: RFValue(10)
  },
})

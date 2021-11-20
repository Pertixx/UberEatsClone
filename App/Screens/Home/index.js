import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import CategoriesList from '../../Components/CategoriesList'
import HeaderTabs from '../../Components/HeaderTabs'
import RestaurantItem from '../../Components/RestaurantItem'
import SearchBar from '../../Components/SearchBar'

const HomeScreen = () => {

  const restaurants = [
    {
      id: 123,
      image: 'https://cdn.pixabay.com/photo/2016/11/18/15/31/cooking-1835369_1280.jpg',
      name: 'Pf-Changs',
      time: '35-45 min',
      price: '$$',
      review: 762,
      rating: 4.7,
    },
    {
      id: 124,
      image: 'https://cdn.pixabay.com/photo/2021/07/19/16/04/pizza-6478478__480.jpg',
      name: 'Pizzeria Victor',
      time: '25-30 min',
      price: '$$',
      review: 438,
      rating: 4.4,
    },
    {
      id: 125,
      image: 'https://cdn.pixabay.com/photo/2018/08/03/08/33/food-3581341__480.jpg',
      name: 'Sushi Club',
      time: '30-40 min',
      price: '$$',
      review: 292,
      rating: 4.5,
    },
  ]

  const items = [
    {key: 1, type: 'CategoriesList'},
    {key: 2, type: 'RestaurantItem', payload: restaurants},
  ]

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

  return (
    <View style={styles.container}>
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
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  topContainer: {
    backgroundColor: '#fff',
    paddingBottom: RFValue(10)
  },
})

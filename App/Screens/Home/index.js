import React from 'react'
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import CategoriesList from '../../Components/CategoriesList'
import HeaderTabs from '../../Components/HeaderTabs'
import RestaurantItem from '../../Components/RestaurantItem'
import SearchBar from '../../Components/SearchBar'

const HomeScreen = () => {
  const items = [
    {type: 'CategoriesList'},
    {type: 'RestaurantItem'},
  ]

  const _renderItem = (item) => {
    if (item.type === 'CategoriesList') {
      return (
        <View>
          <CategoriesList/>
        </View>
      )
    }
    if (item.type === 'RestaurantItem') {
      return (
        <View>
          <RestaurantItem/>
        </View>
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
        keyExtractor={({index}) => index}
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
    backgroundColor: '#fff',
  },
  topContainer: {
    marginBottom: RFValue(15),
  },
})

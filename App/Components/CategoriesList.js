import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

const items = [
  {
    id: 1,
    image: require('../assets/images/shopping-bag.png'),
    label: 'Pick-Up',
  },
  {
    id: 2,
    image: require('../assets/images/bread.png'),
    label: 'Bakery Items',
  },
  {
    id: 3,
    image: require('../assets/images/fast-food.png'),
    label: 'Fast Food',
  },
  {
    id: 4,
    image: require('../assets/images/deals.png'),
    label: 'Deals',
  },
  {
    id: 5,
    image: require('../assets/images/coffee.png'),
    label: 'Coffee & Tea',
  },
  {
    id: 6,
    image: require('../assets/images/soft-drink.png'),
    label: 'Soft Drinks',
  },
  {
    id: 7,
    image: require('../assets/images/desserts.png'),
    label: 'Desserts',
  },
]

const CategoriesList = () => {

  const _renderItem = (item) => {
    return (
    <TouchableOpacity
      style={styles.itemButton}
    >
      <Image
        source={item.image}
        style={styles.itemImage}
        resizeMode='contain'
      />
      <Text style={{fontWeight: 'bold'}}>{item.label}</Text>
    </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => _renderItem(item)}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

export default CategoriesList

const styles = StyleSheet.create({
  container: {
    //paddingLeft: RFValue(10)
  },
  itemButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: RFValue(20)
  },
  itemImage: {
    width: RFValue(34),
    height: RFValue(34),
  },
  list: {
    paddingLeft: RFValue(20)
  },
})

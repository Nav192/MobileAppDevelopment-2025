import React, {useState} from 'react';
import {View, TextInput, FlatList, StyleSheet, Text} from 'react-native';
import {Search} from 'lucide-react-native';
import ProductCard from '../../components/moleculs/ProductCard/ProductCard';
import BottomNavigator from '../../components/moleculs/BottomNavigator/BottomNavigator';

const Product = ({navigation}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    {
      id: '1',
      name: 'Beras Premium',
      image: require('../../assets/produk.png'),
    },
    {id: '2', name: 'Beras Merah', image: require('../../assets/produk.png')},
    {
      id: '3',
      name: 'Beras Organic',
      image: require('../../assets/produk.png'),
    },
    {id: '4', name: 'Beras Genjot', image: require('../../assets/produk.png')},
    {
      id: '5',
      name: 'Beras Pandan Wangi',
      image: require('../../assets/produk.png'),
    },
    {id: '6', name: 'Beras Medium', image: require('../../assets/produk.png')},
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const renderItem = ({item}) => (
    <ProductCard
      image={item.image}
      name={item.name}
      onPress={() => console.log('Clicked', item.name)}
    />
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search product..."
          value={searchQuery}
          onChangeText={text => setSearchQuery(text)}
        />
        <Search size={20} color="black" />
      </View>

      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text>No products found</Text>
          </View>
        }
      />

      <BottomNavigator navigation={navigation} />
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E1EEBC',
  },
  searchContainer: {
    backgroundColor: '#E1EEBC',
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  productList: {
    paddingHorizontal: 10,
    paddingBottom: 60,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
});

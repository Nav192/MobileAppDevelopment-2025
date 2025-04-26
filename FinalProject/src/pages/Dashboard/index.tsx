import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import HeaderHome from '../../components/moleculs/HeaderDashboard';
import MenuItem from '../../components/moleculs/MenuItem/MenuItem';
import BottomNavigator from '../../components/moleculs/BottomNavigator/BottomNavigator';
import ProductCard from '../../components/moleculs/ProductCard/ProductCard';

const Dashboard = ({navigation}) => {
  const recommendedProducts = [
    {
      id: '1',
      name: 'Beras Premium',
      image: require('../../assets/produk.png'),
    },
    {id: '2', name: 'Beras Merah', image: require('../../assets/produk.png')},
  ];

  return (
    <View style={styles.page}>
      <ScrollView>
        <HeaderHome
          name="Jane Doe"
          email="JaneDoe@gmail.com"
          welcome="Welcome back, Jane Doe"
        />
        <View style={styles.container}>
          <View style={styles.menuContainer}>
            <MenuItem
              icon="bag"
              title="Buy Now"
              onPress={() => navigation.navigate('Product')}
            />
            <MenuItem
              icon="shopping-cart"
              title="Your Cart"
              onPress={() => navigation.navigate('Cart')}
            />
          </View>

          <Text style={styles.sectionTitle}>Recommended Product</Text>

          <View style={styles.productContainer}>
            {recommendedProducts.map(product => (
              <View key={product.id} style={styles.productItem}>
                <ProductCard
                  image={product.image}
                  name={product.name}
                  onPress={() => console.log('Clicked', product.name)}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <BottomNavigator navigation={navigation} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#E1EEBC',
  },
  container: {
    backgroundColor: '#FFFFFF',
    paddingBottom: 70,
  },
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#519259',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 20,
  },
  productItem: {
    marginBottom: 20,
  },
});

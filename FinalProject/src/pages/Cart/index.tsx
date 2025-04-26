// src/pages/CartPage.js
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import HeaderDasboard from '../../components/moleculs/HeaderDashboard';
import CartItem from '../../components/moleculs/CartItem/CartItem';
import Button from '../../components/atoms/Button';
import BottomNavigator from '../../components/moleculs/BottomNavigator/BottomNavigator';

const CartPage = ({navigation}) => {
  return (
    <View style={styles.page}>
      {/* User Info */}
      <View style={styles.userInfoContainer}>
        <HeaderDasboard name="Jane Doe" email="JaneDoe@gmail.com" />
      </View>

      {/* List of Cart Items */}
      <ScrollView style={styles.cartList}>
        <CartItem
          image={require('../../assets/produk.png')}
          name="Beras Premiu"
        />
        <CartItem
          image={require('../../assets/produk.png')}
          name="Beras Premium"
        />
        <CartItem
          image={require('../../assets/produk.png')}
          name="Beras Premium"
        />
      </ScrollView>

      {/* Checkout Button */}
      <View style={styles.checkoutButtonContainer}>
        <Button label="Checkout" color="#328E6E" textColor="#FFFFFF" />
      </View>

      {/* Bottom Navigation */}
      <BottomNavigator navigation={navigation} />
    </View>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  userInfoContainer: {
    backgroundColor: '#DFF2B2',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 30,
  },
  userInfoText: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  userEmail: {
    fontSize: 14,
    color: '#000',
  },
  cartList: {
    flex: 1,
    paddingVertical: 20,
  },
  checkoutButtonContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});

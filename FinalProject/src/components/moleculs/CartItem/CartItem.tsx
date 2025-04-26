// src/components/molecules/CartItem.js
import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CartItem = ({image, name}) => {
  const [checked, setChecked] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const toggleChecked = () => setChecked(!checked);
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  return (
    <View style={styles.container}>
      {/* Checklist */}
      <TouchableOpacity
        onPress={toggleChecked}
        style={styles.checkboxContainer}>
        <Icon
          name={checked ? 'check-box' : 'check-box-outline-blank'}
          size={24}
          color="#5E9B6F"
        />
      </TouchableOpacity>

      {/* Product Image */}
      <Image source={image} style={styles.image} resizeMode="contain" />

      {/* Product Info */}
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{name}</Text>

        {/* Quantity Controls */}
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={increaseQuantity}>
            <Icon name="add-box" size={30} color="lightgreen" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity onPress={decreaseQuantity}>
            <Icon name="indeterminate-check-box" size={30} color="red" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 20,
  },
  checkboxContainer: {
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 8,
  },
});

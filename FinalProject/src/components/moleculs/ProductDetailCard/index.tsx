import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';

const ProductDetailCard = ({image, name, description, stock, onPressBuy}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} resizeMode="contain" />
      <Text style={styles.productName}>{name}</Text>
      <Text style={styles.descriptionTitle}>Product description:</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.stock}>Stock Available: {stock}</Text>
      <TouchableOpacity style={styles.buyButton} onPress={onPressBuy}>
        <Text style={styles.buyButtonText}>Beli</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#E2F0C9',
    padding: 20,
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  descriptionTitle: {
    fontSize: 16,
    color: '#5E9B6F',
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 5,
    color: '#333',
  },
  stock: {
    fontSize: 16,
    color: '#5E9B6F',
    marginVertical: 15,
  },
  buyButton: {
    backgroundColor: '#3C9A73',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  buyButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

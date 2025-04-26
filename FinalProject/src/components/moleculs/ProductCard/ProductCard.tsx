import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';

const ProductCard = ({image, name, onPress}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    marginTop: 8,
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
  },
});

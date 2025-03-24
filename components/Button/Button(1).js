import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'orange'}) => {
  return (
    <TouchableOpacity style={styles.button(color)}>
      <Text style={styles.buttonText}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    padding: 15,
    marginTop: 25,
    borderRadius: 10,
    alignItems: 'center',
    margin: 5,
  }),
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

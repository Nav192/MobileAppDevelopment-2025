import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  label: {
    paddingLeft: 15,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ccc',
    margin: 10,
  },
});

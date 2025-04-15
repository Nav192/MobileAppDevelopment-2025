import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React, {useState} from 'react';

const TextInput = ({label, placeholder}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input
        placeholder={placeholder}
        style={[styles.input, isFocused && styles.inputFocused]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginBottom: 6,
  },
  input: {
    borderWidth: 1.7,
    borderColor: '#020202',
    borderRadius: 8,
    padding: 10,
    marginTop: 3,
  },
  inputFocused: {
    borderColor: 'blue',
  },
});

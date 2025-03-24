import React from 'react';
import {View, StyleSheet} from 'react-native';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import TextHeader from './components/Header/Header';

const Exercise3 = () => {
  return (
    <View>
      <TextHeader header="Welcome" />
      <Input label="Username" placeholder="Masukan username anda" />
      <Input label="Password" placeholder="Masukan password anda" />
      <Button label="Sign In" color="#FF6600" />
      <Button label="Sign In With Google" color="red" />
      <Button label="Sign In With Facebook" color="blue" />
      <Button label="Sign In With Apple ID" color="black" />
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  header: {
    padding: 20,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },

  label: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  input: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ccc',
  },

  button: {
    backgroundColor: '#FF6600',
    padding: 15,
    marginTop: 25,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

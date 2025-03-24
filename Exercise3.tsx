import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const Exercise3 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.text1}>
        <Text style={styles.welcome}>Welcome</Text>
      </View>

      <View>
        <Text style={styles.textuser}>Username</Text>
        <View style={styles.txtinputuser}>
          <TextInput
            style={styles.inputuser}
            placeholder="Enter your Username"
          />
        </View>
      </View>

      <View>
        <Text style={styles.textpassword}>Password</Text>
        <View style={styles.txtinputpass}>
          <TextInput
            style={styles.inputpass}
            placeholder="Enter your Password"
          />
        </View>
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  welcome: {
    padding: 20,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },

  textuser: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  txtinputuser: {
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },
  inputuser: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: '#ccc',
  },

  textpassword: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },

  txtinputpass: {
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },

  inputpass: {
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

  buttonView: {
    paddingLeft: 15,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 15,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

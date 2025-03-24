//rnefs - shortcut code

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redcontainer}></View>
      <View style={styles.greencontainer}></View>
      <View style={styles.bluecontainer}></View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly', //Main Axis
    alignItems: 'center', //Cross Axis
  },

  redcontainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },

  greencontainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },

  bluecontainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});

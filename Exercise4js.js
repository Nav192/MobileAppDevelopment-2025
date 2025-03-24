import {StyleSheet, Image, View} from 'react-native';
import React from 'react';

const Exercise4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topcontainer}>
        <View style={styles.blackcontainer}></View>
        <View style={styles.yellowcontainer}></View>
        <View style={styles.blackcontainer1}></View>
      </View>

      <View>
        <Image
          style={styles.image}
          source={require('./assets/logo-with-motto-3.png')}
        />
      </View>

      <View style={styles.bottomcontainer}>
        <View style={styles.blackcontainer2}></View>
        <View style={styles.yellowcontainer2}></View>
        <View style={styles.blackcontainer3}></View>
      </View>
    </View>
  );
};

export default Exercise4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  topcontainer: {
    backgroundColor: 'red',
    flexDirection: 'row',
  },

  bottomcontainer: {
    marginTop: 'auto',
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  blackcontainer: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    marginTop: 20,
    marginLeft: 10,
  },

  yellowcontainer: {
    backgroundColor: 'yellow',
    height: 90,
    width: 90,
    marginTop: 20,
    marginLeft: 20,
  },

  blackcontainer1: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    margin: 20,
  },

  blackcontainer2: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 10,
  },

  yellowcontainer2: {
    backgroundColor: 'yellow',
    height: 90,
    width: 90,
    marginTop: 20,
    marginBottom: 10,
  },

  blackcontainer3: {
    backgroundColor: 'black',
    height: 90,
    width: 90,
    marginTop: 20,
    marginRight: 20,
    marginBottom: 10,
  },

  image: {
    width: '100%',
    height: 90,
    alignItems: 'center',
    marginTop: 250,
    marginRight: 10,
    marginLeft: 5,
  },
});

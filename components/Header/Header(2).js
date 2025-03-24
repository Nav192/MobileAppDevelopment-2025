import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const TextHeader = ({header}) => {
  return (
    <View>
      <Text style={styles.header}>{header}</Text>
    </View>
  );
};

export default TextHeader;

const styles = StyleSheet.create({
  header: {
    paddingTop: 15,
    paddingLeft: 30,
    paddingBottom: 45,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
});

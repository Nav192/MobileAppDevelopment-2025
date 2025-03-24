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
    paddingLeft: 10,
    paddingBottom: 15,
    fontSize: 45,
    fontWeight: 'bold',
    color: 'black',
  },
});

import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackButton from '../../atoms/BackButton';

const Header = ({title, onBackPress}) => {
  return (
    <View style={styles.headerContainer}>
      <BackButton onPress={onBackPress} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 50,
    paddingLeft: 20,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 25,
    fontWeight: '500',
    textAlign: 'center',
    paddingLeft: 20,
    paddingTop: 5,
  },
});

export default Header;

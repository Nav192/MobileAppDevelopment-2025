import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {UserIcon} from 'lucide-react-native';

const HeaderDasboard = ({name, email, welcome}) => {
  return (
    <View style={styles.header}>
      <View style={styles.userInfo}>
        <UserIcon size={40} />
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <Text style={styles.welcome}>{welcome}</Text>
    </View>
  );
};

export default HeaderDasboard;

const styles = StyleSheet.create({
  header: {
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#777',
  },
  welcome: {
    marginTop: 10,
    fontSize: 16,
    color: '#519259',
  },
});

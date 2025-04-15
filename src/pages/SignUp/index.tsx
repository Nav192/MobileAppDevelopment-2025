import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/moleculs/Header';
import ProfilePicture from '../../components/moleculs/ProfilePicture';
import TextInput from '../../components/moleculs/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';

const SignUp = () => {
  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <Header title="Sign Up" />
        <View style={styles.contentContainer}>
          <ProfilePicture />

          <TextInput label="Full Name" placeholder="Type your full name" />
          <Gap height={20} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={20} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            secureTextEntry
          />

          <Button label="Continue" color="#02CF8E" textColor="#020202" />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});

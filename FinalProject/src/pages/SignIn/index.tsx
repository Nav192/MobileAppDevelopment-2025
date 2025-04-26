import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../components/moleculs/Header';
import TextInput from '../../components/moleculs/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import BackButton from '../../components/atoms/BackButton';

const SignIn = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('Dashboard');
  };

  const onSubmitSignUp = () => {
    navigation.navigate('SignUp');
  };
  return (
    <View style={styles.pageContainer}>
      <View>
        <BackButton />
        <Header title="Sign In" />
        <View style={styles.contentContainer}>
          <Gap height={26} />
          <TextInput
            label="Email Address"
            placeholder="Type your email address"
          />
          <Gap height={16} />
          <TextInput
            label="Password"
            placeholder="Type your password"
            secureTextEntry
            withIcon
          />
          <Gap height={24} />
          <Button
            label="Sign In"
            color="#328E6E"
            textColor="#FFFFFF"
            onPress={onSubmit}
          />
          <Gap height={12} />
          <TouchableOpacity>
            <Text style={styles.textAccount}>Don’t Have an Account?</Text>
          </TouchableOpacity>
          <Gap height={10} />
          <Button
            label="Sign Up"
            color="#328E6E"
            textColor="#FFFFFF"
            onPress={onSubmitSignUp}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#E1EEBC',
  },
  contentContainer: {
    borderRadius: 10,
    margin: 20,
    paddingTop: 50,
  },
  textAccount: {
    marginTop: 20,
    color: '#67AE6E',
    fontSize: 20,
  },

  Header: {
    paddingTop: 40,
  },
});

import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '../../components/moleculs/Header';
import {AddPhoto} from '../../assets';
import TextInput from '../../components/moleculs/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const SignUp = ({navigation}) => {
  const [photo, setPhoto] = useState(AddPhoto);

  const onSubmit = () => {
    navigation.navigate('SignIn');
  };

  const getImage = async () => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        maxWidth: 100,
        maxHeight: 100,
        quality: 0.5,
        includeBase64: true,
      });

      if (result.didCancel) {
        showMessage({
          message: 'You canceled picking a photo!',
          type: 'warning',
        });
      } else if (result.assets && result.assets.length > 0) {
        const assets = result.assets[0];
        const base64 = `data:${assets.type};base64,${assets.base64}`;
        const source = {uri: base64};
        setPhoto(source);
      }
    } catch (error) {
      showMessage({
        message: 'Error while picking photo!',
        type: 'danger',
      });
    }
  };

  return (
    <View style={styles.pageContainer}>
      <ScrollView>
        <Header title="Sign Up" />
        <View style={styles.contentContainer}>
          <View style={styles.profileContainer}>
            <View style={styles.profile}>
              <View style={styles.addPhoto}>
                <TouchableOpacity
                  style={styles.profile}
                  activeOpacity={0.7}
                  onPress={getImage}>
                  <Image source={photo} style={styles.avatar} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
            withIcon
          />
          <Gap height={20} />
          <TextInput
            label="Confirm Password"
            placeholder="Type again to confirm your password"
            secureTextEntry
            withIcon
          />

          <Button
            label="Continue"
            color="#328E6E"
            textColor="#FFFFFF"
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#E1EEBC',
  },
  contentContainer: {
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  addPhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

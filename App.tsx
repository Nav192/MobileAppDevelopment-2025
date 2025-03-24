import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    //JSX
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput style={styles.input} placeholder="Enter Your email" />
        <TextInput style={styles.input} placeholder="Enter Your password" />
        <TouchableOpacity style={styles.button} activeOpacity={0.5}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <View style={styles.container1}>
          <Text style={styles.subtitle}>Core Components React Native</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.subtitle}>Mobile App Development Class</Text>
        </View>
        <View>
          <Text style={styles.subTitle}>Image from local directory</Text>
          <Image
            style={styles.img1}
            source={require('./assets/EpOqfO6d_400x400.png')}></Image>
        </View>
        <View>
          <Text style={styles.subTitle}>Image from Public</Text>
          <Image
            style={styles.img1}
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1738857914575-3d3b2fb7064e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
            }}></Image>
        </View>
        <View>
          <Text style={styles.subTitle}>Image from Base64</Text>
          <Image
            style={styles.img1}
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1738857914575-3d3b2fb7064e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
            }}></Image>
        </View>
      </ScrollView>
    </View>
  );
};

//3.Export Component
export default App;

//4.Styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'yellow',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 30,
    fontWeight: '500',
    textAlign: 'center',
    color: 'white',
  },
  container1: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  container3: {
    backgroundColor: 'green',
    borderColor: 'black',
    borderWidth: 5,
    padding: 20,
    margin: 20,
    borderRadius: 20,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '500',
    paddingBottom: 20,
    paddingLeft: 10,
  },
  img1: {
    height: 200,
    width: 200,
    marginLeft: 100,
  },

  input: {
    borderWidth: 1,
    borderColor: 'black',
    margin: 20,
    padding: 20,
    fontSize: 25,
    borderRadius: 15,
  },

  button: {
    backgroundColor: 'blue',
    margin: 20,
    padding: 20,
    borderRadius: 15,
  },

  buttonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

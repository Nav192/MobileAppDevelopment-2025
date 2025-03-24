import React, {useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

const Exercise2 = () => {
  const [name, setName] = useState('Navys Gosal');
  const [email, setEmail] = useState('navysgosal@gmail.com');
  const [question, setQuestion] = useState('');
  const [tempName, setTempName] = useState(name);
  const [tempEmail, setTempEmail] = useState(email);

  const handleSaveChanges = () => {
    setName(tempName);
    setEmail(tempEmail);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            style={styles.profileImage}
            source={require('./assets/Photo.jpeg')}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>Computer Science Student</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Edit Profile</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            value={tempName}
            onChangeText={setTempName}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={tempEmail}
            onChangeText={setTempEmail}
            keyboardType="email-address"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleSaveChanges}
            activeOpacity={0.5}>
            <Text style={styles.buttonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <Text style={styles.info}>Address: Tomohon City</Text>
          <Text style={styles.info}>Email: {email}</Text>
          <Text style={styles.info}>Phone: +6285283297936</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <Text style={styles.info}>✔ React Native</Text>
          <Text style={styles.info}>✔ JavaScript & TypeScript</Text>
          <Text style={styles.info}>✔ UI/UX Design</Text>
          <Text style={styles.info}>✔ Backend Development</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          <Text style={styles.info}>
            S.Kom in Computer Science - Klabat University (2022 - Present)
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Any Question?</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Question Here"
            value={question}
            onChangeText={setQuestion}
            multiline
          />
          <TouchableOpacity style={styles.button} activeOpacity={0.5}>
            <Text style={styles.buttonText}>Submit Question</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sosmedSection}>
          <Text style={styles.sectionTitle}>Social Media</Text>
          <View style={styles.socialMediaContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('')}>
              <Image
                style={styles.socialIcon}
                source={require('./assets/pngwing.com.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('')}>
              <Image
                style={styles.socialIcon}
                source={require('./assets/25231.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Linking.openURL('')}>
              <Image
                style={styles.socialIcon}
                source={require('./assets/pngwing1.com.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.sectionTitle}> © - 2025</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Exercise2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  profession: {
    fontSize: 18,
    color: '#777',
    marginBottom: 15,
  },
  section: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  sosmedSection: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#444',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    color: '#666',
    marginBottom: 3,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialIcon: {
    width: 40,
    height: 40,
  },

  footer: {
    padding: 15,
    marginLeft: 125,
    marginBottom: 10,
  },
});

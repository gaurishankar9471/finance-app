import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <View style={styles.textView}>
        <Text>Email Address</Text>
        <View>
          <TextInput>username@gmail.com</TextInput>
        </View>
      </View>
      <View style={styles.textView}>
        <Text>Password</Text>
        <View>
          <TextInput>username@gmail.com</TextInput>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.button}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
            }}>
            Login
          </Text>
        </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 20,
        }}>
        <Text style={{alignSelf: 'flex-start'}}>Sign Up</Text>
        <Text style={{alignSelf: 'flex-end'}}>Forgot Password?</Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F2F8FE',
    padding: 30,
  },
  textView: {
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 25,
    elevation: 30,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 20,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#363E78',
    padding: 20,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginTop: 20,
  },
});

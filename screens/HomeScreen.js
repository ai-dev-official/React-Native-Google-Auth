import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import LoginScreen from './LoginScreen';
import {authentication} from '../firebase/firebase-config';

const HomeScreen = () => {
  const handleSignOut = () => {
    signOut(authentication)
      .then(res => {
        setIsSignedIn(false);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text>Email: {authentication.currentUser.email}</Text>
      <Pressable onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  button: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 16,
  },
});

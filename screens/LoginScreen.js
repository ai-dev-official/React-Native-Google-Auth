import {
  StyleSheet,
  KeyboardAvoidingView,
  Text,
  TextInput,
  View,
  Pressable,
  Alert,
} from 'react-native';
import {useEffect, useState} from 'react';
import {auth} from '../firebase/firebase-config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import {useNavigation} from '@react-navigation/native';
import GoogleButton from 'react-google-button';
import {signInWithPopup} from 'firebase/auth';

const LoginScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then(res => {
        console.log(res);
        Alert.alert('User Created Succesfully!');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then(res => {
        console.log(res);
        setIsSignedIn(true);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSignOut = () => {
    signOut(authentication)
      .then(() => {
        setIsSignedIn(false);
        Alert('You signed out successfully!');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('Home');
      }
    });
    return unsubscribe;
  }, []);

  const signUpWithGoogle = () => {};

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttonContainer}>
        {isSignedIn ? (
          <Pressable onPress={handleSignOut} style={styles.button}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </Pressable>
        ) : (
          <Pressable
            onPress={handleSignIn}
            style={[styles.button, styles.buttonOutline]}>
            <Text style={styles.buttonOutlineText}>Login</Text>
          </Pressable>
        )}
        <Pressable
          onPress={handleSignUp}
          style={[styles.button, styles.button]}>
          <Text style={styles.buttonText}>Register</Text>
        </Pressable>
        <Pressable>
          <GoogleButton onPress={signUpWithGoogle} />
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafaf9',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 30,
  },
  buttonContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },

  button: {
    backgroundColor: '#0782f9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: '#ffffff',
    borderColor: '#0782f9',
    borderWidth: 2,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782f9',
    fontWeight: 700,
    fontSize: 16,
  },
});

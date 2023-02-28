import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Pressable,
  Alert,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TextFieldC from '../components/TextFieldC';
import ButtonC from '../components/ButtonC';
import {signInAPI, signUpAPI} from '../utils/api';

const SignInScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height, width} = useWindowDimensions();
  //   const navigation = useNavigation();

  const onSignInPressed = async () => {
    if (username == 'admin' && password == 'pass') {
      navigation.navigate('Add');
    } else {
      try {
        const res = await signInAPI({
          email: username,
          password,
        });
        console.log(res);
        navigation.navigate('Home');
      } catch (error) {
        Alert.alert('Invalid');
        console.log(`eerrerer ${error}`);
      }
    }
  };

  const onForgotPasswordPressed = () => {
    // console.warn('Forgot Innn');
  };

  const onSignUpPressed = () => {
    console.warn('Sign Upp');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={{fontSize: 32, margin: 20, top: 20, color: '#567189'}}>
          Login to your Account
        </Text>
      </View>
      <View style={styles.root}>
        <Text
          style={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
            fontSize: 16,
            fontWeight: '700',
            color: '#567189',
          }}>
          Email
        </Text>
        <TextFieldC
          placeholder="Email Address"
          text={username}
          onChangeText={setUsername}
          secureText={false}
        />
        <Text
          style={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
            fontSize: 16,
            fontWeight: '700',
            color: '#567189',
          }}>
          Password
        </Text>
        <TextFieldC
          placeholder="Password"
          text={password}
          onChangeText={setPassword}
          secureText={true}
        />
        <ButtonC text="Login" onPress={onSignInPressed} />

        <View>
          <Pressable
            style={{
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              alignSelf: 'flex-start',
            }}
            onPress={onForgotPasswordPressed}
            android_ripple={{color: '#CFB997', borderless: false}}>
            <Text
              style={{
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                alignSelf: 'flex-start',
                fontSize: 16,
                fontWeight: '700',
                color: '#567189',
              }}>
              Forget Password?
            </Text>
          </Pressable>
        </View>

        <View style={{flexDirection: 'row', marginTop: 5}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#567189',
            }}>
            Not a member?
          </Text>
          <Pressable
            onPress={onSignUpPressed}
            style={{}}
            android_ripple={{color: '#CFB997', borderless: false}}>
            <Text style={{color: '#567189', fontSize: 15, fontWeight: '700'}}>
              SignUp
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 80,
  },
});

export default SignInScreen;

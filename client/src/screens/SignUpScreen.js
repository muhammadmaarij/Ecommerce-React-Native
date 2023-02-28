import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import ButtonC from '../components/ButtonC';
import {useNavigation} from '@react-navigation/native';
import TextFieldC from '../components/TextFieldC';
import {signInAPI, signUpAPI} from '../utils/api';

const SignUpScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const {height} = useWindowDimensions();
  //   const navigation = useNavigation();

  const onSignInPressed = () => {
    console.warn('Sign Innn');

    //validate user
    navigation.navigate('SignIn');
  };
  const onSignUpPressed = async () => {
    // console.warn('Sign Upp');
    // navigation.navigate('Home');
    try {
      const res = await signUpAPI({
        name,
        email,
        password,
      });
    } catch (error) {
      console.log(`eerrerer ${error}`);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={{fontSize: 32, margin: 20, top: 20, color: '#567189'}}>
          Create an account
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
          Full Name
        </Text>
        <TextFieldC
          placeholder="Full Name"
          text={name}
          onChangeText={setName}
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
          Email
        </Text>
        <TextFieldC
          placeholder="Email Address"
          text={email}
          onChangeText={setEmail}
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
        <Text
          style={{
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            alignSelf: 'flex-start',
            fontSize: 16,
            fontWeight: '700',
            color: '#567189',
          }}>
          Confirm Password
        </Text>
        <TextFieldC
          placeholder="Confirm Password"
          text={confirmPassword}
          onChangeText={setConfirmPassword}
          secureText={true}
        />
        <ButtonC text="Sign Up" onPress={onSignUpPressed} />
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#567189',
            }}>
            Already a member?
          </Text>
          <Pressable
            onPress={onSignInPressed}
            style={{}}
            android_ripple={{color: '#CFB997', borderless: false}}>
            <Text style={{color: '#567189', fontSize: 15, fontWeight: '700'}}>
              Login
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
    paddingTop: 50,
  },
  logo: {
    paddingTop: 20,
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
  },
});

export default SignUpScreen;

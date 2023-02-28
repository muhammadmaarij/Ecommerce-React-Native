import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import AddItems from '../screens/AddItems';
import Navigations from './Navigations';
import ViewItems from '../screens/ViewItems';
import UpdateItems from '../screens/UpdateItems';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="SignIn">
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={Navigations} />
          <Stack.Screen name="Add" component={AddItems} />
          <Stack.Screen name="View" component={ViewItems} />
          <Stack.Screen name="Update" component={UpdateItems} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default StackNavigation;

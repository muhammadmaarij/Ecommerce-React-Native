import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../assets/icons/cart.svg';
import Fav from '../assets/icons/fav.svg';
import Home from '../assets/icons/home.svg';
import Settings from '../assets/icons/settings.svg';
import Favorite from '../screens/Favorite';
import HomeScreen from '../screens/HomeScreen';
import cart from '../screens/Cart';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const Navigations = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="Index"
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: {
            paddingTop: 10,
            height: 75,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: '#CFB997',
            position: 'absolute',
            borderTopWidth: 0,
            paddingBottom: 10,
            // top: 1,
          },
        })}>
        <Tab.Screen
          name="Index"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarLabelStyle: {fontSize: 15, fontWeight: '700'},
            tabBarInactiveTintColor: '#7B8FA1',
            tabBarActiveTintColor: '#567189',
            tabBarIcon: ({color, size}) => <Home style={{left: 2}} />,
          }}
        />
        <Tab.Screen
          name="Cart"
          component={cart}
          options={{
            headerShown: false,
            tabBarLabel: 'Saved',
            tabBarLabelStyle: {fontSize: 15, fontWeight: '700'},
            tabBarInactiveTintColor: '#7B8FA1',
            tabBarActiveTintColor: '#567189',
            tabBarIcon: ({color, size}) => <Cart style={{left: 2}} />,
          }}
        />
        <Tab.Screen
          name="Favorite"
          component={Favorite}
          options={{
            headerShown: false,
            tabBarLabel: 'Cart',
            tabBarLabelStyle: {fontSize: 15, fontWeight: '700'},
            tabBarInactiveTintColor: '#7B8FA1',
            tabBarActiveTintColor: '#567189',
            tabBarIcon: ({color, size}) => <Fav style={{left: 2}} />,
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Settings',
            tabBarLabelStyle: {fontSize: 15, fontWeight: '700'},
            tabBarInactiveTintColor: '#7B8FA1',
            tabBarActiveTintColor: '#567189',
            tabBarIcon: ({color, size}) => <Settings style={{left: 2}} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigations;

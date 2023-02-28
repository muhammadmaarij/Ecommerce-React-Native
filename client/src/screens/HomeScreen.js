import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import TextFieldC from '../components/TextFieldC';
import ButtonC from '../components/ButtonC';
import ItemCard from '../components/ItemCard';
import Navigations from '../Navigation/Navigations';

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text style={{fontSize: 32, margin: 20, top: 20, color: '#567189'}}>
          Discover
        </Text>
        <TextFieldC placeholder={'Search Anything'} />
        <View style={{flexDirection: 'row'}}>
          <ItemCard
            source={require('../assets/images/image1.png')}
            name="Signature Polo"
            price="2,490"
          />
          <ItemCard
            source={require('../assets/images/image1.png')}
            name="Signature Polo"
            price="2,490"
          />
        </View>
        <View style={{flexDirection: 'row'}}>
          <ItemCard
            source={require('../assets/images/image1.png')}
            name="Signature Polo"
            price="2,490"
          />
          <ItemCard
            source={require('../assets/images/image1.png')}
            name="Signature Polo"
            price="2,490"
          />
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

export default HomeScreen;

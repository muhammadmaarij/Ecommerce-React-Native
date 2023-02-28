import React, {useState} from 'react';
import {Pressable, StyleSheet, Text, View, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ButtonC = ({text, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={[styles.wrapperCustom]}
        android_ripple={{color: '#CFB997', borderless: false}}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    justifyContent: 'center',
  },
  text: {
    fontSize: 26,
    color: '#FAD6A5',
  },
  wrapperCustom: {
    height: 60,
    marginVertical: 12,
    padding: 10,
    borderRadius: 9,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#567189',
  },
});

export default ButtonC;

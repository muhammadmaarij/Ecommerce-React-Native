import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const TextFieldC = ({onChangeText, text, placeholder, secureText}) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
        secureTextEntry={secureText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    marginVertical: 12,
    padding: 10,
    borderRadius: 9,
    width: windowWidth * 0.9,
    alignSelf: 'center',
    backgroundColor: '#CFB997',
    paddingLeft: 18,
  },
});

export default TextFieldC;

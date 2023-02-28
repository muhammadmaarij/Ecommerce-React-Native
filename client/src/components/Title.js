import {View, Text} from 'react-native';
import React from 'react';

const Title = ({name}) => {
  return (
    <View>
      <Text
        style={{
          paddingLeft: 24,
          paddingTop: 24,
          fontSize: 16,
          fontWeight: '700',
          color: '#567189',
        }}>
        {name}
      </Text>
    </View>
  );
};

export default Title;

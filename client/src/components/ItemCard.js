import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import React from 'react';
import Fav from '../assets/icons/fav.svg';
import {addProductsAPI, viewProductsAPI, deleteProductsAPI} from '../utils/api';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ItemCard = ({source, name, price, _id, navigation}) => {
  const ondeleteItemsPressed = async () => {
    try {
      const res = await deleteProductsAPI({
        _id: _id,
      });
      console.log(res);
      navigation.navigate('Add');
    } catch (error) {
      console.log(`eerrroooorrrrerer ${error}`);
    }
  };

  return (
    <View style={styles.backgroundContainer}>
      <View>
        <Image
          source={source}
          style={{height: 156, width: windowWidth * 0.35}}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text>{'PKR ' + price}</Text>
      <Pressable
        onPress={ondeleteItemsPressed}
        style={{
          marginTop:10,
          height: 45,
          padding: 10,
          borderRadius: 9,
          width: 100,
          alignSelf: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#567189',
        }}
        android_ripple={{color: '#CFB997', borderless: false}}>
        <Text style={{fontSize: 20, color: '#FAD6A5'}}>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    margin: windowWidth * 0.035,
    width: windowWidth * 0.4,
  },
  fav: {},
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ItemCard;

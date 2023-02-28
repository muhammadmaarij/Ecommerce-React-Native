import {useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  Alert,
  Pressable,
  ScrollView,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ButtonC from '../components/ButtonC';
import TextFieldC from '../components/TextFieldC';
import Title from '../components/Title';
import {addProductsAPI, viewProductsAPI} from '../utils/api';
import axios from 'axios';
import ItemCard from '../components/ItemCard';
import UpdateItems from './UpdateItems';

const ViewItems = ({navigation}) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const {data} = await viewProductsAPI();
    console.log(data);
    setProducts(data);
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, [useIsFocused]);

  return (
    <View style={{height: '95%'}}>
      <View>
        <Text style={{fontSize: 32, margin: 20, top: 20, color: '#567189'}}>
          Products
        </Text>
      </View>
      <ScrollView>
        {products.map(product => (
          <View>
            <ItemCard
              price={product?.price}
              name={product?.name}
              source={{uri: product?.picture}}
              _id={product?._id}
            />
            <Pressable
              onPress={() => {
                navigation.navigate('Update', {productId: product?._id});

                <UpdateItems
                  price={product?.price}
                  name={product?.name}
                  source={{uri: product?.picture}}
                  _id={product?._id}
                />;
              }}
              style={{
                height: 45,
                margin: 12,
                padding: 10,
                borderRadius: 9,
                width: 100,
                alignSelf: 'flex-start',
                alignItems: 'center',
                backgroundColor: '#567189',
              }}>
              <Text style={{fontSize: 20, color: '#FAD6A5'}}>Update</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ViewItems;

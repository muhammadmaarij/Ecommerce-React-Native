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
import ButtonC from '../components/ButtonC';
import TextFieldC from '../components/TextFieldC';
import Title from '../components/Title';
import {updateProductsAPI, viewProductByIdAPI} from '../utils/api';

const UpdateItems = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [products, setProducts] = useState();
  const {productId} = route.params;
  const isFocused = useIsFocused();

  const fetchProducts = async () => {
    const {data} = await viewProductByIdAPI(productId);
    setProducts(data);
    setName(data.name);
    setPrice(data.price);
  };

  useEffect(() => {
    fetchProducts();
  }, [isFocused]);

  const selectImage = async camera => {
    let options = {
      mediaType: 'photo',
    };

    let response;
    if (camera) {
      response = await launchCamera(options);
    } else {
      response = await launchImageLibrary(options);
    }
    console.log(response);
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {
      const uri = response.assets[0].uri;
      const type = response.assets[0].type;
      const name = response.assets[0].fileName;
      console.log('urrrrri', uri);

      const srcc = await cloudinaryUploadCourse({uri, type, name});
      setImage(srcc);
      console.log('source check karty hy ', srcc);
    }
  };
  const cloudinaryUploadCourse = async img => {
    const form = new FormData();
    form.append('file', img);
    form.append('upload_preset', 'ecommerce_upload');

    try {
      const {data} = await axios.post(
        'https://api.cloudinary.com/v1_1/didfxa91c/image/upload',
        form,
        {headers: {'Content-Type': 'multipart/form-data'}},
      );
      console.log('source 79 ::', data.secure_url);
      return data.secure_url;
    } catch (error) {
      console.log(error.response);
    }
  };
  const submitForm = async () => {
    // TODO: Send data to backend server
    // Alert.alert('Form submitted!');
    const product = await updateProductsAPI({_id: productId, name, price});

    console.log(name);
  };

  return (
    <View>
      <View style={{paddingTop: 30}}>
        <Text>{products?.name}</Text>
        <Text>{products?.price}</Text>
      </View>
      <Title name={'Name: '} />
      <TextFieldC
        placeholder={'Enter name'}
        secureText={false}
        text={name}
        onChangeText={setName}
      />
      <Title name={'Price: '} />
      <TextFieldC
        placeholder={'Enter price'}
        secureText={false}
        text={price}
        onChangeText={setPrice}
      />
      {/* <ButtonC text="Select Image" onPress={() => {}} />
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {image && (
          <Image
            source={{uri: image}}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              width: 350,
              height: 30,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          />
        )}
      </View> */}
      <ButtonC
        text={'Submit'}
        onPress={
          submitForm
        }
      />
    </View>
  );
};

export default UpdateItems;

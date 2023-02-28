import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SERVER_URL} from '../constants';

const API = axios.create({baseURL: SERVER_URL});
API.interceptors.request.use(async req => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    req.headers.authorization = `Bearer ${token}`;
  }
  return req;
});

export const signUpAPI = form => API.post('/User/signup', form);

export const signInAPI = form => API.post('/User/signin', form);

export const addProductsAPI = form => API.post('/Products/addproducts', form);

export const viewProductsAPI = form => API.get('/Products/viewproducts', form);

export const deleteProductsAPI = form =>
  API.post('/Products/deleteproducts', form);

export const viewProductByIdAPI = id =>
  API.get(`/Products/viewProductById/${id}`);

export const updateProductsAPI = form =>
  API.patch('/Products/updateproducts', form);

// export const searchProductsAPI = form =>
//   API.get('/Products/searchproducts', form);

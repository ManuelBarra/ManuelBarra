import axios from 'axios';
import actionTypes from '../types/cart';
import loadProducts from './products';

export default function addToCart(product) {
  return async (dispatch) => {
    await axios.put('/cart', product);
    const { data } = await axios.get('/cart');
    dispatch({
      type: actionTypes.LOAD_CART,
      cart: data
    });
    dispatch(loadProducts());
  };
}

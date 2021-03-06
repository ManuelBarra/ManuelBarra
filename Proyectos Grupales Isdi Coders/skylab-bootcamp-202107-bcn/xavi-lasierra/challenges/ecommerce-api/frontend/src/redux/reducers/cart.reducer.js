/* eslint-disable no-underscore-dangle */
import actionTypes from '../actions/cart.actions';

function cartReducer(cart = {
  products: []
}, action) {
  let newCart = cart;
  switch (action.type) {
    case actionTypes.LOAD_CART:
      newCart = action.data;
      break;
    case actionTypes.ADD_TO_CART:
      if (newCart.products.some(({ product: { _id } }) => _id === action.data._id)) {
        newCart = {
          ...newCart,
          products: newCart.products.map((product) => (
            (product.product._id === action.data._id && product.amount < product.product.stock)
              ? { ...product, amount: product.amount + 1 }
              : product))
        };
      } else if (action.data.stock) {
        newCart = {
          ...newCart,
          products: [...newCart.products, {
            product: action.data,
            amount: 1
          }]
        };
      }
      break;
    case actionTypes.SUBSTRACT_FROM_CART:
      newCart = {
        ...newCart,
        products: newCart.products.map((product) => (product.product._id === action.data
          ? { ...product, amount: product.amount - 1 }
          : product)).filter((product) => product.amount !== 0)
      };
      break;
    case actionTypes.CLEAR_CART:
      newCart = {
        ...newCart,
        products: []
      };
      break;
    case actionTypes.SAVE_CART:
      newCart = action.data;
      break;
    default:
      break;
  }
  return newCart;
}

export default cartReducer;

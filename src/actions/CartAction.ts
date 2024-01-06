import {CartService} from '../services';

interface Action {
  type: string;
  payload: any;
}

interface CartActionTypes {
  GET_CART_ITEMS: string;
  SET_IS_LOADING: string;
}

const types: CartActionTypes = {
  GET_CART_ITEMS: 'GET_CART_ITEMS',
  SET_IS_LOADING: 'SET_IS_LOADING',
};

const addToCart = ({foodId}: {foodId: any}) => {
  return (dispatch: (action: Action) => void) => {
    dispatch({
      type: types.SET_IS_LOADING,
      payload: true,
    });
    CartService.addToCart({foodId})
      .then(cartResponse => {
        dispatch({
          type: types.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

const removeFromCart = ({foodId}: {foodId: any}) => {
  return (dispatch: (action: Action) => void) => {
    dispatch({
      type: types.SET_IS_LOADING,
      payload: true,
    });
    CartService.removeFromCart({foodId})
      .then(cartResponse => {
        dispatch({
          type: types.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

const getCartItems = () => {
  return (dispatch: (action: Action) => void) => {
    dispatch({
      type: types.SET_IS_LOADING,
      payload: true,
    });
    CartService.getCartItems()
      .then(cartResponse => {
        dispatch({
          type: types.GET_CART_ITEMS,
          payload: cartResponse?.data,
        });
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      })
      .catch(() => {
        dispatch({
          type: types.SET_IS_LOADING,
          payload: false,
        });
      });
  };
};

export default {types, addToCart, removeFromCart, getCartItems};

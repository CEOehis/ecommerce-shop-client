import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;

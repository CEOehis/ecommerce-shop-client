import { combineReducers } from 'redux';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';
import authReducer from './auth.reducer';

const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,
});

export default rootReducer;

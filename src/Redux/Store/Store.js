import { configureStore } from '@reduxjs/toolkit';
import authReducer  from '../AllSlice/AuthSlice/AuthSlice';
import ProductReducer from '../AllSlice/Product/ProductSlice';
;
const store = configureStore({
    reducer: {
      auth:authReducer,
      products:ProductReducer,
    
    },
  });
  export default store;
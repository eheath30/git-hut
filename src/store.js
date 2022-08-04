import { configureStore } from '@reduxjs/toolkit'
import favouritesReducer from './reducers/favouritesReducer';

const store = configureStore({
    reducer: {
      favourites: favouritesReducer
    },
  })

  export default store;

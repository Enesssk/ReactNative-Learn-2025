import { configureStore } from '@reduxjs/toolkit';
import { CardSlice } from './reducers/Card';
import { RestaurantSlice } from './reducers/Restaurant';


export const store = configureStore({
  reducer: {
    card: CardSlice,
    restaurant: RestaurantSlice,
  }
})

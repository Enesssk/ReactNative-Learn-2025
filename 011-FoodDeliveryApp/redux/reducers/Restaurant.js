import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurantItems: null
}

export const RestaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: { //veriyi güncellemek için kullandım.
    setRestaurant: (state, action) => {
      state.restaurantItems = action.payload
      //action.payload ile yeni veriyi şuanki boş restauranta verdim.
    }
  }
})

export const selectRestaurant = state => state.restaurant.restaurantItems
//selector kullanarak storedaki restaurant değerini aldım.

export const { setRestaurant } = RestaurantSlice.actions;

export default RestaurantSlice.reducer
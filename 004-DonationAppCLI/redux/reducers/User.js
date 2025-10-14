import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstName: "Enes",
  lastName: "Kala",
  id: 1
}

export const User = createSlice({
  name: "user",
  initialState: initialState, // first state
  reducers: {
    updateFirstName: (state, action) => {
      state.firstName = action.payload.firstName
    }
  }
})

export const {updateFirstName} = User.actions
export default User.reducer
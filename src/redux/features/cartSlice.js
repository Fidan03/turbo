import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  quantity: 0,
};

export const cartSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {


    AddCart: (state, action)=> {
      state.cart.push(action.payload)
    }

  },
});

export const { AddCart } = cartSlice.actions;
export default cartSlice.reducer;

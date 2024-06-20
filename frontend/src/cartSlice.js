import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.ref === item.ref);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push({ ...item, quantity: item.quantity });
      }
      state.totalQuantity += item.quantity;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      const item = state.items.find(item => item.ref === itemId);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(item => item.ref !== itemId);
      }
    },
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find(item => item.ref === itemId);
      if (item) {
        state.totalQuantity += quantity - item.quantity;
        item.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;

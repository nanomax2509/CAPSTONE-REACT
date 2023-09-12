import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  carts: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const CartsSlice = createSlice({
  name: "CartsSlice",
  initialState,
  // switch case ???
  reducers: {
    setCarts: (state, action) => {
      const index = state.carts.findIndex((sp) => {
        return sp.id === action.payload.id;
      });
      if (index === -1) {
        state.carts.push(action.payload);
        state.totalQuantity++;
      }
    },
    setRemoveItem: (state, action) => {
      const newcart = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = newcart;
      state.totalQuantity--;
    },
    // setTotalQuatity
    // setProductDetail: (state, action) => {
    // 	state.productDetail = action.payload;
    // },
  },
});
console.log(initialState.carts);

export const { setCarts, setRemoveItem } = CartsSlice.actions;

export default CartsSlice.reducer;

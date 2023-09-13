import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, saveLocalStorage } from "../../utils";
import { LIST_CARTS } from "../../constant";
export const initialState = {
  carts: getLocalStorage(LIST_CARTS),
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
        saveLocalStorage(LIST_CARTS, state.carts);
      }
    },
    setRemoveItem: (state, action) => {
      const newcart = state.carts.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = newcart;
      state.totalQuantity--;
      saveLocalStorage(LIST_CARTS, state.carts);
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

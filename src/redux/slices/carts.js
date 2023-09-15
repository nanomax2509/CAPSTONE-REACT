import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, saveLocalStorage } from "../../utils";
import { LIST_CARTS } from "../../constant";
export const initialState = {
  carts: getLocalStorage(LIST_CARTS) ?? [],
  totalQuantity: 0,
  stateEdit: false,
};

const CartsSlice = createSlice({
  name: "CartsSlice",
  initialState,
  // switch case ???
  reducers: {
    setCarts: (state, action) => {
      const index = state.carts?.findIndex((sp) => {
        return sp.id === action.payload.id;
      });
      if (index === -1) {
        state.carts?.push(action.payload);
        state.totalQuantity++;
        saveLocalStorage(LIST_CARTS, state.carts);
      } else {
        alert("Bạn đã thêm sản phẩm vào giỏ hàng");
      }
    },
    setRemoveItem: (state, action) => {
      const newcart = state.carts?.filter((item) => {
        return item.id !== action.payload;
      });
      state.carts = newcart;
      state.totalQuantity--;
      saveLocalStorage(LIST_CARTS, state.carts);
    },
    setEditItem: (state, action) => {
      const index = state.carts?.findIndex((sp) => {
        return sp.id === action.payload.id;
      });
      state.carts?.splice(index, 1, action.payload);
      saveLocalStorage(LIST_CARTS, state.carts);
      alert("Bạn đã chỉnh sửa sản phẩm thành công");
    },
    setStateEdit: (state, action) => {
      state.stateEdit = action.payload;
    },
    // setTotalQuatity
    // setProductDetail: (state, action) => {
    // 	state.productDetail = action.payload;
    // },
  },
});
console.log(initialState.carts);

export const { setCarts, setRemoveItem, setEditItem, setStateEdit } =
  CartsSlice.actions;

export default CartsSlice.reducer;

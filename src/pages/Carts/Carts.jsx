import React, { useState, useRef } from "react";
import axios from "axios";
import css from "./carts.module.scss";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "./carts-item";
import { deleteKey, getLocalStorage } from "../../utils";
import { LIST_CARTS } from "../../constant";
import { setResetCarts } from "../../redux/slices/carts";
function Carts() {
  const { carts } = useSelector((state) => state.CartsReducer);
  const { userProfile } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  const handleSubmitOrder = async () => {
    try {
      const listOrder = carts.map((item) => {
        return {
          productId: item.id,
          quantity: item.orderQuantity,
        };
      });
      const email = userProfile.email;
      const resp = await axios.post(
        "https://shop.cyberlearn.vn/api/Users/order",
        {
          orderDetail: [listOrder],
          email,
        }
      );
      dispatch(setResetCarts());
      console.log(resp);
      alert("Bạn đã đặt hàng thành công");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css["cart"]}>
      <h2 className={css["heading-cart"]}>Carts</h2>
      <div>
        <table className={css["cart-table"]}>
          {carts?.length !== 0 ? (
            <tr>
              <th>STT</th>
              <th className="p-0">img</th>
              <th>size</th>
              <th className="p-0">name</th>
              <th>price</th>
              <th>quantity</th>
              <th className="p-0">total</th>
              <th>action</th>
            </tr>
          ) : (
            <p>Giở hàng của bạn trống</p>
          )}
          {carts?.map((item, index) => {
            return <CartItem key={item.id} index={index} item={item} />;
          })}
          {carts?.length !== 0 ? (
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button onClick={handleSubmitOrder} className="btn btn-warning">
                  Submit order
                </button>
              </td>
            </tr>
          ) : (
            ""
          )}
        </table>
      </div>
    </div>
  );
}

export default Carts;

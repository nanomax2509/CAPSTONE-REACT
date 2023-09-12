import React, { useState, useRef } from "react";
import css from "./carts.module.scss";
import { useSelector, useDispatch } from "react-redux";

import CartItem from "./carts-item";
function Carts() {
  const { carts } = useSelector((state) => state.CartsReducer);

  return (
    <div className={css["cart"]}>
      <h2 className={css["heading-cart"]}>Carts</h2>
      <div>
        <table className={css["cart-table"]}>
          {carts.length !== 0 ? (
            <tr>
              <th>STT</th>
              <th className="p-0">id</th>
              <th>img</th>
              <th className="p-0">name</th>
              <th>price</th>
              <th>quantity</th>
              <th className="p-0">total</th>
              <th>action</th>
            </tr>
          ) : (
            <p>Giở hàng của bạn trống</p>
          )}
          {carts.map((item, index) => {
            return <CartItem index={index} item={item} />;
          })}
        </table>
      </div>
    </div>
  );
}

export default Carts;

import React, { useState, useRef } from "react";
import css from "./carts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import {
  setEditItem,
  setQuantityOrder,
  setRemoveItem,
  setStateEdit,
} from "../../redux/slices/carts";
import { useNavigate } from "react-router-dom";
function CartItem(props) {
  const { item, index } = props;
  const [quantity, setQuantity] = useState(item.orderQuantity);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    const action = setRemoveItem(id);
    dispatch(action);
  };
  const handleQuantity = (num, id) => {
    if (quantity === 1 && num === -1) {
      handleDelete(id);
    } else {
      setQuantity(quantity + num);
      dispatch(setQuantityOrder({id,quantity:quantity+num}));
    }
  };
  const handleEdit = () => {
    navigate(`/detail/${item.id}`);
    dispatch(setStateEdit(true));
  };
  return (
    <tr key={item?.id}>
      <td>{index + 1}</td>
      <td className="p-0">
        {" "}
        <img src={item?.image} alt="#" />
      </td>
      <td>{item?.orderSize}</td>
      <td className="p-0">{item?.name}</td>
      <td>{item?.price} $</td>
      <td className={css["quantity-input"]}>
        <button
          className="btn btn-success "
          onClick={() => {
            handleQuantity(-1, item?.id);
          }}
        >
          -
        </button>
        <input className="my-2" type="text" value={quantity} />
        <button
          className="btn btn-success "
          onClick={() => {
            handleQuantity(1, item?.id);
          }}
        >
          +
        </button>
      </td>
      <td className="p-0">{quantity * item?.price}$</td>
      <td>
        <button onClick={handleEdit} className="btn btn-primary m-1">
          Edit
        </button>
        <button
          className="btn btn-danger m-1"
          onClick={() => {
            handleDelete(item?.id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default CartItem;

import React , { useState,useRef } from 'react';
import css from "./carts.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setRemoveItem } from "../../redux/slices/carts";
function CartItem(props) {
    const [quantity, setQuantity] = useState(1);
    const {item,index}=props
    const dispatch = useDispatch();
    const handleDelete = (id) => {
      const action = setRemoveItem(id);
      dispatch(action);
    };
    const handleQuantity=(num,id)=>{
         if(quantity===1&&num===-1){
           handleDelete(id);
        }else{
            setQuantity(quantity+num);
        }
        
    }
  return (
    <tr key={item.id}>
    <td>{index + 1}</td>
    <td className='p-0'>{item.id}</td>
    <td>
      <img src={item.image} alt="#" />
    </td>
    <td className='p-0'>{item.name}</td>
    <td>{item.price} $</td>
    <td className={css["quantity-input"]}>
      <button className='btn btn-success ' onClick={()=>{
        handleQuantity(-1,item.id);
      }}>-</button>
      <input className='my-2' type="text" value={quantity} />
      <button className='btn btn-success ' onClick={()=>{
        handleQuantity(1,item.id);
      }}>+</button>
    </td>
    <td className='p-0'>{quantity*item.price}$</td>
    <td>
      <button className="btn btn-primary m-1">Edit</button>
      <button className='btn btn-danger m-1'
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
  )
}

export default CartItem
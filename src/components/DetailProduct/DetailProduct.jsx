import React, { useState } from "react";
import "./DetailProduct.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCarts } from "../../redux/slices/carts";
import { deleteKey, saveLocalStorage } from "../../utils";
import { LIST_CARTS } from "../../constant";

function DetailProduct() {
  // deleteKey(LIST_CARTS)
  const { productDetail } = useSelector((state) => state.ProductReducer);
  let selectSize = "";
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("36");
  console.log(productDetail);
  const { carts } = useSelector((state) => state.CartsReducer);
  const cartItem = {
    ...productDetail,
    orderQuantity: quantity,
    orderSize: size,
  };
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const action = setCarts(cartItem);
    dispatch(action);
  };
  const handleSelectSize = (e) => {
    setSize(e.target.innerHTML);
  };
  console.log(carts);
  const handleQuantity = (num) => {
    if (quantity === 1 && num === -1) {
      quantity = 1;
    } else {
      setQuantity(quantity + num);
    }
  };
  // {....}
  return (
    <div className="detail-product">
      <div className="detail-product-left">
        <img src={productDetail.image} />
      </div>

      <div className="detail-product-right">
        <h2>{productDetail.name}</h2>
        <p>{productDetail.description}</p>
        <h3 className="text-success">Available size</h3>
        <div className="detail-product-size">
          {/* <button className="detail-product-size-btn btn-primary"><span >38</span></button> */}
          {productDetail.size.map((size, index) => {
            return (
              <button
                key={index}
                onClick={handleSelectSize}
                className="detail-product-size-btn btn-primary"
              >
                {size}
              </button>
            );
          })}
        </div>
        <span className="detail-product-price">{productDetail.price}$</span>
        <div className="detail-product-quantity">
          <button
            onClick={() => {
              handleQuantity(-1);
            }}
            className="detail-product-quantity-btn btn-warning"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => {
              handleQuantity(1);
            }}
            className="detail-product-quantity-btn btn-warning "
          >
            +
          </button>
        </div>
        <button
          onClick={handleAddToCart}
          className="detail-product-add-to-cart-btn btn-warning"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default DetailProduct;

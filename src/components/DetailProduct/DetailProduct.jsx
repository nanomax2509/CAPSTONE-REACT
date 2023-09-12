import React from "react";
import "./DetailProduct.scss";
import { useSelector,useDispatch } from "react-redux";
import { setCarts } from "../../redux/slices/carts";

function DetailProduct() {
  const { productDetail } = useSelector((state) => state.ProductReducer);
  const { carts } = useSelector((state) => state.CartsReducer);
	const dispatch=useDispatch();
	const handleAddToCart=()=>{
		const action=setCarts(productDetail);
		dispatch(action);
	};
	console.log(carts)
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
          <button className="detail-product-size-btn btn-primary">38</button>
          <button className="detail-product-size-btn btn-primary">39</button>
          <button className="detail-product-size-btn btn-primary">40</button>
          <button className="detail-product-size-btn btn-primary">41</button>
          <button className="detail-product-size-btn btn-primary">42</button>
        </div>
        <span className="detail-product-price">{productDetail.price}$</span>
        <div className="detail-product-quantity">
          <button className="detail-product-quantity-btn btn-warning">-</button>
          <span>1</span>
          <button className="detail-product-quantity-btn btn-warning ">+</button>
        </div>
        <button onClick={handleAddToCart} className="detail-product-add-to-cart-btn btn-warning">Add to cart</button>
      </div>
    </div>
  );
}

export default DetailProduct;

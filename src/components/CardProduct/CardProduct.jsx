import React from 'react';
import './CardProduct.scss';
import { HeartOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

// params:props
function CardProduct(props) {
	const { product } = props;
  
	return (
	  <div className='card-product'>
		<div className='card-product-img'>
		  <img src={product.image} alt='...' />
		</div>
		<div className='card-product-content'>
		  <p className='content-title'>{product.name}</p>
		  <p className='content-sub'>{product.shortDescription}</p>
		</div>
		<div className='card-product-interact'>
		  <NavLink to={`/detail/${product.id}`} className='card-product-btn buy-now'>
			Buy Now
		  </NavLink>
		  <button className='card-product-btn price'>{product.price}$</button>
		  <div className='heart-icon heartRed'>
			<HeartOutlined />
		  </div>
		</div>
	  </div>
	);
  }
  
  export default CardProduct;
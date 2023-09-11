import React from 'react';
import { useSelector } from 'react-redux';
import CardProduct from '../CardProduct/CardProduct';
import css from './ListProduct.module.scss';
import { mergeClassName } from '../../utils';
function ListProduct(props) {
	const { listProduct, style, className } = props;
	return (
		<div className={mergeClassName(css.ListProduct, className)} style={style}>
			{Array.isArray(listProduct) &&
				listProduct.map((product) => {
					return <CardProduct key={product.id} product={product} />;
				})}
		</div>
	);
}

export default ListProduct;

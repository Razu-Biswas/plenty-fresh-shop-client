import React from 'react';

function Product({ product, deleteProduct }) {
	const { name, weight, price, _id } = product;
	return (
		<div className="m-2 p-3 bg-light">
			<h4>{name}</h4>
			<h4>{weight}</h4>
			<h4>{price}</h4>
			<button className="btn btn-danger" onClick={() => deleteProduct(_id)}>
				Delete
			</button>
		</div>
	);
}

export default Product;
import React from 'react';

function Product({ product, deleteProduct }) {
	const { name, weight, price, _id } = product;
	return (
		<>
		<tr>
			<td>{name}</td>
			<td>{weight}</td>
			<td>{price}</td>
			<td><button className="btn btn-danger" onClick={() => deleteProduct(_id)}>
				Delete
		</button></td>
		</tr>

	</>
	);
}

export default Product;



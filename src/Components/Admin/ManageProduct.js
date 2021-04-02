import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';

function ManageProduct() {
	const [product, setProduct] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:3300/product`).then((response) => {
			setProduct(response.data);
		});
	}, []);
	const deleteProduct = (id) => {
		axios.delete(`http://localhost:3300/deleteproduct/${id}`).then((res) => {
			console.log(res);
		});
	};
	return (
		<div className="d-flex flex-wrap">
			{product.map((product) => (
				<Product product={product} deleteProduct={deleteProduct}  />
			))}
		</div>
	);
}

export default ManageProduct;
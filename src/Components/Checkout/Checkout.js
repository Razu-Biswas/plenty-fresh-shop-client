import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductContext } from '../Context/ProductContext';

const Checkout = () => {
	const { user } = useContext(ProductContext);
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const { name, weight, price, url } = product;

	const { email } = user;
	useEffect(() => {
		fetch(`http://localhost:3300/checkout/${id}`)
			.then((response) => response.json())
			.then((data) => setProduct(data[0]));
	}, [id]);

	const checkoutBtn = () => {
		const orderInfo = {
			productName: name,
			weight:weight,
			price: price,
			email: email,
			quantity: 1,
			imgUrl: url,
			date: new Date(),
		};
		// console.log(orderInfo);
		axios.post(`http://localhost:3300/saveorder`, orderInfo).then((res) => {
			console.log(res);
		});
	};
	return (
		<div>
			<h1>This is Checkout</h1>
			{/* <p>{book}</p> */}
			{product.name}
			<div>
				<h4>name:- {product.name}</h4>
				<h4>Author{product.weight}</h4>
				<h4>Price:- ${product.price}</h4>
				<button className="btn-primary btn" onClick={checkoutBtn}>
					Checkout
				</button>
			</div>
		</div>
	);
};

export default Checkout;
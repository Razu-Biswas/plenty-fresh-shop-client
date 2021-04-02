import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';

const Home = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3300/product')
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className="row">
			{product.length === 0 && <Spinner />}
			{product.map((product) => (
				<Product product={product}></Product>
			))}
		</div>
	);
};

export default Home;
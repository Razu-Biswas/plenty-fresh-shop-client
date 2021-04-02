import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import Spinner from '../Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = () => {
	const [product, setProduct] = useState([]);

	useEffect(() => {
		fetch('https://strawberry-crumble-66293.herokuapp.com/product')
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	return (
		<div className="p-3 d-flex flex-wrap justify-content-center">
			{product.length === 0 && <Spinner />}
			{product.map((product) => (
				<Product product={product}></Product>
			))}
		</div>
	);
};

export default Home;
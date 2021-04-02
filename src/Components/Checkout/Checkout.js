import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ProductContext } from '../Context/ProductContext';
import { toast } from 'react-toastify';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkout = () => {
	const { user } = useContext(ProductContext);
	const { id } = useParams();
	const [product, setProduct] = useState({});
	const { name, weight, price, url } = product;

	const { email } = user;
	useEffect(() => {
		fetch(`https://strawberry-crumble-66293.herokuapp.com/checkout/${id}`)
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
		axios.post(`https://strawberry-crumble-66293.herokuapp.com/saveorder`, orderInfo).then((res) => {
			console.log(res);
			toast.success('Your CheckOut Successful');
		});
	};
	return (
		<div className="container">
			<h5>Checkout</h5>
			<div className="row">
				<div className="col-md-8">
					<Table>
						<thead>
							<tr>
								<th>Sl</th>
								<th>Discription</th>
								<th>Quantity</th>
								<th>Price</th>
								<th>Checkout</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>{product.name}</td>
								<td>1</td>
								<td>{product.price}</td>
								<td><Link to path="/"> <Button className="btn-primary btn" onClick={checkoutBtn}>Confirm</Button>  </Link> </td>
								
							</tr>
						</tbody>
					</Table>
					
				</div>
					
				<div className="col-md-4">
				<img style={{ width: '200px' }} src={product.url} alt="" />
					<h5>{product.name}</h5>
					<h6>Weight{product.weight}</h6>
					<h5>Price:- ${product.price}</h5>
					<h3>Please confirm your Order.</h3>
					{/* <button className="btn-primary btn" onClick={checkoutBtn}>Checkout</button> */}
				</div>
			</div>

		</div>
	);
};

export default Checkout;


// {/* <div>
// <h1>This is Checkout</h1>
// {/* <p>{book}</p> */}
// {product.name}
// <div>
// 	<h4>name:- {product.name}</h4>
// 	<h4>Author{product.weight}</h4>
// 	<h4>Price:- ${product.price}</h4>
// 	<button className="btn-primary btn" onClick={checkoutBtn}>
// 		Checkout
// 	</button>
// </div>
// </div> */}
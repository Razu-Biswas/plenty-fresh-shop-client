import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import OrderData from './OrderData';
import {Table } from 'react-bootstrap';


const Orders = () => {
	const [orderData, setOrderData] = useState([]);
	const { user } = useContext(ProductContext);
	useEffect(() => {
		const email = {
			email: user.email,
		};
		axios
			.post(`https://plenty-fresh-server.onrender.com/userorder`, email)
			.then((response) => setOrderData(response.data));
			
	}, [user]);
	return (

		<div className="container">
		<Table striped bordered hover size="sm">
			<thead>
				<tr>
					<th>Date</th>
					<th>Product Name</th>
					<th>Weight</th>
					<th>Quantity</th>
					<th>User Email </th>
					<th>Price</th>
					<th>Confirm Order</th>
				</tr>
			</thead>
			<tbody>

				{orderData.map((order) => (
					<OrderData order={order} />
				))}

			</tbody>
		</Table>
	</div>

	);
};

export default Orders;


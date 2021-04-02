import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import OrderData from './OrderData';

const Orders = () => {
	const [orderData, setOrderData] = useState([]);
	const { user } = useContext(ProductContext);
	useEffect(() => {
		const email = {
			email: user.email,
		};
		axios
			.post(`http://localhost:3300/userorder`, email)
			.then((response) => setOrderData(response.data));
	}, [user]);
	return (
		<div className="d-flex">
			{orderData.map((order) => (
				<OrderData order={order} />
			))}
		</div>
	);
};

export default Orders;


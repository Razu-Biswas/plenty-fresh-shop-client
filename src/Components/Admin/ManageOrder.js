import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import OrderData from '../Orders/OrderData';

function ManageOrder() {
	const [orders, setOrder] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:3300/getorder`).then((response) => {
			setOrder(response.data);
		});
	}, []);
	const deleteOrder = (id) => {
		axios.delete(`http://localhost:3300/deleteorder/${id}`).then((res) => {
			toast.success('YuY Deleted');
		});
	};
	return (
		<div>
			{orders.map((order, index) => (
				<OrderData key={index} order={order}>
					<button
						className="btn-danger btn"
						onClick={() => deleteOrder(order._id)}
					>
						Delete
					</button>
				</OrderData>
			))}
		</div>
	);
}

export default ManageOrder;
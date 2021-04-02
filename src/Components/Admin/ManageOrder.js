import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Table } from 'react-bootstrap';
import { useHistory } from 'react-router';
import OrderData from '../Orders/OrderData';

function ManageOrder() {
	const [orders, setOrder] = useState([]);
	useEffect(() => {
		axios.get(`https://strawberry-crumble-66293.herokuapp.com/getorder`).then((response) => {
			setOrder(response.data);
		});
	}, []);
	const deleteOrder = (id) => {
		axios.delete(`https://strawberry-crumble-66293.herokuapp.com/deleteorder/${id}`).then((res) => {
			toast.success('YuY Deleted');
			history.push('/admin/manageorder/')
		});
	};

	const history = useHistory();
	return (

		<div>

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
					<th>Delete Order</th>
				</tr>
			</thead>
			<tbody>

				{orders.map((order, index) => (
					<OrderData key={index} order={order}>
						<td><button
							className="btn-danger btn"
							onClick={() => deleteOrder(order._id)}
						>
							Delete
				</button></td>
					</OrderData>
				))}

			</tbody>
		</Table>

	</div>

	);
}

export default ManageOrder;
